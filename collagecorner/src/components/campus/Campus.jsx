import './Campus.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
         <img src="https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/gallery-1-HP2uKW94.png" alt="" />
         <img src="https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/gallery-2-DYatBGZh.png" alt="" />
         <img src="https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/gallery-3-C4KpO1U2.png" alt="" />
         <img src="https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/gallery-4-LJEJ329C.png" alt="" />
        </div>
        <button className='btn dark-btn'>See more here <FaArrowAltCircleRight className="ar" /></button>

    </div>
  )
}

export default Campus