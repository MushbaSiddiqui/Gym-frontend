import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll';
import { SiAdidas } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="main-footer">
        <div className='footer-line'>
          <div className="footer-details">
          <div className="comming-soon">
          <span>Comming soon on</span>
          <div>
          <FaSquareFacebook/>
          </div>
          <div>
          <FaSquareInstagram/>
          </div>
          </div>
          <div className="company">
            <span>The Fit Club</span>
            <a href="">
           <Link
            to='hero'
            spy={true}
            smooth={true}
            >Home</Link>
            </a>
            <a href="">
            <Link
            to='progress'
            spy={true}
            smooth={true} >Program</Link>
            </a>
            <a href="">
            <Link
         to='Membership'
         spy={true}
         smooth={true}>Why us</Link>
            </a>
            <a href="">
            <Link
         to='Plans'
         spy={true}
         smooth={true}> Plans</Link>
            </a>
            <a href="">
            <Link
        to='testimonials'
        spy={true}
        smooth={true}>Testimonials</Link>
            </a>
          </div>
          <div className="partners">
          <span>Our Partners</span>
          <div>
          <SiAdidas/>
          <span> Adidas</span>
          </div>
          <div>
          <SiNike/>
          <span> Nike</span>
          </div>
        </div>
        <div className="contact">
          <span>Contact</span>
          <span><a href="">Join us</a></span>
          <span>Contact: +923667889901 </span>
          <span>Address: Barley Street:04 Axe tower, London</span>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Footer