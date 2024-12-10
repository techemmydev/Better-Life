import React from "react";
import styles from "../Herosection/Herosection.module.css";
import { NavLink } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import heroimage from "../../assets/images/hero-woman.png";
import Button from "../ButtonComponents/Button";

const HeroSection = () => {

  return (
    <div className={styles.herosection}>
      {/* Content Container */}
      <div className={styles.content}>
        {/* Text Content */}
        <div className={`${styles.text}`}>
          <div className={styles.textinner} data-aos="fade-up">
            <h1>
              Empower Your Finances with Trusted Savings, Loans, and Ajo
              Services
            </h1>
            <p>
              Start your journey to financial independence with our secure
              savings plans. We offer competitive interest rates, flexible
              deposit options, and easy access to your funds whenever you need
              them. Your money is safe with us, and we help it grow.
            </p>
            <div className={styles.ctabuttonmobile}>
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
        {/* Image Content */}
        <div className={styles.image}>
          <img src={heroimage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
