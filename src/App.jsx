import Header from "./components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage"; 
import Footer from "./components/Footer/Footer";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
    <Header />
    <Homepage />
    <Footer />
    </div>
  );
}
