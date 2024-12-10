import React from "react";
import styles from "../whyChooseus/chooseus.module.css";
import savings from "../../assets/images/lock.svg";
import ajo from "../../assets/images/ajo.svg";
import loan from "../../assets/images/loan.svg";
import dot from "../../assets/images/whychoosedotimages.svg";
const WhyChooseUs = () => {
  return (
    <div className={`container-fluid  ${styles.whyChooseUs}`}>
      <img src={dot} alt="" className={styles.dotimages} />
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title} data-aos="fade-down" >Why Choose Us</h2>
        <div className={styles.subtitle1} data-aos="fade-up">
          <p className={styles.subtitle}>
            People choose us because we serve the best for everyone
          </p>
        </div>
        <div className="row">
          {/* Savings Card */}
          <div className="col-md-6 col-sm-12 mb-5">
            <div className={` ${styles.card}`}>
              <div className={styles.iconContainer}>
                {/* <i className={`bi bi-piggy-bank ${styles.icon}`}></i> */}
                <img src={savings} alt="" />
              </div>
              <div>
                <h5 className={styles.cardTitle}>Savings</h5>
                <p className={styles.cardText}>
                  Start saving with us today and secure your financial future—
                  whether it's for emergencies, short-term goals, or long-term
                  growth. Our trusted platform helps you build wealth with ease
                  and confidence, giving you financial freedom and peace of
                  mind.
                </p>
              </div>
            </div>
          </div>

          {/* Ajo Card */}
          <div className="col-md-6 col-sm-12 mb-5">
            <div className={` ${styles.card}`}>
              <div className={styles.iconContainer}>
                {/* <i className={`bi bi-safe ${styles.icon}`}></i>
                 */}
                <img src={ajo} alt="" />
              </div>
              <div>
                <h5 className={styles.cardTitle}>Ajo</h5>
                <p className={styles.cardText}>
                  Start your Ajo savings with us today and watch your money
                  grow— whether for daily needs, emergencies, or future goals.
                  Our reliable community-based system ensures you build wealth
                  securely while staying connected to a trusted tradition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Loan Card */}
          <div className="col-md-12 col-sm-12">
            <div className={` ${styles.card}`}>
              <div className={styles.iconContainer}>
                {/* <i className={`bi bi-currency-dollar ${styles.icon}`}></i> */}
                <img src={loan} alt="" />
              </div>
              <div>
                <h5 className={styles.cardTitle}>Loan</h5>
                <p className={styles.cardText}>
                  Get the loan you need with us today—whether it's for personal
                  use, business growth, or urgent needs. Our flexible and
                  affordable loan options help you achieve your goals with ease
                  and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
