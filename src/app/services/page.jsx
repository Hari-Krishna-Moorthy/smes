"use client";

import React, { useState } from "react";
import Image from "next/image";
import { shipIcon } from "./svg/shipIcon";
import { lapIcon } from "./svg/lapIcon";
import { refrigerationIcon } from "./svg/refrigerationIcon";
import { shipStoreIcon } from "./svg/shipStoreIcon";
import { crewIcon } from "./svg/crewIcon";
import Navbar from "../../components/ui/navbar/navbar1";
import "./services.css";
import HeaderLogoWrapper from "./headerLogoWrapper";
import image from "../../assets/logo/shipServices.png";
import { getList, servicesBodyText } from "./helpers";
import Footer from "../../components/ui/footer/footer";
export default function Services() {
  const tabs = [
    { id: 1, logo: shipIcon, label: "Ship Repair and Services" },
    { id: 2, logo: refrigerationIcon, label: "Refrigeration and Services" },
    { id: 3, logo: shipStoreIcon, label: "Ship Store and Equipment" },
    { id: 4, logo: crewIcon, label: "Crew Supply" },
    { id: 5, logo: lapIcon, label: "IT Support" },
  ];
  const [selectedId, setSelectedId] = useState(1);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between flex-wrap m-6 p-6 services">
        {tabs.map((item) => (
          <HeaderLogoWrapper
            logo={item.logo}
            label={item.label}
            id={item.id}
            key={item.id}
            isSelected={selectedId === item.id}
            onSelect={(id) => setSelectedId(id)}
          />
        ))}
      </div>
      <div className="m-12 p-6">
        <p className="text-gray-600">{servicesBodyText}</p>
      </div>
      <div className=" yourClassName p-8 rounded-xl shadow-lg border mx-10 border-gray-200 mt-10 flex-row flex">
        <div className="min-w-max">
          <div className="text-black font-lexend text-xl font-semibold leading-9">
            {tabs[selectedId - 1].label}
          </div>
          <Image
            className="m-10"
            src={image.src}
            alt="Image"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="text-gray-600 max-h-[500px] overflow-y-auto ml-16 mt-2">
            {getList(selectedId).text.map((item, index) => (
              <div
                className="text-gray-700 font-lexend font-normal leading-6 text-base"
                key={index}
              >
                {item}
                <br />
                <br />
              </div>
            ))}
          </p>
        </div>
      </div>
      <Footer />
    
    </>
  );
}
