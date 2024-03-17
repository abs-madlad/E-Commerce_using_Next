"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import  {SwiperOptions} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Mylinks = () => {
  return (

    <div className='pt-8 lg:pt-11 w-full'>
    <br></br><br></br><br></br>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[130px] w-full md:h-full">
        <SwiperSlide><img src='Ncert.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='winter.jpg'></img></SwiperSlide>
      </Swiper>
    </div>
      
  )
}

export default Mylinks