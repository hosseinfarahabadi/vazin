import React, { useRef, useState } from "react";
import RecomCard from "./RecomendedCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../css/recommendedSwiper.css";

// import required modules
import { Pagination } from "swiper";
import { Button, Container, useMediaQuery } from "@mui/material";

export default function RecomSwiper() {
  const matches = useMediaQuery("(max-width:500px)");

  return (
    <div className="swiper-wrap-recom">
      <Swiper
        slidesPerView={4}
        grabCursor={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        //   500: {
        //     slidesPerView: 5,
        //     spaceBetween: 10,
        //   },

        //   768: {
        //     slidesPerView: 5,
        //     spaceBetween: 10,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 10,
        //   },
        // }}
        modules={[Pagination]}
        width={1300}
        className="mySwiper"
      >
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic5.png"
            title="بسته بندی قوطی و پت"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic8.png"
            title="پلاستیک رولی"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic2.png"
            title="بسته بندی مواد غذایی"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic7.png"
            title="بسته بندی غذای حیوانات"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic1.png"
            title="نایون پلاستیکی"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic6.png"
            title="رول نایلون شیرینگ"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic3.png"
            title="بسته بندی مواد غذایی"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic8.png"
            title="بسته بندی مواد غذایی"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic1.png"
            title="بسته بندی مواد غذایی"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
        <SwiperSlide>
          <RecomCard
            image="../image/swImg/recomended/pic10.png"
            title="بسته بندی مواد غذایی"
            url="/productPage/ProductItem"
          ></RecomCard>
        </SwiperSlide>
      </Swiper>
      {/* <Button onClick={() => append()}>افزودن محصول</Button> */}
    </div>
  );
}
