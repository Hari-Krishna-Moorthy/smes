"use client";

import React, { useState } from "react";
import Image from "next/image";
import { shipIcon } from "./svg/shipIcon";
import { lapIcon } from "./svg/lapIcon";
import { refrigerationIcon } from "./svg/refrigerationIcon";
import { shipStoreIcon } from "./svg/shipStoreIcon";
import { crewIcon } from "./svg/crewIcon";
import Navbar from "../../components/ui/navbar/navbar1";
import HeaderLogoWrapper from "../services/HeaderLogoWrapper";
import image from "../../assets/logo/shipServices.png";
import { getList, servicesBodyText } from "./helpers";
import Footer from "../../components/ui/footer/footer";
export default function Services() {
  const tabs = [
    { id: 1, showImage: image.src, logo: shipIcon, label: "Ship Repair and Services" },
    { id: 2, showImage: image.src, logo: refrigerationIcon, label: "Refrigeration and Services" },
    { id: 3, showImage: image.src, logo: shipStoreIcon, label: "Ship Store and Equipment" },
    { id: 4, showImage: image.src, logo: crewIcon, label: "Crew Supply" },
    { id: 5, showImage: image.src, logo: lapIcon, label: "IT Support" },
  ];
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <div className="h-20">
        <Navbar activePage={"Services"} />
      </div>
      <div className="flex items-center justify-between flex-wrap p-10 m-6 bg-[#DEE6FB]  dark:bg-[#192054] ">
        {tabs.map((item, index) => (
          <HeaderLogoWrapper
            logo={item.logo}
            label={item.label}
            id={item.id}
            key={index}
            isSelected={selectedId === item.id}
            onSelect={(id) => setSelectedId(id)}
          />
        ))}
      </div>
      <div className="m-12 p-6">
        <p className="text-[#8A9EA8] dark:text-[#D4D7E8]">{servicesBodyText}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg p-8 bg-white dark:bg-dark shadow-services-content border mx-10 border-gray-200 my-10 flex-row flex">
        <div className="">
          <div className="text-black1  font-lexend text-xl font-semibold leading-9">
            {tabs[selectedId - 1].label}
          </div>
          <div class="">
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
