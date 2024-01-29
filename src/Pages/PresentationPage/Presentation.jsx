import { useState, useEffect } from "react";
import styles from "./Presentation.module.scss";
import Recipe from "../../components/Recipe/Recipe";
import PageTitle from "../../components/PageTitle/PageTitle";
import { getRandomRecipes } from "../../services/api";
import ResponsiveElement from "../../components/ResponsiveElement/ResponsiveElement";

const normalizeString = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export default function Presentation() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchRecipes = async () => {
  try {
    const data = await getRandomRecipes(18);
    setRecipes(data);
  } catch (error) {
    console.error('Erreur', error);
    // Gérer les erreurs ici
  }
 }
  useEffect(() => {
   fetchRecipes();
  }, []);

  function handleInput(e) {
    const filter = e.target.value;
    const normalizedFilter = normalizeString(filter);
    setFilter(normalizedFilter.trim().toLowerCase());
  }

  return (
    <div className="flex-fill container">
      <PageTitle title="Discover your recipes" align="center" />

      <div className={`card p-20 m-20 ${styles.contentCard}`}>
        <ResponsiveElement>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path
              opacity="1"
              fill="#1E3050"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            ></path>
          </svg>
          <input
            onInput={handleInput}
            className={`m-10 p-10 ${styles.contentSearch}`}
            type="text"
            placeholder="Research"
          />
        </ResponsiveElement>

        <div className="grid m-10">
          {recipes
            .filter((r) => normalizeString(r.name).startsWith(filter))
            .map((r) => (
              <Recipe key={r.name} id={r.id} title={r.name} image={r.image}/>
            ))}
        </div>
      </div>
    </div>
  );
}










