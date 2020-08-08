import React from "react";
import "./contact.css";

import { Fade } from "react-reveal";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <Container>
        <div id="contactme" className="row my-5 ">
          <div className="col-12 col-sm-9 col-md-9 text-sm-left text-md-left text-center">
            <h1>Reach Out to me!</h1>
            <hr></hr>
            <h5 className="text-secondary">
              {" "}
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
              ALL.
            </h5>
            <h5>
              {" "}
              "Aspiring Front-End Developer 👾 | Open Source Contributor 🔥 |
              Leader🎙 "
            </h5>
            <br></br>
            <h5>
              <span>&#128146;</span>
              <span>Bangalore, </span>
              <span>
                <img style={{ width: "6.5%" }} src="/img/flag.png" />
              </span>
            </h5>
            <br></br>
            <h5>
              Open For opportunities: Yes{" "}
              <span style={{ color: "green" }}>&#10004;</span>
            </h5>
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
          </div>

          <div className="col-12 col-sm-3 col-md-3">
            <img
              className="dp shadow-lg "
              style={{
                borderRadius: "50%",
                border: ".5rem solid #6c63ff",
                width: "100%",
                height: "auto",
              }}
              src="/img/dp.jpeg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Contact;
