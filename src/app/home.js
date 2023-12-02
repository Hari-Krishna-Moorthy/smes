"use client"

import HomeCarosal from "../components/ui/home/imageCarousel"
import React from 'react';
import bulkerImage from "../assets/home/carosals/bulker.jpg"
import aerialImage from "../assets/home/carosals/aerial-cargo-ship.jpg"
import wellding from "../assets/home/carosals/wellding.jpg"
import EngineRoom from "../assets/home/carosals/engine-room.jpg"
import Gears from "../assets/home/carosals/Gears.jpeg"
import Services from '../components/ui/home/services';
import OurProduct from "src/components/ui/ourproduct/ourproduct"

const Home = () => {

    let CarosalImages = [bulkerImage.src, wellding.src, aerialImage.src, EngineRoom.src, Gears.src];
    const captions = [
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'SINGAPORE MARINE ENGINEERING AND SPARES',
        'SINGAPORE MARINE ENGINEERING AND SPARES',
    ];

    return (
        <div>
            <HomeCarosal images={CarosalImages} captions={captions} />
            <OurProduct />
            <Services />
        </div>
    );
}

export default Home;
