import React from "react";
import { FaShieldVirus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function AppLogo() {
  return (
    <div>
      <NavLink to="/" className="text-xl font-semibold" >
        <div className="flex items-center space-x-2">
          <FaShieldVirus className="text-4xl text-orange-700" />
          <div className="border-b-2 pb-1 border-orange-700">
            <span className="font-semibold text-2xl">Qlik</span>
            <span className="font-semibold text-2xl text-orange-700">
              Covid
            </span>
            <span className="font-semibold text-2xl">App</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default AppLogo;
