"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import Image from "next/image";
import catalog from "./data/catalog.json";

type Entry = (typeof catalog)[number];
type Filter = "all" | "race" | "class";
const basePath = process.env.GITHUB_ACTIONS ? "/valtheria-rp-atlas" : "";

const fold = (value: string) =>
  value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("pt-BR");

const englishAliases: Record<string, string> = {
  "Anão": "Dwarf",
  "Anão Superior": "Superior Dwarf",
  "Aracnídeo": "Arachnid",
  "Aviano": "Avian",
  "Bela Adormecida": "Sleeping Beauty",
  "Chapeuzinho Vermelho": "Red Riding Hood",
  "Ciborgue": "Cyborg",
  "Cinderela": "Cinderella",
  "Demônio": "Demon Incubus",
  "Dragão verde": "Green Dragon",
  "Dragão vermelho": "Red Dragon",
  "Elytriano": "Elytrian",
  "Enderiano": "Enderian",
  "Fada Mágica": "Magical Fly Fairy",
  "Fantasma": "Phantom",
  "Felino": "Feline",
  "Fênix": "Phoenix",
  "Humano": "Human",
  "Kraken": "The Kraken",
  "Lobo Mau": "Big Bad Wolf",
  "Morto-vivo": "Undead",
  "Mímico": "Mimic",
  "Nascido das Chamas": "Blazeborn",
  "Pequena Sereia": "Little Mermaid",
  "Príncipe Sapo": "Frog Prince",
  "Sereia": "Siren",
  "Sereiano": "Merling Mermaid",
  "Valquíria — Mythic Origins": "Valkyrie",
  "Valquíria — SkyMC Origins": "Valkyrie",
  "Arqueiro — OJS RPG Origins": "Archer",
  "Arqueiro — RPG Origins": "Archer",
  "Bardo — OJS RPG Origins": "Bard",
  "Bardo — RPG Origins": "Bard",
  "Brutamontes — OJS RPG Origins": "Brute",
  "Brutamontes — RPG Origins": "Brute",
  "Caçador": "Hunter",
  "Cavaleiro": "Knight",
  "Ceifador": "Reaper",
  "Clérigo — OJS RPG Origins": "Cleric",
  "Clérigo — RPG Origins": "Cleric",
  "Curandeiro": "Healer",
  "Defensor": "Tank Defender",
  "Guerreiro": "Warrior",
  "Ladino": "Rogue",
  "Ladrão — OJS RPG Origins": "Thief",
  "Ladrão — RPG Origins": "Thief",
  "Lâmina Arcana": "Spellblade",
  "Mago da Natureza": "Nature Mage",
  "Mago de Evocação": "Evoker Mage",
  "Mago de Fogo": "Fire Mage",
  "Mago de Gelo": "Frost Ice Mage",
  "Mago de Relâmpago": "Lightning Mage",
  "Mago de Sangue": "Blood Mage",
  "Mago do Ender": "Ender Mage",
  "Paladino": "Paladin",
  "Humano Variante": "Variant Human",
};

const modLabels: Record<string, string> = {
  "origins-": "Origins",
  "rpg_origins-": "RPG Origins",
  "ojs_rpg_origins-": "OJS RPG Origins",
  "skymc_origins-": "SkyMC Origins",
  "dragon_origins-": "Dragon Origins",
  "fairytale-": "Fairytale Origins",
  "mythic-": "Mythic Origins",
  "classes-": "Classes",
};

const modColors: Record<string, string> = {
  "origins-": "#5a9e6f",
  "rpg_origins-": "#7a5fc0",
  "ojs_rpg_origins-": "#a48fe0",
  "skymc_origins-": "#4a8ab5",
  "dragon_origins-": "#c05c5c",
  "fairytale-": "#c9a84c",
  "mythic-": "#c05cb0",
  "classes-": "#c9843c",
};

const likelyActive = (power: Entry["powers"][number]) =>
  /\b(ativar|ativa|pression|tecla|dispar|lança|invoca|toggle|active|activate|cooldown|recarga)\b/i
    .test(`${power.name} ${power.description}`);

function searchText(entry: Entry) {
  return fold([
    entry.name,
    englishAliases[entry.name] ?? "",
    entry.id,
    entry.id.replace(/[:/_-]/g, " "),
    entry.mod,
    entry.impact,
    entry.description,
    ...entry.powers.flatMap((power) => [power.name, power.description, power.id]),
  ].join(" "));
}

function getModKey(icon: string): string {
  for (const key of Object.keys(modLabels)) {
    if (icon.includes(key)) return key;
  }
  return "origins-";
}

export function Catalog({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const needle = fold(query.trim());

  const entries = useMemo(
    () =>
      catalog.filter(
        (entry) =>
          (filter === "all" || entry.type === filter) &&
          (!needle || searchText(entry).includes(needle)),
      ),
    [filter, needle],
  );

  const races = entries.filter((e) => e.type === "race");
  const classes = entries.filter((e) => e.type === "class");

  const counts = {
    all: catalog.length,
    race: catalog.filter((entry) => entry.type === "race").length,
    class: catalog.filter((entry) => entry.type === "class").length,
  };

  return (
    <section className="catalog-wrap">
      <div className="catalog-heading" id="catalogo">
        <p className="section-kicker">O GRIMÓRIO</p>
        <h2>Raças, Origins e Classes</h2>
        <p>
          Pesquise em português ou inglês. Raças & Origins e Classes estão separadas
          e cada card exibe o ícone real extraído do mod correspondente.
        </p>
      </div>

      <section className="controls" aria-label="Pesquisa do catálogo">
        <label className="search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Pesquise por nome, poder, mod ou ID…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && <button onClick={() => setQuery("")} aria-label="Limpar pesquisa">×</button>}
        </label>
        <div className="filters" role="group" aria-label="Filtrar catálogo">
          {([
            ["all", "Tudo"],
            ["race", "🧬 Raças & Origins"],
            ["class", "⚔️ Classes"],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              className={filter === value ? "active" : ""}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {label} <small>{counts[value]}</small>
            </button>
          ))}
        </div>
      </section>

      <p className="result-count">
        {entries.length} {entries.length === 1 ? "resultado encontrado" : "resultados encontrados"}
        {filter === "all" && ` — ${races.length} raças & origins, ${classes.length} classes`}
      </p>

      {entries.length > 0 ? (
        <>
          {(filter === "all" || filter === "race") && races.length > 0 && (
            <section className="section-block" aria-label="Raças e Origins">
              <div className="section-divider">
                <span className="divider-race">🧬</span>
                <h3 className="divider-title">Raças & Origins</h3>
                <span className="divider-count">{races.length}</span>
              </div>
              <div className="grid" aria-live="polite">
                {races.map((entry) => <EntryCard key={`race-${entry.id}`} entry={entry} />)}
              </div>
            </section>
          )}
          {(filter === "all" || filter === "class") && classes.length > 0 && (
            <section className="section-block" aria-label="Classes">
              <div className="section-divider">
                <span className="divider-class">⚔️</span>
                <h3 className="divider-title">Classes</h3>
                <span className="divider-count">{classes.length}</span>
              </div>
              <div className="grid" aria-live="polite">
                {classes.map((entry) => <EntryCard key={`class-${entry.id}`} entry={entry} />)}
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="empty">
          <span>🔮</span>
          <h2>Nenhum resultado apareceu</h2>
          <p>Tente outro nome, poder, mod ou ID técnico.</p>
          <button onClick={() => { setQuery(""); setFilter("all"); }}>Limpar filtros</button>
        </section>
      )}

      <div className="guide-content">{children}</div>
    </section>
  );
}

function EntryCard({ entry }: { entry: Entry }) {
  const isRace = entry.type === "race";
  const modKey = getModKey(entry.icon ?? "");
  const modLabel = modLabels[modKey] ?? entry.mod.replace(/\.jar$/i, "");
  const modColor = modColors[modKey] ?? "var(--gold)";

  return (
    <article className={`card ${entry.type}`} id={entry.anchor}>
      <div className="card-top">
        <div className="card-identity">
          {entry.icon && (
            <span className="origin-icon">
              <Image
                src={`${basePath}${entry.icon}`}
                width={48}
                height={48}
                alt={`Ícone de ${entry.name}`}
                title={entry.iconItem ?? modLabel}
              />
            </span>
          )}
          <div className="card-badges">
            <span className="type">{isRace ? "🧬 Raça / Origin" : "⚔️ Classe"}</span>
            <span className="mod-badge" style={{ color: modColor }}>{modLabel}</span>
          </div>
        </div>
        <span className="impact">{entry.impact}</span>
      </div>
      <h2>{entry.name}</h2>
      {englishAliases[entry.name] && <p className="alias">Em inglês: {englishAliases[entry.name]}</p>}
      <p className="description">{entry.description}</p>
      <div className="meta">
        <span>✦ {entry.powers.length} {entry.powers.length === 1 ? "poder" : "poderes"}</span>
        <span title={entry.mod}>📦 {entry.mod.replace(/\.jar$/i, "").substring(0, 30)}</span>
      </div>
      <details>
        <summary>
          Ver poderes e detalhes
          <span className="summary-plus">＋</span>
        </summary>
        <div className="details-body">
          <p className="technical"><strong>ID técnico:</strong> <code>{entry.id}</code></p>
          {entry.powers.length > 0 ? (
            <ul className="powers">
              {entry.powers.map((power) => (
                <li key={power.id}>
                  <h3>
                    {power.name}
                    {likelyActive(power) && <mark>habilidade ativa</mark>}
                  </h3>
                  <p>{power.description}</p>
                  <code>{power.id}</code>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum poder separado foi informado pelo complemento.</p>
          )}
        </div>
      </details>
    </article>
  );
}
