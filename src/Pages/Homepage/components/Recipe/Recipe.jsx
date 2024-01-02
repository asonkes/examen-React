import { useState } from "react";
import styles from "./Recipe.module.scss";

export default function Recipe({title, image}) {

// Donc ici, on mettre en place "liked", et mettre que par défaut, il est faux, car par défault, le coeur est sans couleur...
    const [liked, setLiked] = useState(false);

// Et ici, au click, c'est l'inverse, oui puisqu'il change de couleur...
    function handleClick() {
        setLiked(!liked);
    }

    return (
        <div onClick={handleClick} className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={image} alt="Recette du menu" />
            </div>
            <div className={`p-10 d-flex flex-column align-items-center justify-content-center ${styles.recipeTitle}`}>
                <h3 className="mb-10">{ title }</h3>
{/** Ici, on a fait une condition ternaire, si c'est liké, alors la couleur change, ausinon, c'est faux, donc la couleur part */}
                <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
            </div>
        </div>
    );
}