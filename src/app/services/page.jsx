"use client";

import React, { useState } from "react";
import { shipIcon } from "./svg/shipIcon";
import { lapIcon } from "./svg/lapIcon";
import { refrigerationIcon } from "./svg/refrigerationIcon";
import { shipStoreIcon } from "./svg/shipStoreIcon";
import { crewIcon } from "./svg/crewIcon";
import Navbar from "@/components/ui/navbar/navbar1";
import "./services.css";
import HeaderLogoWrapper from "./headerLogoWrapper";
import image from "@/assets/logo/shipServices.png";
import { getList } from "./helpers";
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
        <p className="text-gray-600">
          We SMES serve the Marine Industry in a most efficient and cost
          effective way. Our team comprises of Marine Engineers with a highly
          skilled work force with collective experience of more than 25 year.
          Our workshop is well equipped with all cutting edge technology. We
          carry out various jobs like overhauls and repair for Generators,
          Pumps, Purifiers, Compressors and Turbocharge in our workshop and on
          board overhaul for Main Engines. We provide excellent Quality Service
          to ShipOwners, ShipManagers and ShipYards to cater all there
          operational needs. We have a total transparency based feedback system
          with our customer to assist us no continually innovate. We can provide
          repairs such as afloat ship repair, Workshop repair, Piping works,
          Boiler cleaning, new machinery installation, Fabrication. Hull repairs
          etc. We can provide services such as Marine Surveying, Pre Purchase
          Survey, Consultancy, Bunker surveys, De-slopping, De-mucking etc.
          Through our experience in the Marine industry we have short listed and
          implemented into our company structure and policy. With our experience
          & knowledge in service sector we are poised to be a customer oriented
          firm.
        </p>
      </div>
      <div className=" yourClassName p-8 rounded-xl shadow-lg border mx-10 border-gray-200 mt-10 flex-row flex">
        <div className="min-w-max">
          <div className="text-black font-lexend text-xl font-semibold leading-9">
            {tabs[selectedId - 1].label}
          </div>
          <img className="m-10" src={image.src} alt="Image" />
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
    </>
  );
}
