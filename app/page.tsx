import type { Metadata } from "next";
import { Catalog } from "./Catalog";
import { Keybinds } from "./Keybinds";

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

      <section className="how-to" aria-labelledby="como-usar-title">
        <p className="section-kicker">PASSO A PASSO</p>
        <h2 id="como-usar-title">Como usar uma habilidade</h2>
        <ol>
          <li><span>01</span><div><strong>Escolha sua raça e classe</strong><p>Finalize as duas telas de seleção antes de testar os poderes.</p></div></li>
          <li><span>02</span><div><strong>Leia a ficha abaixo</strong><p>Abra “Ver poderes e detalhes”. Poderes marcados como <em>habilidade ativa</em> são os candidatos que precisam de tecla.</p></div></li>
          <li><span>03</span><div><strong>Use Y primeiro</strong><p>O <kbd>Y</kbd> executa o primeiro poder ativo da sua escolha: ataque, transformação, impulso ou efeito, dependendo da ficha.</p></div></li>
          <li><span>04</span><div><strong>Use H para o segundo</strong><p>O <kbd>H</kbd> executa o segundo poder ativo, quando ele existe. Observe a barra, recarga e condições descritas pelo poder.</p></div></li>
        </ol>
        <aside>
          <strong>Importante:</strong> poderes passivos funcionam automaticamente e não usam tecla.
          Algumas habilidades exigem água, chão, alvo, energia ou o fim da recarga. Se Y/H não fizer nada,
          confira essas condições e se aquela raça ou classe realmente possui um poder ativo naquele espaço.
        </aside>
      </section>

      <Keybinds />

      <section className="catalog-wrap">
        <div className="catalog-heading">
          <p className="section-kicker">O GRIMÓRIO</p>
          <h2>Raças, Origins e classes</h2>
          <p>Pesquise em português ou inglês e abra qualquer ficha para ler poderes, vantagens, limitações e IDs.</p>
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
