import React, { useContext, useEffect } from "react";
import { FaChartArea, FaChartBar, FaChartPie, FaSyringe, FaVirus, FaViruses } from "react-icons/fa";
import AppKpiTItle from "../components/AppKpiTItle";
import AppContext from "../providers/AppContext";


function QlikKpi({kpi, title, chartType}) {
    const app = useContext(AppContext);


    const render = async () => {
      const qlikKpi = kpi 

        app.nbl.render({
          element: document.querySelector("#" + kpi),
          type: "kpi",
          id: qlikKpi,
        });
    }
  
    useEffect(() => {
      if (app.nbl) render();
    
      return () => { };
    }, []); 

  return (
    <div>

      {/* *** 01: FaChartBar *** */}
      {chartType === 1 && 
        <div className="border border-blue-500 rounded mt-2 text-xl mb-2">
          <div className="flex items-center justify-between pr-4">
            <div className="flex items-center">
              <div className="bg-blue-600 h-20 pt-6 w-16 px-3 text-4xl text-white">
                <FaChartBar  />
              </div>
              <div className="ml-2 text-lg">{title}</div>
            </div>
            
            <div className="h-10 w-44" id={kpi}></div>
          </div>
        </div>
      }
      {/* *** 02: FaChartArea *** */}
      {chartType === 2 && 
        <div className="border border-blue-500 rounded mt-2 text-xl mb-2">
          <div className="flex items-center justify-between pr-4">
            <div className="flex items-center">
              <div className="bg-blue-600 h-20 pt-6 w-16 px-3 text-4xl text-white">
                <FaChartArea  />
              </div>
              <div className="ml-2 text-lg">{title}</div>
            </div>
            
            <div className="h-10 w-44" id={kpi}></div>
          </div>
        </div>
      }
      {/* *** 03: FaViruses *** */}
      {chartType === 3 && 
        <div className="border border-red-500 rounded mt-2 text-xl mb-2">
        <div className="flex items-center justify-between pr-4">
          <div className="flex items-center">
            <div className="bg-red-600 h-20 pt-6 w-16 px-3 text-4xl text-white">
              <FaViruses  />
            </div>
            <div className="ml-2 text-lg">{title}</div>
          </div>
          
          <div className="h-10 w-44" id={kpi}></div>
        </div>
      </div>
      }
      {/* *** 04: FaSyringe *** */}
      {chartType === 4 && 
        <div className="border border-green-500 rounded mt-2 text-xl mb-2">
        <div className="flex items-center justify-between pr-4">
          <div className="flex items-center">
            <div className="bg-green-600 h-20 pt-6 w-16 px-3 text-4xl text-white">
              <FaSyringe  />
            </div>
            <div className="ml-2 text-lg">{title}</div>
          </div>
          
          <div className="h-10 w-44" id={kpi}></div>
        </div>
      </div>
      }


      {/* *** 00 *** */}
      {/* <div className="border border-blue-500 rounded mt-2 text-xl mb-2">
        <div className="flex items-center justify-between pr-4">
          <div className="flex items-center">
            <div className="bg-blue-600 h-20 pt-6 w-16 px-3 text-4xl text-white">
              <FaChartArea  />
            </div>
            <div className="ml-2 text-lg">{title}</div>
          </div>
          
          <div className="h-10 w-44" id={kpi}></div>
        </div>
      </div> */}


      {/* <div className="border border-red-500 rounded mt-2 text-xl mb-2">
        <div className="flex items-center justify-between pr-4">
          <div className="flex items-center">
            <div className="bg-red-600 h-20 pt-6 w-16 px-3 text-4xl text-white">
              <FaViruses  />
            </div>
            <div className="ml-2 text-lg">{title}</div>
          </div>
          
          <div className="h-10 w-44" id={kpi}></div>
        </div>
      </div> */}

      <div className="text-xl border px-2 py-2 mt-2 border-red-600 rounded" hidden>
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-2 ">
            <div className="">
              <FaChartPie  />
            </div>
            <div>
              <span className="">{title}</span>
            </div>
          </div>
          {/* <div className="h-10 w-44" id={kpi}></div> */}

        </div>
      </div>
    </div>
  );
}

export default QlikKpi;
