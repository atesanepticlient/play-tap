"use client";
import React from "react";

import slider1 from "@/../public/slider/slider-1.jpg";
import slider2 from "@/../public/slider/slider-2.jpg";
import slider3 from "@/../public/slider/slider-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
const HeroSlider = () => {
  return (
    <div className="my-4">
      <Swiper
        spaceBetween={10}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={slider1}
            alt="slider"
            className="w-full aspect-auto rounded-2xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider2}
            alt="slider"
            className="w-full aspect-auto rounded-2xl "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider3}
            alt="slider"
            className="w-full aspect-auto rounded-2xl "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
