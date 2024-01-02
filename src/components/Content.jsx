import styles from "./Content.module.scss";
import Recipe from "./Recipe";
/**
 * Import nommé, donc on a met le nom de l'import dans des accolades.
 */
import { data } from "../data/recipes"
import { useState } from "react";

export default function Content() {
  const recipes = data;
  const [filter, setFilter] = useState('');

  function handleInput(e) {
   const filter = e.target.value;

   // trim() ==> permet de pas prendre en compte si espace au début et après du "nom"
   // toLowerCase() ==> pour que se soit en lettres minuscules et donc on ne prend pas en compte les lettres majuscules.
   setFilter(filter.trim().toLowerCase());
  }

    return (
        <div className="flex-fill container">
           <h1 className="m-20 p-10 justify-content-center">Découvrez nos nouvelles recettes</h1>
    
           <div className= {`card p-20 m-20 ${styles.contentCard}`}>

               <div className={`d-flex flex-row justify-content-center align-items-center`}>
                   <i className="fa-solid fa-magnifying-glass"></i>
                   <input onInput={handleInput} className={`m-10 p-10 ${styles.contentSearch}`} type="text" placeholder="Rechercher" />
              </div>

              <div className= {`m-10 ${styles.grid}`}>
               {/** Et donc on va ici filter la liste des recettes... */}
               {/** Et on utilise "startsWidth" pour s'assurer que c'est ce qui commence dans les données stockées dans "filter" */}
                {recipes.filter( r => r.title.toLowerCase().startsWith(filter)).map((r) => (
                <Recipe key={r.id} title={ r.title } image={ r.image} />
                ))}
              </div>
           </div>
        </div>
    );
}