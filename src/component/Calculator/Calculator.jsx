import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Import the dropdown icon from React Icons
import styles from "./Calculator.module.css";
import piggy from "../../assets/images/piggy.svg";
import bllogo from "../../assets/images/bl-logo.svg";
import Button from "../ButtonComponents/Button";
import green1image from "../../assets/images/leftimage.svg";
import grren2image from "../../assets/images/grren2.svg";

const Calculator = () => {
  return (
    <div className={`container-fluid ${styles.calculatorContainer}`}>
      <img src={green1image} alt="" className={styles.leftimage} />
      <img src={grren2image} alt="" className={styles.rightimage} />
      <div className={`container ${styles.cal}`}>
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6 col-sm-12">
            <h2 className={styles.title}>
              Ready to save? Calculate your interest.
            </h2>
            <p className={styles.description}>
              Estimate your investment growth over time.
            </p>
            <div className={styles.logo}>
              <img src={piggy} alt="Piggy bank" />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 col-sm-12">
            <div className={`card ${styles.calculatorCard}`}>
              <div className={styles.logocenter}>
                <img
                  src={bllogo}
                  alt="Better Life Logo"
                  className={styles.navlogo}
                />
              </div>
              <form>
                <div className="mb-3">
                  <label className={`form-label ${styles.label}`}>
                    How much can you save in a year?
                  </label>
                  <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className={`form-label ${styles.label}`}>
                    How long do you want to save for?
                  </label>
                  <div className={styles.selectWrapper}>
                    <select className={`form-control ${styles.select}`}>
                      <option>Select One</option>
                      <option>1 Year</option>
                      <option>5 Years</option>
                      <option>10 Years</option>
                    </select>
                    <FaChevronDown className={styles.dropdownIcon} />
                  </div>
                </div>
                <div className={styles.ctabuttons}>
                  <Button className={styles.getstarted}>Calculate</Button>
                  <Button className={styles.getstartedcler}>Clear</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
