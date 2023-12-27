import styles from "./Content.module.scss";
import Recipe from "./Recipe"

export default function Content() {
    return (
        <div className="flex-fill container">
           <h1 className="m-20 p-10 justify-content-center">Découvrez nos nouvelles recettes</h1>
           <div className= {`card p-20 ${styles.contentCard}`}>
              <div className= {styles.grid}>
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
              </div>
           </div>
    </div>
    );
}