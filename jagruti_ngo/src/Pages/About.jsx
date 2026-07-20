import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsBullseye, BsEye, BsPeopleFill } from "react-icons/bs";
import heroImage from "../assets/Images/hero.jpeg";
import "../assets/CSS/About.css";

const missionData = [
  {
    title: "Our Mission",
    icon: <BsBullseye />,
    color: "red",
    description:
      "To empower underprivileged communities through education, healthcare, skill development and sustainable initiatives that create lasting social impact.",
  },
  {
    title: "Our Vision",
    icon: <BsEye />,
    color: "blue",
    description:
      "To build an inclusive society where every individual has equal opportunities to learn, grow and live with dignity.",
  },
  {
    title: "Our Values",
    icon: <BsPeopleFill />,
    color: "green",
    values: [
      "Compassion",
      "Integrity",
      "Empowerment",
      "Inclusivity",
      "Sustainability",
    ],
  },
];

const journeyData = [
  {
    year: "2016",
    title: "Foundation",
    icon: "bi-flag-fill",
    description:
      "Jagruti Foundation was established with the vision to empower communities.",
  },
  {
    year: "2018",
    title: "Expanding Reach",
    icon: "bi-book-fill",
    description:
      "Started educational and skill development programs for youth.",
  },
  {
    year: "2020",
    title: "Growing Impact",
    icon: "bi-heart-pulse-fill",
    description:
      "Introduced healthcare and women empowerment initiatives.",
  },
  {
    year: "2022",
    title: "Sustainability",
    icon: "bi-tree-fill",
    description:
      "Promoted environmental awareness and eco-friendly initiatives.",
  },
  {
    year: "2025+",
    title: "Building Futures",
    icon: "bi-stars",
    description:
      "Continuing our journey towards brighter futures and lasting change.",
  },
];

const About = () => {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="about-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="position-relative">
              <div className="hero-content">
                <h1>About Us</h1>

                <p>
                  Established in 2016, Jagruti Foundation works towards
                  empowering communities through education, healthcare,
                  sustainability and women empowerment.
                </p>

                <p>
                  We believe every individual deserves equal opportunities to
                  learn, grow and live with dignity.
                </p>

                <p>
                  Together with our volunteers and supporters, we create
                  meaningful change that transforms lives.
                </p>

                <Button className="journey-btn">
                  Our Journey →
                </Button>
              </div>
            </Col>

            <Col lg={7} className="p-0">
              <div className="hero-image">
                <img
                  src={heroImage}
                  alt="Children smiling"
                  className="img-fluid"
                />
                <div className="hero-overlay"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= MISSION ================= */}

      <section className="mission-section">
        <Container>
          <Row className="g-4">
            {missionData.map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="mission-card">
                  <div className={`mission-icon ${item.color}`}>
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  {item.description ? (
                    <p>{item.description}</p>
                  ) : (
                    <ul className="values-list">
                      {item.values.map((value, i) => (
                        <li key={i}>{value}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= JOURNEY ================= */}

      <section className="journey-section">
        <Container>
          <div className="section-title text-center">
            <h2>Our Journey</h2>
            <div className="title-line"></div>

            <p>
              Every milestone represents our commitment to creating a positive
              impact in society and building stronger communities.
            </p>
          </div>

          <div className="timeline">
            {journeyData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <span className="timeline-year">{item.year}</span>

                <h5>{item.title}</h5>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;