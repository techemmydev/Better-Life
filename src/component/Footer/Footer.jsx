import React from "react";
import { NavLink } from "react-router-dom"; // Import React Router components
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"; // Import React Icons
import styles from "../Footer/Footer.module.css";
import bllogo from "../../assets/images/bl-logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          {/* Logo and Social Icons Section */}
          <div className="col-md-4">
            <img
              src={bllogo}
              alt="Better Life Logo"
              className={styles.navlogo}
            />
            <p>Better Life</p>
            <p>+1 (999) 999-99-99</p>
            <p>hello@logoipsum.com</p>
            <p>London</p>
            <div className={styles.iconsAndCopyright}>
              <div className={styles.socialIcons}>
                <NavLink to="#" className={styles.socialIcon}>
                  <FaFacebookF />
                </NavLink>
                <NavLink to="#" className={styles.socialIcon}>
                  <FaInstagram />
                </NavLink>
                <NavLink to="#" className={styles.socialIcon}>
                  <FaYoutube />
                </NavLink>
                <NavLink to="#" className={styles.socialIcon}>
                  <FaTwitter />
                </NavLink>
              </div>
              <p className={styles.copyright}>&copy; 2023 - Copyright</p>
            </div>
          </div>

          {/* Info Section */}
          <div className="col-md-4">
            <h5>Info</h5>
            <ul>
              <li>
                <NavLink to="/why-better-life" className={styles.navLink}>
                  Why Better Life
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className={styles.navLink}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className={styles.navLink}>
                  Products
                </NavLink>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <ul>
              <li>
                <NavLink to="/contacts" className={styles.navLink}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
