"use client"

import HomeCarosal from '@/components/ui/carousel/imageCarousel';
import React from 'react';

import image1 from "@/assets/home/carosals/bulker.jpg"


const Home = () => {

    let CarosalImages = [image1.src, image1.src];
    const captions = [
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'Singapore Marine Engineering and Spares',
      ];

    return (
        <div>
            <HomeCarosal  images={CarosalImages} captions={captions} />
        </div>
    );
}

export default Home;
