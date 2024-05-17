import "./Hero.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>We Ensure better Education for a coding and Techonology</h1>
          <p>
            Welcome to Collage, a place where your academic journey meets
            personal growth and endless possibilities. Located in the heart of
            India, our college is dedicated to providing an enriching,
            supportive, and dynamic environment for all our students.
          </p>
          <button className="btn">
            Explore more <FaArrowAltCircleRight className="ar" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
