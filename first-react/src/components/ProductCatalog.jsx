import './ProductCatalog.css'
import MedicineCard from './MedicineCard'

function ProductCatalog({ medicines, onAddToCart }) {
  const categories = ['All', ...new Set(medicines.map(m => m.category))]
  
  return (
    <div className="catalog">
      <div className="catalog-header">
        <h2>Our Medicines & Products</h2>
        <p>Browse our wide range of pharmaceutical products</p>
      </div>

      <div className="medicines-grid">
        {medicines.map(medicine => (
          <MedicineCard
            key={medicine.id}
            medicine={medicine}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCatalog
