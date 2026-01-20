import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo_1 from '../../assets/images/logo.webp';


const Header = () => {

  const [isFixed, setIsFixed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handleScroll = () => {
    setIsFixed(window.scrollY > 50);
  };
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <header className={isFixed ? "fix_style fixed" : ''}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link to={'/'} className="navbar-brand">
              <img src={logo_1} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={isExpanded}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">

                <span className={`toggle-wrap ${isExpanded ? 'active' : ''}`}>
                  <span className="toggle-bar" />
                </span>
              </span>
            </button>
            <div
              className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">
                    About us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/for-restaurants" className="nav-link">
                    For Restaurants
                  </Link>
                </li>

                <li className="nav-item">
                  <div className="btn_block">
                    <Link to="/for-restaurants" className="nav-link dark_btn">
                      Get Started
                    </Link>
                    <div className="btn_bottom" />
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
