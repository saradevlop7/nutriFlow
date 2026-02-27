

export async function getAllRecipes() {
  try {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    return data.recipes;  
  } catch (error) {
    console.error('Erreur API:', error);
    return []; 
  }
}