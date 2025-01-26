import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import one from "../../public/slide1.png";
import two from "../../public/slide2.png";

export default function HeroSsectionSlider() {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-8/12 mx-auto rounded-md ">
        <SwiperSlide>
          <img 
          className="h-[65vh] object-cover"
          src={one} alt="slider-image" />
        </SwiperSlide>

        <SwiperSlide>
          <img
          className="h-[65vh] object-cover"
          src={two} alt="Slider-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
