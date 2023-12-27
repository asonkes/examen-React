import styles from "./Recipe.module.scss";
import recipe from "../assets/images/recette.webp";


export default function Recipe() {
    return (
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={recipe} alt="Recette du menu" />
            </div>
            <div className={`p-10 d-flex align-items-center justify-content-center ${styles.recipeTitle}`}>
                <h3>Filet de Saumon aux asperges</h3>
            </div>
        </div>
    );
}