import { useParams } from "react-router-dom";
import data from "../data/produits.json";
import ProductCard from "../composants/ProductCard";

export default function Categorie() {
  const { id } = useParams();
  const produits = data.products.filter((p) => p.category === id);
  const categorie = data.categories.find((c) => c.id === id);

  return (
    <div>
      <h2>{categorie ? categorie.name : "Catégorie"}</h2>
      <div className="grid">
        {produits.map((p) => (
          <ProductCard key={p.id} produit={p} />
        ))}
      </div>
    </div>
  );
}
