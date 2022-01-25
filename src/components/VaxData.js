import React, { useEffect, useState } from "react";
import Data from "../data/data";
import { fetchVaxData } from "../api/vaxApi";

function VaxData() {
  const [vaxData, setVaxData] = useState("");

  async function VaxData() {
    const vaxData = await fetchVaxData();
    setVaxData(vaxData);
  }
  useEffect(() => {
    VaxData();
  }, []);

  return (
    <div className="relative md:static flex items-center justify-center w-full">
      <div className="opacity-30 md:opacity-100">
        <img
          src={Data.vaxData.image}
          alt="safety"
          srcSet=""
          className="select-none"
        />
      </div>
      <div className="absolute md:static flex flex-col w-10/12">
        <div className="text-xl md:text-3xl">
          Până astăzi, în România au fost administrate
          <span className="text-emerald-500"> {vaxData.timeline} </span>doze de
          vaccin. Ajută-ne să ajungem la mai mulți oameni.
        </div>
      </div>
    </div>
  );
}

export default VaxData;
