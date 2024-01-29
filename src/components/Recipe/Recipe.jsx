import { useState } from "react";
import styles from "./Recipe.module.scss";
import { Link } from "react-router-dom";

export default function Recipe({title, image, id}) {

// Mise en place du "liked", et par défault il est en "default" puisque sans "couleur" = "noir"
    const [liked, setLiked] = useState(false);

// Et ici, au click, c'est l'inverse, oui puisqu'il change de couleur...
    function handleClick() {
        setLiked(!liked);
    }

    return (
        <div onClick={handleClick} className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={image} alt="Menu Recipe" />
            </div>
            <div className={`p-10 d-flex flex-column align-items-center justify-content-center ${styles.recipeTitle}`}>
                <h3 className="mt-55 mb-10">{ title }</h3>
                
{/** Ici, on a fait une condition ternaire sur l'icone, si c'est liké, alors la couleur change, ausinon, c'est faux, donc la couleur part */}
                <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
                <Link to={`/Pages/RecipesPage/Recipes/${id}`} >
                <button className="btn btn-primary mt-10">Discover the recipe</button>
                </Link>
            </div>
        </div>
    );
}