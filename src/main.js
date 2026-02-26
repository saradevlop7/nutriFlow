import { getAllRecipes } from './api/recipeProvider.js';
import { displayRecipes } from './ui/render.js';
import { showLoader, hideLoader } from './ui/loader.js';

const recipeList = document.querySelector('.recipe-list');
const searchInput = document.getElementById('search');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('recipe-modal');

let allRecipes = [];

async function init() {
  try {
    showLoader(recipeList);

    allRecipes = await getAllRecipes();

    hideLoader(recipeList);

    displayRecipes(allRecipes, recipeList);

  } catch (error) {
    hideLoader(recipeList);
    recipeList.innerHTML = "<p>Erreur lors du chargement des recettes.</p>";
    console.error(error);
  }
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