import React, { useRef, useEffect } from "react";
import "./assets/styles/global.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Navbarsection/Navbar";
import HeroSection from "./component/Herosection/HeroSection";
import WhyChooseUs from "./component/whyChooseus/chooseus";
import StatsSection from "./component/StatsSection/StatsSection";
import FeedbackForm from "./component/FeedbackForm/FeedbackForm";
import Social from "./component/Socila/Social";
import Footer from "./component/Footer/Footer";
import Calculator from "./component/Calculator/Calculator";

function App() {
  const whyChooseUsRef = useRef(null); // Create a ref for WhyChooseUs
  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);
  const productsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div>
        <Navbar
          scrollToSection={scrollToSection}
          whyChooseUsRef={whyChooseUsRef}
          servicesRef={servicesRef}
          contactUsRef={contactUsRef}
          productsRef={productsRef}
        />
        <div ref={productsRef}>
          <HeroSection />
        </div>

        <div ref={whyChooseUsRef}>
          <WhyChooseUs />
        </div>
        <div ref={servicesRef}>
          <StatsSection />
        </div>
        <div ref={contactUsRef}>
          <FeedbackForm />
        </div>
        <Social />
        <Calculator />
        <Footer />
      </div>
    </>
  );
}

export default App;
