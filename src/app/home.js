"use client"

import HomeCarosal from  "../components/ui/home/imageCarousel"
import React from 'react';
import bulkerImage from "../assets/home/carosals/bulker.jpg"
import Services from '../components/ui/home/services';
import Aboutus from "src/components/ui/aboutus/aboutus";
import OurProduct from "src/components/ui/ourproduct/ourproduct"

const Home = () => {

    let CarosalImages = [bulkerImage.src, bulkerImage.src];
    const captions = [
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'Singapore Marine Engineering and Spares',
      ];

    return (
        <div>
            <HomeCarosal  images={CarosalImages} captions={captions} />
            <OurProduct/>
            <Services />
            <Aboutus/>
        </div>
    );
}

export default Home;
