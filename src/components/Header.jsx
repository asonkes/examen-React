import styles from "./Header.module.scss";
import logo from "../assets/images/cookchef.webp";

export default function Header() {
    return (
       <header className={ `d-flex flex-row align-items-center ${styles.header}`}>
       <i className="fa-solid fa-bars"></i> 
       <div className="flex-fill">
       <img className="m-10" src={logo} alt="logo du restaurant" />
       </div>
       
       <ul>
        <button className="mr-15 btn btn-reverse-primary">
        <i className="fa-solid fa-basket-shopping mr-5"></i>
        Panier
        </button>

        <button className="btn btn-primary">Connexion</button>
       </ul>
    </header>
    );
}