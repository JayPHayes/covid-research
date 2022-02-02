import React from 'react';
import QlikCard from '../components/QlikCard';
import QlikDateCases from '../components/QlikDateCases';
import QlikKpi from './QlikKpi';


function CovidVaccines() {
  return (
    <div>
    <div>
      <QlikDateCases type={2} />
      <div>
        {/* *Row 01* */}
        <div className="grid grid-cols-3 space-x-4">
          <div className="h-72 p-2 ">
            <div className='space-y-8'>
              <QlikKpi  title="Total Doses" kpi="qcyJhp"  />
              <QlikKpi  title="People Fully Vaccinated " kpi="SEsrUU"  />
              <QlikKpi  title="People Fully Vaccinated %" kpi="EBxAxft"  />
              <QlikKpi  title="People Fully Vaccinated" kpi="fhFht"  />

            </div>
          </div>


          <QlikCard title="Total Doses by Ratings" kpi="Hpj"  />
          <QlikCard title="Doeses by Rating Status" kpi="RJTYHLr"  />            
        </div>

        <div className="grid grid-cols-2 h-80 mt-6 space-x-4">
            <QlikCard title="" kpi="JfjPYE"  />
            <QlikCard  title="New Doses given (1 day*) / People Fully Vaccinated" kpi="wmVmww"  />
        </div>

        <div className="grid grid-cols-1 h-80 mt-6 space-x-4">
            <QlikCard  title="Details" kpi="WYBLm"  />
        </div>

        <div className="grid grid-cols-1 h-80 mt-6 space-x-4">
            <QlikCard  title="Map" kpi="ABcbYq"  />
        </div>

      </div>
    </div>
  </div>
  );
}

export default CovidVaccines;
