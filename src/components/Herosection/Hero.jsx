import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import heart from '../../assets/Heart.png'
import Heroman from '../../assets/Heartman.png'
import {motion, spring} from 'framer-motion'
import { Link } from 'react-scroll'
const Hero = () => {
    const transition={type:'spring', duration:3}
    const mobileView=window.innerWidth<=768?true:false; 
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            {/* Scroll Ad */}
            <div className="scroll-ad">
            <motion.div
            //when render move 280px from rigth to left
            initial={{left:mobileView?'170px':'280px'}}
            //when inview stop at a dist of 8px from left
            whileInView={{left:'8px'}}
            transition={{...transition, type:'tween'}}> 
            </motion.div>
            <span>The best gym for you fitness journey!</span>
            </div>
            {/*Hero Heading*/}
            <div className="hero-heading">
                <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
                </div>
                <div>
                    <span>Ideal </span>
                    <span className='stroke-text'>Body</span>
                </div>
                <div><span>Our goal is to help you to shape your ideal body and to make you fit, 
                    live up your life to the fulliest.</span>
                </div>
            </div>
            {/*Hero figures*/}
            <div className="figures">
                 <div><span>+20</span><span>Experts</span></div>
                 <div><span>+2500</span><span>Members Joined</span></div>
                 <div><span>+50</span><span>Fitness Programs</span></div>
            </div>
            {/*Hero Buttons*/}
                <div className="hero-buttons">
                <Link
                    to='right-s'
                    spy={true}
                    smooth={true}>
                     <button className='butn'>Get Started</button>
                     </Link>
                     <Link
                    to='progress'
                    spy={true}
                    smooth={true}>
                     <button className='butnn'>Learn more</button>
                     </Link>
                 </div>
        </div>
       <div className="right-h">
                   <Link
                    to='right-s'
                    spy={true}
                    smooth={true}>
                        <button className="btn">Join Now</button>
                     </Link>
             <div className='heart-rate'>
                 <img src={heart} alt="Heart"></img>
                 <span>Heart Rate</span>
                 <span>120 bpm</span>
             </div>
             <div className="Hero-man">
             <img  src={Heroman} alt='Fit Man'></img>
             </div>
                
             <div 
             className="calorie"
             >
                <div className='scale'></div>
                <div className='scale'></div>
                <div className='scale'></div>
                <div className='scale'></div>
                <div className='scale'></div>
                <div className='scale'></div>
                <div className='scale'></div>
                <div className='scale-head'>
                <span>Calories Burned</span>
                <span>250 kcal</span>
                </div>
             </div>
       </div>
    </div>
  )
}

export default Hero