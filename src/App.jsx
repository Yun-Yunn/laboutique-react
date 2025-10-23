import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./composants/Navbar";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produits";
import Categories from "./pages/Categories";
import Categorie from "./pages/Categorie";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categorie/:id" element={<Categorie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
