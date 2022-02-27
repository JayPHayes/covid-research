import { useContext, useEffect, useState } from "react";
import AppProvider from "./providers/AppProvider";
import { FaBars, FaSyringe, FaVirus } from "react-icons/fa";
import AppLogo from "./components/AppLogo";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CovidCases from "./pages/CovidCases";
import CovidVaccines from "./pages/CovidVaccines";
import PowerBi from "./pages/PowerBi";
import AppMenu from "./components/AppMenu";
import Settings from "./pages/Settings";
import TestChart from "./pages/TestChart";
import QlikSearch from "./components/QlikSearch";
import PowerBipad from "./pages/PowerBIpad";


function App() {
  const [isMenu, setIsMenu] = useState(false);


  return (
    <div>
      <BrowserRouter>
        <AppMenu 
          isMenu={isMenu} 
          setIsMenu={setIsMenu}
        />
        <AppProvider>
          <div className="mx-auto lg:ml-80">
            <div className="fixed top-0 left-0 right-0 z-20">

              <div className="bg-gray-200  p-4 flex items-center justify-between ">
                <AppLogo />
                <button onClick={() => setIsMenu(!isMenu)} >
                  <div className="bg-orange-700 p-2 rounded text-white  lg:hidden ">
                    <FaBars  />
                  </div>
                </button>
              </div>
              <QlikSearch   />


              {/* <div className="bg-red-600 p-2  border-b-2 shadow-md h-32" id="chartSearch"> XXXXXX</div> */}
            </div>

            <div className="mt-[90px] p-6">
              <Routes>
                <Route path="/" element={ <Home /> }  />
                <Route path="/covidVaccines" element={ <CovidVaccines /> }  />
                <Route path="/covidCases" element={ <CovidCases /> }  />
                <Route path="/powerbi" element={ <PowerBi /> }  />
                <Route path="/powerbipad" element={ <PowerBipad /> }  />

                <Route path="/settings" element={ <Settings /> }  />
                <Route path="/testcharts" element={ <TestChart /> }  />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>

        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
