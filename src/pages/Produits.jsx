import { useState } from "react";
import data from "../data/produits.json";
import ProductCard from "../composants/ProductCard";

export default function Produits() {
  const [search, setSearch] = useState("");

  const produitsFiltres = data.products.filter((p) => {
    const text = `${p.name} ${p.brand} ${p.description} ${p.price}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  return (
    <div>
      <h2>Nos Produits</h2>
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "15px", width: "100%" }}
      />
      <div className="grid">
        {produitsFiltres.map((p) => (
          <ProductCard key={p.id} produit={p} />
        ))}
      </div>
    </div>
  );
}
