import React from "react";
import "./skills.css";
import { Container } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faBootstrap,
  faJs,
  faCss3Alt,
  faReact,
  faNode,
  faAws,
  faPython,
  faSearchengin,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-reveal";

const Skills = () => {
  return (
    <div style={{}}>
      <Container>
        <div className=" my-5 row">
          <Fade left duration={1000}>
            <div className="col-12 col-sm-6 col-md-6 my-5">
              <img id="sot" src="img/programmer.svg" alt="Man on table" />
            </div>
          </Fade>

          <div
            id="techskills"
            className="col-12 col-sm-6 col-md-6 my-auto order-first order-sm-last"
          >
            <Fade right duration={1000}>
              <h2>Technical Skills I have</h2>
              <h5>Web Development</h5>
              <div className="skillrow row justify-content-center">
                <a>
                  <p className="px-3">HTML</p>
                  <FontAwesomeIcon id="skills" icon={faHtml5} />
                </a>
                <a>
                  <p className="px-3">CSS</p>
                  <FontAwesomeIcon id="skills" icon={faCss3Alt} />
                </a>
                <a>
                  <p className="px-3">Bootstrap4</p>
                  <FontAwesomeIcon id="skills" icon={faBootstrap} />
                </a>
                <a>
                  <p className="px-2">JavaScript</p>
                  <FontAwesomeIcon id="skills" icon={faJs} />
                </a>
                <a>
                  <p className="px-3">ReactJs</p>
                  <FontAwesomeIcon id="skills" icon={faReact} />
                </a>
                <a>
                  <p className="px-4">Node.Js</p>
                  <FontAwesomeIcon id="skills" icon={faNode} />
                </a>
                <a>
                  <p className="px-4 pt-sm-4 ">AWS</p>
                  <FontAwesomeIcon id="skills" icon={faAws} />
                </a>
                <a>
                  <p className="px-4 pt-4">Python</p>
                  <FontAwesomeIcon id="skills" icon={faPython} />
                </a>
                <a>
                  <p className="px-4 pt-4">SEO</p>
                  <FontAwesomeIcon id="skills" icon={faSearchengin} />
                </a>
                <a>
                  <p className="px-4 pt-4">WordPress</p>
                  <FontAwesomeIcon id="skills" icon={faWordpress} />
                </a>
              </div>
              <h5 style={{ marginTop: "1rem" }}>Digital Marketing</h5>
              <h3 style={{ color: "#868e96" }}>
                Google Analytics, Google Ads, Google-Adsense
              </h3>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Skills;
