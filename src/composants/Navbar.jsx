import { Link } from "react-router-dom";
import "../CSS/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>LaBoutique</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/produits">Produits</Link></li>
        <li><Link to="/categories">Catégories</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
