import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      id="NavBar"
      className="flex items-center justify-between h-24  text-cobalt pr-5 mb-5"
    >
      <img
        src="./S_purple-pink-cropped.png"
        alt="logo"
        className="h-full object-contain rounded-lg mx-5 my-5"
      ></img>

      <div className="w-2/3 " id="Menu">
        <ul className="flex justify-end space-x-9">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "menulink text-gray-500" : "menulink text-cobalt"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "menulink text-gray-500" : "menulink text-cobalt"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "menulink text-gray-500" : "menulink text-cobalt"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "menulink text-gray-500" : "menulink text-cobalt"
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
