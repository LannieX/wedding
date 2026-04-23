import React from "react";

const Theme = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 tracking-widest uppercase bg-gray-100 h-fit w-full pt-5 pb-5">
      <div className="w-full flex flex-row items-center justify-center gap-2">
        <div className="bg-[#cb9895] w-4 h-4 rounded-full" />
        <div className="bg-[#e5afcf] w-4 h-4 rounded-full" />
        <div className="bg-[#e2ceb2] w-4 h-4 rounded-full" />
        <div className="bg-[#60412c] w-4 h-4 rounded-full" />
      </div>
      <p className="text-[16px] text-[#b7789c]">WEDDING COLOR</p>
    </div>
  );
};

export default Theme;
