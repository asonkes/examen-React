import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../../services/api";
import recipes from './Recipes.module.scss';

export default function Recipes() {
  const { id } = useParams(); // Récupère l'ID de l'URL

  const [recipe, setRecipe] = useState();
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchRecipeDetails = async (id) => {
    try {
      const data = await getRecipeDetails(id);
      setRecipe(data);
      setIsLoaded(true)
    } catch (error) {
      console.error('Erreur', error);
      // Gérer les erreurs ici
    } 
  };

  useEffect(() => {
      fetchRecipeDetails(id);
  }, [id]);

  console.log('id de la Recette', recipe);

  if(isLoaded===true){
    return (
      <div className="flex-fill container">
        <div className="card p-20 m-20">
          <div className="d-flex flex-column align-items-center justify-content-center parentContainer2">
            <div className="container2">
            <h3 className="text-align-center m-20">{recipe.name}</h3>
            <div className="d-flex flex-column align-items-center">
               <img className={recipes.imageContainer} src={recipe.image} alt={recipe.title}></img>
               </div>
                  <h4 className="m-20 text-primary">Recipe</h4>
                  <p className="m-20">Recette{recipe.instructions}</p>
                  <h4 className="m-20 text-primary">Preparation Time</h4>
                  <p className="m-20">{recipe.readyInMinutes}</p>
               </div>
            <div> 
          </div>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div className="loading"></div>
    )
  }
}