import styles from "./Content.module.scss";
import Recipe from "./Recipe";
/**
 * Import nommé, donc on a met le nom de l'import dans des accolades.
 */
import { data } from "../data/recipes"

export default function Content() {
  const recipes = data;

    return (
        <div className="flex-fill container">
           <h1 className="m-20 p-10 justify-content-center">Découvrez nos nouvelles recettes</h1>
           <div className= {`card p-20 mb-20 ${styles.contentCard}`}>
              <div className= {`m-10 ${styles.grid}`}>
                {recipes.map((r) => (
                <Recipe title={ r.title } image={ r.image} />
                ))}
              </div>
           </div>
    </div>
    );
}