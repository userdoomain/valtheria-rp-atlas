# Atlas de Raças & Classes — Valtheria RP

Site pesquisável em português com as raças, Origins, classes e poderes
disponíveis no modpack Valtheria RP.

## Atalhos principais

- `Y`: primeira habilidade / poder ativo primário.
- `H`: segunda habilidade / poder ativo secundário.

## Atualizar o catálogo

Os dados publicados ficam em `app/data/catalog.json`. Para recriá-los a partir
dos guias do modpack, execute:

```powershell
node tools/export-guides.mjs
```

## Desenvolvimento

Requer Node.js 22 ou superior.

```powershell
npm install
npm run dev
```

Cada envio para a branch `main` publica automaticamente o site no GitHub Pages.
