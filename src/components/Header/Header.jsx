import React from 'react'
import './Header.css'
import { useState } from 'react';
import { Link, link } from 'react-scroll'
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    const mobileView=window.innerWidth<=768?true:false; 
    const [open, setclose] = useState(false)
  return (
   <div className="header">
    <div  className="logo">
        <div className='logo-l'>
            <GiWeightLiftingUp/>
        </div>
        <div>
            <ul>
            <li className='logo-heading'>THE</li>
            <li className='logo-heading'>FIT CLUB</li>
        </ul>
        </div>
    </div>
    {open===false && mobileView===true?(
    <div className="hamburger" onClick={()=>{setclose(true);}}>
         <GiHamburgerMenu/>
    </div>
    ):(
    <div className='header-m'>
    <ul className='header-menu'>
        <li >
           <Link
            onClick={()=>{setclose(false);}}
            to='hero'
            spy={true}
            smooth={true}
            >Home</Link>
           </li>
        <li>
           <Link
            onClick={()=>{setclose(false);}}
            to='progress'
            spy={true}
            smooth={true} >Program</Link>
            </li>
        <li>
        <Link
         onClick={()=>{setclose(false);}}
         to='Membership'
         spy={true}
         smooth={true}>Why us</Link></li>
        <li>
        <Link
         onClick={()=>{setclose(false);}}
         to='Plans'
         spy={true}
         smooth={true}> Plans</Link>
        </li>
        <li>
        <Link
         onClick={()=>{setclose(false);}}
        to='testimonials'
        spy={true}
        smooth={true}>Testimonials</Link> </li>
    </ul>
    </div>
    )
}
   </div>
  )
}

export default Header