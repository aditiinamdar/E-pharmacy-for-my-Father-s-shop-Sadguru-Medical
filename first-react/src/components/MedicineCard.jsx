import './MedicineCard.css'

function MedicineCard({ medicine, onAddToCart }) {
  const isOutOfStock = medicine.stock === 0

  return (
    <div className={`medicine-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
      <div className="card-header">
        <span className="category-badge">{medicine.category}</span>
        <span className={`stock-badge ${medicine.stock > 10 ? 'in-stock' : 'low-stock'}`}>
          {medicine.stock > 0 ? `${medicine.stock} in stock` : 'Out of Stock'}
        </span>
      </div>

      <div className="card-body">
        <h3 className="medicine-name">{medicine.name}</h3>
        <p className="medicine-description">{medicine.description}</p>
        
        <div className="price-section">
          <span className="price">${medicine.price.toFixed(2)}</span>
        </div>
      </div>

      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(medicine)}
        disabled={isOutOfStock}
      >
        {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default MedicineCard
