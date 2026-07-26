import type { Metadata } from "next";
import { Catalog } from "./Catalog";

export const metadata: Metadata = {
  title: "Atlas de Raças & Classes | Valtheria RP",
  description: "Consulte em português todas as raças, Origins, classes e poderes do Valtheria RP.",
};

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav>
          <a className="brand" href="#"><span>V</span> Valtheria RP</a>
          <a className="nav-link" href="#catalogo">Explorar catálogo ↓</a>
        </nav>
        <div className="hero-copy">
          <p className="eyebrow">✦ GUIA OFICIAL DO MODPACK</p>
          <h1>Encontre o seu lugar em <em>Valtheria</em></h1>
          <p className="lead">
            Todas as raças, Origins e classes atualmente disponíveis, traduzidas
            para português e reunidas em um grimório fácil de pesquisar.
          </p>
          <div className="stats">
            <span><strong>44</strong> raças & Origins</span>
            <i />
            <span><strong>32</strong> classes</span>
            <i />
            <span><strong>100%</strong> em português</span>
          </div>
        </div>
        <div className="rune" aria-hidden="true">✦</div>
      </header>

      <section className="hotkeys" aria-labelledby="atalhos-title">
        <div>
          <p className="section-kicker">ATALHOS ESSENCIAIS</p>
          <h2 id="atalhos-title">Como ativar seus poderes</h2>
          <p>Algumas escolhas não possuem os dois poderes ativos. A tecla só fará algo quando a sua raça ou classe oferecer aquela habilidade.</p>
        </div>
        <div className="key-guide">
          <div className="key-row">
            <kbd>Y</kbd>
            <span><strong>Primeira habilidade</strong><small>Poder ativo primário</small></span>
          </div>
          <div className="key-row">
            <kbd>H</kbd>
            <span><strong>Segunda habilidade</strong><small>Poder ativo secundário</small></span>
          </div>
        </div>
      </section>

      <section className="catalog-wrap">
        <div className="catalog-heading">
          <p className="section-kicker">O GRIMÓRIO</p>
          <h2>Raças, Origins e classes</h2>
          <p>Abra qualquer ficha para ler os poderes, vantagens, limitações e o ID técnico.</p>
        </div>
        <Catalog />
      </section>

      <footer>
        <span className="brand"><span>V</span> Valtheria RP</span>
        <p>Catálogo gerado a partir dos conteúdos que o modpack realmente carrega.</p>
      </footer>
    </main>
  );
}
