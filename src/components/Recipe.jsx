import styles from "./Recipe.module.scss";

export default function Recipe({title, image}) {
    return (
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={image} alt="Recette du menu" />
            </div>
            <div className={`p-10 d-flex align-items-center justify-content-center ${styles.recipeTitle}`}>
                <h3>{ title }</h3>
            </div>
        </div>
    );
}