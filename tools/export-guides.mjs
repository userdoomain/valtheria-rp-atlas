import fs from "node:fs";
import path from "node:path";

const sources = [
  {
    type: "race",
    file: "E:/CurseForge/Instances/RP/GUIA_DE_RACAS_E_ORIGINS.md",
    anchorPrefix: "raca-",
  },
  {
    type: "class",
    file: "E:/CurseForge/Instances/RP/GUIA_DE_CLASSES.md",
    anchorPrefix: "classe-",
  },
];

function clean(value = "") {
  return value
    .replace(/\*\*/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function parseGuide({ type, file, anchorPrefix }) {
  const markdown = fs.readFileSync(file, "utf8");
  const sections = markdown.split(/\n---\s*\n/);

  return sections.flatMap((section) => {
    const anchor = section.match(new RegExp(`<a id="(${anchorPrefix}[^"]+)"`))?.[1];
    const name = section.match(/^##\s+\S+\s+(.+)$/m)?.[1]?.trim();
    if (!anchor || !name || anchor.endsWith("topo")) return [];

    const id = section.match(/\|\s*🆔 ID técnico\s*\|\s*`([^`]+)`/)?.[1] ?? "";
    const mod = section.match(/\|\s*📦 Mod\/Complemento\s*\|\s*`([^`]+)`/)?.[1] ?? "";
    const impact = clean(section.match(/\|\s*🎚️ Impacto\s*\|\s*(.+?)\s*\|/)?.[1] ?? "");
    const description =
      section.match(/### 📖 O que faz\s*\n+([\s\S]*?)(?=\n### |\n\[⬆️|$)/)?.[1]?.trim() ?? "";
    const powersBlock =
      section.match(/### ✨ Poderes, vantagens e limitações\s*\n+([\s\S]*?)(?=\n\[⬆️|$)/)?.[1] ?? "";
    const powers = [...powersBlock.matchAll(/^- ✨ \*\*(.+?):\*\*\s*(.*?)\s*<sub>`([^`]+)`<\/sub>\s*$/gm)]
      .map((match) => ({ name: match[1].trim(), description: match[2].trim(), id: match[3] }));

    return [{ type, anchor, name, id, mod, impact, description, powers }];
  });
}

const catalog = sources.flatMap(parseGuide).sort((a, b) =>
  a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" }),
);

const output = path.resolve("app/data/catalog.json");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Exportados ${catalog.length} registros para ${output}`);
