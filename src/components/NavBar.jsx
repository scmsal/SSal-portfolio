import { useState } from "react";
import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";

const NavBar = () => {
  //Copilot helped with the isOpen state and toggleMenu function
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled:", !isOpen);
  };

  return (
    <div
      id="NavBar"
      className="flex items-center justify-between h-fit  text-cobalt pr-5 mb-2 shadow"
    >
      <NavLink to="/">
        <img
          src="./S_purple-pink-cropped.png"
          alt="logo"
          className="h-14 object-contain rounded-lg mx-4 my-4 justify-end"
        ></img>
      </NavLink>
      {/* Hamburger Button */}
      <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon
            icon={faX}
            size="lg"
            className="absolute top-2 right-2"
            title="Close menu"
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            title="Menu"
            className="absolute top-6 right-6"
          />
        )}
      </button>
      {/* Menu - visible on desktop */}
      <div className="w-2/3 " id="Menu">
        <ul
          className={`${isOpen ? "block text-right pr-4" : "hidden "}  pl-4  md:flex md:justify-end md:space-x-9 `}
        >
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "menulink text-gray-400 border-b-3 border-fuchsia-700"
                  : "menulink text-cobalt  hover:text-gray-400"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "menulink text-gray-500 border-b-3 border-fuchsia-700"
                  : "menulink text-cobalt  hover:text-gray-400"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "menulink text-gray-500 border-b-3 border-fuchsia-700"
                  : "menulink text-cobalt  hover:text-gray-400"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "menulink text-gray-500 border-b-3 border-fuchsia-700"
                  : "menulink text-cobalt  hover:text-gray-400"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
