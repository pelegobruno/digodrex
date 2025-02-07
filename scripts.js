function showTab(tabName) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(tabName).classList.remove('hidden');
}





/*digimon*/
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
        "category": "Gomamon Line (Joe)",
        "digimons": [
            { "name": "Pichimon", "level": "DigiTama", "type": "Slime", "img": "https://digimon.shadowsmith.com/img/pichimon.jpg", "atk": 15, "def": 10, "lp": 100, "desc": "Ovo do Gomamon." },
            { "name": "Bukamon", "level": "In-Training", "type": "Aquatic", "img": "https://digimon.shadowsmith.com/img/bukamon.jpg", "atk": 50, "def": 30, "lp": 250, "desc": "Forma bebê de Gomamon, adora nadar." },
            { "name": "Gomamon", "level": "Rookie", "type": "Sea Animal", "img": "https://digimon.shadowsmith.com/img/gomamon.jpg", "atk": 120, "def": 80, "lp": 800, "desc": "Brincalhão e corajoso, controla criaturas marinhas." },
            { "name": "Ikkakumon", "level": "Champion", "type": "Sea Beast", "img": "https://digimon.shadowsmith.com/img/ikkakumon.jpg", "atk": 200, "def": 160, "lp": 1600, "desc": "Feroz e poderoso, dispara chifres congelantes." },
            { "name": "Zudomon", "level": "Ultimate", "type": "Sea Beast", "img": "https://digimon.shadowsmith.com/img/zudomon.jpg", "atk": 320, "def": 280, "lp": 3000, "desc": "Um guerreiro marinho com um martelo indestrutível." },
            { "name": "Vikemon", "level": "Mega", "type": "Beast Man", "img": "https://digimon.shadowsmith.com/img/vikemon.jpg", "atk": 500, "def": 450, "lp": 4800, "desc": "Um viking dos mares, com poder avassalador no gelo." }
        ]
    },
    {
        "category": "Palmon Line (Mimi)",
        "digimons": [
            { "name": "Yuramon", "level": "In-Training", "type": "Plant", "img": "https://digimon.shadowsmith.com/img/yuramon.jpg", "atk": 50, "def": 30, "lp": 250, "desc": "Forma bebê de Palmon, libera esporos defensivos." },
            { "name": "Tanemon", "level": "DigiTama", "type": "Bulb", "img": "https://digimon.shadowsmith.com/img/tanemon.jpg", "atk": 25, "def": 20, "lp": 150, "desc": "Ovo do Palmon." },
            { "name": "Palmon", "level": "Rookie", "type": "Plant", "img": "https://digimon.shadowsmith.com/img/palmon.jpg", "atk": 100, "def": 70, "lp": 800, "desc": "Uma planta digimon que solta veneno e cresce rápido." },
            { "name": "Togemon", "level": "Champion", "type": "Cactus", "img": "https://digimon.shadowsmith.com/img/togemon.jpg", "atk": 180, "def": 140, "lp": 1600, "desc": "Um cacto gigante que usa socos poderosos." },
            { "name": "Lillymon", "level": "Ultimate", "type": "Fairy", "img": "https://digimon.shadowsmith.com/img/lillymon.jpg", "atk": 280, "def": 220, "lp": 2700, "desc": "Uma fada digimon com poderes da natureza e cura." },
            { "name": "Rosemon", "level": "Mega", "type": "Fairy", "img": "https://digimon.shadowsmith.com/img/rosemon.jpg", "atk": 450, "def": 380, "lp": 4200, "desc": "A rainha das flores, seus ataques encantam e destroem." }
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
            { "name": "Seraphimon", "level": "Mega", "type": "Seraph", "img": "https://digimon.shadowsmith.com/img/seraphimon.jpg", "atk": 500, "def": 450, "lp": 4800, "desc": "A forma angelical suprema, líder dos anjos Digimons." },
            {
                "name": "Pegasusmon",
                "level": "Armor",
                "type": "Holy Beast",
                "img": "https://i.pinimg.com/736x/50/1f/22/501f2241bfc62b10a2ae9b761b571273.jpg",
                "atk": 340,
                "def": 290,
                "lp": 3100,
                "desc": "A evolução de Patamon com a Digimental da Esperança. Um Digimon sagrado que voa velozmente."
            }
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
            { name: "Ophanimon", level: "Mega", type: "Holy Angel", img: "https://digimon.net/cimages/digimon/ofanimon_x.jpg", atk: 500, def: 450, lp: 4800, desc: "A guardiã sagrada suprema." },{
                "name": "Nefertimon",
                "level": "Armor",
                "type": "Holy Beast",
                "img": "https://i.pinimg.com/736x/c9/d0/f8/c9d0f8bed3011bc3accfacf20953efae.jpg",
                "atk": 300,
                "def": 250,
                "lp": 2800,
                "desc": "A evolução com a Armadura da Luz de Gatomon, Nefertimon tem poderosas habilidades sagradas."
            }
        ]
    },
    {
        category: "Veemon Line (Davis)",
        digimons: [
            { name: "Chibomon", level: "DigiTama", type: "Slime", img: "https://digimon.shadowsmith.com/img/chibomon.jpg", atk: 20, def: 10, lp: 100, desc: "Ovo do Veemon." },
            { name: "DemiVeemon", level: "In-Training", type: "Lesser", img: "https://digimon.shadowsmith.com/img/demiveemon.jpg", atk: 50, def: 30, lp: 200, desc: "Forma bebê de Veemon." },
            { name: "Veemon", level: "Rookie", type: "Dragon", img: "https://digimon.shadowsmith.com/img/veemon.jpg", atk: 130, def: 100, lp: 900, desc: "Digimon azul e energético." },
            { name: "ExVeemon", level: "Champion", type: "Dragon", img: "https://digimon.shadowsmith.com/img/exveemon.jpg", atk: 220, def: 160, lp: 1700, desc: "Uma versão mais forte e alada de Veemon." },
            { name: "Paildramon", level: "Ultimate", type: "Dragon", img: "https://digimon.shadowsmith.com/img/paildramon.jpg", atk: 350, def: 270, lp: 3200, desc: "Fusão de ExVeemon e Stingmon, ágil e letal." },
            {
                "name": "Raidramon",
                "level": "Armor",
                "type": "Beast",
                "img": "https://i.pinimg.com/736x/7b/0f/6c/7b0f6c502a56aaae27fa7300e5405e63.jpg",
                "atk": 350,
                "def": 270,
                "lp": 3000,
                "desc": "Uma evolução de V-mon usando a Digimental da Amizade. Um veloz e eletrizante Digimon."
            },{
                "name": "Magnamon",
                "level": "Armor",
                "type": "Holy Knight",
                "img": "https://i.pinimg.com/564x/ea/6b/df/ea6bdf41c962932a8c1189cd6a47b18f.jpg",
                "atk": 600,
                "def": 500,
                "lp": 5000,
                "desc": "Uma poderosa evolução da Digimental do Milagre. Um dos Cavaleiros Reais."
            },{ name: "Imperialdramon", level: "Mega", type: "Dragon", img: "https://digimon.shadowsmith.com/img/imperialdramon.jpg", atk: 600, def: 450, lp: 5000, desc: "Uma besta dracônica com poderes imensos." }
        ]
    },
    {
        category: "Hawkmon Line (Yolei)",
        digimons: [
            { name: "Pururumon", level: "DigiTama", type: "Slime", img: "https://digimon.shadowsmith.com/img/pururumon.jpg", atk: 15, def: 10, lp: 100, desc: "Ovo de Hawkmon." },
            { name: "Poromon", level: "In-Training", type: "Lesser", img: "https://digimon.shadowsmith.com/img/poromon.jpg", atk: 45, def: 30, lp: 180, desc: "Forma bebê de Hawkmon." },
            { name: "Hawkmon", level: "Rookie", type: "Bird", img: "https://digimon.shadowsmith.com/img/hawkmon.jpg", atk: 110, def: 80, lp: 850, desc: "Um falcão corajoso e leal." },
            { name: "Aquilamon", level: "Champion", type: "Giant Bird", img: "https://i.pinimg.com/736x/f1/43/94/f14394c54ce34137506675ebfdfb7182.jpg", atk: 200, def: 150, lp: 1600, desc: "Um pássaro ágil e forte." },
            { name: "Silphymon", level: "Ultimate", type: "Beast Man", img: "https://digimon.shadowsmith.com/img/silphymon.jpg", atk: 340, def: 280, lp: 3000, desc: "Fusão de Aquilamon e Gatomon, ágil e poderoso." },
            { name: "Valkyrimon", level: "Mega", type: "Warrior", img: "https://digimon.shadowsmith.com/img/valkyrimon.jpg", atk: 500, def: 400, lp: 4700, desc: "Um guerreiro alado, veloz como o vento." },
            {
                "name": "Shurimon",
                "level": "Armor",
                "type": "Mutant",
                "img": "https://i.pinimg.com/564x/95/a9/59/95a9591c7ee4395dd1c5d4d6df09f294.jpg",
                "atk": 320,
                "def": 280,
                "lp": 2900,
                "desc": "Uma evolução de Hawkmon usando a Digimental da Sinceridade. Mestre no uso de shurikens."
            }
            
        ]
    },
    {
        category: "Armadillomon Line (Cody)",
        digimons: [
            { name: "Tsubumon", level: "DigiTama", type: "Slime", img: "https://digimon.shadowsmith.com/img/tsubumon.jpg", atk: 15, def: 10, lp: 100, desc: "Ovo de Armadillomon." },
            { name: "Upamon", level: "In-Training", type: "Lesser", img: "https://digimon.shadowsmith.com/img/upamon.jpg", atk: 40, def: 30, lp: 180, desc: "Forma bebê de Armadillomon." },
            { name: "Armadillomon", level: "Rookie", type: "Armor", img: "https://digimon.shadowsmith.com/img/armadillomon.jpg", atk: 120, def: 130, lp: 950, desc: "Um Digimon resistente com carapaça forte." },
            { name: "Ankylomon", level: "Champion", type: "Dinosaur", img: "https://digimon.shadowsmith.com/img/ankylomon.jpg", atk: 200, def: 200, lp: 1800, desc: "Um dinossauro blindado e poderoso." },
            { name: "Shakkoumon", level: "Ultimate", type: "Mutant", img: "https://digimon.shadowsmith.com/img/shakkoumon.jpg", atk: 330, def: 320, lp: 3200, desc: "Fusão de Ankylomon e Angemon, mestre da justiça." },
            { name: "Vikemon", level: "Mega", type: "Beast", img: "https://digimon.shadowsmith.com/img/vikemon.jpg", atk: 520, def: 450, lp: 5000, desc: "Um viking gigante com força destrutiva." }
        ]
    },
    {
        category: "Wormmon Line (Ken)",
        digimons: [
            { name: "Leafmon", level: "DigiTama", type: "Slime", img: "https://digimon.shadowsmith.com/img/leafmon.jpg", atk: 15, def: 10, lp: 100, desc: "Ovo de Wormmon." },
            { name: "Minomon", level: "In-Training", type: "Lesser", img: "https://digimon.shadowsmith.com/img/minomon.jpg", atk: 45, def: 30, lp: 180, desc: "Forma bebê de Wormmon." },
            { name: "Wormmon", level: "Rookie", type: "Insectoid", img: "https://digimon.shadowsmith.com/img/wormmon.jpg", atk: 100, def: 90, lp: 850, desc: "Um Digimon tímido, mas leal e forte." },
            { name: "Stingmon", level: "Champion", type: "Insectoid", img: "https://digimon.shadowsmith.com/img/stingmon.jpg", atk: 210, def: 170, lp: 1600, desc: "Um guerreiro ágil e mortal com lâminas afiadas." },
            { name: "Dinobeemon", level: "Ultimate", type: "Insectoid Dragon", img: "https://digimon.shadowsmith.com/img/dinobeemon.jpg", atk: 340, def: 280, lp: 3100, desc: "Fusão de Stingmon e ExVeemon, feroz e implacável." },
            { name: "GranKuwagamon", level: "Mega", type: "Insectoid", img: "https://digimon.shadowsmith.com/img/grankuwagamon.jpg", atk: 520, def: 400, lp: 5000, desc: "Um besouro monstro com força esmagadora." }
        ]
    },
    {
        "category": "Guilmon Line (Takato)",
        "digimons": [
            { "name": "Jyarimon", "level": "DigiTama", "type": "Slime", "img": "https://i.pinimg.com/736x/5e/9e/5a/5e9e5a0c6e6d7dac1dfcabcdbb96ef32.jpg", "atk": 25, "def": 15, "lp": 120, "desc": "Ovo do Guilmon." },
            { "name": "Gigimon", "level": "In-Training", "type": "Lesser", "img": "https://i.pinimg.com/736x/ab/51/b3/ab51b3f34a6dff00baedef1cae9a45f0.jpg", "atk": 55, "def": 35, "lp": 250, "desc": "Forma bebê de Guilmon, libera fogo pela boca." },
            { "name": "Guilmon", "level": "Rookie", "type": "Reptile", "img": "https://i.pinimg.com/736x/d5/be/c0/d5bec01947b6afc6d0dd7853c6a07505.jpg", "atk": 130, "def": 100, "lp": 900, "desc": "Um Digimon dinossauro criado por Takato." },
            { "name": "Growlmon", "level": "Champion", "type": "Dragon", "img": "https://i.pinimg.com/736x/69/a7/15/69a715f81d4b38ff31929dc8fa2721b2.jpg", "atk": 220, "def": 160, "lp": 1700, "desc": "Dragão de fogo com lâminas nos braços." },
            { "name": "WarGrowlmon", "level": "Ultimate", "type": "Cyborg", "img": "https://i.pinimg.com/736x/4b/94/97/4b9497b5ad14346944a7ba1ef1bd2fc6.jpg", "atk": 350, "def": 270, "lp": 3200, "desc": "Cyborg com canhões de plasma nos braços." },
            { "name": "Gallantmon", "level": "Mega", "type": "Holy Knight", "img": "https://i.pinimg.com/736x/26/f8/62/26f862b4df2d1491beb65333dac14751.jpg", "atk": 600, "def": 450, "lp": 5000, "desc": "O Cavaleiro Sagrado da Justiça." }
        ]
    },
    {
        "category": "Renamon Line (Rika)",
        "digimons": [
            { "name": "Relemon", "level": "DigiTama", "type": "Slime", "img": "https://tse4.mm.bing.net/th?id=OIP.iSBzInxORTC1VkYgNm3i4wHaHa&w=474&h=474&c=7", "atk": 20, "def": 10, "lp": 100, "desc": "Ovo da Renamon." },
            { "name": "Viximon", "level": "In-Training", "type": "Beast", "img": "https://i.pinimg.com/474x/cd/1d/98/cd1d98d59b7d950db1ec045262ca9e08.jpg", "atk": 50, "def": 30, "lp": 250, "desc": "Forma bebê de Renamon, extremamente ágil." },
            { "name": "Renamon", "level": "Rookie", "type": "Beast Man", "img": "https://i.pinimg.com/736x/36/36/f1/3636f1ff12e3cfff550207178c994cb6.jpg", "atk": 140, "def": 90, "lp": 900, "desc": "Uma guerreira ágil e inteligente." },
            { "name": "Kyubimon", "level": "Champion", "type": "Mythical Beast", "img": "https://tse3.mm.bing.net/th?id=OIP.jXty-W2Zsc46A6VKJGgi3AHaGX&w=407&h=407&c=7", "atk": 230, "def": 160, "lp": 1800, "desc": "Raposa de nove caudas com fogo azul." },
            { "name": "Taomon", "level": "Ultimate", "type": "Wizard", "img": "https://i.pinimg.com/736x/5c/ea/bf/5ceabf7643c0a5e1c05ea4ac96d52eef.jpg", "atk": 340, "def": 270, "lp": 3200, "desc": "Maga sábia com poderes místicos." },
            { "name": "Sakuyamon", "level": "Mega", "type": "Priestess", "img": "https://i.pinimg.com/736x/94/d7/e2/94d7e2d82e3a96f33f0c78c0112d4f50.jpg", "atk": 550, "def": 400, "lp": 5000, "desc": "Sacerdotisa sagrada com poderes divinos." }
        ]
    },
    {
        "category": "Terriermon Line (Henry)",
        "digimons": [
            { "name": "Gummymon", "level": "DigiTama", "type": "Slime", "img": "https://digimon.shadowsmith.com/img/gummymon.jpg", "atk": 20, "def": 10, "lp": 100, "desc": "Ovo do Terriermon." },
            { "name": "Gummymon", "level": "In-Training", "type": "Lesser", "img": "https://digimon.shadowsmith.com/img/gummymon.jpg", "atk": 50, "def": 30, "lp": 250, "desc": "Pequeno e brincalhão, libera bolhas pegajosas." },
            { "name": "Terriermon", "level": "Rookie", "type": "Beast", "img": "https://digimon.shadowsmith.com/img/terriermon.jpg", "atk": 120, "def": 100, "lp": 850, "desc": "Pequeno Digimon de orelhas grandes e poderosas." },
            { "name": "Gargomon", "level": "Champion", "type": "Cyborg", "img": "https://digimon.shadowsmith.com/img/gargomon.jpg", "atk": 230, "def": 170, "lp": 1800, "desc": "Cyborg com metralhadoras nos braços." },
            { "name": "Rapidmon", "level": "Ultimate", "type": "Cyborg", "img": "https://digimon.shadowsmith.com/img/rapidmon.jpg", "atk": 350, "def": 280, "lp": 3200, "desc": "Cavaleiro ágil com armadura dourada." },
            { "name": "MegaGargomon", "level": "Mega", "type": "Cyborg", "img": "https://i.pinimg.com/236x/86/8f/23/868f239b0a587b1847d96ace68493310.jpg", "atk": 600, "def": 500, "lp": 5200, "desc": "Robô gigante com poder de destruição massivo." }
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




/*Treinadores de digimon*/
