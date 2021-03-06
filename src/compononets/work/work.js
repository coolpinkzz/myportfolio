import React from "react";
import "./work.css";
import {Fade} from "react-reveal";
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
                                style={{
                                    backgroundColor: "rgb(108, 99, 255)",
                                    height: "400px",
                                }}
                                className=" card shadow my-5"
                            >
                                <CardBody>
                                    <CardTitle
                                        style={{
                                            color: "white",
                                            fontSize: "30px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Fullmoon Websolutions
                  </CardTitle>
                                    <CardSubtitle
                                        style={{
                                            color: "white",
                                            fontSize: "20px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        Web Developer
                  </CardSubtitle>
                                    <CardSubtitle style={{color: "white"}}>
                                        November 20 - Present
                  </CardSubtitle>
                                </CardBody>
                                <div className="text-center">
                                    <h1 style={{color: "white"}}>Fullmoon Outdoor</h1>
                                    {/*<img
                                        height="auto"
                                        width="50%"
                                        src="/img/landryt.jpg"
                                        alt="Card image cap"
                                    />*/}
                                </div>

                                <CardBody>
                                    <CardText style={{color: "white"}}>
                                        Design and develop websites using PHP, HTML, CSS, JavaScript and Wordpress, Adobe
                                        Photoshop. Also manage hosting and domains of more than 10+ websites.
                  </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <Card
                                style={{
                                    backgroundColor: "rgb(108, 99, 255)",
                                    height: "400px",
                                }}
                                className=" card shadow my-5"
                            >
                                <CardBody>
                                    <CardTitle
                                        style={{
                                            color: "white",
                                            fontSize: "30px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        LANDRYT
                  </CardTitle>
                                    <CardSubtitle
                                        style={{
                                            color: "white",
                                            fontSize: "20px",
                                            fontWeight: "400",
                                        }}
                                    >
                                        Front end Web Developer in React.js
                  </CardSubtitle>
                                    <CardSubtitle style={{color: "white"}}>
                                        August 20 - October 20
                  </CardSubtitle>
                                </CardBody>
                                <div className="text-center">
                                    <img
                                        height="auto"
                                        width="50%"
                                        src="/img/landryt.jpg"
                                        alt="Card image cap"
                                    />
                                </div>

                                <CardBody>
                                    <CardText style={{color: "white"}}>
                                        Modifying current front-end design and also implemented
                                        Mixpanel Analytics. Working on Beta version, designing its
                                        front-end using React.js and styling using Fluent UI from
                                        scratch.
                  </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6">
                                <Card
                                    style={{
                                        backgroundColor: "rgb(108, 99, 255)",
                                        height: "400px",
                                    }}
                                    className=" card shadow my-5"
                                >
                                    <CardBody style={{height: "8rem"}}>
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
                                        <CardSubtitle style={{color: "white"}}>
                                            May 20 - July 20
                  </CardSubtitle>
                                    </CardBody>
                                    <div className="text-center">
                                        <img
                                            height="auto"
                                            width="30%"
                                            src="/img/work1.1.png"
                                            alt="Card image cap"
                                        />
                                    </div>

                                    <CardBody>
                                        <CardText style={{color: "white"}}>
                                            Designed landing page and deployed new LMS from
                                            scratch.Deployed Payment Gateway and Social login
                  </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6">
                                <Card
                                    style={{
                                        height: "400px",
                                        backgroundColor: "rgb(108, 99, 255)",
                                    }}
                                    className=" card shadow my-5"
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
                                        <CardSubtitle style={{color: "white"}}>
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
                                        <CardText style={{color: "white"}}>
                                            Designed many Wordpress website for clients using Thrive
                                            Theme Lead the team and trained them how to make responsive
                                            websites using Wordpress Learned how to optimize website ,
                                            boost landing page and worked on Google Analytics
                  </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fade>
        </div>
    );
};
export default Work;
