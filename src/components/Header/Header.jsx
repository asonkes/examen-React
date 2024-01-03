import styles from "./Header.module.scss";
import logo from "../../assets/images/cookchef.webp";
import { useState } from "react";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
       <header className={ `d-flex flex-row align-items-center ${styles.header}`}>
      
       <div className="flex-fill">
          <img className="m-10" src={logo} alt="logo du restaurant" />
       </div>
       
        <div className={styles.headerList}>
           <button className="mr-15 btn btn-reverse-primary" >
              <img className="mr-5" src="assets/icones/Shopping-Cart-01-16.png" alt="Icone pour le panier" />
              Panier
           </button>
           <button className="btn btn-primary">Connexion</button>
       </div>

       <img 
       onClick={() => setShowMenu(true)} 
       className= {styles.headerBurger} 
       src="assets/icones/Row-22.png" 
       alt="Icone pour le menu Burger"
       />

       {showMenu && 
        <>
        <div onClick={ () => setShowMenu(false)} className="calc"></div>
          <HeaderMobile />
        </>
        }
    </header>
    );
}
