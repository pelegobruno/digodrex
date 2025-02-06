const digimonData = [
    {
        category: "Agumon Line (Tai)",
        digimons: [
            { name: "Botamon", level: "DigiTama", type: "Slime", img: "https://digimon.shadowsmith.com/img/botamon.jpg", atk: 20, def: 10, lp: 100, desc: "Ovo do Agumon." },
            { name: "Koromon", level: "In-Training", type: "Slime", img: "https://digimon.shadowsmith.com/img/koromon.jpg", atk: 50, def: 30, lp: 200, desc: "Forma bebê de Agumon." },
            { name: "Agumon", level: "Rookie", type: "Reptile", img: "https://digimon.shadowsmith.com/img/agumon.jpg", atk: 120, def: 90, lp: 800, desc: "Pequeno e corajoso, líder nato." },
            { name: "Greymon", level: "Champion", type: "Dinosaur", img: "https://digimon.shadowsmith.com/img/greymon.jpg", atk: 200, def: 150, lp: 1600, desc: "Dinossauro com ataques de fogo." },
            { name: "MetalGreymon", level: "Ultimate", type: "Cyborg", img: "https://digimon.shadowsmith.com/img/metalgreymon.jpg", atk: 300, def: 250, lp: 2800, desc: "Combinação de força e tecnologia." },
            { name: "WarGreymon", level: "Mega", type: "Dragon Warrior", img: "https://digimon.shadowsmith.com/img/wargreymon.jpg", atk: 500, def: 400, lp: 4500, desc: "Guerreiro lendário com ataques devastadores." }
        ]
    },
    {
        category: "Gabumon Line (Matt)",
        digimons: [
            { name: "Punimon", level: "DigiTama", type: "Slime", img: "https://digimon.shadowsmith.com/img/punimon.jpg", atk: 20, def: 15, lp: 120, desc: "Ovo do Gabumon." },
            { name: "Tsunomon", level: "In-Training", type: "Lesser", img: "https://digimon.shadowsmith.com/img/tsunomon.jpg", atk: 55, def: 35, lp: 250, desc: "Forma bebê de Gabumon." },
            { name: "Gabumon", level: "Rookie", type: "Reptile", img: "https://digimon.shadowsmith.com/img/gabumon.jpg", atk: 110, def: 95, lp: 750, desc: "Tímido, mas leal." },
            { name: "Garurumon", level: "Champion", type: "Beast", img: "https://digimon.shadowsmith.com/img/garurumon.jpg", atk: 190, def: 140, lp: 1500, desc: "Lobo veloz com ataques gélidos." },
            { name: "WereGarurumon", level: "Ultimate", type: "Beast Man", img: "https://digimon.shadowsmith.com/img/weregarurumon.jpg", atk: 290, def: 220, lp: 2700, desc: "Guerreiro ágil e mortal." },
            { name: "MetalGarurumon", level: "Mega", type: "Cyborg", img: "https://digimon.shadowsmith.com/img/metalgarurumon.jpg", atk: 480, def: 390, lp: 4400, desc: "Máquina de batalha fria e calculista." }
        ]
    },
    {
        category: "Tentomon Line (Izzy)",
        digimons: [
            { name: "Pabumon", level: "DigiTama", type: "Microbe", img: "https://digimon.shadowsmith.com/img/pabumon.jpg", atk: 20, def: 10, lp: 100, desc: "Ovo do Tentomon." },
            { name: "Motimon", level: "In-Training", type: "Microbe", img: "https://digimon.shadowsmith.com/img/motimon.jpg", atk: 50, def: 30, lp: 250, desc: "Forma bebê de Tentomon." },
            { name: "Tentomon", level: "Rookie", type: "Insectoid", img: "https://digimon.shadowsmith.com/img/tentomon.jpg", atk: 110, def: 85, lp: 750, desc: "Um besouro elétrico e esperto." },
            { name: "Kabuterimon", level: "Champion", type: "Insectoid", img: "https://digimon.shadowsmith.com/img/kabuterimon.jpg", atk: 220, def: 180, lp: 1600, desc: "Um inseto gigante com chifres elétricos." },
            { name: "MegaKabuterimon", level: "Ultimate", type: "Insectoid", img: "https://digimon.shadowsmith.com/img/megakabuterimon.jpg", atk: 320, def: 270, lp: 3000, desc: "Uma versão maior e mais poderosa de Kabuterimon." },
            { name: "HerculesKabuterimon", level: "Mega", type: "Insectoid", img: "https://digimon.shadowsmith.com/img/herculeskabuterimon.jpg", atk: 500, def: 400, lp: 4500, desc: "O rei dos insetos Digimons, muito resistente." }
        ]
    },
    {
        category: "Biyomon Line (Sora)",
        digimons: [
            { name: "Nyokimon", level: "DigiTama", type: "Seed", img: "https://digimon.shadowsmith.com/img/nyokimon.jpg", atk: 20, def: 15, lp: 120, desc: "Ovo de Biyomon." },
            { name: "Yokomon", level: "In-Training", type: "Small Plant", img: "https://digimon.shadowsmith.com/img/yokomon.jpg", atk: 55, def: 35, lp: 250, desc: "Pequena planta animada, sempre curiosa." },
            { name: "Biyomon", level: "Rookie", type: "Bird", img: "https://digimon.shadowsmith.com/img/biyomon.jpg", atk: 100, def: 80, lp: 800, desc: "Um pássaro rosa que respira fogo." },
            { name: "Birdramon", level: "Champion", type: "Giant Bird", img: "https://digimon.shadowsmith.com/img/birdramon.jpg", atk: 200, def: 130, lp: 1600, desc: "Uma ave flamejante que protege seus amigos." },
            { name: "Garudamon", level: "Ultimate", type: "Bird Warrior", img: "https://digimon.shadowsmith.com/img/garudamon.jpg", atk: 320, def: 250, lp: 3000, desc: "Um guerreiro alado com força incrível." },
            { name: "Phoenixmon", level: "Mega", type: "Holy Bird", img: "https://digimon.shadowsmith.com/img/phoenixmon.jpg", atk: 500, def: 400, lp: 4500, desc: "O lendário pássaro de fogo sagrado." }
        ]
    },
    {
        category: "Palmon Line (Mimi)",
        digimons: [
            { name: "Tanemon", level: "DigiTama", type: "Bulb", img: "https://digimon.shadowsmith.com/img/tanemon.jpg", atk: 25, def: 20, lp: 150, desc: "Ovo de Palmon." },
            { name: "Palmon", level: "Rookie", type: "Plant", img: "https://digimon.shadowsmith.com/img/palmon.jpg", atk: 100, def: 70, lp: 800, desc: "Uma planta digimon que solta veneno." },
            { name: "Togemon", level: "Champion", type: "Cactus", img: "https://digimon.shadowsmith.com/img/togemon.jpg", atk: 180, def: 140, lp: 1600, desc: "Um cacto lutador que usa socos poderosos." },
            { name: "Lillymon", level: "Ultimate", type: "Fairy", img: "https://digimon.shadowsmith.com/img/lillymon.jpg", atk: 280, def: 220, lp: 2700, desc: "Uma fada digimon com poderes da natureza." },
            { name: "Rosemon", level: "Mega", type: "Fairy", img: "https://digimon.shadowsmith.com/img/rosemon.jpg", atk: 450, def: 380, lp: 4200, desc: "A rainha das flores com ataques devastadores." }
        ]
    },
    {
        "category": "Patamon Line (T.K.)",
        "digimons": [
            { "name": "Poyomon", "level": "DigiTama", "type": "Slime", "img": "https://digimon.shadowsmith.com/img/poyomon.jpg", "atk": 15, "def": 10, "lp": 100, "desc": "Ovo do Patamon." },
            { "name": "Tokomon", "level": "In-Training", "type": "Mini Mammal", "img": "https://digimon.shadowsmith.com/img/tokomon.jpg", "atk": 50, "def": 30, "lp": 250, "desc": "Forma bebê de Patamon." },
            { "name": "Patamon", "level": "Rookie", "type": "Mammal", "img": "https://digimon.shadowsmith.com/img/patamon.jpg", "atk": 100, "def": 80, "lp": 800, "desc": "Um pequeno digimon voador cheio de energia." },
            { "name": "Angemon", "level": "Champion", "type": "Angel", "img": "https://digimon.shadowsmith.com/img/angemon.jpg", "atk": 200, "def": 150, "lp": 1600, "desc": "Um anjo guardião com poderes sagrados." },
            { "name": "MagnaAngemon", "level": "Ultimate", "type": "Angel", "img": "https://digimon.shadowsmith.com/img/magnaangemon.jpg", "atk": 320, "def": 270, "lp": 3000, "desc": "Guardião celestial com espada sagrada." },
            { "name": "Seraphimon", "level": "Mega", "type": "Seraph", "img": "https://digimon.shadowsmith.com/img/seraphimon.jpg", "atk": 500, "def": 450, "lp": 4800, "desc": "A forma angelical suprema, líder dos anjos Digimons." }
        ]
    },
    {
        category: "Gatomon Line (Kari)",
        digimons: [
            { name: "YukimiBotamon", level: "DigiTama", type: "Snowball", img: "https://digimon.shadowsmith.com/img/yukimibotamon.jpg", atk: 15, def: 10, lp: 100, desc: "Ovo de Gatomon." },
            { name: "Nyaromon", level: "In-Training", type: "Miniature", img: "https://digimon.shadowsmith.com/img/nyaromon.jpg", atk: 50, def: 30, lp: 250, desc: "Pequeno e brincalhão, sempre feliz." },
            { name: "Salamon", level: "Rookie", type: "Holy Beast", img: "https://digimon.shadowsmith.com/img/salamon.jpg", atk: 110, def: 85, lp: 750, desc: "Parece inofensivo, mas tem poderes sagrados." },
            { name: "Gatomon", level: "Champion", type: "Holy Beast", img: "https://digimon.shadowsmith.com/img/gatomon.jpg", atk: 200, def: 150, lp: 1600, desc: "Um felino rápido e feroz com luvas poderosas." },
            { name: "Angewomon", level: "Ultimate", type: "Angel", img: "https://digimon.shadowsmith.com/img/angewomon.jpg", atk: 320, def: 270, lp: 3000, desc: "Um anjo poderoso com ataques divinos." },
            { name: "Ophanimon", level: "Mega", type: "Holy Angel", img: "https://digimon.net/cimages/digimon/ofanimon_x.jpg", atk: 500, def: 450, lp: 4800, desc: "A guardiã sagrada suprema." }
        ]
    }
];

// Renderizar os Digimons no HTML
const container = document.getElementById('digimon-container');

digimonData.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    categoryDiv.innerHTML = `<h2>${category.category}</h2>`;

    const digimonContainer = document.createElement('div');
    digimonContainer.className = 'digimon-container';

    category.digimons.forEach(digimon => {
        const card = document.createElement('div');
        const levelClass = digimon.level.toLowerCase().replace(' ', '-');
        card.className = `digimon-card ${levelClass}`;
        card.innerHTML = `
            <img src="${digimon.img}" alt="${digimon.name}">
            <h3>${digimon.name}</h3>
            <p class="desc">${digimon.desc}</p>
            <div class="stats">
                <span class="atk">ATK: ${digimon.atk}</span>
                <span>DEF: ${digimon.def}</span>
                <span class="lp">LP: ${digimon.lp}</span>
            </div>
        `;
        digimonContainer.appendChild(card);
    });

    categoryDiv.appendChild(digimonContainer);
    container.appendChild(categoryDiv);
});
