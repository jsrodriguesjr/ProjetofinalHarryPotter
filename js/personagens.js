fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(response => console.log(response))

JS:



const charactersContainer = document.getElementById("characters-container");

function obterDadosPersonagensHarryPotter() {
    const url = "https://hp-api.onrender.com/api/characters";

    // Fazer uma solicitação para a API para obter os dados dos personagens
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao obter os dados dos personagens.");
            }
            return response.json();
        })
        .then((dadosPersonagens) => {
            // Processar os dados dos personagens e criar elementos HTML para exibição
            dadosPersonagens.forEach((personagem) => {
                const characterCard = document.createElement("div");
                characterCard.className = "character-card";

                const characterImage = document.createElement("img");
                characterImage.src = personagem.image;
                characterImage.alt = personagem.name;

                const characterName = document.createElement("h2");
                characterName.textContent = personagem.name;

                const characterDetails = document.createElement("div");
                characterDetails.innerHTML =
                    `<p>Casa: ${personagem.house}</p>
                    <p>Varinha: ${personagem.wand}</p>
                    <p>Patrono: ${personagem.patronus}</p>
                    <p>Espécie: ${personagem.species}</p>`;

                // Adicionar os elementos criados ao contêiner na página
                characterCard.appendChild(characterImage);
                characterCard.appendChild(characterName);
                characterCard.appendChild(characterDetails);

                charactersContainer.appendChild(characterCard);
            });
        })
        .catch((erro) => {
            console.error(erro);
        });
}

// Chame a função para obter e exibir os dados dos personagens
obterDadosPersonagensHarryPotter();
