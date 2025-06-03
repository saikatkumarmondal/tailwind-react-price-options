 
import { Suspense } from "react";
import "./App.css";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import Navbar from "./components/Navbar/Navbar";
import ResultCharts from "./components/ResultCharts/ResultCharts";
import ResultChartsDemo from "./components/ResultCharts/ResultChartsDemo";

const fetchPromise = fetch("pricingData.json").then((res) => res.json());
console.log(fetchPromise);
function App() {
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
        {/* <ResultCharts></ResultCharts> */}
        <ResultChartsDemo></ResultChartsDemo>
      </main>
    </>
  );
}

export default App
