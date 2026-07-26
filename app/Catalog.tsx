"use client";

import { useEffect, useMemo, useState } from "react";
import catalog from "./data/catalog.json";

type Entry = (typeof catalog)[number];
type Filter = "all" | "race" | "class";

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

export function Catalog() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const needle = fold(query.trim());

  useEffect(() => {
    const receiveSearch = (event: Event) => {
      setQuery((event as CustomEvent<string>).detail ?? "");
      setFilter("all");
    };
    window.addEventListener("valtheria-search", receiveSearch);
    return () => window.removeEventListener("valtheria-search", receiveSearch);
  }, []);

  const entries = useMemo(
    () =>
      catalog.filter(
        (entry) =>
          (filter === "all" || entry.type === filter) &&
          (!needle || searchText(entry).includes(needle)),
      ),
    [filter, needle],
  );

  const counts = {
    all: catalog.length,
    race: catalog.filter((entry) => entry.type === "race").length,
    class: catalog.filter((entry) => entry.type === "class").length,
  };

  return (
    <>
      <section className="controls" id="catalogo" aria-label="Pesquisa do catálogo">
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
            ["race", "Raças & Origins"],
            ["class", "Classes"],
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
      </p>

      {entries.length > 0 ? (
        <section className="grid" aria-live="polite">
          {entries.map((entry) => <EntryCard key={`${entry.type}-${entry.id}`} entry={entry} />)}
        </section>
      ) : (
        <section className="empty">
          <span>🔮</span>
          <h2>Nenhum resultado apareceu</h2>
          <p>Tente outro nome, poder, mod ou ID técnico.</p>
          <button onClick={() => { setQuery(""); setFilter("all"); }}>Limpar filtros</button>
        </section>
      )}
    </>
  );
}

function EntryCard({ entry }: { entry: Entry }) {
  const isRace = entry.type === "race";
  return (
    <article className={`card ${entry.type}`} id={entry.anchor}>
      <div className="card-top">
        <span className="type">{isRace ? "🧬 Raça / Origin" : "⚔️ Classe"}</span>
        <span className="impact">{entry.impact}</span>
      </div>
      <h2>{entry.name}</h2>
      {englishAliases[entry.name] && <p className="alias">Em inglês: {englishAliases[entry.name]}</p>}
      <p className="description">{entry.description}</p>
      <div className="meta">
        <span>✦ {entry.powers.length} {entry.powers.length === 1 ? "poder" : "poderes"}</span>
        <span title={entry.mod}>📦 {entry.mod.replace(/\.jar$/i, "")}</span>
      </div>
      <details>
        <summary>Ver poderes e detalhes <span>＋</span></summary>
        <div className="details-body">
          <p className="technical"><strong>ID:</strong> <code>{entry.id}</code></p>
          {entry.powers.length > 0 ? (
            <ul className="powers">
              {entry.powers.map((power) => (
                <li key={power.id}>
                  <h3>{power.name} {likelyActive(power) && <mark>habilidade ativa</mark>}</h3>
                  <p>{power.description}</p>
                  <code>{power.id}</code>
                </li>
              ))}
            </ul>
          ) : <p>Nenhum poder separado foi informado pelo complemento.</p>}
        </div>
      </details>
    </article>
  );
}
