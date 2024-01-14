const apiKey = 'ece1cef5891f44c89405707897f60c20';
const baseURL = 'https://api.spoonacular.com';

// Fonction qui effectue une requête GET pour des recettes aléatoires
export async function getRandomRecipes(limit, query = "") {
  try {
    const endpoint = '/recipes/random';
    const params = {
      number: Math.min(limit, 18),
      query,
    };

    const response = await fetch(`${baseURL}${endpoint}?apiKey=${apiKey}&${new URLSearchParams(params)}`);
    const data = await response.json();
    console.log("data", data)
    return data.recipes.map(recipe => ({
      name: recipe.title,
      image: recipe.image,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

