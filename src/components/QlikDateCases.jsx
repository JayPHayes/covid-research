import React, { useContext, useEffect } from "react";
import AppContext from "../providers/AppContext";

function QlikDateCases({type}) {
  const app = useContext(AppContext);
  const render = async () => {
      app.nbl.render({
        element: document.querySelector("#qlikid1"),
        type: "kpi",
        id: 'XejAChA',
      });
      app.nbl.render({
        element: document.querySelector("#qlikid2"),
        type: "kpi",
        id: 'EhJNX',
      });

  }

  useEffect(() => {
    if (app.nbl) render();
  
    return () => {
      ;
    };
  }, []);  

  return (
      <div className="">
        {type === 1 &&  <div className="mt-2" id="qlikid1"></div> }
        {type === 2 &&  <div className="mt-2" id="qlikid2"></div> }
          
      </div>

  );
}

export default QlikDateCases;
