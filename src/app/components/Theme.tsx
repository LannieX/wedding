import React from "react";

const Theme = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 tracking-widest uppercase bg-gray-100 h-fit w-full pt-5 pb-5">
      <div className="w-full flex flex-row items-center justify-center gap-2">
        <div className="bg-[#dbc6af] w-4 h-4 rounded-full" />
        <div className="bg-[#aa6b47] w-4 h-4 rounded-full" />
        <div className="bg-[#8c866e] w-4 h-4 rounded-full" />
        <div className="bg-[#e2c4c4] w-4 h-4 rounded-full" />
      </div>
      <p className="text-[16px] text-[#825e28]">WEDDING COLOR</p>
    </div>
  );
};

export default Theme;
