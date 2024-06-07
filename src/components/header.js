import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css";
import Logo from "../images/logo.svg";

function Header() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

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
                <Link
                  className={`nav-link ${activePath === "/" ? "active" : ""}`}
                  onClick={() => handleLinkClick("/")}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`nav-link ${
                    activePath === "/about-us" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/about-us")}
                  to="/about-us"
                >
                  About Us
                </Link>
                <Link
                  className={`nav-link ${
                    activePath === "/contact-us" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/contact-us")}
                  to="/contact-us"
                >
                  Contact Us
                </Link>
                <Link
                  className={`nav-link ${
                    activePath === "/categories" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/categories")}
                  to="/categories"
                >
                  Categories
                </Link>
                {/* <Link className={`nav-link ${activePath === "/blog" ? "active" : ""}`} onClick={() => handleLinkClick("/blog")} to="/blog">
                  Blog
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
