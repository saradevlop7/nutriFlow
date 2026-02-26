const FAVORITES_KEY = 'nutriflow-favorites';

export function getFavorites() {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function toggleFavorite(recipeId) {
  let favorites = getFavorites();
  if (favorites.includes(recipeId)) {
    favorites = favorites.filter(id => id !== recipeId);
  } else {
    favorites.push(recipeId);
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}