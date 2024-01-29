import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../../services/api";

export default function Recipes() {
  const { id } = useParams(); // Récupère l'ID de l'URL

  const [recipe, setRecipe] = useState();

  const fetchRecipeDetails = async (id) => {
    try {
      const data = await getRecipeDetails(id);
      setRecipe(data);
    } catch (error) {
      console.error('Erreur', error);
      // Gérer les erreurs ici
    } 
  };

  useEffect(() => {
      fetchRecipeDetails(id);
  }, [id]);

  console.log("Id de la recette", recipe);

  return (
    <div className="flex-fill container">
      <div className="card p-20 m-20">
        <p>{id}</p>
        
      </div>
    </div>
  );
}