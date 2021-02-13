import React from "react";
// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections

import SimpleFooter from "components/Footers/SimpleFooter.js";
import Testimonials from "components/Testimonials.js";

class Landing extends React.Component {
  // state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <span className='text-white'>Welcome Visitors</span>
                      <h1 className="display-3 text-white">
                        I am Lalit Kushwah{" "}
                      </h1>
                      <p className="lead text-white">
                        I believe in the technology-agnostic theory so no matter whichever technology I have to learn or to be master in to build solutions.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Constant Learner
                          </h6>
                          <p className="description mt-3">
                            I like to be updated with latest trends and technologies and it is one of my hobby to learn something new everyday.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Tech Channels
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Blogs
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Udemy
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Team Player
                          </h6>
                          <p className="description mt-3">
                            I can adapt myself according to the environment and always ready to help team if they are facing any blockers
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Faster Delievery
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Quality
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Optimistic
                          </h6>
                          <p className="description mt-3">
                            I always look at the positive side of any challenging situation and able to take critics in positive way.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Cheerful
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Hopeful
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Technologies/Framework I am working with</h2>
                  <p className="lead text-muted">
                    Frontend development is my primary skill but I also know and had worked with several backend framework and languages like nodejs, spring, spring-boot.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/images/angular.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/images/vuejs.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/images/nodejs.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/images/stenciljs.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0 mt-5" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/images/mongodb.jpeg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0 mt-5" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/images/ionic.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0 mt-5" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/images/spring.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0 mt-5" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/images/jenkins.jpeg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Organizations I have worked with</h2>
                  <p className="lead text-white">
                    Following are the esteemed Organizations I have worked with.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <img
                    src={require("assets/img/images/hotwax.png")}
                    style={{ height: '6rem' }}
                    className="rounded float-center"
                    alt="..."
                  />
                  <h5 className="text-white mt-3">Hotwax Systems</h5>
                  <p className="text-white mt-3">
                    Hotwax is an MNC providing designs solution related to ERP. Our
                    technology services are driven by seasoned expertise in Custom ERP
                    Development, Enterprise Architecture, Business Transformation
                    Strategies, Unified OmniChannel Commerce, and more.
                    </p>
                </Col>
                <Col lg="4">
                  <img
                    src={require("assets/img/images/zensar.png")}
                    style={{ height: "6rem" }}
                    className="rounded float-center"
                    alt="..."
                  />
                  <h5 className="text-white mt-3">Zensar Technologies</h5>
                  <p className="text-white mt-3">
                    Zensar Technologies Limited is an Indian publicly traded software
                    and services company, operating in many countries. The company's
                    stock trades on the Bombay Stock Exchange and on the National
                    Stock Exchange of India under the ticker symbol ZENSARTECH.
            </p>
                </Col>
                <Col lg="4">
                  <img
                    src={require("assets/img/images/mastercard.png")}
                    style={{height: "6rem"}}
                    className="rounded float-center"
                    alt="..."
                  />
                  <h5 className="text-white mt-3">mastercard</h5>
                  <p className="text-white mt-3">
                    Mastercard Incorporated is an American multinational financial
                    services International Global Headquarters in Purchase, New York,
                    United States. The Global Operations Headquarters is located in
                    O'Fallon, Missouri, United States, a municipality of St. Charles
                    County, Missouri.
            </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* <Download /> */}
          <section>
          <Row className="justify-content-center text-center mb-lg mt-5">
                <Col lg="8">
                  <h2 className="display-3">What my colleagues think about me</h2>
                  <p className="lead text-muted">
                    Feedbacks are gift, I am glad to get such feedbacks from my colleagues.
                  </p>
                </Col>
            </Row>
            <Row className="justify-content-center text-center mb-lg">
              <Testimonials/>
            </Row>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
