import React from 'react'
import './Programs.css'
import dataprograms from '../../Data/DataProgram.js'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';
const Programs = () => {
  return (
    <div className="progress">
        <div className="program-header">
            <span >Explore our</span>
            <span className='stroke-text'>Programs</span>
            <span>to shape you</span>
        </div>
        <div className="cards">
            {dataprograms.map((pro)=>(
                <div className="cards-data">
                    {pro.image}
                    <span>{pro.heading}</span>
                    <span>{pro.Details}</span>
                    <div className='Join-now'>
                        <span>
                            <Link
                    to='right-s'
                    spy={true}
                    smooth={true} className='join'>Join now 
                    </Link>
                    </span> <Link
                    to='right-s'
                    spy={true}
                    smooth={true}className='join-a' ><FaArrowRight/> </Link></div>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default Programs