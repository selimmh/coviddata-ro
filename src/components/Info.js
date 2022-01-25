import React from "react";
import Data from "../data/data";

function Info() {
  return (
    <div className="relative md:static flex items-center justify-center w-full flex-row-reverse ease-in duration-300 transition-all pt-10">
      <div className="opacity-30 md:opacity-100">
        <img
          src={Data.info.image}
          srcSet=""
          alt="tracing"
          className="select-none"
        />
      </div>
      <div className="absolute md:static flex flex-col w-10/12">
        <div className="md:text-5xl text-3xl">{Data.info.title}</div>
        <div className="text-xs md:text-sm pt-5">{Data.info.description}</div>
      </div>
    </div>
  );
}

export default Info;
