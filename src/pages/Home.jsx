import React from "react";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function home() {
  return (
    <div className=" min-h-screen ">
      <section className="py-12 px-4">
        <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">
          <div className="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
            <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
              Qlik React Covid Sample App
            </h2>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Exploring the Front end aspect of creating an Qlik Mashup
              application with React and Qlik SaaS Business Chart objets. Update
              more once we implement the Charts and demo the application.
            </p>

            <p className="mb-8 text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ipsam blanditiis quam facere pariatur nisi nihil unde ab nam quo
              laboriosam molestias minima repellendus dicta, doloribus
              voluptatem architecto eos velit.
            </p>
            <div>
              <NavLink
                to="/covidCases"
                className="inline-block py-4 px-8 mr-6 leading-none text-white bg-orange-600 hover:bg-orange-700 font-semibold rounded shadow"
              >
                Cases
              </NavLink>
              <NavLink
                to="/covidVaccines"
                className="text-orange-600 hover:underline rounded shadow py-4 px-8 hover:bg-gray-100"
              >
                Vaccinations
              </NavLink>
            </div>
          </div>
          <div className="lg:w-1/2 px-2">
            <img src="Covid_Main_Logo.svg" alt="" />
            <div className="grid grid-cols-2 md:flex items-center pt-6 space-x-4">
              <div>
                <img
                  className="w-44 h-14 mt-4"
                  src="https://dl.airtable.com/.attachmentThumbnails/91dc76567b4852de3beef8138015e729/010262af"
                  alt="Tailwinds Css"
                />
              </div>
              <div>
                <img
                  className="w-44 h-14 mt-4"
                  src="https://dl.airtable.com/.attachmentThumbnails/f8d45e0e216ab10886b7985b53d94751/beacb0e7"
                  alt="Qlik"
                />
              </div>
              <div>
                <img
                  className="w-44 h-14 mt-4"
                  src="https://dl.airtable.com/.attachmentThumbnails/23ff332b3bb3d968a467f07500ccb289/ebf27c4e"
                  alt="Enigma JS"
                />
              </div>
              <div>
                <img
                  className="w-44 h-14 mt-4"
                  src="https://dl.airtable.com/.attachmentThumbnails/4aa39974df173802c78235a93a961fb9/785dc3fd"
                  alt="Nebula JS"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
