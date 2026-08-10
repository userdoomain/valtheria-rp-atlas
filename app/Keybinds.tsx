const groups = [
  {
    name: "Ice and Fire",
    icon: "🐉",
    note: "Dragões, montaria e sopro elemental",
    keys: [
      ["R / Ctrl + R", "Bafo de Fogo do Dragão (ataque principal)"],
      ["Ctrl + Mouse esquerdo", "Ataque físico / mordida do dragão"],
      ["Espaço", "Subir enquanto estiver voando"],
      ["Alt + Page Down", "Descer / remover bebê do ombro"],
      ["F7", "Alternar câmera para 3ª pessoa"],
      ["Cajado de Comando", "Mandar sentar, seguir ou virar guarda (item)"],
    ],
  },
  {
    name: "Origins & Classes",
    icon: "🧬",
    note: "Poderes da raça e da classe",
    keys: [
      ["Y", "Habilidade ativa primária"],
      ["H", "Habilidade ativa secundária"],
      ["Alt + Y", "Terceira habilidade (RPG Origins)"],
      ["Alt + U", "Quarta habilidade (RPG Origins)"],
      ["Alt + O", "Ver ficha da sua Origem"],
      ["G", "Habilidade especial Alex's Caves"],
    ],
  },
  {
    name: "ParCool",
    icon: "🏃",
    note: "Parkour, movimentos e escalada",
    keys: [
      ["Shift + P", "Ativar / desativar o ParCool"],
      ["Ctrl (segurar)", "Corrida rápida"],
      ["C", "Rastejar"],
      ["Shift + Espaço", "Pulo na parede (Wall Jump)"],
      ["Shift + V", "Ultrapassar obstáculo (Vault)"],
      ["Shift + R", "Esquiva (Dodge)"],
      ["Alt esquerdo", "Amortecer queda (Breakfall)"],
      ["Ctrl + F5", "Corrida horizontal na parede"],
      ["Mouse 5", "Ficar pendurado"],
      ["Ctrl + Mouse direito", "Usar tirolesa (Zipline)"],
      ["Shift + O", "Abrir configurações"],
      ["Shift + F8", "Esconder-se dentro do bloco"],
    ],
  },
  {
    name: "JourneyMap",
    icon: "🗺️",
    note: "Mapa, minimapa e waypoints",
    keys: [
      ["J", "Abrir mapa em tela cheia"],
      ["Alt + J", "Mostrar / esconder o minimapa"],
      ["Insert", "Criar waypoint no cursor"],
      ["F10", "Criar waypoint (tela cheia)"],
      ["F8", "Enviar posição no chat"],
      ["Alt + F7", "Mostrar / ocultar waypoints"],
      ["Ctrl + F8", "Gerenciador de Waypoints"],
      ["=", "Mais zoom"],
      ["-", "Menos zoom"],
      ["[", "Alternar Dia / Noite / Cavernas"],
      ["F9", "Options Manager (tela cheia)"],
      ["Ctrl + F9", "Desativar botões do mapa"],
    ],
  },
  {
    name: "Vampirism",
    icon: "🦇",
    note: "Progressão vampírica e habilidades",
    keys: [
      ["Alt + P", "Abrir menu de habilidades vampíricas"],
      ["Alt + V", "Chupar sangue (Suck Blood)"],
      ["Alt + R", "Usar ação selecionada"],
      ["Alt + N", "Mudar visão (Noturna / Sangue)"],
      ["Alt + C", "Selecionar tipo de flecha"],
      ["Alt + 1 / 2 / 3", "Habilidades rápidas 1–3"],
    ],
  },
  {
    name: "Mochilas",
    icon: "🎒",
    note: "Sophisticated & Traveler's Backpack",
    keys: [
      ["Alt + B", "Abrir Sophisticated Backpack"],
      ["Ctrl + B", "Abrir Traveler's Backpack"],
      ["Ctrl + I", "Aba de módulos / interagir"],
      ["Alt + Z / Alt + X", "Ativar melhorias 1 e 2"],
      ["Shift + Z", "Trocar ferramenta (Traveler's)"],
      ["I", "Acessar aljava (Spartan Weaponry)"],
    ],
  },
  {
    name: "JEI",
    icon: "📖",
    note: "Just Enough Items – receitas e usos",
    keys: [
      ["R", "Ver receita do item"],
      ["U", "Ver usos do item"],
      ["Ctrl + O", "Esconder / mostrar overlay"],
      ["Shift + Mouse esquerdo", "Craftar receita marcada"],
      ["Ctrl + F", "Selecionar barra de busca"],
      ["Page Up / Page Down", "Página de receita anterior / próxima"],
      ["Shift + Page Up / Down", "Categoria anterior / próxima"],
      ["Backspace", "Receita anterior"],
    ],
  },
  {
    name: "Magia",
    icon: "✨",
    note: "Ars Nouveau, Iron's Spells & Cataclysm",
    keys: [
      ["Ctrl + A", "Abrir livro de feitiços (Ars)"],
      ["Ctrl + [ / ]", "Slot anterior / próximo (Ars)"],
      ["Ctrl + H", "Alternar HUD de seleção (Ars)"],
      ["Ctrl + S", "Conjurar feitiço (Iron's Spells)"],
      ["Shift + F", "Roda de feitiços (Iron's Spells)"],
      ["Ctrl + G", "Zoom (Hexerei)"],
      ["Ctrl + P", "Habilidades Cataclysm"],
      ["Ctrl + K", "Botas do Cataclysm"],
      ["Ctrl + J", "Peitoral do Cataclysm"],
      ["Alt + H", "Capacete do Cataclysm"],
    ],
  },
  {
    name: "Werewolves",
    icon: "🐺",
    note: "Lobisomem: transformação e caça",
    keys: [
      ["Shift + X", "Mordida"],
      ["Ctrl + L", "Salto / investida"],
    ],
  },
  {
    name: "Voz & Social",
    icon: "🎙️",
    note: "Simple Voice Chat & Emotecraft",
    keys: [
      ["Ctrl + V", "Menu do Voice Chat"],
      ["Shift + G", "Grupo(s) do Voice Chat"],
      ["N", "Desabilitar o Voice Chat"],
      ["M", "Silenciar microfone"],
      ["F4", "Abrir roda de emotes"],
      ["Shift + F4", "Parar emote"],
    ],
  },
  {
    name: "Shaders & Visual",
    icon: "🌅",
    note: "Oculus, Ok Zoomer e Placebo",
    keys: [
      ["O", "Abrir / fechar tela de shaders"],
      ["K", "Alternar shader"],
      ["Ctrl + Z", "Zoom (Ok Zoomer)"],
      ["Keypad 8", "Alternar asas Patreon"],
      ["Keypad 9", "Alternar trilhas Patreon"],
    ],
  },
  {
    name: "Outros úteis",
    icon: "🛠️",
    note: "Corpse, Deeper and Darker, Immersive Aircraft",
    keys: [
      ["Shift + U", "Histórico de mortes (Corpse)"],
      ["B", "Boost Soul Elytra (Deeper and Darker)"],
      ["V", "Sculk Transmitter (Deeper and Darker)"],
      ["Ctrl + M", "Desmontar aeronave (Immersive)"],
      ["Alt + F", "Impulso de foguete (Immersive)"],
      ["F6", "Comandos de voo (Dragon Mounts)"],
      ["Ctrl + Page Down", "Descer (Dragon Mounts)"],
    ],
  },
];

export function Keybinds() {
  return (
    <section className="keybinds" id="atalhos-mods" aria-labelledby="atalhos-mods-title">
      <div className="catalog-heading">
        <p className="section-kicker">MANUAL DAS TECLAS</p>
        <h2 id="atalhos-mods-title">Atalhos do modpack Valtheria RP</h2>
        <p>
          Referência completa das teclas configuradas no modpack atual — lidas diretamente
          do arquivo <code>options.txt</code> da instância e dos guias internos do pack.
        </p>
      </div>
      <div className="keybind-grid">
        {groups.map((group) => (
          <article className="keybind-card" key={group.name}>
            <header>
              <span className="keybind-icon">{group.icon}</span>
              <div>
                <h3>{group.name}</h3>
                <p>{group.note}</p>
              </div>
            </header>
            <dl>
              {group.keys.map(([key, action]) => (
                <div key={`${group.name}-${key}`}>
                  <dt><kbd>{key}</kbd></dt>
                  <dd>{action}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <div className="keybind-tip">
        <strong>💡 Dica:</strong> Se alguma tecla parecer não funcionar, confira em
        <em> Opções → Controles</em> se não há conflito entre mods. Para o dragão do Ice and Fire
        o Cajado de Comando substitui atalhos de sentar/levantar.
      </div>
    </section>
  );
}
