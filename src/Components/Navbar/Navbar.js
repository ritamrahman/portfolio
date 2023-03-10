import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = ({ handleThemeSwitch, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-midnight F z-10 w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* logo start */}
          <NavLink to="/" aria-label="Company" title="Company" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase text-gs dark:text-white">
              Ritam Rahman
            </span>
          </NavLink>
          {/* logo end */}
          {/* desktop menu start */}
          <ul className=" items-center hidden space-x-8 lg:flex">
            <button onClick={handleThemeSwitch}>
              {theme === "dark" ? (
                <span className="border bottom-1 rounded-md py-1 px-3 text-white">Dark 🌙</span>
              ) : (
                <span className="border rounded-md py-1 px-3 text-black">Light 🌞</span>
              )}
            </button>

            <li>
              <HashLink
                smooth
                to="/#skills"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#aboutme"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About me
              </HashLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contactme"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact me
              </HashLink>
            </li>
          </ul>
          {/* desktop menu end */}

          {/* mobile menu start */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center">
              <button onClick={handleThemeSwitch}>{theme === "dark" ? "🌙" : "🌞"}</button>

              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                  <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                  <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white dark:bg-midnight border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink to="/" aria-label="Company" title="Company" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gs dark:text-white uppercase">
                          Ritam Rahman
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <HashLink
                          smooth
                          to="/#skills"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Skills
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          smooth
                          to="/#aboutme"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          About me
                        </HashLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blogs"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Blogs
                        </NavLink>
                      </li>
                      <li>
                        <HashLink
                          smooth
                          to="/#contactme"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Contact me
                        </HashLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          {/* mobile menu end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
