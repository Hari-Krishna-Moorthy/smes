export const metadata = {
  title: 'Certificate',
  description: 'Page description',
}
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from "../../components/ui/footer/footer";
import Navbar from '../../components/ui/navbar/navbar1'
import Certificate1 from '../../assets/certificates/image.png'
import Certificate2 from '../../assets/certificates/image1.png'
import Certificate3 from '../../assets/certificates/image2.png'
import Certificate4 from '../../assets/certificates/image3.png'
import Certificate5 from '../../assets/certificates/image4.png'
import Certificate6 from '../../assets/certificates/image5.png'


export default function Certificate() {
  return (

    <div className="relative">
      <div className="h-20">
        <Navbar activePage={"Certificate"} />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="mt-2 text-3xl text-certi  text-center font-bold dark:text-certidark">Certificates</h2>
        <div className="max-w-sm md:max-w-4xl mx-auto grid gap-9 grid-cols-1 md:grid-cols-3">
          <div className=" max-w-3xl mx-auto mt-10 md:col-auto">
            <div className="relative flex items-start">
              <div className="max-w-sm p-6 bg-certi border border-gray-200 rounded-lg shadow  text-center">
                <Image
                  src={Certificate1}
                  alt=""
                  className='mb-4'
                />
                <a>
                  <h5 className="text-l text-certi font-semibold tracking-tight ">Certificate of Approval by DAS</h5>
                </a>
              </div>
            </div>
          </div>
          <div className=" max-w-3xl mx-auto mt-10 md:col-auto">
            <div className="relative flex items-start">
              <div className="max-w-sm p-6 bg-certi border border-gray-200 rounded-lg shadow  text-center">
                <Image
                  src={Certificate2}
                  alt=""
                  className='mb-4'
                />
                <a>
                  <h5 className="text-l text-certi font-semibold tracking-tight">Nippon Kaiji Kyokai Certificate</h5>
                </a>
              </div>
            </div>
          </div>
          <div className=" max-w-3xl mx-auto mt-10 md:col-auto">
            <div className="relative flex items-start">
              <div className="max-w-sm p-6 bg-certi border border-gray-200 rounded-lg shadow  text-center">
                <Image
                  src={Certificate3}
                  alt=""
                  className='mb-4'
                />
                <a>
                  <h5 className="text-l font-semibold tracking-tight text-certi">Certificate For Heater</h5>
                </a>
              </div>
            </div>
          </div>
          <div className=" max-w-3xl mx-auto mt-0 mb-10 md:col-auto">
            <div className="relative flex items-start">
              <div className="max-w-sm p-6 bg-certi border border-gray-200 rounded-lg shadow  text-center">
                <Image
                  src={Certificate4}
                  alt=""
                  className='mb-4'
                />
                <a>
                  <h5 className="text-l font-semibold tracking-tight text-certi">Nippon Kaiji Kyokai<br></br> Certificate</h5>
                </a>
              </div>
            </div>
          </div>
          <div className=" max-w-3xl mx-auto mt-0 mb-10 md:col-auto">
            <div className="relative flex items-start">
              <div className="max-w-sm p-6 bg-certi border border-gray-200 rounded-lg shadow  text-center">
                <Image
                  src={Certificate5}
                  alt=""
                  className='mb-4'
                />
                <a>
                  <h5 className="text-l font-semibold tracking-tight text-certi">Original Manufacture <br></br>Certificate</h5>
                </a>
              </div>
            </div>
          </div>
          <div className=" max-w-3xl mx-auto mt-0 mb-10 md:col-auto">
            <div className="relative flex items-start">
              <div className="max-w-sm p-6 bg-certi border border-gray-200 rounded-lg shadow  text-center">
                <Image
                  src={Certificate6}
                  alt=""
                  className='mb-4'
                />
                <a>
                  <h5 className="text-l font-semibold tracking-tight text-certi">Certificate of Genuine Spare <br></br> Parts</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>


  )
}