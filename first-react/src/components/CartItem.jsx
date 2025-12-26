import './CartItem.css'

function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <div className="item-image">
        <span className="medicine-icon">💊</span>
      </div>

      <div className="item-details">
        <h4 className="item-name">{item.name}</h4>
        <p className="item-category">{item.category}</p>
        <p className="item-price">${item.price.toFixed(2)} each</p>
      </div>

      <div className="quantity-control">
        <button
          className="qty-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          −
        </button>
        <input
          type="number"
          className="qty-input"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 0)}
          min="1"
        />
        <button
          className="qty-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <div className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
        title="Remove item"
      >
        ✕
      </button>
    </div>
  )
}

export default CartItem
