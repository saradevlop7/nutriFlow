import { getBadgeColor } from '../services/calorieService.js';
import { getFavorites, toggleFavorite } from '../services/storageService.js';

export function displayRecipes(recipes, container) {
  container.innerHTML = '';

  if (recipes.length === 0) {
    container.innerHTML = `
      <p style="text-align:center; font-weight:bold;">
        Oups ! Aucune recette ne correspond à votre recherche.
      </p>`;
    return;
  }

  const favorites = getFavorites();

  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    const badgeColor = getBadgeColor(recipe.caloriesPerServing);
    const isFav = favorites.includes(recipe.id);

    card.innerHTML = `
      <button class="fav-btn">${isFav ? '❤️' : '🤍'}</button>
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="info">
        <h3>${recipe.name}</h3>
      </div>
      <div class="calories ${badgeColor}">
        ${recipe.caloriesPerServing} KCAL
      </div>
    `;

    // ❤️ Favoris
    const favBtn = card.querySelector('.fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();    
      toggleFavorite(recipe.id);

      if (favBtn.textContent === '❤️') {
        favBtn.textContent = '🤍';
      } else {
        favBtn.textContent = '❤️';
      }
    });

    // 🟢 Ouvrir modal
    card.addEventListener('click', () => {
      openModal(recipe);
    });

    container.appendChild(card);
  });
}


// 🔵 Modal function
function openModal(recipe) {
  const modal = document.getElementById('recipe-modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <h2>${recipe.name}</h2>
    <img src="${recipe.image}" style="width:100%; border-radius:10px; margin:10px 0;" />

    <h3>Ingrédients :</h3>
    <ul>
      ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
    </ul>

    <h3>Instructions :</h3>
    <p>${recipe.instructions}</p>
  `;

  modal.classList.remove('hidden');
}