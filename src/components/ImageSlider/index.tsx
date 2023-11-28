'use client'
import React, { useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import Preview1 from '../../assets/products/preview-1.jpg';
import Preview2 from '../../assets/products/preview-2.jpg';
import Preview3 from '../../assets/products/preview-3.jpg';
import Preview4 from '../../assets/products/preview-4.jpg';
import Preview5 from '../../assets/products/preview-5.jpg';
import Preview6 from '../../assets/products/preview-6.jpg';

function App() {
  const slides = [
    {
      src: Preview1,
    },
    {
      src: Preview2,
    },
    {
      src: Preview3,
    },
    {
      src: Preview4,
    },
    {
      src: Preview5,
    },
    {
      src: Preview6,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const renderImage = () =>
  (
    <Image
      src={slides[currentIndex].src!}
      width={1000}
      height={1000}
      alt=""
    />
  )

  return (
    <div className="max-w-[1400px] h-[300px] w-full m-auto py-4 px-4 relative group">
      {renderImage()}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon className="h-6 w-6 " onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon className="h-6 w-6" onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2 gap-1">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              width={'0.7rem'}
              className={`dark:${slideIndex === currentIndex
                ? 'fill-blue-800'
                : 'fill-primary-light'
                } ${slideIndex === currentIndex
                  ? 'fill-blue-800'
                  : 'fill-neutral-800'
                }`}
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
