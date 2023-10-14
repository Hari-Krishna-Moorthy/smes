import React from "react";

import "./logo.css";

import image from "@/asserts/logo/logo.png";

const Logo = () => {
  return <img src={image.src} alt="Image" width={"80%"} height={"70%"} />;
};

export default Logo;
