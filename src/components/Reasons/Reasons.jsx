import React from 'react'
import './Reasons.css'
import firstgif from '../../assets/animation1.gif'
import secondgif from '../../assets/animation2.gif'
import thirdgif from '../../assets/animation3.gif'
import forthgif from '../../assets/animation4.gif'
import { IoMdCheckboxOutline } from "react-icons/io";
import {motion, spring} from 'framer-motion';
import { Link } from 'react-scroll'
const Reasons = () => {
  const transition={type:'spring', duration:2}
  return (
    <div className='Membership'>
        <div  className='left-m'>
        <div className='animation-l'>
           <div><img src={firstgif} alt='Man running'/></div>
          <div><img src={forthgif} alt='Man running'/></div>
        </div>
        </div>
        <div className='right-m'>
         <div>
           <span >Memberships</span>
            <span className='stroke-text'> that</span>
          </div>
          <div>
           <span className='stroke-text'>fuel your </span>
            <span >fitness</span>
          </div>
           <div className='offers'>
         <motion.div
          whileInView={{opacity:1, x:0}}
          animate={{opacity:0, x:-100}}
          transition={transition}
         >
         <ul>
            <li><IoMdCheckboxOutline/>  150+ Expert coaches</li>
            <li><IoMdCheckboxOutline/>  20+ Club</li>
            <li><IoMdCheckboxOutline/>  Fitness Classes</li>
            <li><IoMdCheckboxOutline/>  Personal Training</li>
         </ul>
         </motion.div>
         <motion.div
         whileInView={{opacity:1, x:0}}
         animate={{opacity:0, x:100}}
         transition={transition}
         >
         <ul>
            <li><IoMdCheckboxOutline/>  Premium Equipment</li>
            <li><IoMdCheckboxOutline/>  Diet plans</li>
            <li><IoMdCheckboxOutline/>  On-demand workouts</li>
            <li><IoMdCheckboxOutline/>  2 Free classes</li>
         </ul>
         </motion.div>
         </div>
         <div>
         <Link
                    to='Plans'
                    spy={true}
                    smooth={true}   className='explore'>
         <button>Explore More Plans</button>
         </Link>
         </div>
        </div>
       <div className='middle-m'>
       <div className='animation-r'>
        <div><img src={thirdgif} alt='Man running'/></div>
        <div> <img src={secondgif} alt='Man running'/></div>
        </div>
       </div>

    </div>
  )
}

export default Reasons