import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">✓</span>
          <span>QA Demo Shop</span>
        </Link>

        <nav className="navbar-menu">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>

          <Link
            to="/register"
            className="navbar-register"
          >
            Get Started
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;