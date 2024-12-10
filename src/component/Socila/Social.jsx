import React from "react";
import styles from "./socila.module.css";
import background from "../../assets/images/medium-shot-friends-having-fun-party 1.png";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Stats from "../Stats/Stats";

const Social = () => {
  return (
    <>
      <div className={` ${styles.contactuscontainer}`}>
        {/* Left Text Section */}
        <div className={` ${styles.co}`} data-aos="zoom-in">
          <h1 className={styles.title}>Get Help, Contact Us</h1>
          <p className={styles.subtitle}>
            Our team is ready to assist you. Connect with us via social media or
            use the options below.
          </p>
          <div className={styles.socials}>
            {/* Social Media Icons */}
            <FaFacebook className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTiktok className={styles.icon} />
          </div>
        </div>

        {/* Right Image Section */}
        <div>
          <img
            src={background}
            alt="Friends Having Fun over the phone"
            className={styles.bgback}
          />
        </div>
      </div>
      <Stats />
    </>
  );
};

export default Social;
