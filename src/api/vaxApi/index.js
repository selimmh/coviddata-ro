import axios from "axios";

const vaxData = axios.create({
  baseURL: "https://disease.sh/v3/covid-19/vaccine/coverage/countries/romania",
});

function formatDate(today) {
  var month = today.getMonth();
  var day = today.getDate().toString();
  var year = today.getFullYear();
  year = year.toString().substr(-2);
  month = (month + 1).toString();
  return month + "/" + day + "/" + year;
}
var today = new Date();
var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

var todayDate = formatDate(today);
var yesterdayDate = formatDate(yesterday);

export const fetchVaxData = async () => {
  try {
    const { data } = await vaxData.get("");
    const modifiedData = {
      country: data.country,
      timeline: data.timeline[(todayDate, yesterdayDate)].toLocaleString(),
    };

    return modifiedData;
  } catch (error) {}
};
