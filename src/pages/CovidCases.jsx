import React from "react";
import QlikCard from "../components/QlikCard";
import QlikDate from "../components/QlikDateCases";
import QlikKpi from "./QlikKpi";

function CovidCases() {
  return (
    <div>
      <div>
        <QlikDate type={1} />
        <div>
          {/* *Row 01* */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 space-x-4">
            <div className="md:h-80 p-2 ">
              <div>
                <QlikKpi  title="Total Cases" kpi="wQpnnSY" chartType={1} />
                <QlikKpi  title="Total Cases" kpi="dHnBAh" chartType={2} />

                <QlikKpi  title="Total Deaths" kpi="VNmPev" chartType={3} />
                <QlikKpi  title="Total Deaths" kpi="qpXA" chartType={3} />

                {/* <QlikKpi  title="Cases Reported Yesterday" kpi="XxEjKFS"  /> */}
                {/* <QlikKpi  title="Total States - Selected" kpi="QqKP"  /> */}
                {/* <QlikKpi  title="Total States - New Cases" kpi="buDkf" chartType={2} /> */}
                {/* <QlikKpi  title="Total States - No New Cases" kpi="TpJBD" chartType={2} /> */}

              </div>
            </div>


            <QlikCard title="Total Cases by New Case" kpi="PBjpq"  />
            <QlikCard title="Total Deaths by New Case" kpi="hCWHEW"  />            
          </div>

          <div className=" md:grid  md:grid-cols-2 md:h-72 mt-6 space-x-4">
              <QlikCard  title="Total Cases by State" kpi="WFegxc"  />
              <QlikCard  title="Total Death by State" kpi="UQKJqR"  />
          </div>

          <div className="grid grid-cols-1 h-72 mt-6 space-x-4">
              <QlikCard  title="Details" kpi="pLTjVz"  />
          </div>

        </div>
      </div>
    </div>
  );
}

export default CovidCases;
