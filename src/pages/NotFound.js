import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return(
    <section className="py-12 px-4">
    <div className="flex flex-wrap items-center max-w-4xl mx-auto text-center lg:text-left">
      <div className="w-full lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
        <h2 className="text-4xl mb-4 font-semibold font-heading">Page not found</h2>
        <p className="mb-6 text-gray-400">The page your looking for can not be found.  Please select a different page or navigate to the pages on the main navigation menu.</p>
        <NavLink to="/" className="text-lg text-orange-600 hover:underline" >Go to the homepage »</NavLink>
      </div>
      <div className="w-full lg:w-1/2 px-2">
        <img src="Covid_NotFound_Logo.svg" alt="" />
      </div>
    </div>
  </section>
  )
}

export default NotFound;
