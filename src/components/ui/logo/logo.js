"use client"
import React from 'react'

import './logo.css'

import defaultLogo from "@/assets/logo/logo.png";
import whiteLogo from "@/assets/logo/logo-white.png";


const Logo = ({ color }) => {
  if (color === "white") {
    return <img src={whiteLogo.src} alt="SMES logo" width={125} height={50} />;
  } else {
    return <img src={defaultLogo.src} alt="SMES logo" width={125} height={50} />;
  }
};
export default Logo;
