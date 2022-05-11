import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/ProductCatSwiper.css";
// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function ProductCatSwiper() {
  return (
    <div className="mb-cat-swiper">
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        // centeredSlides={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 5,
            // width: 1000,
          },
          550: {
            slidesPerView: 5,
            spaceBetween: 5,
            // width: 1000,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">
              {/* <p className="btn-home-text">شیرینک</p> */}
              شیرینک
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-btn-home typography-bold">
            <Link to="/productPage/ProductItem">ظروف یکبار مصرف</Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
