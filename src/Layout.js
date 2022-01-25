import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Info";
import VirusData from "./components/VirusData";
import DataAll from "./components/Tables/DataAll";
import DataToday from "./components/Tables/DataToday";
import Symptoms from "./components/Symptoms";
import Vax from "./components/Vax";
import VaxData from "./components/VaxData";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="bg-gray-100 text-gray-800 flex justify-center items-center dark:bg-gray-800 dark:text-gray-100">
      <div className="w-11/12">
        <Navbar />
        <Info />
        <VirusData />
        <DataToday />
        <DataAll />
        <Symptoms />
        <Vax />
        <VaxData />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
