import React, { useContext, useEffect } from "react";
import AppContext from "../providers/AppContext";

function QlikCardTable({kpi, title}) {
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
    <div className="">
      <div className="text-xl border px-2 py-2 mt-2">
        <div className="">
          <span className="">{title}</span>
          <div className="h-[50rem]" id={kpi}></div>

        </div>
      </div>
    </div>
  );
}

export default QlikCardTable