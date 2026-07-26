"use client";

import { useMemo, useState } from "react";
import catalog from "./data/catalog.json";

type Entry = (typeof catalog)[number];
type Filter = "all" | "race" | "class";

const fold = (value: string) =>
  value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("pt-BR");

function searchText(entry: Entry) {
  return fold([
    entry.name,
    entry.id,
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
                  <h3>{power.name}</h3>
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
