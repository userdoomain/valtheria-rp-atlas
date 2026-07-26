"use client";

import { FormEvent, useState } from "react";

export function HeroSearch() {
  const [value, setValue] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("valtheria-search", { detail: value }));
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <form className="hero-search" onSubmit={submit} role="search">
      <label htmlFor="hero-search">Pesquisar no grimório</label>
      <div>
        <span aria-hidden="true">⌕</span>
        <input
          id="hero-search"
          type="search"
          placeholder="Ex.: sereia, mermaid, arqueiro, fire mage…"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </div>
      <small>Busca em português, inglês, poderes, mods e IDs técnicos.</small>
    </form>
  );
}
