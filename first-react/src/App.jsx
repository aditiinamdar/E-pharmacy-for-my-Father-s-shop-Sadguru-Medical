import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import ProductCatalog from './components/ProductCatalog'
import ShoppingCart from './components/ShoppingCart'
import { apiClient } from './services/api'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [medicines, setMedicines] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch medicines from backend
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        setLoading(true)
        const data = await apiClient.medicines.getAll()
        setMedicines(data)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch medicines:', err)
        setError('Failed to load medicines. Please ensure the backend is running.')
      } finally {
        setLoading(false)
      }
    }

    fetchMedicines()
  }, [])

  const addToCart = (medicine) => {
    const existingItem = cartItems.find(item => item._id === medicine._id)
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item._id === medicine._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...medicine, quantity: 1 }])
    }
  }

  const removeFromCart = (medicineId) => {
    setCartItems(cartItems.filter(item => item._id !== medicineId))
  }

  const updateQuantity = (medicineId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(medicineId)
    } else {
      setCartItems(cartItems.map(item =>
        item._id === medicineId ? { ...item, quantity } : item
      ))
    }
  }

  const handleCheckout = async (customerInfo) => {
    try {
      const orderData = {
        items: cartItems.map(item => ({
          id: item._id,
          quantity: item.quantity,
        })),
        customerInfo,
      }
      
      const order = await apiClient.orders.create(orderData)
      console.log('Order created:', order)
      
      // Clear cart after successful order
      setCartItems([])
      setShowCart(false)
      
      // Refresh medicines to update stock
      const updatedMedicines = await apiClient.medicines.getAll()
      setMedicines(updatedMedicines)
      
      alert(`Order placed successfully! Order ID: ${order._id}`)
    } catch (err) {
      console.error('Failed to create order:', err)
      alert('Failed to place order. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="app">
        <Header cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading medicines...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <Header cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
        <div className="error-message">
          <p>⚠️ {error}</p>
          <p>Make sure the backend server is running: <code>npm run dev</code> in the server folder</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Header cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
      
      <div className="app-container">
        {showCart ? (
          <ShoppingCart 
            cartItems={cartItems} 
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onCheckout={handleCheckout}
          />
        ) : (
          <ProductCatalog medicines={medicines} onAddToCart={addToCart} />
        )}
      </div>
    </div>
  )
}

export default App
