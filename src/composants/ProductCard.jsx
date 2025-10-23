import "../CSS/ProductCard.css";

export default function ProductCard({ produit }) {
  return (
    <div className="card">
      <img src={produit.image} alt={produit.name} />
      <h3>{produit.name}</h3>
      <p>{produit.brand}</p>
      <p>{produit.description}</p>
      <strong>{produit.price} €</strong>
    </div>
  );
}
