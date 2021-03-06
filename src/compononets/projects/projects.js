import React, {Component} from "react";
import "./projects.css";
import {Fade} from "react-reveal";
import {Col, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Card, CardTitle, CardText} from "reactstrap";
import {PROJECTS} from "../../shared/project";
import {faGithub, faReact} from "@fortawesome/free-brands-svg-icons";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS,
        };
    }

    render() {
        const projectcard = this.state.projects.map((data, id) => {
            return (
                <Col sm="4" key={id}>
                    <Card className="project" body shadow>
                        <CardTitle>
                            <h4>{data.name}</h4>
                        </CardTitle>
                        <CardText>{data.description}</CardText>
                        <div className="justify-content-center row ">
                            <div className="m-4">
                                <a
                                    className="cardbutton"
                                    href={data.githublink}
                                    target="_blank"
                                >
                                    <span className="mr-2">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span>
                  Git Hub
                </a>
                            </div>
                            <div className="m-4">
                                <a
                                    className="cardbutton"
                                    href={data.projectlink}
                                    target="_blank"
                                >
                                    <span className="mr-2">
                                        <FontAwesomeIcon icon={faReact} />
                                    </span>
                  Project Link
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
                    <h1 id="projects">Projects</h1>
                    <Row>{projectcard}</Row>
                </Fade>
            </div>
        );
    }
}
export default Project;
