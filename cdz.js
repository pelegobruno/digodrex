const cdzData = [
    {
        name: "Seiya de Pégaso",
        img: "assets/images/seiya.jpg",
        desc: "O Cavaleiro de Bronze de Pégaso e protagonista.",
        strengths: "Velocidade, determinação",
        weaknesses: "Impulsivo",
        powers: "Meteoro de Pégaso, Cometa de Pégaso"
    },
    {
        name: "Shiryu de Dragão",
        img: "assets/images/shiryu.jpg",
        desc: "O Cavaleiro de Dragão, especialista em luta corpo a corpo.",
        strengths: "Força, resistência",
        weaknesses: "Sacrifica-se demais",
        powers: "Cólera do Dragão, Último Dragão"
    },
    {
        name: "Hyoga de Cisne",
        img: "assets/images/hyoga.jpg",
        desc: "Cavaleiro do Gelo, treinado na Sibéria.",
        strengths: "Controle sobre o gelo, estratégia",
        weaknesses: "Apego emocional",
        powers: "Pó de Diamante, Execução Aurora"
    }
];

const container = document.getElementById("cdz-container");

cdzData.forEach(character => {
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
