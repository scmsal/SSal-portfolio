import React from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

const NavBar = () => {
  return (
    <div
      id="NavBar"
      className="flex items-center justify-between h-24  text-cobalt pr-5 mb-5 shadow"
    >
      <NavLink to="/">
        <img
          src="./S_purple-pink-cropped.png"
          alt="logo"
          className="h-20 object-contain rounded-lg mx-5 my-5 justify-end"
        ></img>
      </NavLink>
      {/* Menu - visible on desktop */}
      <div className="w-2/3 " id="Menu">
        <ul className="hidden md:flex justify-end space-x-9">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "menulink text-gray-500"
                  : "menulink text-cobalt  hover:text-gray-400"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "menulink text-gray-500"
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
                  ? "menulink text-gray-500"
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
                  ? "menulink text-gray-500"
                  : "menulink text-cobalt  hover:text-gray-400"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Hamburger Button */}
      <button className="md:hidden">
        <Bars3Icon className="size-12"></Bars3Icon>
      </button>
    </div>
  );
};

export default NavBar;
