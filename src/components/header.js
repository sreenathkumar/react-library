import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import Logo from "../images/logo.png";

function Header() {
  useEffect(() => {
    // add active class to menu items on page load
    const path = window.location.pathname.replaceAll("/", '');
    if (path !== '') {
      const domEle = document.getElementsByClassName('mobile-menu-container');
      const domChilds = domEle[0].childNodes;
      domChilds.forEach((item) => {
        if (item.innerText.toLowerCase().replace(/ /g, '-') === path) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    }
  }, [])




  // add active class  to menu item on click
  const addActiveClass = (e) => {
    const activeExists = e.target.classList.contains('active')
    if (!activeExists) {
      const ele = document.getElementsByClassName('mobile-menu-container');
      const childs = ele[0].childNodes;
      childs.forEach((item) => {
        item.classList.remove('active')
      })
      e.target.classList.add('active')
    }
  }

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
                <Link className="nav-link  active" onClick={addActiveClass} to="/">
                  Home
                </Link>
                <Link className="nav-link" onClick={addActiveClass} to="/about-us">
                  About Us
                </Link>
                <Link className="nav-link" onClick={addActiveClass} to="/contact-us">
                  Contact Us
                </Link>
                <Link className="nav-link" onClick={addActiveClass} to="/categories">
                  Categories
                </Link>
                <Link className="nav-link" onClick={addActiveClass} to="/blog">
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
