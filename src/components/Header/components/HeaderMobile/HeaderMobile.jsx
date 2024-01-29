{/** Permet d'avoir le menu en format "mobile" */}
import styles from "./HeaderMobile.module.scss";
import { Link } from 'react-router-dom';

export default function HeaderMenuMobile() {
    return (
        <div className="headerMobile">
            <ul className={`card p-20 ${styles.menuContainer}`}>
                <Link to="/" >Accueil</Link>
                <Link to="/Pages/PresentationPage/Presentation" >Présentation</Link>
                <Link to="/Pages/ContactPage/Contact" >Contact</Link>
                <Link to="" >Panier</Link>
                <Link to="" >Connexion</Link>
            </ul>
        </div>        
    );
}