import { Link } from "react-router-dom";
import "../CSS/CategoryCard.css";

export default function CategoryCard({ categorie, count }) {
  return (
    <div className="card">
      <h3>{categorie.name}</h3>
      <p>{count} produits</p>
      <Link to={`/categorie/${categorie.id}`}>Voir</Link>
    </div>
  );
}
