const apiKey = 'ece1cef5891f44c89405707897f60c20';
const baseURL = 'https://api.spoonacular.com';

// Fonction qui effectue une requête GET pour des recettes aléatoires
export async function getRandomRecipes(limit = 18, query = "") {
  try {
    const endpoint = '/recipes/random';
    const params = new URLSearchParams({
      number: limit,
      query: query,
      apiKey: apiKey,
    });

    const response = await fetch(`${baseURL}${endpoint}?${params}`);
    const data = await response.json();

    if (response.ok) {
      console.log("data", data);
      return data.recipes.map(recipe => ({
        name: recipe.title,
        image: recipe.image,
      }));
    } else {
      console.error("Erreur lors de la requête :", data);
      throw new Error("Erreur lors de la requête");
    }
  } catch (error) {
    console.error("Une erreur s'est produite", error);
    throw error;
  }
}