// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <nav className="nav-card1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-logo"
      />
      <ul className="menu-card1">
        <li className="link">Home</li>
        <li className="link">Products</li>
        <li className="link">Cart</li>
        <button type="button" className="logout-button">
          Logout
        </button>
      </ul>
    </nav>
    <nav className="nav-card2">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="nav-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logout-icon"
        />
      </div>
      <ul className="menu-card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav logout"
          className="menu-icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="menu-icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="menu-icon"
        />
      </ul>
    </nav>
  </>
)

export default Header
