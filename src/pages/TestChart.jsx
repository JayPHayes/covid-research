import React, { useContext, useEffect } from 'react';
import AppContext from "../providers/AppContext";


function TestChart() {
  const app = useContext(AppContext)

  const render = async () => {
   
    app.nbl.render({
      element: document.querySelector("#qlikid1"),
      type: "piechart",
      id: 'PBjpq',
    });
    app.nbl.render({
      element: document.querySelector("#qlikid2"),
      type: "kpi",
      id: 'wQpnnSY',
    });
    app.nbl.render({
      element: document.querySelector("#qlikid3"),
      type: "kpi",
      id: 'XejAChA',
    });
    app.nbl.render({
      element: document.querySelector("#qlikid4"),
      type: "kpi",
      id: 'Hpj',
    });
    app.nbl.render({
      element: document.querySelector("#qlikid5"),
      type: "table",
      id: 'WYBLm',
    });

  }

  useEffect(() => {
    if (app.nbl) render();
  
    return () => {
      ;
    };
  }, []);
  

  return (
    <div>
      
      <div className='mt-4'>
        <div className='text-green-500' id="qlikid3"></div>
        {/* <p>
          <span className='font-semibold'>Import Date: </span>
          <span className='text-orange-700'>mm/dd/yyyy</span>
        </p>
         */}
      </div>

      <div className='grid grid-cols-3 space-x-4 h-96'>
        <div className=' bg-orange-400 ' id="qlikid1"></div>
        <div className=' bg-orange-400 ' id="qlikid2"></div>
        <div className=' bg-orange-400 ' id="qlikid4"></div>
      </div>

      <div className='grid grid-cols-1 space-x-4 h-96'>
        <div className=' bg-orange-400 ' id="qlikid5"></div>

      </div>
    </div>  
  );
}

export default TestChart;
