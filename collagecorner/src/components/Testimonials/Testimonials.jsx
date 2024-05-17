import { useRef } from 'react'
import './Testimonials.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Testimonials = () => {
    const slider=useRef();
    let tx=0;

    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
<div className='testimonials'>
    <FaArrowAltCircleRight className='back-btn' onClick={slideBackward} />
    <FaArrowAltCircleLeft className='next-btn' onClick={slideForward}/>
       <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src='https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/user-1-dp2DpvM_.png' alt="" />
                        <div>
                            <h3>Priya</h3>
                            <span>Edusity, India</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aliquid similique error ducimus aspernatur sapiente voluptate corporis dignissimos dolorem quibusdam.</p>
                </div>
            </li>
            {/* user2 */}
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src='https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/user-2-UK2CIdqi.png' alt="" />
                        <div>
                            <h3>Prashant</h3>
                            <span>Edusity, India</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aliquid similique error ducimus aspernatur sapiente voluptate corporis dignissimos dolorem quibusdam.</p>
                </div>
            </li>

            {/* user3 */}
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src='https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/user-3-BHRQSl0V.png' alt="" />
                        <div>
                            <h3>Rani</h3>
                            <span>Edusity, India</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aliquid similique error ducimus aspernatur sapiente voluptate corporis dignissimos dolorem quibusdam.</p>
                </div>
            </li>
            {/* user4 */}
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src='https://6600f9448007766cf67c6f48--super-kataifi-85949e.netlify.app/assets/user-4-njZdDe5j.png' alt="" />
                        <div>
                            <h3>Shyam</h3>
                            <span>Edusity, India</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aliquid similique error ducimus aspernatur sapiente voluptate corporis dignissimos dolorem quibusdam.</p>
                </div>
            </li>
        </ul>
       </div>

    </div>

  )
}

export default Testimonials