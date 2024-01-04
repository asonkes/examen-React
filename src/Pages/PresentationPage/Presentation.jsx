import styles from "./Presentation.module.scss";
import Recipe from "../../components/Recipe/Recipe";
/**
 * Import nommé, donc on a met le nom de l'import dans des accolades.
 */
import { data } from "../../data/recipes"
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
                   <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path opacity="1" fill="#1E3050" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                   </svg>
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