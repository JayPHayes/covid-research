import React, { useContext, useEffect } from "react";
import AppContext from "../providers/AppContext";


function QlikKpi({kpi, title}) {
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
      <div className="text-xl border px-2 py-2 mt-2">
        <div className="flex items-center justify-between">
          <span className="">{title}</span>
          <span className="h-10 w-44" id={kpi}></span>

        </div>
      </div>
    </div>
  );
}

export default QlikKpi;
