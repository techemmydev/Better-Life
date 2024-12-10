import React from "react";
import styles from "./Navbar.module.css";
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className={`navbar-nav ${styles.navbarNav} my-2 my-lg-0 navbar-nav-scroll`}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => scrollToSection(productsRef)}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => scrollToSection(whyChooseUsRef)}
                >
                  Why Better Life
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => scrollToSection(servicesRef)}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => scrollToSection(contactUsRef)}
                >
                  Contact Us
                </NavLink>
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
