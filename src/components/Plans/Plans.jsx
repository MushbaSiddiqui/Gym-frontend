import React from 'react'
import './Plans.css'
import { IoMdCheckboxOutline } from "react-icons/io";
import { Link } from 'react-scroll';
const Plans = () => {
  return (
    <div className='Plans'>
        <div className='plans-heading'>
        <span>Our </span>
        <span className='stroke-text'> Pricing </span>
        <span> Plans</span>
        </div>
        <div className='plans-card'>
            <div className='card'>
                <div><span>Basic Plan</span></div>
                <span >$160.00</span><span>/month</span>
                <div className='line'></div>
                <p><IoMdCheckboxOutline/> Get access to all gym classes</p>
                <p><IoMdCheckboxOutline/> Unlimited yoga classes</p>
                <p><IoMdCheckboxOutline/> Use of lockers</p>
                <Link
                    to='right-s'
                    spy={true}
                    smooth={true}>
                      <button className='card-btn'>Select Plan</button>
                      </Link>
            </div>
            <div className='card'>
             <div><span>Premium Plan</span></div>
               <span >$200.00</span>
               <span>/month</span>
               <div  className='btnn'>Recommended</div>
                <div className='line'></div>
                <p><IoMdCheckboxOutline/> Access to all gym classes</p>
                <p><IoMdCheckboxOutline/> Unlimited yoga classes</p>
                <p><IoMdCheckboxOutline/> Use of lockers</p>
                <p><IoMdCheckboxOutline/> Weekday pool access</p>
                <p><IoMdCheckboxOutline/> 1 free gym t-shirt</p>
                <p><IoMdCheckboxOutline/> 20% discount on all gym products</p>
                <Link
                    to='right-s'
                    spy={true}
                    smooth={true}>
                <button>Select Plan</button>
                </Link>
            </div>
            <div className='card'>
            <div><span>VIP Plan</span></div>
               <span>$320.00</span><span>/month</span>
                <div className='line'></div>
                 <p><IoMdCheckboxOutline/> Access to all gym classes</p>
                 <p><IoMdCheckboxOutline/> Unlimited yoga classes</p>
                <p><IoMdCheckboxOutline/> Use of lockers</p>
                <p><IoMdCheckboxOutline/> Pool access 6 days a week</p>
                <p><IoMdCheckboxOutline/> 1 free gym t-shirt</p>
                <p><IoMdCheckboxOutline/> 30% discount on all gym products</p>
                <p><IoMdCheckboxOutline/> Personal Trainer for 3 days a week</p>
                <Link
                    to='right-s'
                    spy={true}
                    smooth={true}>
                <button className='card-btn'>Select Plan</button>
                </Link>
            </div>
        </div>

    </div>

  )
}

export default Plans