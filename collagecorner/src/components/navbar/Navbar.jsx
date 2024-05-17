import { useEffect, useState } from "react";
import "./navbar.css";
import { IoLogoFirefox } from "react-icons/io5";
import {Link} from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <>
      <nav className={`container ${sticky ? 'dark-dev':''}`}>
        <IoLogoFirefox className="logo" />
        <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>


      </ul>

      </nav>
    </>
  );
};

export default Navbar;