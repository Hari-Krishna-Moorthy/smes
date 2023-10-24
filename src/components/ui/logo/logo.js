"use client"
import React from 'react'

import './logo.css'

import defaultLogo from "../../../assets/logo/logo.png"
import whiteLogo from "../../../assets/logo/logo-white.png"
import Image from 'next/image'


const Logo = ({ color }) => {
  if (color === "white") {
    return <Image src={whiteLogo.src} alt="SMES logo" width={125} height={50} />;
  } else {
    return <Image src={defaultLogo.src} alt="SMES logo" width={125} height={50} />;
  }
};
export default Logo;
