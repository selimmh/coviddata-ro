import axios from "axios";

const instance = axios.create({
  baseURL: "https://disease.sh/v3/covid-19",
});

export const fetchVirusData = async () => {
  try {
    const { data } = await instance.get("./countries/romania");
    const modifiedData = {
      updated: data.updated,

      cases: data.cases.toLocaleString(),
      recovered: data.recovered.toLocaleString(),
      deaths: data.deaths.toLocaleString(),

      todayCases: data.todayCases.toLocaleString(),
      todayRecovered: data.todayRecovered.toLocaleString(),
      todayDeaths: data.todayDeaths.toLocaleString(),
    };

    return modifiedData;
  } catch (error) {}
};
