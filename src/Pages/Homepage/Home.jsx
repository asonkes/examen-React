import styles from './Home.module.scss';
import PageTitle from '../../components/PageTitle/PageTitle';
import Recipe from '../../components/Recipe/Recipe';
import { data } from "../../data/recipes";
import { Link } from 'react-router-dom';

export default function Presentation() {
  const recipes = data;

  return (
    <div className={styles.home}>
          <PageTitle title='COOKCHEF est à votre service.' align='center' />
      <div className={styles.homePicture}></div>
      <div className="flex-fill container">
        <div className='text-align-center'>
        <p className="homeBigSize mt-10">POUSSEZ NOTRE PORTE, VOUS ENTREZ DANS L’HISTOIRE...</p>
        <br></br>
        <p>Il y a 40 ans, un jeune couple décide de se lancer dans l&apos;aventure, de changer de vie et voilà, le restaurant existe toujours, passant de génération en génération, et restant un restaurant familial, la base de notre identité !</p>
        <br></br>
        <p className="homeBigSize mt-10">Nous sommes ouverts tous les jours.</p>
        <br></br>
        <p className='homeLittleSize mt-10'>NOTRE BUT, QUE VOUS PASSIEZ UNE BELLE SOIRÉE ET QUE VOUS AYIEZ ENVIE DE REVENIR...</p>
        <br></br>
        <p className='homeLittleSize mt-10'>MERCI POUR TOUTES CES ANNÉES DE CONFIANCE.</p>
        <br></br>
        </div>

        <div className= {`card p-20 m-20 ${styles.contentCard}`}>
               <div className= {`m-10 ${styles.grid}`}>
{/** Le "slice" permet de limiter l'affichage des recettes à 3 */}
               
               {recipes.slice(-3).map((r) => (
              <Recipe key={r.id} title={r.title} image={r.image} />
               ))}
              </div>
           </div>
        </div>

        <div className='d-flex justify-content-center mb-20'>
        <Link to="/Pages/PresentationPage/Presentation">
          <button className='btn btn-primary p-20'>En Savoir Plus</button>
        </Link>
        </div>
    </div>
  );
}

