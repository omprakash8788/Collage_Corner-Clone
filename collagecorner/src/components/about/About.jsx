import './About.css'
import { FaRegPlayCircle } from "react-icons/fa";
import about_img from '../../assets/about.png'

const About = ({setPlay}) => {
  return (
    <div className='about'>
    <div className="about-left">
      <img src={about_img} alt="" className='about-img'/>
      <FaRegPlayCircle className='play-icon' onClick={()=>setPlay(true)}/>
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