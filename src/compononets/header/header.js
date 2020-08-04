import React, { useState } from "react";
import "./header.css";
import Headroom from "react-headroom";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Headroom>
        <Navbar className="shadow" color="light" light expand="md">
          <NavbarBrand className="ml-5" href="/">
            <h3> &lt; Coolpinkzz / &gt;</h3>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <NavItem>
                <NavLink>
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
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#workexperience">
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
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#achievements">Achievements</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="blogs">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="certificates">Certificates</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contactme">Contact Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Headroom>
    </div>
  );
};

export default Header;
