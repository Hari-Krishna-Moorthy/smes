import React from 'react'

import './logo.css'

import image from '../../../assets/logo/logo.png'

const Logo = () => {
  return (
    <div className="text font-semibold m2">
      <div className="flex items-center">
        <p className="">SM</p>
        <img src={image.src} alt="Image" width={'50'} height={'50%'} />
        <p className="">S</p>
      </div>
    </div>
  )
}

export default Logo
