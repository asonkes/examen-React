const apiKey = 'ece1cef5891f44c89405707897f60c20';
const baseURL = 'https://api.spoonacular.com';

// Fonction qui effectue une requête GET pour des recettes aléatoires
export async function getRandomRecipes(limit = 18, query = "", id = "") {
  try {
    const endpoint = '/recipes/random';
    const params = new URLSearchParams({
      id: id,
      number: limit,
// Permet d'avoir les recettes les plus récentes de l'application...
      sort: 'created', 
      query: query,
      apiKey: apiKey,
    });

    const response = await fetch(`${baseURL}${endpoint}?${params}`);
    const data = await response.json();

    if (response.ok) {
      console.log("data", data);
      return data.recipes.map(recipe => ({
        id: recipe.id,
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



// Fonction qui effectue une requête GET pour les détails d'une recette spécifique
export async function getRecipeDetails(id) {
    try {
      const endpoint = `/recipes/${id}/information`;
      const params = new URLSearchParams({
        apiKey: apiKey,
      });
  
      const response = await fetch(`${baseURL}${endpoint}?${params}`);
      const data = await response.json();
  
      if (response.ok) {
        console.log("data", data);
        return {
          id: data.id,
          name: data.title,
          image: data.image
        };
      } else {
        console.error("Erreur lors de la requête :", data);
        throw new Error("Erreur lors de la requête");
      }
    } catch (error) {
      console.error("Une erreur s'est produite", error);
      throw error;
    }
  }