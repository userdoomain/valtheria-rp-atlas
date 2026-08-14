const sections = [
  {
    icon: "⚖️",
    title: "Economia & Moedas",
    items: [
      ["Cobre", "Moeda base — a menor unidade"],
      ["Ferro", "Equivale a 5 moedas de cobre"],
      ["Ouro", "Equivale a 10 moedas de ferro"],
      ["Esmeralda", "Equivale a 10 moedas de ouro"],
      ["Diamante", "Equivale a 10 moedas de esmeralda"],
      ["Netherita", "Equivale a 10 moedas de diamante"],
      ["Carteira", "Guarda e organiza suas moedas (botão direito)"],
      ["Saldo inicial", "Você entra com 5 moedas de cobre + 1 de ferro"],
    ],
  },
  {
    icon: "💱",
    title: "Como ganhar dinheiro",
    items: [
      ["Derrote inimigos", "Mobs dropam moedas automaticamente ao morrer"],
      ["Venda itens", "Aos comerciantes em vilas ou a outros jogadores"],
      ["Explore estruturas", "Baús de masmorras contêm moedas"],
      ["Comércio entre players", "Negocie com /trade"],
      ["Lojas de jogadores", "Monte seu balcão com /shop"],
    ],
  },
  {
    icon: "🏪",
    title: "Lojas do servidor",
    items: [
      ["SDM Shop 2", "Loja principal — abra com a tecla 'Open Shop' (SDM Shop 2)"],
      ["/sdm_shop", "Comando da loja (admin/abertura)"],
      ["/shop", "Abrir ou montar seu balcão de vendas"],
      ["/trade", "Negociar diretamente com outro jogador"],
      ["ATM", "Sacar e depositar moedas (12 slots de atalho)"],
      ["Coin Mint", "Desativada — moedas só circulam pelo comércio"],
    ],
  },
  {
    icon: "📜",
    title: "Regras do servidor",
    items: [
      ["Origem escolhida", "Use a Orbe da Origem para selecionar ou trocar"],
      ["Orbe da Origem", "À venda na SDM Shop por um preço alto (moedas de alto nível)"],
      ["AFK automático", "Fique parado por 3 minutos para seu personagem deitar"],
      ["Proibido cunhar", "A Coin Mint está desativada — dinheiro circula pelo comércio"],
      ["Respeito", "Mantenha o clima de roleplay dentro do servidor"],
    ],
  },
  {
    icon: "🏘️",
    title: "Vila & NPCs (MCA)",
    items: [
      ["/villager <profissão>", "Spawn de villager MCA com a profissão escolhida (requer OP). Ex.: /villager guard, /villager librarian"],
      ["Profissões MCA", "guard, archer, adventurer, mercenary, cultist e outlaw + as 13 profissões vanilla (ferreiro, bibliotecário, etc.)"],
      ["Watut", "Reativado: veja quando outros jogadores digitam, abrem menus, usam animações e tocam sons"],
      ["Câmera F5", "F5 agora alterna para a câmera lateral (Shoulder Surfing) — ajuste com as setas"],
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