import React, { useState } from "react";
import styles from "./FeedbackForm.module.css"; // Import the CSS module
import chat from "../../assets/images/Chat.svg";
import Button from "../ButtonComponents/Button";

function FeedbackForm() {
  // State to capture input values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add further logic like sending the data to an API
  };

  return (
    <div className={styles.feedbackForm}>
      <div className={`container ${styles.fee}`}>
        <div className={styles.leftContent}>
          <div className={styles.speechBubble}>
            <img src={chat} alt="Chat Icon" className={styles.chatd} />
          </div>
          <h1>Get a free consultancy from our expert right now!</h1>
        </div>

        <div className={styles.rightContent} data-aos="flip-left" data-aos-duration="2000">
          <div className={`card ${styles.inputbackground}`}>
            <div className="card-body">
              <h5 className={`card-title ${styles.feedback_yellow}`}>
                Feedback
              </h5>
              <p className="card-text">
                Seeking personalized support? Request a call from our team.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles.inputbox}`}
                    id="name"
                    placeholder="Mich"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${styles.inputbox}`}
                    id="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <Button type="submit" className={styles.submitbuttons}>
                  Send a request
                </Button>
              </form>
            </div>
            <h6 className={styles.privacy}>privacy</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
