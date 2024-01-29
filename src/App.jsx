import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/HomePage/Home';
import Presentation from './Pages/PresentationPage/Presentation';
import Contact from './Pages/ContactPage/Contact';
import Footer from './components/Footer/Footer';
import ErrorPage from './Pages/ErrorPage/Error'; 
import Recipes from './Pages/RecipesPage/Recipes';

export default function App() {

  return (
    <>
    <Header />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Pages/PresentationPage/Presentation" element={<Presentation />} />
       <Route path="/Pages/ContactPage/Contact" element={<Contact />} />
       <Route path="/Pages/RecipesPage/Recipes/:id" element={<Recipes />} />

      {/* Route wildcard pour la page d'erreur */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Footer />
    </>
  );
}