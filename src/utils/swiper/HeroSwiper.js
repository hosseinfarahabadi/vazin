import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function HeroSwiper() {
  return (
    <div className="swiper-wrap-hero">
      <Swiper
        className="mySwiper"
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        loop={true}
      >
        {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
        <SwiperSlide>
          <img src="/image/BannerPic1.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/BannerPic2.png" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/BannerPic1.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/BannerPic2.png" alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
