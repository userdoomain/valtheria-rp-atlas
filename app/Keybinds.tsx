const groups = [
  {
    name: "Ice and Fire",
    icon: "🐉",
    note: "Dragões, montaria e sopro elemental",
    keys: [
      ["R", "Bafo de Fogo do Dragão (ataque principal)"],
      ["R", "Ataque físico / mordida do dragão"],
      ["Ctrl", "Descer enquanto estiver voando"],
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
      ["´ (crase)", "Terceira habilidade (RPG Origins)"],
      ["Alt + U", "Quarta habilidade (RPG Origins)"],
      ["Alt + O", "Ver ficha da sua Origem"],
      ["G", "Habilidade especial Alex's Caves"],
    ],
  },
  {
    name: "ParCool",
    icon: "🏃",
    note: "Parkour e escalada (configurado)",
    keys: [
      ["Shift + P", "Ativar / desativar o ParCool"],
      ["Shift + Espaço", "Pulo na parede (Wall Jump)"],
      ["Espaço", "Deslizar na parede (Wall Slide)"],
      ["Shift + R", "Esquiva (Dodge)"],
      ["Shift + V", "Vault / subir obstáculos"],
      ["Alt", "Breakfall (amortecer queda)"],
      ["Mouse 5", "Ficar pendurado (Hang Down)"],
      ["Shift + O", "Abrir configurações"],
    ],
  },
  {
    name: "SDM Shop 2",
    icon: "🏪",
    note: "Loja do servidor — moedas (SDMEconomy)",
    keys: [
      ["Tecla Open Shop", "Abrir a loja (Opções → Controles → SDM Shop 2)"],
      ["/sdm_shop", "Comando da loja (admin/abertura)"],
    ],
  },
  {
    name: "Hiccup's Legacy",
    icon: "🐲",
    note: "Como Treinar Seu Dragão — domar e criar",
    keys: [
      ["Manual do Dragão", "Livro com as informações de todas as espécies"],
      ["Ovo do Dragão", "Eclode no seu dragão companheiro"],
      ["Alimentar", "Domar e treinar seu dragão com comida correta"],
      ["Equipamentos", "Armaduras e armas de estilo viking/dragão"],
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
      ["V", "Chupar sangue (Suck Blood)"],
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
      ["R", "Ver usos do item"],
      ["Botão esquerdo (no item)", "Ver receita do item"],
      ["Ctrl + O", "Esconder / mostrar overlay"],
      ["Shift + Botão esquerdo", "Craftar receita marcada"],
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
    name: "Câmera (Shoulder Surfing)",
    icon: "🎥",
    note: "Visão lateral estilo 3ª pessoa — distância ajustável",
    keys: [
      ["F5", "Alternar para a câmera lateral (perspectiva padrão)"],
      ["← / →", "Ajustar câmera para a esquerda / direita"],
      ["↑ / ↓", "Aproximar / afastar a câmera (distância)"],
      ["Page Up / Down", "Subir / descer a câmera"],
      ["U", "Trocar de ombro"],
    ],
  },
  {
    name: "Shaders & Visual",
    icon: "🌅",
    note: "Complementary Unbound ativado — Ok Zoomer e câmera",
    keys: [
      ["Ctrl + Z", "Zoom (Ok Zoomer)"],
      ["= / -", "Ajustar zoom (quando ativo)"],
      ["F5", "Alternar 1ª / 3ª pessoa (lateral)"],
      ["F7", "Câmera de dragão (Ice and Fire)"],
      ["F3 + S", "Recarregar shaderpack"],
    ],
  },
  {
    name: "Planador",
    icon: "🪂",
    note: "VC Gliders — voe pelo mundo",
    keys: [
      ["Caída / pulo", "Abrir o planador automaticamente"],
      ["Espaço", "Ganhar altitude / planar"],
      ["Slot de curiosidade", "Equipar o planador (Ctrl + U)"],
      ["Cobre / Netherita", "Melhorias de resistência e velocidade"],
    ],
  },
  {
    name: "Outros úteis",
    icon: "🛠️",
    note: "Corpse, Dragon Mounts e MCA",
    keys: [
      ["Shift + U", "Histórico de mortes (Corpse)"],
      ["F6", "Comandos de voo (Dragon Mounts)"],
      ["Ctrl + Page Down", "Descer (Dragon Mounts)"],
      ["Shift + F6", "Biblioteca de skins (MCA)"],
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
    </section>
  );
}