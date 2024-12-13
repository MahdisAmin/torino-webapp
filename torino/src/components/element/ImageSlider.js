"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const ImageSlider = ({ images }) => {
  return (
    <div style={{ width: "689px", height: "379px", margin: "auto" }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} 
        spaceBetween={-30} 
        coverflowEffect={{
          rotate: 0,
          stretch: 180, 
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{
                width: "389px",
                height: "479px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
