import './Header.css'

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo">💊 PharmaCare</h1>
          <p className="tagline">Your trusted online pharmacy</p>
        </div>
        
        <button className="cart-button" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
