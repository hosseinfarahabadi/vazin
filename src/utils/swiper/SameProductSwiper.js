import React, { useRef, useState } from "react";
import SameProductCard from "../card/SameProductCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper/styleSW.css";

// import required modules
import { Pagination } from "swiper";

export default function SameProductSwiper() {
  const creatImgArr = () => {};
  return (
    <div className="prodItem-Same-Swiper">
      <Swiper
        slidesPerView={4}
        grabCursor={true}
        spaceBetween={0}
        modules={[Pagination]}
        width={1300}
        className="mySwiper"
      >
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic5.png"
            title="بسته بندی قوطی و پت"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic8.png"
            title="پلاستیک رولی"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic2.png"
            title="بسته بندی مواد غذایی"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic7.png"
            title="بسته بندی غذای حیوانات"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic1.png"
            title="نایون پلاستیکی"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic6.png"
            title="رول نایلون شیرینگ"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic3.png"
            title="بسته بندی مواد غذایی"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic8.png"
            title="بسته بندی مواد غذایی"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic1.png"
            title="بسته بندی مواد غذایی"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <SameProductCard
            image="../image/swImg/recomended/pic10.png"
            title="بسته بندی مواد غذایی"
            links="#"
          ></SameProductCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
