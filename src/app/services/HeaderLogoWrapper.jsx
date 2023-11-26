"use client";

import React from "react";
import Image from "next/image";
const HeaderLogoWrapper = ({ logo, label, id, isSelected, onSelect }) => {
  return (
    <div
      className={`flex-col py-4  w-48  px-2 rounded-lg bg-whiteflex items-center justify-center text-[#1C204F] dark:text-[#D4D7E8]   ${isSelected ? "bg-white	 text-[#000]" : ""
        }`}
      onClick={() => onSelect(id)}
    >
      <div className="w-full h-2/5 flex items-center justify-center">
        <Image src={logo} alt={label}
          height={500}
          width={400}
          className="w-full h-full object-cover" >
        </Image>
      </div>
      <div className="mt-2 text-center test-bold select-none text-xl">{label}</div>
    </div>
  );
};

export default HeaderLogoWrapper;
