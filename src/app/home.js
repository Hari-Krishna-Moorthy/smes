"use client"

import HomeCarosal from "../components/ui/home/imageCarousel"
import React from 'react';
import bulkerImage from "../assets/home/carosals/bulker.jpg"
import aerialImage from "../assets/home/carosals/aerial-cargo-ship.jpg"
import topViewbulker from "../assets/home/carosals/top-view-bulker.jpg"
import Services from '../components/ui/home/services';
import Aboutus from "src/components/ui/aboutus/aboutus";
import OurProduct from "src/components/ui/ourproduct/ourproduct"

const Home = () => {

    let CarosalImages = [bulkerImage.src, aerialImage.src, topViewbulker.src];
    const captions = [
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'SINGAPORE MARINE ENGINEERING AND SPARES',
    ];

    return (
        <div>
            <HomeCarosal images={CarosalImages} captions={captions} />
            <OurProduct />
            <Services />
            <Aboutus />
        </div>
    );
}

export default Home;
