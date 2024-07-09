import "./App.css";
import Chart from "./components/Chart/Chart";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {

  return (
    <>
      <div>
          <Navbar></Navbar>
      </div>

      <div className="absolute mt-40 ml-40">
        <PriceOptions></PriceOptions>
        <div className="m-20 ml-60">
          <Chart></Chart>
        </div>
        
      </div>

      
      
      

    </>
  );
}

export default App;
