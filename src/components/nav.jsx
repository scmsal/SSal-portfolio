import React from "react";

const NavBar = () => {
  return (
    <div class="container-menu" id="Menu">
      <ul>
        <li>
          <a class="menulink" href="#about-me">
            About Me
          </a>{" "}
        </li>
        <li>
          <a class="menulink" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a class="menulink" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a class="menulink" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
