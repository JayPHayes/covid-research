import React from 'react';
import { FaChartPie } from 'react-icons/fa';

function AppKpiTItle() {
  return (
    <div>
        <div className='flex items-center space-x-2 '>
            <div className=''>
                <FaChartPie  />
            </div>
            <p className='bg-white'>KPI Title </p>

        </div>

    </div>
  );
}

export default AppKpiTItle;
