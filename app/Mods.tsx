const categories = [
  {
    icon: "🐉",
    name: "Dragões & Criaturas Lendárias",
    note: "Os monstros, bichos e aliados que habitam a Valtheria",
    mods: [
      ["Ice and Fire", "O coração do pack: dragões de fogo, gelo e raio, além de grifos, ciclopes, hidras, sereias e outras criaturas mitológicas. Dragões domam, montam, usam armadura e lançam sopros elementais."],
      ["Hiccup's Legacy", "Como Treinar Seu Dragão: ovos de dragão eclodem, cada espécie tem comida e comportamento únicos. O Manual do Dragão ensina tudo. Equipamentos de estilo viking."],
      ["Dragon Mounts", "Domar dragões da vanilla (ender, nether, etc.) e usá-los como montaria voadora."],
      ["Alex's Mobs", "Dezenas de animais e criaturas novas espalhadas pelo mundo: lulas-voadoras, mamutes, caranguejos, capivaras e muito mais."],
      ["Alex's Caves", "Cinco biomas subterrâneos gigantes, cada um com criaturas, minérios e chefes próprios (limo, radioativo, abissal, etc.)."],
      ["Mowzie's Mobs", "Criaturas mitológicas: serpentes marinhas, feras férreas, elementais e o Barakoa."],
      ["Mutant Monsters", "Versões mutantes e devastadoras dos mobs vanilla (zumbi, esqueleto, creeper, etc.)."],
      ["Critters & Companions", "Companheiros fofos: libélulas, lontras, pandas vermelhos, ferretes e mais. A libélula da Valtheria é agressiva (customizada)."],
      ["Unusual Fish Mod", "Peixes ornamentais e de aquário para suas coleções e aquários."],
      ["Domestication Innovation", "Crie seus próprios companheiros com habilidades e melhorias."],
      ["More Golems", "Novos golens de madeira, carvão, bambu e outros materiais."],
      ["Inventory Pets", "Bichinhos de inventário que dão poderes e buffs ao jogador."],
      ["Goblin Traders", "Goblins viajantes que negociam itens raros e estranhos."],
      ["Creeper Overhaul", "Variedades novas de creeper (pântano, praia, caverna, deserto...)."],
      ["Enderman Overhaul", "Variedades novas de enderman por bioma, com comportamentos únicos."],
      ["WabbaNode Companion", "Um companheiro — o WabbaNode — que te segue e ajuda."],
      ["Nether Skeletons", "Esqueletos variantes do Nether com novos drops."],
      ["Illager Invasion", "Raid mais variado com novos membros e comportamentos de illager."],
      ["Illager Warship", "Encontros aéreos com naves de illagers pelo mundo."],
      ["Grimoire of Gaia", "Muitas criaturas novas de fantasia femininas/elétricas com drops temáticos."],
    ],
  },
  {
    icon: "🧛",
    name: "Facções Sobrenaturais",
    note: "Vampiros, lobisomens e o oculto",
    mods: [
      ["Vampirism", "Vire vampiro e progrida em habilidades (sangue, visão noturna, morcegos). Vampiros hostis atacam o mundo. Possui boss e dimensão própria."],
      ["Werewolves", "Vire lobisomem: transforme-se, use habilidades de lua e progressão própria."],
      ["Vampires Need Umbrellas", "Pequeno complemento: guarda-chuvas para vampiros andarem no sol."],
      ["Eidolon Repraised", "Magia e necromancia temática: pêndulos, invocação de espíritos e rituais."],
      ["Nether's Exorcism Reborn", "Novo tipo de inimigo no Nether: demônios exorcistas com mecânicas únicas."],
      ["Darkness", "Novo inimigo 'Darkness' que desafia a iluminação e a escuridão."],
    ],
  },
  {
    icon: "🧬",
    name: "Raças & Origins",
    note: "Escolha sua origem no início do jogo",
    mods: [
      ["Origins", "Sistema base de Origins: poderes por raça (Fae, Fera, Subterrâneo, etc.)."],
      ["RPG Origins", "Origins de fantasia com ficha própria e habilidades ativas (teclas Y/H)."],
      ["OJS RPG Origins", "Mais origins de RPG com poderes customizados."],
      ["Mythic Origins", "Origins mitológicas: Fênix, Titã, etc."],
      ["Fairytale Origins", "Origins de contos de fadas."],
      ["SkyMC Origins", "Origins inspiradas em raças de SkyBlock/MMO."],
      ["Magic Origins", "Origins mágicas e elementais."],
      ["GH Classes", "Classes de personagem (guerreiro, mago, ladino...) que somam poderes à raça."],
      ["RPG Skill Trees", "Árvores de habilidade por classe: desbloqueie e melhore passivas e ativos."],
      ["Puffish Attributes", "Atributos customizados (vida, dano, velocidade) por classe/equipamento."],
      ["Pehkui", "Escala de tamanho: permite efeitos de tamanho para origins e habilidades."],
    ],
  },
  {
    icon: "🧙",
    name: "Magia & Feitiçaria",
    note: "Arcanos, alquimia e grimórios",
    mods: [
      ["Iron's Spells 'n Spellbooks", "Sistema completo de feitiçaria: grimórios, rodas de feitiço e escolas elementais (Ctrl+S, Shift+F)."],
      ["Ars Nouveau", "Magia de scribe: crie feitiços com glifos, use familiars e automação mágica (Ctrl+A)."],
      ["Hexerei", "Hexes e rituais: tinta, pincel, poções e invocações com o hexagon."],
      ["Ice and Fire Spellbooks", "Feitiços de Ice and Fire (dreno de mana de dragão, sopros)."],
      ["Cataclysm Spellbooks", "Feitiços temáticos dos chefes do Cataclysm."],
      ["All The Wizard Gear", "Equipamentos e armaduras de mago para Iron's Spells."],
      ["Spellbound Weapons", "Armas encantadas que 'vinculam' ao dono e evoluem."],
      ["Enchanted", "Novos encantamentos e sistema de experiência de encantamento."],
      ["Necronomicon", "Livro de conhecimento proibido com receitas e rituais."],
    ],
  },
  {
    icon: "⚔️",
    name: "Combate & Armas",
    note: "Luta fluida e arsenal variado",
    mods: [
      ["Better Combat", "Combate dinâmico estilo 'hack & slash': animações, eixos e movimentos."],
      ["Spartan Weaponry", "Muitas armas novas: martelos, lanças, alabardas, katanas e muito mais."],
      ["Spartan Shields", "Escudos de todos os materiais com encantamentos únicos."],
      ["Spartan Toolkit", "Suporte do toolkit para as armas espartanas."],
      ["Spartan Fire", "Integração das armas espartanas com os itens de Ice and Fire."],
      ["Expanded Combat", "Melhorias de combate para armas e mecânicas."],
      ["Fantasy Weapons & Armor", "Armaduras e armas de fantasia (elite, drow, samurai, etc.)."],
      ["Apothic Attributes", "Atributos avançados: crítico, dano extra, perfuração em itens e encantamentos."],
      ["Aethersteel", "Armas e armaduras de aethersteel com poderes."],
      ["Advanced Netherite", "Netherite melhorada em níveis (alloy, integridade, resistência)."],
    ],
  },
  {
    icon: "🌍",
    name: "Mundos & Biomas",
    note: "A paisagem da Valtheria",
    mods: [
      ["Terralith", "Substitui e enriquece o Overworld: novos biomas, montanhas, ilhas e mares."],
      ["Oh The Biomes We've Gone", "Dezenas de biomas novos vibrantes com flora própria."],
      ["Oh The Trees You'll Grow", "Árvores novas por bioma com madeiras únicas."],
      ["Biomes O' Plenty", "Biomas clássicos de BoP: subtropicais, vazios e florestas exóticas."],
      ["Mystic's Biomes", "Biomas mágicos e nevados com neopolitana..."],
      ["Amplified Nether", "O Nether reformado: novos biomas, terrenos e dungeons."],
      ["Bygone Nether", "Biomas do Nether antigos (florestas de fogo, vales de cinzas)."],
      ["Deeper and Darker", "Explora a Deep Dark: o reino de Wardens com o bioma 'Otherside'."],
      ["Deeper Oceans", "Oceanos mais profundos e cavernas subaquáticas."],
      ["Crystals Overhauled", "Cristais e biomas de cristal no Nether."],
      ["The Outer End", "Ilhas do End exteriores com estruturas novas."],
      ["Unusual End", "Mais biomas e estruturas no End."],
      ["Phantasm", "O End renovado: biomestemas e estruturas."],
      ["Ultris", "Boss e combate no End: novos desafios contra o Dragão do End."],
      ["Rare Ice", "Gelo raro e biome de gelo cristalino."],
      ["Awesome Dungeon Ocean", "Masmorras subaquáticas e tesouros."],
    ],
  },
  {
    icon: "🏰",
    name: "Estruturas & Aventura",
    note: "Masmorras, vilas e ruínas pelo mundo",
    mods: [
      ["YUNG's Better Dungeons", "Masmorras reformadas com salas, baús e desafios."],
      ["YUNG's Better Nether Fortresses", "Fortalezas do Nether melhoradas."],
      ["YUNG's Better Ocean Monuments", "Monumentos oceânicos repaginados."],
      ["Towns and Towers", "Vilas novas por bioma, com profissionais e comércio."],
      ["Structory", "Estruturas novas espalhadas pelo Overworld."],
      ["Moog's Structures", "Mais estruturas de fantasia e medievais."],
      ["Moog's End Structures", "Estruturas no End."],
      ["Middle Age Castles", "Castelos medievais grandiosos."],
      ["Sake's Structures", "Estruturas japonesas e orientais."],
      ["Dungeons and Taverns", "Tavernas e masmorras temáticas."],
      ["Dungeons Arise", "Masmorras grandes e épicas com chefes e pilhagem."],
      ["Fantasy Structures", "Ruínas e construções de fantasia."],
      ["Grim Kingdoms Lost Structures", "Ruínas e estruturas perdidas."],
      ["Berezka's Castle & Camps", "Castelo e acampamentos de Berezka."],
      ["Explorify", "Pequenos pontos de exploração: acampamentos, minas, santuários."],
      ["Moogs Structures (MOTS)", "Conjunto adicional de estruturas (MOTS)."],
    ],
  },
  {
    icon: "🏗️",
    name: "Construção & Decoração",
    note: "Construa castelos e casas estilosas",
    mods: [
      ["Quark", "O megamod de QoL e decoração: móveis, blocos, arcos, correias, encantamentos e automação."],
      ["Zeta", "Biblioteca de suporte do Quark (requisito)."],
      ["Supplementaries", "Blocos e itens práticos: escada dobrável, âncora, bandeiras, vasos com alma."],
      ["Amendments", "Melhorias em blocos vanilla: porta-vara, banner interativo, tapetes."],
      ["Handcrafted", "Móveis artesanais: camas, sofás, mesas e cadeiras decoráveis."],
      ["Fantasy Furniture", "Mobília de fantasia temática (reino, élfico, etc.)."],
      ["Decocraft", "Milhares de itens de decoração: brinquedos, eletrodomésticos, plantas."],
      ["Dusty Decorations", "Decorações simples e aconchegantes."],
      ["Cluttered", "Objetos de decoração pequenos (jornais, livros, utensílios)."],
      ["Furnish", "Móveis e decoração variados para interiores."],
      ["Chimes", "Sinos de vento que tocam ao vento."],
      ["Night Lights", "Luzes noturnas: abajures, lanternas e candeeiros."],
      ["Sweety Archaeology", "Arqueologia de comidas: desenterre doces e receitas."],
      ["Domum Ornamentum", "Blocos decorativos de Structurize: molduras, janelas, divisórias."],
      ["MultiPiston", "Pistões múltiplos e poderosos para redstone."],
      ["Waystones (construção)", "Pedras de viagem: teleporte entre waystones ativados."],
    ],
  },
  {
    icon: "🍽️",
    name: "Comida & Fazenda",
    note: "Culinária, plantação e sobrevivência",
    mods: [
      ["Farmer's Delight", "Culinária completa: panelas, tábuas de corte, sanduíches e lavouras."],
      ["Farmer's Respite", "Chás e bebidas quentes com buffs."],
      ["Nether's Delight", "Cozinha do Nether: alimentos de fungo e carne do inferno."],
      ["Ocean's Delight", "Pratos do mar: ceviche, sashimi e ensopados."],
      ["Tide's Delight", "Pratos aquáticos e de sereia."],
      ["Cultural Delights", "Culinária cultural: sushi, cubos, kebab, empanadas."],
      ["Create Food", "Comidas criativas e processadas em massa."],
      ["Kawaii Dishes", "Pratos e sobremesas fofas (sorvetes, bolos, milkshakes)."],
      ["Aether Delight", "Pratos do Aether."],
      ["Aquaculture Delight", "Pratos de peixes da Aquaculture."],
      ["Tough As Nails", "Sobrevivência: sede, temperatura corporal (calor/frio), estações afetam."],
      ["Comforts", "Sacos de dormir e redes: durma rápido onde quiser."],
      ["Serene Seasons", "As quatro estações mudam o clima, a colheita e a temperatura."],
    ],
  },
  {
    icon: "🌊",
    name: "Oceanos & Sereias",
    note: "O reino subaquático",
    mods: [
      ["Secrets of Mermaids", "Torne-se uma sereia: cauda, nado acelerado, respiração subaquática e poderes."],
      ["Mermod", "Transformação em sereia com cauda e habilidades."],
      ["Wonderous Sea", "Biomas oceânicos vibrantes com recifes e criaturas."],
      ["Oceanic Realms", "Reinos oceânicos exploráveis."],
      ["Tide", "Criaturas e itens das marés."],
      ["Realm RPG Seadwellers", "Raça aquática (Seadweller) com poderes de mar."],
      ["Aquaculture", "Pesca aprimorada: peixes novos, iscas e rede de pesca."],
      ["Unusual Fish", "Peixes de aquário exóticos."],
      ["Deeper Oceans", "Oceanos profundos e cavernas submersas."],
    ],
  },
  {
    icon: "🎒",
    name: "Inventário & Comodidades",
    note: "Bagagem, bolsos e conveniências",
    mods: [
      ["Sophisticated Backpacks", "Mochilas com módulos, melhorias, ferramentas e armazenamento (Alt+B)."],
      ["Traveler's Backpack", "Mochila de viajante com tanque, camas e ferramentas (Ctrl+B)."],
      ["Sophisticated Core", "Base das mochilas."],
      ["Mouse Tweaks", "Movimentação de itens com o mouse: shift-click contínuo, arrastar e soltar."],
      ["Curios", "Slots de curiosidade: anéis, amuletos, planadores, capacetes."],
      ["Accessories", "Acessórios equipáveis adicionais."],
      ["AppleSkin", "Mostra saturação e valores de comida na interface."],
      ["Corpse", "Deixe uma 'lápide' ao morrer e recupere itens (Shift+U)."],
      ["Boat Item View", "Veja o conteúdo do barco."],
      ["Item Physic Lite", "Itens no chão com física e animação."],
      ["Simple Hats", "Chapéus equipáveis cosméticos."],
      ["Mob grinding Utils?", "..."],
    ],
  },
  {
    icon: "🗺️",
    name: "Mapa & Interface",
    note: "Navegue, pesquise e registre",
    mods: [
      ["JourneyMap", "Mapa com minimapa, waypoints e registro de biomas (J para tela cheia)."],
      ["Waystones", "Pedras de viagem e teletransporte entre elas."],
      ["Nature's Compass", "Bússola que localiza qualquer bioma no mundo."],
      ["JEI", "Receitas e usos de todos os itens (R para usos, clique esquerdo para receita)."],
      ["WTHIT (Jade)", "Mostra o que você está olhando: nome, mod e informações de blocos/mobs."],
      ["Controlling", "Pesquise e configure keybinds facilmente."],
      ["Searchables", "Busca aprimorada nos menus."],
      ["Lootr", "Baús de loot pessoais: cada jogador vê seu próprio conteúdo."],
      ["Loot Integrations", "Adiciona loot de outros mods às estruturas existentes."],
      ["Structure Essentials", "Corrige e gerencia geração de estruturas."],
      ["CIT Resewn", "Texturas de item personalizadas (CIT) para itens."],
      ["Nether Portal Fix", "Conserta portais do Nether que não geram corretamente."],
    ],
  },
  {
    icon: "🎭",
    name: "Roleplay & Social",
    note: "NPCs, voz e comunidade",
    mods: [
      ["Minecraft Comes Alive (MCA)", "Substitui os villagers por NPCs humanoides com personalidade: conversas, casamentos, famílias, heranças, guardas e profissões. A vila ganha vida."],
      ["Villagers Plus", "Novas profissões de villager com itens e trabalhos exclusivos."],
      ["What Are They Up To (Watut)", "Veja o que outros jogadores estão fazendo: digitação, aberturas de GUI, animações e sons — tudo reativado."],
      ["Simple Voice Chat", "Voz proximidade: fale com quem está perto (Ctrl+V)."],
      ["Emotecraft", "Emotes animados com roda de emotes (F4)."],
      ["Touhou Little Maid", "Crie maid e mordomos que te ajudam em casa."],
      ["Two Players One Horse", "Dois jogadores na mesma montaria."],
      ["TL Skin Cape", "Skins e capas customizadas."],
      ["Starter Kit", "Kit inicial ao entrar no servidor."],
      ["FTB Teams & Quests", "Times, amizades e quests guiadas."],
    ],
  },
  {
    icon: "🎥",
    name: "Câmera & Movimento",
    note: "Fotografia, parkour e animações",
    mods: [
      ["Shoulder Surfing", "Câmera lateral estilo 3ª pessoa (over-the-shoulder) no F5, com distância ajustável."],
      ["Ok Zoomer", "Zoom suave na lente (Ctrl+Z)."],
      ["Camera", "Mod de câmera: panos, frames e posicionamento livre."],
      ["Camera Overhaul", "Câmera mais suave e dinâmica (inércia, distância)."],
      ["Traveloptics", "Efeitos de viagem: distorção, viagem em alta velocidade."],
      ["Not Enough Animations", "Animações realistas de primeira pessoa e corpo (configurado p/ nado de sereia)."],
      ["Player Animation Lib", "Base de animações de jogador."],
      ["Entity Model Features", "Modelos de entidades customizados via OptiFine."],
      ["Entity Texture Features", "Texturas de entidades e features de emissão."],
      ["Animation Overhaul", "Refaz as animações dos mobs."],
      ["ParCool", "Parkour: pulo de parede, deslizamento, esquiva, escalada (configurado)."],
      ["Sodium Dynamic Lights", "Iluminação dinâmica: tochas na mão iluminam."],
    ],
  },
  {
    icon: "🌅",
    name: "Gráficos & Performance",
    note: "Shaders, otimização e FPS",
    mods: [
      ["Oculus", "Motor de shaders (Iris para Forge) — Complementary Unbound ativado."],
      ["Embeddium", "Renderizador otimizado (fork do Sodium para Forge)."],
      ["Ferrite Core", "Reduz uso de memória."],
      ["ModernFix", "Corrige vazamentos e acelera o carregamento."],
      ["Memory Leak Fix", "Corrige vazamentos de memória comuns."],
      ["Saturn", "Otimiza atualizações de entidades."],
      ["Radium", "Otimiza o renderizador."],
      ["Entity Culling", "Não renderiza entidades fora da visão."],
      ["Cull Leaves", "Folhas opacas com menos polígonos."],
      ["ImmediatelyFast", "Acelera o desenho de HUDs e telas."],
      ["Dynamic FPS", "Reduz FPS quando o jogo está em segundo plano."],
      ["Fps Reducer 2", "Economiza FPS ocioso no menu."],
      ["Farsight", "Aumenta a distância de renderização de chunks sem travar."],
      ["Connectivity", "Melhora a conexão e reduz desconexões."],
      ["ServerCore", "Otimiza o servidor: spawn chunks, autosave, carregamento de entidades."],
      ["Chunky", "Pré-gera chunks em segundo plano no servidor."],
      ["Spark", "Perfilamento de desempenho do servidor."],
      ["Log Begone", "Limpa mensagens repetidas do log."],
      ["Fast Leaf Decay", "Folhas caem rapidamente após a derrubada de madeira."],
      ["Yeetus Experimentus", "Remove features experimentais indesejadas."],
      ["Advancement Plaques", "Placas de conquista bonitas ao desbloquear."],
      ["Achievement Optimizer", "Otimiza o sistema de conquistas."],
      ["ClickAdv", "Clique nas conquistas para ver detalhes."],
      ["Global Narration Toggle", "Alterna a narração globalmente."],
      ["No Chat Reports", "Desativa relatórios de chat."],
    ],
  },
  {
    icon: "🎵",
    name: "Som & Ambiente",
    note: "Imersão sonora",
    mods: [
      ["AmbientSounds", "Sons ambientes por bioma: pássaros, insetos, chuva, cavernas."],
      ["Sound Physics Remastered", "Física de som: reverberação, obstrução e eco realistas."],
      ["Melody", "Sons e músicas customizadas no menu."],
      ["Chimes", "Sinos de vento."],
    ],
  },
  {
    icon: "☁️",
    name: "O Aether",
    note: "O reino celestial",
    mods: [
      ["Aether", "A dimensão celestial clássica: ilhas flutuantes, montarias (falcões), chefes e equipamentos."],
      ["Deep Aether", "Expansão do Aether: biomas e conteúdos mais profundos."],
      ["Aether Delight", "Pratos do Aether."],
      ["Aether Villages", "Vilas no Aether."],
    ],
  },
  {
    icon: "⚙️",
    name: "Bibliotecas & APIs",
    note: "Suporte técnico dos mods (não desinstalar)",
    mods: [
      ["Architectury", "API multiplataforma (Fabric/Forge)."],
      ["GeckoLib / AzureLib", "Animações de entidades 3D."],
      ["KubeJS", "Scripts customizados do pack (comandos, IA, receitas)."],
      ["Patchouli", "Livros em jogo (manuais)."],
      ["Citadel", "API base do Alex's Mobs."],
      ["Curios", "Slots de equipamento."],
      ["Moonlight Lib", "API de recursos dinâmicos."],
      ["Resourceful Lib", "API utilitária."],
      ["TerraBlender", "API de biomas."],
      ["YUNG's API", "API das estruturas YUNG."],
      ["Pehkui", "API de escala."],
      ["LDLib", "API de GUI e receitas (usada pelo SDM Shop 2)."],
      ["Blueprint", "API de suporte."],
      ["Framework", "API de configuração de mods."],
      ["FTB Library", "Base dos mods FTB."],
      ["Connector", "Permite rodar mods Fabric no Forge."],
      ["Fabric API", "API Fabric (via Connector)."],
      ["Rhino", "Motor de scripts do KubeJS."],
      ["Puzzles Lib", "Utilidades."],
      ["SmartBrain Lib", "API de IA."],
      ["Cloth Config", "API de configuração."],
      ["Balm", "API de suporte."],
      ["Iceberg", "API de itens e efeitos."],
      ["CreativeCore", "API de animação."],
      ["Coroutil", "API utilitária."],
      ["Pandalib", "API de suporte."],
      ["Obscure API", "API de atributos."],
      ["Konkrete", "API de GUI do FancyMenu."],
      ["FancyMenu", "Menus customizados do pack."],
      ["Cupboard", "API utilitária."],
      ["Collective", "API utilitária."],
      ["Placebo", "API utilitária."],
      ["MidnightLib", "API utilitária."],
      ["BadPackets", "API de rede."],
      ["BlockUI", "API de GUI."],
    ],
  },
];

const updates = [
  ["Comando /villager", "Spawn instantâneo de villager MCA com a profissão escolhida: /villager guard, /villager librarian, etc. (requer OP). Sugestões aparecem no chat."],
  ["Profissões MCA", "As profissões do MCA incluem guard, archer, adventurer, mercenary, cultist, outlaw + todas as 13 vanilla. Use /villager para montar sua vila rápido."],
  ["What Are They Up To", "Watut reativado: veja quando alguém digita, abre GUI, animações e sons de outros jogadores."],
  ["Câmera no F5", "F5 agora alterna para a câmera lateral (Shoulder Surfing) em vez da 3ª pessoa centralizada. Ajuste com as setas."],
  ["Chuva e neve corrigidas", "Gráficos em Fancy + nuvens ativas: chuva/neve não aparecem mais dentro de casas ou debaixo d'água."],
  ["Shaders", "Complementary Unbound ativado (Oculus). Recarregue com F3+S."],
  ["Vampirism estável", "Integração JEI do Vampirism desativada para evitar o travamento no carregamento — alquimia continua disponível no jogo."],
  ["Economia", "Saldo inicial de 5 cobre + 1 ferro. Moedas dropam de mobs. Loja na tecla Open Shop (SDM Shop 2)."],
];

export function Mods() {
  return (
    <section className="mods" id="mods" aria-labelledby="mods-title">
      <div className="catalog-heading">
        <p className="section-kicker">WIKI DOS MODS</p>
        <h2 id="mods-title">Os mods do modpack Valtheria RP</h2>
        <p>
          Guia de todos os {categories.reduce((n, c) => n + c.mods.length, 0)}+ mods do pack, organizados por tema,
          com as novidades da última atualização no final.
        </p>
      </div>

      <div className="mods-grid">
        {categories.map((category) => (
          <article className="mod-card" key={category.name}>
            <header>
              <span className="mod-icon">{category.icon}</span>
              <div>
                <h3>{category.name}</h3>
                <p>{category.note}</p>
              </div>
            </header>
            <ul>
              {category.mods.map(([name, desc]) => (
                <li key={`${category.name}-${name}`}>
                  <strong>{name}</strong>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mods-updates">
        <p className="section-kicker">NOTAS DE ATUALIZAÇÃO</p>
        <h3>O que mudou no pack</h3>
        <ul>
          {updates.map(([title, desc]) => (
            <li key={title}>
              <strong>{title}</strong>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}