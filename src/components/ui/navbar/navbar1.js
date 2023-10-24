"use client"

import React, { useState, useEffect } from "react";
import ThemeSwitcher from "src/app/ThemeSwitcher";
import Logo from "../logo/logo";
import Link from 'next/link'

function Navbar1({ activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.window.scrollY > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <nav className={`fixed w-full  z-20 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? ' border-black border-b-1 backdrop-blur-sm ' : ''} flex items-center justify-between flex-wrap p-6`}>
      <div className="flex items-center flex-shrink-0 text-white mr-72">
        <Logo />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link className={`text-lg font-semibold hover:font-bold block mt-4 mx-4 lg:inline-block lg:mt-0  mr-4 ${activePage == 'Home' ? 'border-b-4 rounded border-blue-800' : ''} `} href={"/"}>Home</Link>
          <Link className={`text-lg font-semibold hover:font-bold block mt-4 mx-4 lg:inline-block lg:mt-0  mr-4 ${activePage == 'About Us' ? 'border-b-4 rounded border-blue-800' : ''} `} href={"/aboutus"}>About us</Link>
          <Link className={`text-lg font-semibold hover:font-bold block mt-4 mx-4 lg:inline-block lg:mt-0  mr-4 ${activePage == 'Products' ? 'border-b-4 rounded border-blue-800' : ''} `} href={"/products"}>Products</Link>
          <Link className={`text-lg font-semibold hover:font-bold block mt-4 mx-4 lg:inline-block lg:mt-0  mr-4 ${activePage == 'Services' ? 'border-b-4 rounded border-blue-800' : ''} `} href={"/services"}>Services</Link>
          <Link className={`text-lg font-semibold hover:font-bold block mt-4 mx-4 lg:inline-block lg:mt-0  mr-4 ${activePage == 'Certificate' ? 'border-b-4 rounded border-blue-800' : ''} `} href={"/certificate"}>Certificate</Link>
          <Link className={`text-lg font-semibold hover:font-bold block mt-4 mx-4 lg:inline-block lg:mt-0  mr-4 ${activePage == 'Contact Us' ? 'border-b-4 rounded border-blue-800' : ''} `} href={"/contact"}>Contact Us</Link>
        </div>
        <div className="block mt-4  lg:inline-block lg:mt-0  mr-4">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
export default Navbar1;
