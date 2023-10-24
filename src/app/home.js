"use client"

import HomeCarosal from  "../components/ui/home/imageCarousel"
import React from 'react';

import bulkerImage from "../assets/home/carosals/bulker.jpg"
import Services from '../components/ui/home/services';


const Home = () => {

    let CarosalImages = [bulkerImage.src, bulkerImage.src];
    const captions = [
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'Singapore Marine Engineering and Spares',
      ];

    return (
        <div>
            <HomeCarosal  images={CarosalImages} captions={captions} />
            <Services />
        </div>
    );
}

export default Home;
