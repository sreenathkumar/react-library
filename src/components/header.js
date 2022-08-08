import { Link } from "react-router-dom";
import "../css/header.css";
import Logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <div className="header-container">
        <nav className="navbar">
          <img src={Logo} alt="logo" className="navbar-brand logo" />
          <div>
            <input type="checkbox" id="toggleActive" />
            <label className="menuToggle" htmlFor="toggleActive"></label>
            <div className="mobile-menu" id="mobile-menu-panel">
              <div className="mobile-menu-container">
                <Link className="nav-link  active" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/">
                  About Us
                </Link>
                <Link className="nav-link" to="/">
                  Contact Us
                </Link>
                <Link className="nav-link" to="/">
                  Categories
                </Link>
                <Link className="nav-link" to="/">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
