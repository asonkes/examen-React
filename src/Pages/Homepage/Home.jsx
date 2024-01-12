import styles from "./Home.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import Recipe from "../../components/Recipe/Recipe";
import { data } from "../../data/recipes";
import { Link } from "react-router-dom";

export default function Presentation() {
  const recipes = data;

  return (
    <div className={styles.home}>
      <PageTitle title="COOKCHEF is at your service" align="center" />
      <div className={`mb-20 ${styles.homePicture}`}></div>
      <div className="container p-20">
      <div className="m-20">
        <div className={`text-align-center p-20 ${styles.homeText}`}>
          <p className="homeBigSize p-20">PUSH OPEN OUR DOOR AND YOU WILL BE PART OF HISTORY...</p>
          <br/>
          <p>
            40 years ago, a young couple decided to embark on an adventure, to change their lives, and that was that,
            40 years ago, a young couple decided to embark on an adventure, to change their lives, and that was it,<br/>
            The restaurant still exists, passing from generation to generation, and remaining a family restaurant,<br/> 
            the basis of our identity!
          </p>
          <br/>
          <p className="homeBigSize mt-10">We are open every day.</p>
          <p className="homeLittleSize mt-10 p-20">
          OUR AIM IS TO MAKE SURE YOU HAVE A GREAT TIME AND WANT TO COME BACK AGAIN...
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
          <button className="btn-special btn-primary p-20">Find out more</button>
        </Link>
      </div>
    </div>
  );
}
