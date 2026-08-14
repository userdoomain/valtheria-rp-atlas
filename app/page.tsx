import type { Metadata } from "next";
import Image from "next/image";
import { Catalog } from "./Catalog";
import { Keybinds } from "./Keybinds";
import { Mods } from "./Mods";
import { Regras } from "./Regras";

export const metadata: Metadata = {
  title: "Atlas de Raças & Classes | Valtheria RP",
  description:
    "Consulte em português a wiki de mods, todas as raças, Origins, classes, poderes e atalhos de teclado do modpack Valtheria RP.",
};

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav>
          <a className="brand brand-image" href="#" aria-label="Valtheria RP — início">
            <Image src="/valtheria-logo-optimized.png" width={900} height={309} alt="Valtheria RP" priority />
          </a>
          <div className="nav-links">
            <a className="nav-link" href="#mods">Mods ↓</a>
            <a className="nav-link" href="#catalogo">Catálogo ↓</a>
            <a className="nav-link" href="#regras">Guia & Regras ↓</a>
            <a className="nav-link" href="#atalhos-mods">Atalhos ↓</a>
          </div>
        </nav>
        <div className="hero-copy">
          <p className="eyebrow">✦ GUIA OFICIAL DO MODPACK ✦</p>
          <h1>Atlas de <em>Valtheria</em></h1>
          <p className="lead">
            O grimório definitivo do servidor: wiki de todos os mods, 44 raças,
            Origins, 32 classes e mais de 160 atalhos de teclado — pesquisáveis,
            traduzidos para português e sempre atualizados conforme o modpack.
          </p>
          <div className="stats">
            <span><strong>44</strong> raças & Origins</span>
            <i />
            <span><strong>32</strong> classes</span>
            <i />
            <span><strong>160+</strong> teclas mapeadas</span>
            <i />
            <span><strong>100%</strong> em português</span>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src="/valtheria-atlas-social.png"
            width={1728}
            height={909}
            alt="Valtheria RP — Reino em roleplay"
            priority
          />
        </div>
        <div className="rune" aria-hidden="true">✦</div>
        <div className="rune rune-2" aria-hidden="true">◆</div>
      </header>

      <Mods />

      <Regras />

      <Catalog>
        <section className="hotkeys" aria-labelledby="atalhos-title">
          <div>
            <p className="section-kicker">ATALHOS ESSENCIAIS</p>
            <h2 id="atalhos-title">Como ativar seus poderes</h2>
            <p>
              Nem toda raça ou classe possui dois poderes ativos — a tecla só terá efeito
              se a sua escolha oferecer aquela habilidade. Poderes passivos funcionam
              automaticamente.
            </p>
          </div>
          <div className="key-guide">
            <div className="key-row">
              <kbd>Y</kbd>
              <span>
                <strong>Primeira habilidade</strong>
                <small>Poder ativo primário</small>
              </span>
            </div>
            <div className="key-row">
              <kbd>H</kbd>
              <span>
                <strong>Segunda habilidade</strong>
                <small>Poder ativo secundário</small>
              </span>
            </div>
            <div className="key-row">
              <kbd>´</kbd>
              <span>
                <strong>Terceira habilidade</strong>
                <small>RPG Origins apenas</small>
              </span>
            </div>
            <div className="key-row">
              <kbd>Alt + U</kbd>
              <span>
                <strong>Quarta habilidade</strong>
                <small>RPG Origins apenas</small>
              </span>
            </div>
            <div className="key-row">
              <kbd>Alt + O</kbd>
              <span>
                <strong>Ficha da Origem</strong>
                <small>Ver poderes e descrição</small>
              </span>
            </div>
          </div>
        </section>

        <section className="how-to" aria-labelledby="como-usar-title">
          <p className="section-kicker">PASSO A PASSO</p>
          <h2 id="como-usar-title">Como usar uma habilidade</h2>
          <ol>
            <li>
              <span>01</span>
              <div>
                <strong>Escolha raça e classe</strong>
                <p>Finalize as duas telas de seleção na primeira entrada no mundo.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Leia a ficha abaixo</strong>
                <p>
                  Abra os detalhes. Poderes marcados como <em>habilidade ativa</em>
                  são os que respondem às teclas.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Pressione Y primeiro</strong>
                <p>
                  O <kbd>Y</kbd> executa o primeiro poder ativo — ataque,
                  transformação ou efeito, conforme a ficha.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <strong>Use H para o segundo</strong>
                <p>
                  O <kbd>H</kbd> executa o segundo poder ativo. Verifique a barra
                  de recarga e condições especiais.
                </p>
              </div>
            </li>
          </ol>
          <aside>
            <strong>Importante:</strong> poderes passivos não precisam de tecla.
            Algumas habilidades exigem água, chão, alvo, energia ou fim da recarga.
            Se Y/H não ocorrer, confira essas condições na ficha da raça ou classe.
          </aside>
        </section>

        <Keybinds />
      </Catalog>

      <footer>
        <span className="brand brand-image footer-logo">
          <Image src="/valtheria-logo-optimized.png" width={900} height={309} alt="Valtheria RP" />
        </span>
        <div className="footer-info">
          <p>
            Atlas gerado a partir dos conteúdos carregados pelo modpack real.
            Dados extraídos do arquivo <code>options.txt</code> e guias internos.
          </p>
          <p className="footer-copy">✦ Valtheria RP — Todos os direitos reservados ✦</p>
        </div>
      </footer>
    </main>
  );
}
