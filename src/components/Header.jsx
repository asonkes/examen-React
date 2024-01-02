import styles from "./Header.module.scss";
import logo from "../assets/images/cookchef.webp";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
       <header className={ `d-flex flex-row align-items-center ${styles.header}`}>
      
       <div className="flex-fill">
          <img className="m-10" src={logo} alt="logo du restaurant" />
       </div>
       
       <div className={styles.headerList}>
           <button className="mr-15 btn btn-reverse-primary" >
              <i className="fa-solid fa-basket-shopping mr-5"></i>
              Panier
           </button>
           <button className="btn btn-primary">Connexion</button>
       </div>

       <i onClick={() => setShowMenu(true)} className={`fa-solid fa-bars ${styles.headerBurger}`}></i>
       {showMenu && 
        <>
        <div onClick={ () => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
        }
    </header>
    );
}
