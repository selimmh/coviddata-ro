import React from "react";
import Data from "../data/data";

function Symptoms() {
  return (
    <div className="flex flex-col py-10 w-full">
      <div className="flex justify-center text-3xl md:text-5xl py-10">
        Simptome COVID
      </div>

      <div className="flex flex-row justify-between px-4">
        <div className="bg-gray-50 shadow-xl w-30% rounded-lg md:rounded-2xl flex flex-col items-center hover:scale-105 ease-out duration-300">
          <div className="p-3 text-sm md:text-lg font-medium text-gray-800">
            {Data.symptoms.symptom1.name}
          </div>
          <img src={Data.symptoms.symptom1.image} alt="cough" srcSet="" />
        </div>
        <div className="bg-gray-50 shadow-xl w-30% rounded-lg md:rounded-2xl flex flex-col items-center hover:scale-105 ease-out duration-300">
          <div className="p-3 text-sm md:text-lg font-medium text-gray-800">
            {Data.symptoms.symptom2.name}
          </div>
          <img src={Data.symptoms.symptom2.image} alt="fever" srcSet="" />
        </div>
        <div className="bg-gray-50 shadow-xl w-30% rounded-lg md:rounded-2xl flex flex-col items-center hover:scale-105 ease-out duration-300">
          <div className="p-3 text-sm md:text-lg font-medium text-gray-800">
            {Data.symptoms.symptom3.name}
          </div>
          <img src={Data.symptoms.symptom3.image} alt="headache" srcSet="" />
        </div>
      </div>
    </div>
  );
}

export default Symptoms;
