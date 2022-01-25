import React from "react";
import SvgLogo from "../../svg/Logo";
import { fetchVirusData } from "../../api/virusApi";
import { useEffect, useState } from "react";

function DataAll() {
  const [data, setData] = useState("");

  async function Core() {
    const data = await fetchVirusData();
    setData(data);
  }
  useEffect(() => {
    Core();
  }, []);

  let updatedDate = new Date(data.updated).toLocaleDateString("ro-RO", {
    timeZone: "GMT",
  });

  return (
    <div className="flex items-center flex-col px-5">
      <div className="flex flex-row justify-between w-11/12">
        <div>Datele de azi</div>
        <div>{`Actualizat: ${updatedDate}`}</div>
      </div>

      <div className="bg-gray-50 text-gray-800 w-full md:h-48 h-60 my-3 rounded-2xl flex items-center shadow-xl hover:scale-105 ease-out duration-300">
        <div className="flex flex-col sm:flex-row space-y-3 p-5 w-full">
          <div className="flex items-center w-1/3 ">
            <div className="flex justify-center text-6xl text-justify text-blue-500">
              <SvgLogo />
            </div>
            <div className="flex flex-col pl-5">
              <div className="text-lg">Cazuri</div>
              <div className="text-xl">{data.todayCases}</div>
            </div>
          </div>

          <div className="flex items-center w-1/3 ">
            <div className="text-6xl text-justify text-emerald-500">
              <SvgLogo />
            </div>
            <div className="flex flex-col pl-5">
              <div className="text-lg">Vindecări</div>
              <div className="text-xl">{data.todayRecovered}</div>
            </div>
          </div>

          <div className="flex items-center w-1/3">
            <div className="text-6xl text-justify text-rose-500">
              <SvgLogo />
            </div>
            <div className="flex flex-col pl-5">
              <div className="text-lg">Decese</div>
              <div className="text-xl">{data.todayDeaths}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAll;
