import data from "../data/produits.json";
import CategoryCard from "../composants/CategoryCard";

export default function Categories() {
  return (
    <div>
      <h2>Catégories</h2>
      <div className="grid">
        {data.categories.map((c) => {
          const count = data.products.filter((p) => p.category === c.id).length;
          return <CategoryCard key={c.id} categorie={c} count={count} />;
        })}
      </div>
    </div>
  );
}
