'use client'

import { useState, useEffect } from 'react'
import ThemeSwitcher from 'src/app/ThemeSwitcher'
import Link from 'next/link'
import Logo from '../logo/logo'

const Navbar = () => {

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
        <header  className= {` static w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? ' backdrop-blur-sm shadow-lg' : ''}`}>
            <div>
                <div className="grid grid-cols-5 gap-3 m-2">
                    <div className="col-span-1 m-5 mt-1">
                        <Link href={"/"} ><Logo /></Link>
                    </div>
                    <div className="col-span-3 m-2">
                        <ul className='flex flex-nowrap grow justify-items-stretch items-center'>
                            <li className='w-1/6 '>
                                <Link className='text-lg font-normal hover:font-semibold' href={"/"}>Home</Link>
                            </li>

                            <li className='w-1/6 '>
                                <Link className='text-lg font-normal hover:font-semibold' href={"/about-us"}>About us</Link>
                            </li>

                            <li className='w-1/6 '>
                                <Link className='text-lg font-normal hover:font-semibold' href={"/product"}>Products</Link>
                            </li>

                            <li className='w-1/6 '>
                                <Link className='text-lg font-normal hover:font-semibold' href={"/services"}>Services</Link>
                            </li>

                            <li className='w-1/6 '>
                                <Link className='text-lg font-normal hover:font-semibold' href={"/certificate"}>Certificate</Link>
                            </li>

                            <li className='w-1/6 '>
                                <Link className='text-lg font-normal hover:font-semibold' href={"/contact-us"}>Contact Us</Link>
                            </li>

                            <li>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </div>

                </div>



            </div>
        </ header >
    );
}

export default Navbar;
