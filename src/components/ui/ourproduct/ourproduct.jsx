"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/effect-coverflow';
import { FreeMode, Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import Gear from "../../../assets/gear.png"
import Europe from "../../../assets/europe.png"
import Korea from "../../../assets/korea.png"

const Ourproduct = () => {

  const products = [
    { name: "European Spare Parts", link: "", image: Europe },
    { name: "Japanese Spare Parts", link: "", image: Gear },
    { name: "Korean Spare Parts", link: "", image: Korea },
    { name: "Chinese Spare Parts", link: "", image: Gear },
  ]

  return (
    <div className="flex items-center justify-center flex-col h-[990px] bg-dark1 dark:bg-light1 mb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 ">
        <h2 className=" mb-8 text-5xl text-light1  text-center font-bold dark:text-dark1 align-middle">Our Products</h2>
        <p className="mt-7 mb-[80px] text-lg text-light1  text-center font-medium dark:text-dark1 align-middle">Our Marine Spare & Equipment
          department provides worldwide supply of Genuine and OEM ship spares, emphasizing quality, competitive pricing, and timely delivery.</p>
      </div>
      <Swiper
        navigation={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={70}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="max-w-[100%] lg:max-w-[100%]">

        {
          products.map((product, index) => {
            return <SwiperSlide key={index} >
              <div className="flex flex-col gap-20 mb-20 max-w-3xl mx-auto mt-10 md:col-auto">
                <div className="relative flex items-start">
                  <div className="max-w-sm p-3 bg-light dark:bg-dark1 border border-light1 rounded-lg  text-center">
                    <Image
                      src={product.image}
                      alt=""
                      className='mb-4'
                    />
                    <a href={product.link}>
                      <h5 className="text-xl mt-5 mb-7 text-certi font-semibold tracking-tight text-light1 dark:text-light1 "> {product.name} </h5>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
      <button type="button" className="mt-10 mb-35 text-dark1 dark:text-light1 bg-light1 dark:bg-dark1  focus:ring-4  font-semibold text-lg rounded text-sm px-20 py-2.5 mr-2 mb-2 ">Explore</button>
    </div>
  );
};

export default Ourproduct;