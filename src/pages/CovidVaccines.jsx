import React from 'react';
import QlikCard from '../components/QlikCard';
import QlikCardTable from '../components/QlikCardTable';
import QlikDateCases from '../components/QlikDateCases';
import QlikKpi from './QlikKpi';


function CovidVaccines() {
  return (
    <div>
    <div>
      <QlikDateCases type={2} />
      <div>
        {/* *Row 01* */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 space-x-4">
          <div className="lg:h-72 p-2 ">
            <div className='space-y-2'>
              <QlikKpi  title="US Total Doses" kpi="BuBm"chartType={4}  />
              <QlikKpi  title="Total Doses (Calc)" kpi="qcyJhp"chartType={4}  />

              <QlikKpi  title="US People Fully Vaccinated " kpi="bLFqFg" chartType={1}  />
              <QlikKpi  title="People Fully Vaccinated (Calc) " kpi="SEsrUU" chartType={2}  />

              {/* <QlikKpi  title="People Fully Vaccinated %" kpi="EBxAxft" chartType={1}  /> */}
              {/* <QlikKpi  title="People Fully Vaccinated %" kpi="fhFht" chartType={1}  /> */}

            </div>
          </div>


          <QlikCard title="Total Doses by Ratings" kpi="Hpj"  />
          <QlikCard title="Doeses by Rating Status" kpi="RJTYHLr"  />            
        </div>

        <div className="grid md:grid-cols-2 md:h-80 mt-6 space-x-4">
            <QlikCard title="" kpi="JfjPYE"  />
            <QlikCard  title="New Doses given (1 day*) / People Fully Vaccinated" kpi="wmVmww"  />
        </div>

        <div className="grid grid-cols-1 h-[60rem] mt-6 space-x-4">
            <QlikCardTable  title="Details" kpi="WYBLm"  />
        </div>

        {/* <div className="grid grid-cols-1 h-80 mt-6 space-x-4">
            <QlikCard  title="Map" kpi="ABcbYq"  />
        </div> */}

      </div>
    </div>
  </div>
  );
}

export default CovidVaccines;
