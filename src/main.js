import { getAllRecipes } from './api/recipeProvider.js';
import { displayRecipes } from './ui/render.js';
import { showLoader, hideLoader } from './ui/loader.js';

const recipeList = document.querySelector('.recipe-list');
const searchInput = document.getElementById('search');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('recipe-modal');

let allRecipes = [];
let status = 'idle'; // idle | loading | success | error

async function init() {
  try {
    status = 'loading';
    showLoader(recipeList);

    allRecipes = await getAllRecipes();

    hideLoader(recipeList);
    status = 'success';

    displayRecipes(allRecipes, recipeList);

  } catch (error) {
    hideLoader(recipeList);
    status = 'error';
    recipeList.innerHTML = "<p>Erreur lors du chargement des recettes.</p>";
    console.error(error);
  }

  console.log("Status actuel :", status);
}

function filterRecipes(searchTerm) {
  const filtered = allRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  displayRecipes(filtered, recipeList);
}

// 🔎 Search dynamique
searchInput.addEventListener('input', (e) => {
  filterRecipes(e.target.value);
});

// ❌ Fermer Modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// 🚀 Lancement app
init();