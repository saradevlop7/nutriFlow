// src/ui/loader.js

export function showLoader(container) {
  container.innerHTML = '<div class="loader">Chargement des recettes...</div>';
}

export function hideLoader(container) {
  container.innerHTML = '';
}