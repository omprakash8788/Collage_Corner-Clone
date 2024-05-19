import { useRef } from 'react'
import './Testimonials.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


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
                        <img src={user_1} alt="" />
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
                        <img src={user_2} alt="" />
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
                        <img src={user_3} alt="" />
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
                        <img src={user_4} alt="" />
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