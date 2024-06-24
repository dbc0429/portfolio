import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectList } from '../helpers/ProjectList';


// Import Swiper styles
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '../assets/scss/projects.scss'; // Your custom SCSS file

// import required modules

export default function App() {
  return (
    <>

      <div className='projects'>
        <div className='container-fluid mx-auto spacer'>
          <div className='sub-title-container text-center mb-10'>
            <p className='subTitle'> ABOUT MY  </p>
            <h2 className='highlight text-5xl'> Projects </h2>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            navigation={false}
            pagination={{ clickable: true }}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
            }}
          >
            {ProjectList.map((item, idx) => (
              <SwiperSlide key={idx}>
                <a href={item.link} target="_blank">
                  <img src={item.img} alt={item.name} />
                  <p>{item.name}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
