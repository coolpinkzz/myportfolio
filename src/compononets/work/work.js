import React from "react";
import "./work.css";
import { Fade } from "react-reveal";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Work = () => {
  return (
    <div>
      <Fade bottom duration={1000} distance="40px">
        <Container>
          <h1 id="workexperience" className="my-3">
            Work Experience
          </h1>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <Card
                style={{ backgroundColor: "rgb(108, 99, 255)", height: "auto" }}
                className="shadow my-5"
              >
                <CardBody>
                  <CardTitle
                    style={{
                      color: "white",
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    Elan Academy
                  </CardTitle>
                  <CardSubtitle
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "400",
                    }}
                  >
                    Wordpress Web Developer
                  </CardSubtitle>
                  <CardSubtitle style={{ color: "white" }}>
                    May 20 - July 20
                  </CardSubtitle>
                </CardBody>
                <div className="text-center">
                  <img
                    height="auto"
                    width="25%"
                    src="/img/work1.1.png"
                    alt="Card image cap"
                  />
                </div>

                <CardBody>
                  <CardText style={{ color: "white" }}>
                    Designed landing page and deployed new LMS from
                    scratch.Deployed Payment Gateway and Social login
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <Card
                style={{ backgroundColor: "rgb(108, 99, 255)" }}
                className="shadow my-5"
              >
                <CardBody>
                  <CardTitle
                    style={{
                      color: "white",
                      fontSize: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    Digital Marketing Consultants
                  </CardTitle>
                  <CardSubtitle
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "400",
                    }}
                  >
                    Wordpress Web Developer + Digital Marketing
                  </CardSubtitle>
                  <CardSubtitle style={{ color: "white" }}>
                    April 20 - Present
                  </CardSubtitle>
                </CardBody>
                <div className="text-center">
                  <img
                    height="auto"
                    width="25%"
                    src="/img/Digital-Marketing-Consultants.png"
                    alt="Card image cap"
                  />
                </div>

                <CardBody>
                  <CardText style={{ color: "white" }}>
                    Designed many Wordpress website for clients using Thrive
                    Theme Lead the team and trained them how to make responsive
                    websites using Wordpress Learned how to optimize website ,
                    boost landing page and worked on Google Analytics
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
      </Fade>
    </div>
  );
};
export default Work;
