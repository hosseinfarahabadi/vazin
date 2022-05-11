import React, { useRef, useState } from "react";
import CustomerCard from "../../pages/homePage/js/CustomerCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

export default function CorporateSwiper() {
  return (
    <div className="co-wiper-wraper">
      <Swiper
        slidesPerView={6}
        slidesPerGroup={1}
        grabCursor={true}
        spaceBetween={15}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 8,
            spaceBetween: 5,
            width: 1000,
          },
          500: {
            slidesPerView: 8,
            spaceBetween: 5,
            width: 1000,
          },

          // 768: {
          //   slidesPerView: 5,
          //   spaceBetween: 10,
          // },
          // 1024: {
          //   slidesPerView: 5,
          //   spaceBetween: 10,
          // },
        }}
        speed={3000}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
        width={1720}
      >
        <SwiperSlide>
          <div className="co-container">
            <img src="../image/apple.png" className="co-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="co-container">
            <img src="../image/shopee.png" className="co-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="co-container">
            <img src="../image/starbucks.png" className="co-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="co-container">
            <img src="../image/spotify.png" className="co-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="co-container">
            <img src="../image/apple.png" className="co-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="co-container">
            <img src="../image/shopee.png" className="co-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="co-container">
            <img src="../image/starbucks.png" className="co-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="co-container">
            <img src="../image/spotify.png" className="co-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
