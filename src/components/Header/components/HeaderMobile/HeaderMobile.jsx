// Se trouve dans "components" car c'est un composant du "Header"

import styles from "./HeaderMobile.module.scss";

export default function HeaderMenuMobile() {
    return (
        <div className="headerMobile">
            <ul className={`card p-20 ${styles.menuContainer}`}>
                <li>Accueil</li>
                <li>Présentation</li>
                <li>Contact</li>
                <li>Connexion</li>
            </ul>
        </div>        
    );
}