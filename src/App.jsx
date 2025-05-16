import { useState } from "react";
import WeatherApp from "./Components/WeatherApp";
import Home from "./pages/Home";

function App() {
  const [activeApps, setActiveApps] = useState({
    susank: false,
    prajwal: false,
  });

  const toggleApp = (app) => {
    setActiveApps((prev) => ({
      ...prev,
      [app]: !prev[app],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br p-8">
      {/* <div className="max-w-6xl mx-auto space-y-12"> */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-bold text-sky-900 drop-shadow-md">
          Weather Apps Collection
        </h1>

        <div className="flex gap-6 flex-wrap justify-center">
          <button onClick={() => toggleApp("susank")}>
            {activeApps.susank ? "Hide Susank's App" : "Show Susank's App"}
          </button>

          <button onClick={() => toggleApp("prajwal")}>
            {activeApps.prajwal ? "Hide Prajwal's App" : "Show Prajwal's App"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-25">
        {activeApps.susank && (
          <div
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-4 border-indigo-500
                          transition-all duration-300 h-fit "
          >
            <div className="flex justify-between items-center  ">
              <h2 className="text-3xl font-bold p-2 ">
                Susank Weather App
              </h2>
              <button onClick={() => toggleApp("susank")}>x</button>
            </div>
            <WeatherApp />
          </div>
        )}

        {activeApps.prajwal && (
          <div
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-4 border-indigo-500
                          transition-all duration-300 h-fit "
          >
            <div className="flex justify-between items-center ">
              <h2 className="  text-3xl font-bold p-2  ">
                Prajwal Weather App
              </h2>
              <button onClick={() => toggleApp("prajwal")}>x</button>
            </div>
            <Home />
          </div>
        )}
      </div>

      {!activeApps.susank && !activeApps.prajwal && (
        <div className="text-center py-20 animate-pulse">
          <p className="text-2xl text-sky-800/60 font-medium">
            Select an app to get started...
          </p>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}

export default App;
