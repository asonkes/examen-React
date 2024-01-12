import styles from "./Home.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import Recipe from "../../components/Recipe/Recipe";
import { data } from "../../data/recipes";
import { Link } from "react-router-dom";

export default function Presentation() {
  const recipes = data;

  return (
    <div className={styles.home}>
      <PageTitle title="COOKCHEF est à votre service." align="center" />
      <div className={`mb-20 ${styles.homePicture}`}></div>
      <div className="container p-20">
      <div className="m-20">
        <div className={`text-align-center p-20 ${styles.homeText}`}>
          <p className="homeBigSize p-20">POUSSEZ NOTRE PORTE, VOUS ENTREZ DANS L’HISTOIRE...</p>
          <br/>
          <p>
            Il y a 40 ans, un jeune couple décide de se lancer dans l&apos;aventure, de changer de vie et voilà,<br/>
            le restaurant existe toujours, passant de génération en génération, et restant un restaurant familial,<br/> 
            la base de notre identité !
          </p>
          <br/>
          <p className="homeBigSize mt-10">Nous sommes ouverts tous les jours.</p>
          <p className="homeLittleSize mt-10 p-20">
            NOTRE BUT, QUE VOUS PASSIEZ UNE BELLE SOIRÉE ET QUE VOUS AYIEZ ENVIE DE REVENIR...
          </p>
          <br/>
        </div>
      </div>
     
        <div className={`card p-20 m-20 ${styles.contentCard}`}>
          <div className="grid m-10">
            
            {/** Le "slice" permet de limiter l'affichage des recettes à 3 */}
            {recipes.slice(-3).map((r) => (
              <Recipe key={r.id} title={r.title} image={r.image} />
            ))}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-20">
        <Link to="/Pages/PresentationPage/Presentation">
          <button className="btn btn-primary p-20">En Savoir Plus</button>
        </Link>
      </div>
    </div>
  );
}
