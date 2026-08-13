param(
  [string]$InstancePath = 'E:\CurseForge\Instances\RP',
  [string]$MinecraftJar = 'E:\CurseForge\Install\versions\1.20.1\1.20.1.jar'
)

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$projectPath = Split-Path -Parent $PSScriptRoot
$catalogPath = Join-Path $projectPath 'app\data\catalog.json'
$outputPath = Join-Path $projectPath 'public\icons'
$catalog = Get-Content -LiteralPath $catalogPath -Raw | ConvertFrom-Json
$jars = @($MinecraftJar) + @(Get-ChildItem -LiteralPath (Join-Path $InstancePath 'mods') -Filter '*.jar' | ForEach-Object FullName)

New-Item -ItemType Directory -Path $outputPath -Force | Out-Null

$assetIndex = @{}
foreach ($jarPath in $jars) {
  if (-not (Test-Path -LiteralPath $jarPath)) { continue }
  try {
    $archive = [System.IO.Compression.ZipFile]::OpenRead($jarPath)
    foreach ($entry in $archive.Entries) {
      $entryName = $entry.FullName.ToLowerInvariant()
      if ($entryName -match '^assets/[^/]+/(models/.+\.json|textures/.+\.png)$') {
        if (-not $assetIndex.ContainsKey($entryName)) {
          $assetIndex[$entryName] = [PSCustomObject]@{ Jar = $jarPath; Entry = $entry.FullName }
        }
      }
    }
    $archive.Dispose()
  } catch {
    Write-Warning "Não foi possível indexar $jarPath"
  }
}

function Read-ZipEntryText([string]$jarPath, [string]$entryName) {
  $archive = [System.IO.Compression.ZipFile]::OpenRead($jarPath)
  try {
    $entry = $archive.GetEntry($entryName)
    if (-not $entry) { return $null }
    $reader = [System.IO.StreamReader]::new($entry.Open())
    try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
  } finally { $archive.Dispose() }
}

function Get-AssetText([string]$assetPath) {
  $key = $assetPath.ToLowerInvariant()
  if (-not $assetIndex.ContainsKey($key)) { return $null }
  $found = $assetIndex[$key]
  return Read-ZipEntryText $found.Jar $found.Entry
}

function Resolve-ModelTexture([string]$modelId, [hashtable]$seen) {
  if ($seen.ContainsKey($modelId)) { return $null }
  $seen[$modelId] = $true
  $parts = $modelId.Split(':', 2)
  $namespace = if ($parts.Count -eq 2) { $parts[0] } else { 'minecraft' }
  $path = if ($parts.Count -eq 2) { $parts[1] } else { $parts[0] }
  $text = Get-AssetText "assets/$namespace/models/$path.json"
  if (-not $text) { return $null }
  $model = $text | ConvertFrom-Json

  if ($model.textures) {
    $textureValues = @()
    foreach ($property in $model.textures.PSObject.Properties) {
      if ($property.Value -is [string] -and -not $property.Value.StartsWith('#')) {
        $textureValues += $property.Value
      }
    }
    if ($textureValues.Count -gt 0) {
      return $textureValues[0]
    }
  }

  if ($model.parent -and -not $model.parent.StartsWith('builtin/')) {
    return Resolve-ModelTexture ([string]$model.parent) $seen
  }
  return $null
}

function Find-OriginIcon([object]$item) {
  $sourceJar = Join-Path (Join-Path $InstancePath 'mods') $item.mod
  if (-not (Test-Path -LiteralPath $sourceJar)) { return $null }
  $idParts = $item.id.Split(':', 2)
  if ($idParts.Count -ne 2) { return $null }
  $originEntry = "data/$($idParts[0])/origins/$($idParts[1]).json"
  $json = Read-ZipEntryText $sourceJar $originEntry
  if (-not $json) { return $null }
  $origin = $json | ConvertFrom-Json
  if ($origin.icon -is [string]) { return [string]$origin.icon }
  if ($origin.icon.item) { return [string]$origin.icon.item }
  return $null
}

function Copy-Texture([string]$textureId, [string]$destination) {
  $parts = $textureId.Split(':', 2)
  $namespace = if ($parts.Count -eq 2) { $parts[0] } else { 'minecraft' }
  $path = if ($parts.Count -eq 2) { $parts[1] } else { $parts[0] }
  $assetPath = "assets/$namespace/textures/$path.png".ToLowerInvariant()
  if (-not $assetIndex.ContainsKey($assetPath)) { return $false }
  $found = $assetIndex[$assetPath]
  $archive = [System.IO.Compression.ZipFile]::OpenRead($found.Jar)
  try {
    $entry = $archive.GetEntry($found.Entry)
    if (-not $entry) { return $false }
    $source = $entry.Open()
    $target = [System.IO.File]::Create($destination)
    try { $source.CopyTo($target) } finally { $source.Dispose(); $target.Dispose() }
  } finally { $archive.Dispose() }
  return $true
}

$exported = 0
foreach ($item in $catalog) {
  $iconItem = Find-OriginIcon $item
  if (-not $iconItem) { continue }
  if ($item.id -eq 'classes:reaper' -and $iconItem -eq 'simplyswords:iron_scythe') {
    $iconItem = 'minecraft:iron_hoe'
  }
  if ($item.id -eq 'classes:samurai' -and $iconItem -eq 'simplyswords:iron_katana') {
    $iconItem = 'minecraft:iron_sword'
  }
  $iconParts = $iconItem.Split(':', 2)
  $iconNamespace = if ($iconParts.Count -eq 2) { $iconParts[0] } else { 'minecraft' }
  $iconPath = if ($iconParts.Count -eq 2) { $iconParts[1] } else { $iconParts[0] }
  $textureId = Resolve-ModelTexture "$iconNamespace`:item/$iconPath" @{}
  if (-not $textureId) { $textureId = "$iconNamespace`:item/$iconPath" }
  $filename = ($item.id -replace '[:/\\]', '-') + '.png'
  $destination = Join-Path $outputPath $filename
  if (Copy-Texture $textureId $destination) {
    $item | Add-Member -NotePropertyName icon -NotePropertyValue "/icons/$filename" -Force
    $item | Add-Member -NotePropertyName iconItem -NotePropertyValue $iconItem -Force
    $exported++
  }
}

$jsonOutput = $catalog | ConvertTo-Json -Depth 12
[System.IO.File]::WriteAllText($catalogPath, $jsonOutput + [Environment]::NewLine, [System.Text.UTF8Encoding]::new($false))
Write-Output "Ícones exportados: $exported de $($catalog.Count)"
