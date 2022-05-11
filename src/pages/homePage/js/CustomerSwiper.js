import React, { useRef, useState } from "react";
import CustomerCard from "./CustomerCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/customerSwiper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";

export default function HeroSwiper() {
  return (
    <div className="customer-wiper-wraper">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        grabCursor={true}
        spaceBetween={15}
        navigation={true}
        // centeredSlides={true}
        freeMode={true}
        rewind={true}
        // centerInsufficientSlides={true}
        // centeredSlidesBounds={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
        // width={1720}
      >
        {/* <div className="blur-swiper-right"></div>
        <div className="blur-swiper-left"></div> */}
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic.png"></CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic1.png"></CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic2.png"></CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic3.png"></CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic1.png"></CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic.png"></CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic1.png"></CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic2.png"></CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard image="../image/swImg/recomended/pic3.png"></CustomerCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
