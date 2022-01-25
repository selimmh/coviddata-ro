import React from "react";
import Data from "../data/data";

function Vax() {
  return (
    <div className="relative flex items-center justify-center w-full flex-row-reverse">
      <div className="opacity-30 md:opacity-100">
        <img
          src={Data.vax.image}
          alt="vaccine"
          srcSet=""
          className="select-none"
        />
      </div>
      <div className="absolute md:static flex flex-col w-10/12">
        <div className="text-3xl md:text-5xl">{Data.vax.title}</div>
        <div className="text-xs md:text-sm pt-5">{Data.vax.description}</div>
        <div className="flex pt-5 justify-center md:justify-start space-x-5">
          <a
            href="https://vaccinare-covid.gov.ro/platforma-programare/"
            target="blank"
          >
            <div className="bg-gray-50 text-gray-800 px-8 py-5 md:px-14 md:py-5 rounded-xl hover:scale-105 ease-out duration-300 shadow-lg hover:text-red-500">
              {Data.vax.button1}
            </div>
          </a>
          <a href="https://vaccinare-covid.gov.ro" target="blank">
            <div className="bg-gray-50 text-gray-800 px-8 py-5 md:px-14 md:py-5 rounded-xl hover:scale-105 ease-out duration-300 shadow-lg hover:text-blue-500">
              {Data.vax.button2}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vax;
