import projects, { tagColors, skills } from "./data.js";

const projectsGrid = document.querySelector("#proyectos-grid");

// Función para obtener color
function getTagColor(tag) {
  return tagColors[tag] || "bg-gray-500";
}

projects.forEach((project) => {
  // crear contenedor
  const card = document.createElement("div");
  card.className =
    "bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105";

  card.innerHTML = `
    <div class="p-6">
      <h4 class="text-xl font-bold text-white mb-2">${project.title}</h4>
      <p class="text-gray-400 text-sm mb-4">${project.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.tags
          .map(
            (tag) =>
              `<span class="${getTagColor(
                tag
              )} text-white text-xs font-semibold py-1 px-3 rounded-full">${tag}</span>`
          )
          .join("")}
      </div>
      <a href="${project.link}" target="_blank"
        class="text-sky-400 hover:text-sky-500 font-semibold flex items-center">
        Ver en GitHub
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    </div>
  `;

  projectsGrid.appendChild(card); //Agregar nueva card
});

//Tags
const habilidadesFlex = document.querySelector("#habilidades-flex");
skills.forEach((skill) => {
  const cardSkill = document.createElement("div");
  cardSkill.innerHTML = `<span class="${getTagColor(
    skill
  )} text-white font-bold py-2 px-4 rounded-full shadow-md transition-transform hover:scale-105">${skill}</span>`;
  habilidadesFlex.appendChild(cardSkill);
});
//Obtener la fecha
document.querySelector(".year-footer").textContent = new Date().getFullYear();
