import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";
import logo from "../../assets/images/cookchef.webp";
import { useState } from "react";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";

export default function Header() {

   const [showMenu, setShowMenu] = useState(false);

   return (
      <header className={ `d-flex flex-row align-items-center ${styles.header}`} >
          <div className="flex-fill">
            <Link to="/">
            <img className={`m-10 ${styles.headerLogo}`} src={logo} alt="logo du restaurant" />
            </Link>
          </div>

      <nav>
         <ul className="d-flex flex-row mr-15">
            <li className="mr-15">
               <Link to="/">Home</Link>
            </li>
            <li className="mr-15">
               <Link to="/Pages/PresentationPage/Presentation">Presentation</Link>
            </li>
            <li className="mr-15">
               <Link to="/Pages/ContactPage/Contact">Contact</Link>
            </li>
         </ul>
      </nav>

       <div className={styles.headerList}>
           <button className="mr-15 btn btn-reverse-primary" >
              <svg 
              className={`mr-5 ${styles.icone} `}
              xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path opacity="1" d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
              WishList
           </button>
           <button className="btn btn-primary">Connection</button>
       </div>

       
       <svg 
          onClick={() => setShowMenu(true)} 
          className= {styles.headerBurger} 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path opacity="1" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
       </svg>
  
      {showMenu && 
        <>
        <div onClick={ () => setShowMenu(false)} className="calc"></div>
          <HeaderMobile />
        </>
        }
      </header>
   );
}

