import React from 'react'
import {Navigation, Pagination,Scrollbar,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
    <>
    <Swiper modules={[Navigation,Pagination,Scrollbar,Autoplay]} navigation 
    pagination={{clickable:true}}
    scrollbar={{draggable:true}} autoplay={{delay:1500,pauseOnMouseEnter:true,disableOnInteraction:false}} className='h-[60vh]'>
        <SwiperSlide>
        <img className='w-full h-[100%] object-cover'src=' https://www.emsoftech.com/blog/wp-content/uploads/2025/04/1.jpg'/>
        </SwiperSlide>
        <SwiperSlide><img className='w-full h-[100%] object-cover'src='https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png'/>
        </SwiperSlide>
        <SwiperSlide><img className='w-full h-[100%] object-cover'src='https://p7.hiclipart.com/preview/402/254/469/shopping-centre-retail-online-shopping-shopping-bags-trolleys-bag.jpg'/>
        </SwiperSlide>
    </Swiper>
    </>
  )
}
export default Hero
