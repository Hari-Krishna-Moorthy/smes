import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const ImageCarousel2 = ({ images, captions }) => {
    return (
        <div >
            <Swiper
                style={{
                    '--swiper-navigation-color': '#000',
                    '--swiper-pagination-color': '#000',
                }}
                zoom={true}
                navigation={true}
                parallax={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Zoom, Navigation, Pagination, Autoplay]}
            >
                {
                    images.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white">
                                <p className="text-[24px] sm:text-[48px] lg:text-[64px] font-bold text-center" style={{ padding: "0px 20%" }}>
                                    {captions[index]}
                                </p>
                            </div>
                            <div className="swiper-zoom-container">
                                <Image alt={captions[index]} width={10000} height={10000} src={item} />
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}

export default ImageCarousel2;
