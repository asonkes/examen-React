import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Homepage/Home';
import Presentation from './Pages/Presentation';
import Contact from './Pages/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
       <Route path="/Pages/Homepage/Home" element={<Home />} />
       <Route path="/Pages/Presentation" element={<Presentation />} />
       <Route path="/Pages/Contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}