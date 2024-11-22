import  React from 'react'
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import DataReview from '../../Data/DataReview'
import {motion, spring} from 'framer-motion'
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { PiDotsThreeBold } from "react-icons/pi";
const Review = () => {
  const mobileView=window.innerWidth<=768?true:false;
  return (
    <div className="testimonials">
        <div className="testimonials-head">
            <span className='stroke-text'>What </span>
            <span>they say </span>
            <span className='stroke-text'>about us</span>
        </div>
        <Swiper
        effect='coverflow'
        slidesPerView={mobileView?'2':'3'}
        spacebetween={mobileView?'15':40}
        slidesPerGroup={1}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        loopFillGroupwithBlank={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className='swiper_container'
        // navigation={true}
        pagination={true}
        Pagination={{el: '.swiper-pagination', clickable: true,}}
        Navigation={{Nel:'.swiper-button-next',
          Pel:'.swiper-button-prev',
          clickable: true
        }}
        
        >
            {DataReview.map((prop)=>(
             <SwiperSlide>
            <div className="card-details">
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className='review-image'
            >
            <img src={prop.image} alt='People in gym' ></img>
            </motion.div>
            <span  className='name'>Name: {prop.name}</span>
            <span>Status : {prop.status} </span>
            <span className='review'>Review : {prop.review} </span>
            </div>
            </SwiperSlide>
         ))} 
         {/* <div className='controler'></div>
         <div className='swiper-button-next'><IoIosArrowForward/></div>
         <div className='swiper-button-pre'><IoIosArrowBack/></div>
         <div className='swiper-pagination'><PiDotsThreeBold /></div> */}
           </Swiper>
    </div>
  )
}

export default Review