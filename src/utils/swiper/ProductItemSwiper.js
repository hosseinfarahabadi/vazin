import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductItemSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="prodItem-swiper">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/swImg/prodItem/prodItem1.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
