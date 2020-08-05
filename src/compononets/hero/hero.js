import React from "react";
import "./hero.css";
import { Jumbotron, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emoji from "react-easy-emoji";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div>
      <Fade bottom duration={1000} distance="40px">
        <Jumbotron>
          <Container>
            <div className="row">
              <div className="my-5 text-left col-12 col-md-6 col-sm-6">
                <h1>
                  Hi all, I'm Pratik Yadav!{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>{" "}
                </h1>

                <h4 style={{ color: "#47525d" }}>
                  A passionate Web Developer{" "}
                  <span>&#128104;&#127997;&#8205;&#128187;</span>, specialized
                  in creating dynamic and creative websites which are fully
                  optimized and fully responsive, having an experience of
                  building Web applications with JavaScript / Reactjs / Nodejs /
                  Gatsby and some other cool libraries and frameworks. I have
                  good knowledge in Amazon Web Services (AWS), Search Engine
                  Optimisation and Digital marketing.
                </h4>
                <div>
                  <a href="https://github.com/coolpinkzz" target="_blank">
                    {" "}
                    <span style={{ fontSize: "40px", color: "black" }}>
                      {" "}
                      <FontAwesomeIcon icon={faGithub} />{" "}
                    </span>{" "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/pratikyadavdeveloper/"
                    target="_blank"
                  >
                    {" "}
                    <span style={{ fontSize: "40px", color: "#0e76a8" }}>
                      {" "}
                      <FontAwesomeIcon icon={faLinkedin} />{" "}
                    </span>{" "}
                  </a>{" "}
                  <a
                    href="https://www.hackerrank.com/masterpratikyad1"
                    target="_blank"
                  >
                    {" "}
                    <span style={{ fontSize: "40px", color: "#179342" }}>
                      {" "}
                      <FontAwesomeIcon icon={faHackerrank} />{" "}
                    </span>{" "}
                  </a>{" "}
                  <a href="mailto:masterpratikyadav@gmail.com" target="_blank">
                    {" "}
                    <span
                      style={{ fontSize: "40px", color: "hsl(359deg 98% 68%)" }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faGooglePlus} />{" "}
                    </span>{" "}
                  </a>{" "}
                </div>

                <div className="row">
                  <a className="main-button" href="/">
                    <Link
                      activeClass="active"
                      to="contactme"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact Me
                    </Link>
                  </a>
                  <a
                    className="main-button"
                    href="https://drive.google.com/file/d/1pcUx_bwePIca-DcNk0YoKpOy74pww3nw/view?usp=sharing"
                    target="_blank"
                  >
                    Check my resume
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6 col-sm-6 ">
                <img id="sot" src="img/manOnTable.svg" alt="Man on table" />
              </div>
            </div>
          </Container>
        </Jumbotron>
      </Fade>
    </div>
  );
};

export default Hero;
