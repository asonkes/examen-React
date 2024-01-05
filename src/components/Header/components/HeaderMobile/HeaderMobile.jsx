// Se trouve dans "components" car c'est un composant du "Header"

import styles from "./HeaderMobile.module.scss";
import { Link } from 'react-router-dom';

export default function HeaderMenuMobile() {
    return (
        <div className="headerMobile">
            <ul className={`d-flex flex-column card p-20 ${styles.menuContainer}`}>
                <Link to="/" >Accueil</Link>
                <Link to="/Pages/PresentationPage/Presentation" >Présentation</Link>
                <Link to="/Pages/ContactPage/Contact" >Contact</Link>
                <Link to="" >Panier</Link>
                <Link to="" >Connexion</Link>
            </ul>
        </div>        
    );
}