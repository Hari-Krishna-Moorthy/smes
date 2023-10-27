"use client";

import React from "react";

const HeaderLogoWrapper = ({ logo, label, id, isSelected, onSelect, key }) => {
  return (
    <div
      key={key}
      className={`flex-col p-6 rounded-lg bg-whiteflex items-center justify-center ${
        isSelected ? "bg-white" : ""
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="w-full h-2/5 flex items-center justify-center">
        {logo}
      </div>
      <div className="mt-4 text-center select-none">{label}</div>
    </div>
  );
};

export default HeaderLogoWrapper;
