import React, { useState } from "react";
import { FaCog, FaCogs, FaSignOutAlt, FaSyringe, FaTimes, FaVirus } from "react-icons/fa";
import AppLogo from "./AppLogo";
import { Link, NavLink } from "react-router-dom";
import AppMenuItem from "./AppMenuItem";

function AppMenu({isMenu, setIsMenu}) {
  // console.log('XXXX isMenu: ', isMenu)
  const menu = [
    {id: 100, name: "Cases", nav: "covidCases", icon:"FaVirus"},
    {id: 200, name: "Vaccines", nav: "covidVaccines", icon:"FaSyringe"},
    // {id: 300, name: "Test Charts", nav: "testcharts", icon:"FaChartPie"},
    // {id: 400, name: "Bad Page XXX", nav: "badPage", icon:"FaTimes"},
  ]

  return (
    <div>
      <div
        className={` ${
          isMenu ? "" : "hidden"
        }   lg:block navbar-menu relative z-50`}
      >
        <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"></div>

        <nav
          className="fixed 
          top-0 left-0 bottom-0 
          flex flex-col 
          w-3/4 
          lg:w-80 
          sm:max-w-xs 
          pt-6 pb-8
          bg-white border-r 
          overflow-y-auto"
        >
          <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-blue-50" onClick={() => setIsMenu(false)}>
            <AppLogo />
          </div>
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs uppercase text-gray-200 font-medium">
              Main
            </h3>
            <ul className="mb-8 text-lg font-medium" onClick={() => setIsMenu(false)}>
              {menu.map((m) => (
                <AppMenuItem key={m.id} m={m} />
              ))}

            </ul>

            <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium" hidden >
              Secondary
            </h3>
            <ul className="text-sm font-medium" hidden>
              <li>
                <NavLink to="/settings" 
                  className="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-orange-100 rounded"
                >
                  <span className="inline-block mr-3">
                    <svg
                      className="text-gray-200 w-5 h-5"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.40848 11.7416C8.37264 11.7812 8.33925 11.823 8.30848 11.8666C8.27694 11.9131 8.25172 11.9635 8.23348 12.0166C8.20945 12.0639 8.1926 12.1144 8.18348 12.1666C8.17939 12.2221 8.17939 12.2778 8.18348 12.3333C8.18066 12.4426 8.2035 12.5511 8.25015 12.65C8.28757 12.7534 8.34728 12.8473 8.42505 12.9251C8.50282 13.0028 8.59673 13.0625 8.70015 13.1C8.7999 13.144 8.90775 13.1668 9.01681 13.1668C9.12587 13.1668 9.23373 13.144 9.33348 13.1C9.43689 13.0625 9.53081 13.0028 9.60857 12.9251C9.68634 12.8473 9.74605 12.7534 9.78348 12.65C9.82048 12.5486 9.83746 12.4411 9.83348 12.3333C9.83411 12.2236 9.81309 12.1149 9.77162 12.0134C9.73015 11.9118 9.66905 11.8195 9.59181 11.7416C9.51434 11.6635 9.42218 11.6015 9.32063 11.5592C9.21908 11.5169 9.11016 11.4951 9.00015 11.4951C8.89014 11.4951 8.78121 11.5169 8.67966 11.5592C8.57812 11.6015 8.48595 11.6635 8.40848 11.7416ZM9.00015 0.666626C7.35197 0.666626 5.7408 1.15537 4.37039 2.07105C2.99998 2.98672 1.93188 4.28821 1.30115 5.81093C0.67042 7.33365 0.505392 9.0092 0.826935 10.6257C1.14848 12.2422 1.94215 13.7271 3.10759 14.8925C4.27303 16.058 5.75788 16.8516 7.37439 17.1732C8.9909 17.4947 10.6665 17.3297 12.1892 16.699C13.7119 16.0682 15.0134 15.0001 15.9291 13.6297C16.8447 12.2593 17.3335 10.6481 17.3335 8.99996C17.3335 7.90561 17.1179 6.82198 16.6991 5.81093C16.2804 4.79988 15.6665 3.88122 14.8927 3.1074C14.1189 2.33358 13.2002 1.71975 12.1892 1.30096C11.1781 0.882174 10.0945 0.666626 9.00015 0.666626ZM9.00015 15.6666C7.6816 15.6666 6.39267 15.2756 5.29634 14.5431C4.20002 13.8105 3.34553 12.7694 2.84095 11.5512C2.33637 10.333 2.20434 8.99256 2.46158 7.69936C2.71881 6.40615 3.35375 5.21826 4.2861 4.28591C5.21845 3.35356 6.40634 2.71863 7.69954 2.46139C8.99275 2.20416 10.3332 2.33618 11.5514 2.84076C12.7695 3.34535 13.8107 4.19983 14.5433 5.29616C15.2758 6.39249 15.6668 7.68142 15.6668 8.99996C15.6668 10.7681 14.9644 12.4638 13.7142 13.714C12.4639 14.9642 10.7683 15.6666 9.00015 15.6666ZM9.00015 4.83329C8.56103 4.83301 8.12959 4.94839 7.74924 5.16783C7.36888 5.38726 7.05304 5.70301 6.83348 6.08329C6.77318 6.17814 6.7327 6.28421 6.71446 6.39511C6.69622 6.50601 6.7006 6.61945 6.72734 6.72861C6.75408 6.83778 6.80262 6.94041 6.87005 7.03032C6.93748 7.12024 7.0224 7.19558 7.1197 7.25183C7.21701 7.30808 7.32469 7.34406 7.43626 7.35761C7.54783 7.37116 7.66099 7.362 7.76893 7.33069C7.87687 7.29938 7.97736 7.24655 8.06435 7.17539C8.15135 7.10423 8.22305 7.01621 8.27515 6.91663C8.34857 6.78946 8.45429 6.68394 8.5816 6.61077C8.70892 6.53761 8.8533 6.49938 9.00015 6.49996C9.22116 6.49996 9.43312 6.58776 9.5894 6.74404C9.74568 6.90032 9.83348 7.11228 9.83348 7.33329C9.83348 7.55431 9.74568 7.76627 9.5894 7.92255C9.43312 8.07883 9.22116 8.16663 9.00015 8.16663C8.77913 8.16663 8.56717 8.25442 8.41089 8.4107C8.25461 8.56698 8.16681 8.77895 8.16681 8.99996V9.83329C8.16681 10.0543 8.25461 10.2663 8.41089 10.4225C8.56717 10.5788 8.77913 10.6666 9.00015 10.6666C9.22116 10.6666 9.43312 10.5788 9.5894 10.4225C9.74568 10.2663 9.83348 10.0543 9.83348 9.83329V9.68329C10.3846 9.48331 10.8479 9.09598 11.1425 8.58902C11.437 8.08205 11.5439 7.4877 11.4446 6.90987C11.3454 6.33203 11.0461 5.80747 10.5993 5.42789C10.1525 5.0483 9.58643 4.83784 9.00015 4.83329Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span>Support Center</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Inbox"
                  className="flex items-center pl-3 py-3 pr-4 text-gray-500 hover:bg-orange-50 rounded"
                  
                >
                  <span className="inline-block mr-3">
                    <svg
                      className="text-gray-200 w-5 h-5"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8802 0.666626H3.21356C2.55074 0.667349 1.91528 0.930974 1.44659 1.39966C0.97791 1.86834 0.714286 2.50381 0.713562 3.16663V14.8333C0.714286 15.4961 0.97791 16.1316 1.44659 16.6003C1.91528 17.0689 2.55074 17.3326 3.21356 17.3333H14.8802C15.543 17.3326 16.1785 17.0689 16.6472 16.6003C17.1159 16.1316 17.3795 15.4961 17.3802 14.8333V3.16663C17.3795 2.50381 17.1159 1.86834 16.6472 1.39966C16.1785 0.930974 15.543 0.667349 14.8802 0.666626ZM3.21356 2.33329H14.8802C15.1012 2.33351 15.313 2.42138 15.4692 2.57761C15.6255 2.73385 15.7133 2.94568 15.7136 3.16663V9.83329H13.6595C13.3851 9.83307 13.1149 9.90072 12.8729 10.0302C12.631 10.1597 12.4248 10.347 12.2728 10.5755L11.1009 12.3333H6.99286L5.82099 10.5755C5.66896 10.347 5.4628 10.1597 5.22085 10.0302C4.9789 9.90072 4.70869 9.83307 4.43427 9.83329H2.38023V3.16663C2.38045 2.94568 2.46832 2.73385 2.62455 2.57761C2.78078 2.42138 2.99262 2.33351 3.21356 2.33329ZM14.8802 15.6666H3.21356C2.99262 15.6664 2.78078 15.5785 2.62455 15.4223C2.46832 15.2661 2.38045 15.0542 2.38023 14.8333V11.5H4.43427L5.60615 13.2578C5.75817 13.4862 5.96434 13.6736 6.20628 13.803C6.44823 13.9325 6.71844 14.0002 6.99286 14H11.1009C11.3754 14.0002 11.6456 13.9325 11.8875 13.803C12.1295 13.6736 12.3356 13.4862 12.4877 13.2578L13.6595 11.5H15.7136V14.8333C15.7133 15.0542 15.6255 15.2661 15.4692 15.4223C15.313 15.5785 15.1012 15.6664 14.8802 15.6666Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span>Inbox</span>
                </NavLink>
              </li>
              <li>
                <a
                  className="flex items-center pl-3 py-3 pr-4 text-gray-500 hover:bg-orange-50 rounded"
                  href="/"
                >
                  <span className="inline-block mr-3">
                    <svg
                      className="text-gray-200 w-5 h-5"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9832 6.64169C18.9048 6.545 18.8057 6.46712 18.6932 6.41376C18.5807 6.36041 18.4577 6.33293 18.3332 6.33335H16.6665V5.50002C16.6665 4.83698 16.4031 4.20109 15.9343 3.73225C15.4655 3.26341 14.8296 3.00002 14.1665 3.00002H8.93319L8.66652 2.16669C8.49365 1.67771 8.17298 1.2546 7.74894 0.955986C7.3249 0.657367 6.81849 0.498019 6.29986 0.500019H3.33319C2.67015 0.500019 2.03426 0.763411 1.56542 1.23225C1.09658 1.70109 0.833191 2.33698 0.833191 3.00002V13C0.833191 13.6631 1.09658 14.2989 1.56542 14.7678C2.03426 15.2366 2.67015 15.5 3.33319 15.5H15.3332C15.9009 15.4984 16.4511 15.3036 16.8933 14.9476C17.3356 14.5917 17.6435 14.0959 17.7665 13.5417L19.1665 7.35002C19.1919 7.22578 19.1885 7.0974 19.1568 6.97466C19.125 6.85191 19.0656 6.73803 18.9832 6.64169ZM4.47486 13.1834C4.43252 13.3713 4.32635 13.5388 4.17441 13.6574C4.02247 13.7759 3.83416 13.8381 3.64152 13.8334H3.33319C3.11218 13.8334 2.90022 13.7456 2.74394 13.5893C2.58765 13.433 2.49986 13.221 2.49986 13V3.00002C2.49986 2.779 2.58765 2.56704 2.74394 2.41076C2.90022 2.25448 3.11218 2.16669 3.33319 2.16669H6.29986C6.48158 2.1572 6.66141 2.20746 6.81189 2.30978C6.96236 2.4121 7.07521 2.56087 7.13319 2.73335L7.58319 4.10002C7.63667 4.25897 7.73686 4.39809 7.87067 4.49919C8.00447 4.60029 8.16567 4.65867 8.33319 4.66669H14.1665C14.3875 4.66669 14.5995 4.75448 14.7558 4.91076C14.9121 5.06704 14.9999 5.27901 14.9999 5.50002V6.33335H6.66652C6.47389 6.32864 6.28558 6.39084 6.13364 6.50935C5.9817 6.62786 5.87553 6.79537 5.83319 6.98335L4.47486 13.1834ZM16.1415 13.1834C16.0992 13.3713 15.993 13.5388 15.8411 13.6574C15.6891 13.7759 15.5008 13.8381 15.3082 13.8334H6.00819C6.05123 13.7405 6.08204 13.6425 6.09986 13.5417L7.33319 8.00002H17.3332L16.1415 13.1834Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span>File Manager</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center pl-3 py-3 pr-4 text-gray-500 hover:bg-orange-50 rounded"
                  href="/"
                >
                  <span className="inline-block mr-3">
                    <svg
                      className="text-gray-200 w-5 h-5"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.09182 8.575C2.01257 8.49913 1.91911 8.43966 1.81682 8.4C1.61394 8.31665 1.38637 8.31665 1.18349 8.4C1.08119 8.43966 0.98774 8.49913 0.908486 8.575C0.832619 8.65425 0.773148 8.74771 0.733486 8.85C0.66967 9.00176 0.652235 9.16902 0.68338 9.33068C0.714525 9.49234 0.792855 9.64115 0.908486 9.75833C0.989487 9.83194 1.0825 9.89113 1.18349 9.93333C1.28324 9.97742 1.39109 10.0002 1.50015 10.0002C1.60921 10.0002 1.71707 9.97742 1.81682 9.93333C1.91781 9.89113 2.01082 9.83194 2.09182 9.75833C2.20745 9.64115 2.28578 9.49234 2.31693 9.33068C2.34807 9.16902 2.33064 9.00176 2.26682 8.85C2.22716 8.74771 2.16769 8.65425 2.09182 8.575ZM4.83349 1.66667H16.5002C16.7212 1.66667 16.9331 1.57887 17.0894 1.42259C17.2457 1.26631 17.3335 1.05435 17.3335 0.833333C17.3335 0.61232 17.2457 0.400358 17.0894 0.244078C16.9331 0.0877975 16.7212 0 16.5002 0H4.83349C4.61247 0 4.40051 0.0877975 4.24423 0.244078C4.08795 0.400358 4.00015 0.61232 4.00015 0.833333C4.00015 1.05435 4.08795 1.26631 4.24423 1.42259C4.40051 1.57887 4.61247 1.66667 4.83349 1.66667ZM2.09182 4.40833C1.97463 4.2927 1.82582 4.21437 1.66416 4.18323C1.50251 4.15208 1.33525 4.16952 1.18349 4.23333C1.0825 4.27554 0.989487 4.33472 0.908486 4.40833C0.832619 4.48759 0.773148 4.58104 0.733486 4.68333C0.689399 4.78308 0.666626 4.89094 0.666626 5C0.666626 5.10906 0.689399 5.21692 0.733486 5.31667C0.775688 5.41765 0.834877 5.51067 0.908486 5.59167C0.989487 5.66528 1.0825 5.72447 1.18349 5.76667C1.28324 5.81075 1.39109 5.83353 1.50015 5.83353C1.60921 5.83353 1.71707 5.81075 1.81682 5.76667C1.91781 5.72447 2.01082 5.66528 2.09182 5.59167C2.16543 5.51067 2.22462 5.41765 2.26682 5.31667C2.31091 5.21692 2.33368 5.10906 2.33368 5C2.33368 4.89094 2.31091 4.78308 2.26682 4.68333C2.22716 4.58104 2.16769 4.48759 2.09182 4.40833ZM16.5002 4.16667H4.83349C4.61247 4.16667 4.40051 4.25446 4.24423 4.41074C4.08795 4.56703 4.00015 4.77899 4.00015 5C4.00015 5.22101 4.08795 5.43298 4.24423 5.58926C4.40051 5.74554 4.61247 5.83333 4.83349 5.83333H16.5002C16.7212 5.83333 16.9331 5.74554 17.0894 5.58926C17.2457 5.43298 17.3335 5.22101 17.3335 5C17.3335 4.77899 17.2457 4.56703 17.0894 4.41074C16.9331 4.25446 16.7212 4.16667 16.5002 4.16667ZM2.09182 0.241667C2.01257 0.165799 1.91911 0.106329 1.81682 0.0666666C1.66506 0.00285041 1.4978 -0.0145849 1.33614 0.0165602C1.17448 0.0477053 1.02567 0.126035 0.908486 0.241667C0.834877 0.322667 0.775688 0.415679 0.733486 0.516667C0.689399 0.616417 0.666626 0.724274 0.666626 0.833333C0.666626 0.942392 0.689399 1.05025 0.733486 1.15C0.775688 1.25099 0.834877 1.344 0.908486 1.425C0.989487 1.49861 1.0825 1.5578 1.18349 1.6C1.33525 1.66382 1.50251 1.68125 1.66416 1.65011C1.82582 1.61896 1.97463 1.54063 2.09182 1.425C2.16543 1.344 2.22462 1.25099 2.26682 1.15C2.31091 1.05025 2.33368 0.942392 2.33368 0.833333C2.33368 0.724274 2.31091 0.616417 2.26682 0.516667C2.22462 0.415679 2.16543 0.322667 2.09182 0.241667ZM16.5002 8.33333H4.83349C4.61247 8.33333 4.40051 8.42113 4.24423 8.57741C4.08795 8.73369 4.00015 8.94565 4.00015 9.16667C4.00015 9.38768 4.08795 9.59964 4.24423 9.75592C4.40051 9.9122 4.61247 10 4.83349 10H16.5002C16.7212 10 16.9331 9.9122 17.0894 9.75592C17.2457 9.59964 17.3335 9.38768 17.3335 9.16667C17.3335 8.94565 17.2457 8.73369 17.0894 8.57741C16.9331 8.42113 16.7212 8.33333 16.5002 8.33333Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span>Data List</span>
                </a>
              </li>
            </ul>

            {/* *** Settings **** */}
            <div className="pt-8">
              {/* <NavLink to="/settings" 
                onClick={() => setIsMenu(false)}
                className="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-orange-50 rounded"  >
                <span className="inline-block mr-4">
                  <FaCog className="text-xl" />
                </span>
                <span>Settings</span>
              </NavLink> */}



              {/* <NavLink to="log out"
                onClick={() => setIsMenu(false)}
                className="flex items-center pl-3 py-3 pr-2 text-gray-500 hover:bg-orange-50 rounded"
              >
                <span className="inline-block mr-4">
                  <FaSignOutAlt className="text-xl"  />
                  
                </span>
                <span>Log Out</span>
              </NavLink> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AppMenu;
