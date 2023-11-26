"use client";

import React, { useState } from "react";
import Image from "next/image";

import repairImg from "../../../assets/services/repair.jpg";
import refrigirationImg from "../../../assets/services/refrigiration.png";
import CrewImg from '../../../assets/services/crew.jpg'
import itSuppotImg from '../../../assets/services/it_support.jpg'
import productImg from '../../../assets/services/products.jpg'

import { shipIcon } from "../svg/shipIcon";
import { lapIcon } from "../svg/lapIcon";
import { refrigerationIcon } from "../svg/refrigerationIcon";
import { shipStoreIcon } from "../svg/shipStoreIcon";
import { crewIcon } from "../svg/crewIcon";
import Navbar from "../../../components/ui/navbar/navbar1";
import HeaderLogoWrapper from "../HeaderLogoWrapper";
import image from "../../../assets/logo/shipServices.png";
import { getList, servicesBodyText } from "../helpers";
import Footer from "../../../components/ui/footer/footer";



export default function Services({params,}) {
  const serviceId = params.id;
  const tabs = [
    { id: 1, showImage: image.src, logo: repairImg.src, label: "Ship Repair and Services" },
    { id: 2, showImage: image.src, logo: refrigirationImg.src, label: "Refrigeration and Heating" },
    { id: 3, showImage: image.src, logo: CrewImg.src, label: "Ship Store and Equipment" },
    { id: 4, showImage: image.src, logo: itSuppotImg.src, label: "Crew Supply" },
    { id: 5, showImage: image.src, logo: productImg.src, label: "IT Support" },
  ];
  console.log(serviceId);
  const [selectedId, setSelectedId] = useState(
    serviceId === undefined ? 1 : Number(serviceId[0])
  );

  return (
    <>
      <div className="h-20">
        <Navbar activePage={"Services"} />
      </div>
      <div className="flex justify-center items-center flex-wrap p-2 mx-4 gap-4 bg-[#DEE6FB] dark:bg-[#192054]">
        {tabs.map((item, index) => (
          <HeaderLogoWrapper
            logo={item.logo}
            label={item.label}
            id={item.id}
            key={index}
            isSelected={selectedId === item.id }
            onSelect={(id) => setSelectedId(id)}
          />
        ))}
      </div>
      <div className="mx-6 my-2 px-6 mt-4">
        <p className="text-[#8A9EA8] dark:text-[#D4D7E8] text-sm">{servicesBodyText}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg p-4 bg-white dark:bg-dark shadow-services-content border mx-10 border-gray-200 my-10 flex-row flex">
        <div className="">
          <div className="text-black1 text-center font-lexend text-xl font-semibold leading-9">
            {tabs[selectedId - 1].label}
          </div>
          <div className="">
            <Image
              className="mx-[10%] p-[5%]"
              src={tabs[selectedId - 1].showImage}
              alt={tabs[selectedId - 1].label}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="max-h-[500px] overflow-y-auto lg:ml-16 mt-2">
          <ul className="list-disc list-inside">
          {getList(selectedId).text.map((item, index) => (
            <div
              className="font-lexend font-normal leading-6 text-base"
              key={index}
            >
              <li className=" dark:text-white">
                {item} 
              </li>
              <br />
            </div>
          ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
