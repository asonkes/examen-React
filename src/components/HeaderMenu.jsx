import styles from "./HeaderMenu.module.scss";

export default function HeaderMenu() {
    return (
        <nav>
            <ul className={`card  p-20 ${styles.menuContainer}`}>
                <li>Panier</li>
                <li>Connexion</li>
            </ul>
        </nav>        
    );
}