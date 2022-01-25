import React from "react";
import Data from "../data/data";

function VirusData() {
  return (
    <div className="relative md:static flex items-center justify-center w-full">
      <div className="opacity-30 md:opacity-100">
        <img
          src={Data.virusData.image}
          alt="virus"
          srcSet=""
          className="select-none"
        />
      </div>
      <div className="absolute md:static flex flex-col w-10/12">
        <div className="text-3xl md:text-5xl">{Data.virusData.title}</div>
        <div className="text-xs md:text-sm pt-5">
          {Data.virusData.description}
          <a href="https://disease.sh" target="blank">
            <span className="cursor-pointer text-red-500">disease.sh</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VirusData;
