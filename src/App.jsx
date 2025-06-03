 
import { Suspense } from "react";
import "./App.css";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import Navbar from "./components/Navbar/Navbar";
import ResultCharts from "./components/ResultCharts/ResultCharts";
import ResultChartsDemo from "./components/ResultCharts/ResultChartsDemo";
import axios from "axios";
import MarksCart from "./components/MarksCart/MarksCart";

const fetchPromise = fetch("pricingData.json").then((res) => res.json());
const marksPromise = axios.get("marksData.json");
function App() {
  // https:github.com/brillout/awesome-react-components?tab=readme-ov-file
  // 🚀 Absolutely Awesome React Components & Libraries

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }>
          <PricingOptions fetchPromise={fetchPromise}></PricingOptions>
        </Suspense>
        <Suspense fallback="loading loading-spinner loading-lg">
          <MarksCart marksPromise={marksPromise}></MarksCart>
        </Suspense>

        {/* <ResultCharts></ResultCharts> */}
        <ResultChartsDemo></ResultChartsDemo>
      </main>
    </>
  );
}

export default App
