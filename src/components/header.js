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
                <a className="nav-link  active" href="/">
                  Home
                </a>
                <a className="nav-link" href="#">
                  About Us
                </a>
                <a className="nav-link" href="#">
                  Contact Us
                </a>
                <a className="nav-link" href="#">
                  Categories
                </a>
                <a className="nav-link" href="#">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
