
export function showLoader(container) {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.textContent = '⏳ Chargement des recettes...';

  container.innerHTML = '';
  container.appendChild(loader);
}
export function showLoader(container) {
  const loader = document.createElement('div');
  loader.className = 'loader';
  loader.textContent = '⏳ Chargement des recettes...';

  container.innerHTML = '';
  container.appendChild(loader);
}
export function hideLoader(container) {
  container.innerHTML = '';
}