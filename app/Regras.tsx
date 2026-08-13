const sections = [
  {
    icon: "⚖️",
    title: "Economia & Moedas",
    items: [
      ["Cobre", "Moeda base — a menor unidade"],
      ["Ferro", "Equivale a 5 moedas de cobre"],
      ["Ouro", "Equivale a 5 moedas de ferro"],
      ["Esmeralda", "Equivale a 5 moedas de ouro"],
      ["Diamante", "Equivale a 5 moedas de esmeralda"],
      ["Carteira", "Guarda e organiza suas moedas (botão direito)"],
    ],
  },
  {
    icon: "💱",
    title: "Como ganhar dinheiro",
    items: [
      ["Venda itens", "Aos comerciantes em vilas ou a outros jogadores"],
      ["Derrote inimigos", "Bosses e criaturas dropam moedas"],
      ["Explore estruturas", "Baús de masmorras contêm moedas"],
      ["Comércio entre players", "Negocie com /trade"],
      ["Lojas de jogadores", "Monte seu balcão com /shop"],
    ],
  },
  {
    icon: "📜",
    title: "Regras do servidor",
    items: [
      ["Origem escolhida", "Use a Orbe da Origem para selecionar ou trocar"],
      ["AFK automático", "Fique parado por 3 minutos para seu personagem deitar"],
      ["Proibido cunhar", "A Coin Mint está desativada — dinheiro circula pelo comércio"],
      ["Respeito", "Mantenha o clima de roleplay dentro do servidor"],
    ],
  },
  {
    icon: "⚔️",
    title: "Comandos essenciais",
    items: [
      ["/spawn", "Voltar ao spawn"],
      ["/sethome e /home", "Definir e ir para sua casa"],
      ["/waystone", "Gerenciar pedras de viagem"],
      ["/trade", "Negociar com outro jogador"],
      ["/shop", "Abrir lojas de jogadores"],
      ["/kit start", "Pegar seu kit inicial"],
      ["/back", "Voltar ao último lugar onde morreu"],
    ],
  },
];

export function Regras() {
  return (
    <section className="regras" id="regras" aria-labelledby="regras-title">
      <div className="catalog-heading">
        <p className="section-kicker">GUIA & REGRAS</p>
        <h2 id="regras-title">Como viver na Valtheria</h2>
        <p>
          Economia, comandos e regras essenciais para sua jornada. Ao entrar pela
          primeira vez você recebe o <strong>Guia do Viajante</strong> (livro no jogo)
          com o resumo completo de raças, teclas e poderes.
        </p>
      </div>
      <div className="regras-grid">
        {sections.map((section) => (
          <article className="regra-card" key={section.title}>
            <header>
              <span className="regra-icon">{section.icon}</span>
              <h3>{section.title}</h3>
            </header>
            <dl>
              {section.items.map(([term, action]) => (
                <div key={section.title + term}>
                  <dt><kbd>{term}</kbd></dt>
                  <dd>{action}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}