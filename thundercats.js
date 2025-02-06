const thundercatsData = [
    {
        name: "Lion-O",
        img: "assets/images/lion-o.jpg",
        desc: "Líder dos ThunderCats e portador da Espada Justiceira.",
        strengths: "Força, liderança, velocidade",
        weaknesses: "Impulsivo, inexperiente",
        powers: "Espada Justiceira, Visão Além do Alcance"
    },
    {
        name: "Tygra",
        img: "assets/images/tygra.jpg",
        desc: "Guerreiro estratégico e mestre do chicote.",
        strengths: "Agilidade, invisibilidade",
        weaknesses: "Orgulhoso",
        powers: "Chicote de energia, capacidade de se camuflar"
    },
    {
        name: "Cheetara",
        img: "assets/images/cheetara.jpg",
        desc: "A ThunderCat mais veloz, especialista em combate.",
        strengths: "Super velocidade, reflexos incríveis",
        weaknesses: "Resistência limitada",
        powers: "Velocidade sobre-humana, clarividência"
    }
];

const container = document.getElementById("thundercats-container");

thundercatsData.forEach(character => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-front">
            <img src="${character.img}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>${character.desc}</p>
            <div class="stats">
                <span class="strong">Fortes: ${character.strengths}</span>
                <span class="weak">Fracos: ${character.weaknesses}</span>
            </div>
        </div>
        <div class="card-back">
            <h3>Poderes & Habilidades</h3>
            <p>${character.powers}</p>
        </div>
    `;

    container.appendChild(card);
});
