const groups = [
  {
    name: "Ice and Fire",
    icon: "🐉",
    note: "Controles montado em dragão",
    keys: [
      ["R", "Ataque de fogo do dragão"],
      ["Botão direito", "Ataque físico / golpe"],
      ["Espaço", "Subir enquanto estiver voando"],
      ["Ctrl esquerdo", "Descer enquanto estiver voando"],
      ["F7", "Trocar a câmera do dragão"],
    ],
  },
  {
    name: "Origins",
    icon: "🧬",
    note: "Poderes da raça e da classe",
    keys: [
      ["Y", "Primeira habilidade ativa"],
      ["H", "Segunda habilidade ativa"],
      ["Alt + O", "Ver sua Origin e seus poderes"],
    ],
  },
  {
    name: "ParCool!",
    icon: "🏃",
    note: "Movimentos de parkour",
    keys: [
      ["Shift + P", "Ativar ou desativar o Parcool"],
      ["Ctrl esquerdo", "Corrida rápida"],
      ["C", "Rastejar"],
      ["Shift + Espaço", "Pulo na parede"],
      ["Shift + V", "Saltar obstáculo"],
      ["Shift + R", "Esquiva"],
      ["Alt esquerdo", "Amortecer queda"],
      ["Z", "Mortal / pirueta"],
      ["Mouse 5", "Ficar pendurado"],
      ["Shift + O", "Abrir configurações"],
    ],
  },
  {
    name: "JourneyMap",
    icon: "🗺️",
    note: "Mapa e pontos de interesse",
    keys: [
      ["J", "Abrir o mapa em tela cheia"],
      ["Alt + J", "Mostrar ou esconder o minimapa"],
      ["Insert", "Criar um ponto no mapa"],
      ["Alt + F7", "Mostrar ou esconder pontos"],
      ["Ctrl + F8", "Abrir a lista de pontos"],
      ["+", "Aproximar o mapa"],
      ["−", "Afastar o mapa"],
      ["F9", "Opções do mapa em tela cheia"],
    ],
  },
  {
    name: "Mochilas",
    icon: "🎒",
    note: "Depende da mochila equipada",
    keys: [
      ["Alt + B", "Abrir Sophisticated Backpacks"],
      ["Ctrl + B", "Abrir Traveler's Backpack"],
      ["Ctrl + I", "Interagir com a Sophisticated Backpack"],
      ["Alt + Z / Alt + X", "Alternar melhorias da Sophisticated Backpack"],
      ["Shift + Z", "Trocar ferramenta da Traveler's Backpack"],
    ],
  },
];

export function Keybinds() {
  return (
    <section className="keybinds" id="atalhos-mods" aria-labelledby="atalhos-mods-title">
      <div className="catalog-heading">
        <p className="section-kicker">TECLAS DO MODPACK</p>
        <h2 id="atalhos-mods-title">Atalhos para começar</h2>
        <p>Estas são as teclas configuradas atualmente no Valtheria RP, não uma lista genérica dos mods.</p>
      </div>
      <div className="keybind-grid">
        {groups.map((group) => (
          <article className="keybind-card" key={group.name}>
            <header>
              <span>{group.icon}</span>
              <div><h3>{group.name}</h3><p>{group.note}</p></div>
            </header>
            <dl>
              {group.keys.map(([key, action]) => (
                <div key={`${group.name}-${key}`}>
                  <dt>{key}</dt>
                  <dd>{action}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <p className="keybind-tip">
        💡 Para mandar o dragão do Ice and Fire sentar, levantar ou definir a posição,
        use o <strong>Cajado de Comando de Dragão</strong> no próprio dragão; isso é uma ação com item, não um atalho de teclado.
      </p>
    </section>
  );
}
