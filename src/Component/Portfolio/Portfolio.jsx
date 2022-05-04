import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from "swiper/react"

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import ParQ from '../../img/ParQ.png'
import BookStore from '../../img/BookStore.png'
import Recipe from '../../img/Recipe.png'
import Clinical from '../../img/Clinical.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="awesome"> {/*Heading */}
        <span>Project</span>
        <span>Academic Projects</span></div>      
                
        {/*Slider*/}

        <Swiper
         spaceBetween={10}
         slidesPerView={2}
         grabCursor={true}
         
         className="portfolio-slider"
         >
            <SwiperSlide>
                <span>ParQ: <br/>Parking Mobile App</span>
                <img src={ParQ} alt="1" />
            </SwiperSlide>
            <SwiperSlide>
                <span>Himalayan Taste:<br/> Restaurant Ordering Website</span>
                <img src={Recipe} alt="2" />
            </SwiperSlide>
            <SwiperSlide>
                <span>Book Store: <br/>eCommurse Website</span>
                <img src={BookStore} alt="3" />
            </SwiperSlide>   
            <SwiperSlide>
                <span>Beyond Telemedicine: <br/>Nursing Clinical </span>
                <img src={Clinical} alt="4" />
            </SwiperSlide>
        </Swiper> 
    </div>
  )
}
export default Portfolio;