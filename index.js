let pDescription = document.querySelector(".pDescription");
const secCardsPages = document.getElementById("secCardsPages");

// Componente card e seus dados
const callCardRespective = ({ title, description, image, link }) => {
  const cardOfProjects = document.createElement("section");
  cardOfProjects.classList.add("cardOfProjects");
  cardOfProjects.style.backgroundImage = `url('${image}')`;

  cardOfProjects.innerHTML = `
    <div class="divTitleProject">
      <h2>${title}</h2>
    </div>
    <div class="divDescription">
      <p>${description}</p>
    </div>
  `;

  // Quando clicar no card → abre o link
  cardOfProjects.addEventListener("click", () => {
    window.open(link, "_blank"); // "_blank" abre em nova aba
  });

  return cardOfProjects;
};

// Lista de projetos
const projects = [
  {
    title: "Amigo secreto",
    description:
      "Crie uma pequena lista de nomes e faça um sorteio para descobrir seu amigo secreto",
    image: "image/presentationImage/secretFriend.png",
    link: "ChallengeSecretFriend/challengeSecretFriend.html"
  },
  {
    title: "Pokedex dinâmica - Em desenvolvimento",
    description: "Veja detalhes do pokemon, compare, favorite e muito mais",
    image: "image/presentationImage/dynamicPokeApi.png",
    link: "https://daviddevfull.github.io/DynamicPokedexAPI/"
  },
];

// Cria e adiciona os cards
projects.forEach((project) => {
  secCardsPages.appendChild(callCardRespective(project));
});


// Efeito máquina de escrever

const titleInitialPage = "🎨 Front-End Challenges 🧠";
const InitialDescription =
  "Este projeto reúne os desafios do curso de Front-End feitos durante o percuso das aulas. Aqui você encontrará experiências práticas, cada uma com foco em diferentes habilidades do desenvolvimento web.";

function effectTypewriter(text, tag, time) {
  const lyrics = text.split("");

  // Limpa antes de começar
  pDescription.textContent = "";

  // Efeito usando forEach
  lyrics.forEach((letra, i) => {
    setTimeout(() => {
      tag.textContent += letra;
    }, time * i); // Tempo de atraso por letra
  });
}

effectTypewriter(
  titleInitialPage,
  document.querySelector(".headerTitlePage h1"),
  100
);
effectTypewriter(InitialDescription, pDescription, 50);
