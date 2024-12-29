import React, { useState } from "react";
import styles from "./navbar.module.css";
import bllogo from "../../assets/images/bl-logo.svg";
import { NavLink } from "react-router-dom";
import Button from "../ButtonComponents/Button";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Navbar = ({
  scrollToSection,
  whyChooseUsRef,
  servicesRef,
  contactUsRef,
  productsRef,
}) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleToggle = () => setIsNavCollapsed(!isNavCollapsed);
  const handleNavLinkClick = (ref) => {
    scrollToSection(ref);
    setIsNavCollapsed(true); // Close the menu
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className={`container-fluid p-3 ${styles.navcontainer}`}>
          <NavLink className="navbar-brand" to="/">
            <img src={bllogo} alt="bl-logo" className={styles.navlogo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarScroll"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="navbarScroll"
          >
            <ul
              className={`navbar-nav ${styles.navbarNav} my-2 my-lg-0 navbar-nav-scroll`}
            >
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => handleNavLinkClick(productsRef)}
                >
                  Products
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => handleNavLinkClick(whyChooseUsRef)}
                >
                  Why Better Life
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => handleNavLinkClick(servicesRef)}
                >
                  Services
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => handleNavLinkClick(contactUsRef)}
                >
                  Contact Us
                </button>
              </li>
            </ul>
            <div className={styles.cta}>
              <NavLink className={styles.login} to="/login">
                Log in
              </NavLink>
              <NavLink className={styles.login} to="/get-started">
                <Button className={styles.getstarted}>
                  {" "}
                  <span>
                    <MdOutlineRocketLaunch />
                  </span>
                  Get Started
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
