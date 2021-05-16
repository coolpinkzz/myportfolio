import React from "react";
import Headroom from "react-headroom";
import "./header.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <Headroom>
      <header className="header shadow">
        <a href="" className="logo">
          <span className="logo-name">&lt; Coolpinkzz /&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              activeClass="active"
              to="techskills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="workexperience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Work Experience
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="achievements"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Achievements
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="contactme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
