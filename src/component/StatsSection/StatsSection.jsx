import React from "react";
import styles from "../StatsSection/StatsSection.module.css";
import purple from "../../assets/images/Ellipse.svg";
import green from "../../assets/images/green.svg";
import blue from "../../assets/images/blue.svg";
import brown from "../../assets/images/brown.svg";

const StatsSection = () => {
  return (
    <div className={`container-fluid ${styles.statscontainer}`}>
      <div className={`container ${styles.statsSection}`}>
        <div className="row">
          {/* Left Section: Centered Title and Description */}
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center" data-aos="fade-right">
            <div className="text-center">
              <h2 className={styles.title}>
                Your Money, Our Promise are Safe, Secure, and Always Within
                Reach
              </h2>
              <p className={styles.description}>
                Reliable Savings, Affordable Loans, and Secure Ajo Services —
                Designed to Help You Thrive Financially.
              </p>
            </div>
          </div>

          {/* Right Section: Stats */}
          <div className="col-md-6 col-sm-12">
            <div className="row">
              {/* Stat Card 1 */}
              <div className="col-md-6 col-sm-6 col-12 mb-4">
                <div className={`card ${styles.statCard} ${styles.cardpurple}`}>
                  <img src={purple} alt="Purple Icon" className={styles.icon} />
                  <div className={styles.st}>
                    <h4 className={styles.statValue}>OVER</h4>
                    <h2 className={styles.statNumber}>5,000</h2>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="col-md-6 col-sm-6 col-12 mb-4">
                <div className={`card ${styles.statCard} ${styles.cardgreen}`}>
                  <img src={green} alt="Green Icon" className={styles.icon} />
                  <div className={styles.st}>
                    <h4 className={styles.statValue}>OVER</h4>
                    <h2 className={styles.statNumber}>10,000</h2>
                    <p className={styles.statLabel}>
                      Monthly Card Transactions
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="col-md-6 col-sm-6 col-12 mb-4">
                <div className={`card ${styles.statCard} ${styles.cardbrown}`}>
                  <img src={brown} alt="Brown Icon" className={styles.icons} />
                  <div className={styles.st}>
                    <h4 className={styles.statValue}>Loans Processed In</h4>
                    <h2 className={styles.statNumber}>5</h2>
                    <p className={styles.statLabel}>Minutes</p>
                  </div>
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="col-md-6 col-sm-6 col-12 mb-4">
                <div className={`card ${styles.statCard} ${styles.cardblue}`}>
                  <img src={blue} alt="Blue Icon" className={styles.icon} />
                  <div className={styles.st}>
                    <h4 className={styles.statValue}>Join</h4>
                    <h2
                      className={`${styles.statNumber} ${styles.statNumber500}`}
                    >
                      500,000+
                    </h2>
                    <p className={styles.statLabel}>To Save and Invest Daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
