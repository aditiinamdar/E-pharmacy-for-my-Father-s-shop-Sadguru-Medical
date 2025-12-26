import { useState } from 'react'
import './ShoppingCart.css'
import CartItem from './CartItem'

function ShoppingCart({ cartItems, onRemove, onUpdateQuantity, onCheckout }) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const estimatedTax = (total * 0.08).toFixed(2)
  const finalTotal = (parseFloat(total) + parseFloat(estimatedTax)).toFixed(2)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitOrder = async (e) => {
    e.preventDefault()
    
    // Validate customer info
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert('Please fill in all customer information')
      return
    }

    setIsSubmitting(true)
    try {
      await onCheckout(customerInfo)
      setShowCheckout(false)
      setCustomerInfo({ name: '', email: '', phone: '', address: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="shopping-cart">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some medicines to get started!</p>
        </div>
      </div>
    )
  }

  if (showCheckout) {
    return (
      <div className="shopping-cart">
        <h2 className="cart-title">Checkout</h2>
        
        <div className="checkout-container">
          <form onSubmit={handleSubmitOrder} className="checkout-form">
            <div className="form-section">
              <h3>Billing Information</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 8900"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St, City, State 12345"
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h3>Order Summary</h3>
              
              <div className="order-items-summary">
                {cartItems.map(item => (
                  <div key={item._id} className="summary-item">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Tax (8%):</span>
                <span>${estimatedTax}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping:</span>
                <span className="free-shipping">FREE</span>
              </div>

              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>Total:</span>
                <span>${finalTotal}</span>
              </div>
            </div>

            <div className="button-group">
              <button type="submit" className="checkout-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
              <button 
                type="button" 
                className="back-btn"
                onClick={() => setShowCheckout(false)}
                disabled={isSubmitting}
              >
                Back to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="shopping-cart">
      <h2 className="cart-title">Shopping Cart</h2>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-header">
            <h3>Order Summary</h3>
          </div>
          
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Tax (8%):</span>
            <span>${estimatedTax}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping:</span>
            <span className="free-shipping">FREE</span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-row total">
            <span>Total:</span>
            <span>${finalTotal}</span>
          </div>

          <button className="checkout-btn" onClick={() => setShowCheckout(true)}>
            Proceed to Checkout
          </button>

          <button className="continue-shopping-btn">
            Continue Shopping
          </button>

          <div className="cart-info">
            <p>✓ Free shipping on orders over $50</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ Secure checkout with encryption</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
