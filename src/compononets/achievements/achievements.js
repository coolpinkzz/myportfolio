import React from "react";
import "./achievements.css";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardTitle, CardText } from "reactstrap";
import { ACHIEVEMENTS } from "../../shared/achievement";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-reveal";

class Achievement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achievement: ACHIEVEMENTS,
    };
  }
  render() {
    const achievement = this.state.achievement.map((data, id) => {
      return (
        <Col sm="4" key={id}>
          <Card className="ach" body shadow>
            <div className="text-center">
              <img
                height="auto"
                width="100%"
                src={data.img}
                alt="Card image cap"
              />
            </div>
            <hr></hr>
            <CardTitle>
              <h4>{data.name}</h4>
              <p>{data.des}</p>
            </CardTitle>
            <CardText>{data.Source}</CardText>
            <div className="justify-content-center row ">
              <div className="my-2">
                <a
                  className="cardbutton"
                  href={data.certification}
                  target="_blank"
                >
                  Certification
                </a>
              </div>
            </div>
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <Fade bottom duration={1000} distance="40px">
          <h1 className="my-5" id="achievements">
            Achievements and Certification &#x1f3c6;
          </h1>
          <Row>{achievement}</Row>
        </Fade>
      </div>
    );
  }
}
export default Achievement;
