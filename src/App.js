import { useState } from "react";
import { FaBars, FaSyringe, FaVirus } from "react-icons/fa";
import AppLogo from "./components/AppLogo";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CovidCases from "./pages/CovidCases";
import CovidVaccines from "./pages/CovidVaccines";
import AppMenu from "./components/AppMenu";
import Settings from "./pages/Settings";


function App() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <AppMenu 
          isMenu={isMenu} 
          setIsMenu={setIsMenu}
        />
        <div className="mx-auto lg:ml-80">
          <div className="fixed top-0 left-0 right-0">
            <div className="bg-gray-200  p-4 flex items-center justify-between ">
              <AppLogo />
              <button onClick={() => setIsMenu(!isMenu)} >
                <div className="bg-orange-700 p-2 rounded text-white  lg:hidden ">
                  <FaBars  />
                </div>
              </button>
              
            </div>

            <div className="bg-gray-100 p-2  border-b-2 shadow-md">Qlik Search Bar</div>
          </div>

          <div className="mt-[90px] p-6">
            <Routes>
              <Route path="/" element={ <Home /> }  />
              <Route path="/covidVaccines" element={ <CovidVaccines /> }  />
              <Route path="/covidCases" element={ <CovidCases /> }  />

              <Route path="/settings" element={ <Settings /> }  />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
