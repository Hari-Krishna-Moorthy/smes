"use client";

import React from "react";

const HeaderLogoWrapper = ({ logo, label, id, isSelected, onSelect }) => {
  return (
    <div
      className={`flex-col py-10 px-6 rounded-lg bg-whiteflex items-center justify-center text-[#1C204F] dark:text-[#D4D7E8]   ${
        isSelected ?  "bg-white	 text-[#000]" : ""
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="w-full h-2/5 flex items-center justify-center">
        {logo}
      </div>
      <div className="mt-4 text-center select-none text-xl">{label}</div>
    </div>
  );
};

export default HeaderLogoWrapper;
