import React from 'react';
import { FaCalendar, FaCalendarCheck, FaCar, FaChartPie, FaCloud, FaCogs, FaCoins, FaDollarSign, FaHotel, FaLightbulb, FaLocationArrow, FaMapMarked, FaPaperPlane, FaPeopleArrows, FaPlane, FaPlaneArrival, FaPlaneDeparture, FaSuitcase, FaSyringe, FaTimes, FaUtensils, FaVirus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function AppMenuItem({m}) {
  return (
    <li key={m.id}>
    <NavLink to={m.nav}
      className={({isActive}) => (isActive ? "bg-orange-400 text-white " : "text-gray-500 ") + " flex items-center pl-3 py-3 pr-2  hover:bg-orange-300 rounded"}
    >
      <span className="inline-block mr-3">
        {/* <FaSyringe /> */}
        {m.icon === 'FaSyringe' && <FaSyringe  /> }
        {m.icon === 'FaVirus' && <FaVirus  /> }

        {m.icon === 'FaSuitcase' && <FaSuitcase  /> }
        {m.icon === 'FaPaperPlane' && <FaPaperPlane  /> }
        {m.icon === 'FaPlane' && <FaPlane  /> }
        {m.icon === 'FaCar' && <FaCar  /> }
        {m.icon === 'FaLightbulb' && <FaLightbulb  /> }
        {m.icon === 'FaCoins' && <FaCoins  /> }
        {m.icon === 'FaCloud' && <FaCloud  /> }
        {m.icon === 'FaDollarSign' && <FaDollarSign  /> }
        {m.icon === 'FaPlaneArrival' && <FaPlaneArrival  /> }
        {m.icon === 'FaPlaneDeparture' && <FaPlaneDeparture  /> }
        {m.icon === 'FaUtensils' && <FaUtensils  /> }
        {m.icon === 'FaPeopleArrows' && <FaPeopleArrows  /> }
        {m.icon === 'FaHotel' && <FaHotel  /> }
        {m.icon === 'FaCalendar' && <FaCalendar  /> }
        {m.icon === 'FaCalendarCheck' && <FaCalendarCheck  /> }
        {m.icon === 'FaCogs' && <FaCogs  /> }
        {m.icon === 'FaLocationArrow' && <FaLocationArrow  /> }
        {m.icon === 'FaMapMarked' && <FaMapMarked  /> }
        {m.icon === 'FaChartPie' && <FaChartPie  /> }
        {m.icon === 'FaTimes' && <FaTimes  /> }
        {m.icon === 'xxx' && <FaChartPie  /> }
      </span>
      <span>{m.name}</span>
    </NavLink>
  </li>
  );

  
}

export default AppMenuItem;
