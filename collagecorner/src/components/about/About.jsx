import './About.css'
import { FaRegPlayCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
      <img src='	https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/about-Bupj5-5F.png' alt="" className='about-img'/>
      <FaRegPlayCircle className='play-icon'/>
    </div>
    <div className="about-right">
      <h3>About University</h3>
      <h2>Tomorrow Leaders Today</h2>
      <p>At College, our mission is to empower students with the knowledge, skills, and values needed to thrive in a dynamic world. We are committed to fostering a supportive and inclusive community where every individual can pursue their passions and achieve their full potential</p>
    </div>
  </div>

  )
}

export default About