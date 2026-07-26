import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsBullseye, BsEye, BsPeopleFill } from "react-icons/bs";
import heroImage from "../assets/Images/about-hero.jpeg";
import { DiEnvato } from "react-icons/di";
import { useRef } from "react";

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
  const journeyRef= useRef(null);
const handleJourneyClick =()=>{
  journeyRef.current?.scrollIntoView
  ({
    behavior:"smooth"
  });
};
  return (
    <>
    
      {/* ================= HERO ================= */}

     <section
  className="about-hero"
  style={{ backgroundImage: `url(${heroImage})` }}
>
  <div className="hero-overlay"></div>

  <Container className="hero-container">

    <div className="hero-card">

      <span className="hero-tag">
        Jagruti Foundation
      </span>

      <h1>
        Creating Hope,
        <br />
        Transforming Lives
      </h1>

      <p className="hero-subtitle">
        Since <strong>2016</strong>, we have been working towards building
        stronger communities through education, healthcare, women
        empowerment, environmental sustainability and social development.
      </p>

      <p>
        Our mission is to inspire positive change by providing equal
        opportunities, supporting vulnerable communities and creating
        sustainable solutions that improve lives.
      </p>

      <div className="hero-buttons">

        <Button className="primary-btn" onClick={handleJourneyClick}>
          Our Journey
        </Button>

        <Button
          className="secondary-btn"
          variant="outline-light"
        >
          Contact Us
        </Button>

      </div>

    </div>

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

      <section className="journey-section" ref={journeyRef}>
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
      {/* ================= OUR STORY ================= */}

<section className="story-section">
  <Container>
    <div className="section-title text-center">
      <h2>Our Story</h2>
      <div className="title-line"></div>

      <p>
        Every milestone in our journey reflects our dedication to serving
        communities with compassion, integrity and hope.
      </p>
    </div>

    <Row className="align-items-center g-5">

      {/* Story Content */}

      <Col lg={7}>
        <div className="story-content">

          <span className="story-tag">
            Since 2016
          </span>

          <h3>
            Building Hope Through
            <span> Compassion & Service</span>
          </h3>

          <p>
            Jagruti Foundation was established with the vision of creating a
            society where every individual has equal opportunities to grow,
            learn and live with dignity.
          </p>

          <p>
            Over the years, our dedicated volunteers, supporters and community
            members have worked together to transform thousands of lives
            through education, healthcare, women empowerment and sustainable
            development initiatives.
          </p>

          <p>
            Every initiative we undertake is driven by compassion and a strong
            belief that even the smallest act of kindness can create lasting
            social change.
          </p>

          <div className="story-quote">
            <i className="bi bi-quote"></i>

            <p>
              Every act of kindness creates a ripple of hope, inspiring us to
              continue building stronger communities together.
            </p>
          </div>

        </div>
      </Col>

      {/* Achievement Card */}

      <Col lg={5}>

        <div className="achievement-card">

          <div className="achievement-head">

            <div className="achievement-icon">
              🏆
            </div>

            <div>

              <h4>Our Achievements</h4>

              <span>
                Recognitions that motivate us
              </span>

            </div>

          </div>

          <div className="achievement-item">

            <div className="achievement-circle">
              <i className="bi bi-award-fill"></i>
            </div>

            <div>

              <h5>Community Excellence</h5>

              <p>
                Honoured for our continuous contribution towards social welfare.
              </p>

            </div>

          </div>

          <div className="achievement-item">

            <div className="achievement-circle green">
              <i className="bi bi-tree-fill"></i>
            </div>

            <div>

              <h5>Environmental Initiatives</h5>

              <p>
                Plantation drives and awareness campaigns for sustainability.
              </p>

            </div>

          </div>

          <div className="achievement-item">

            <div className="achievement-circle red">
              <i className="bi bi-heart-pulse-fill"></i>
            </div>

            <div>

              <h5>Healthcare Programs</h5>

              <p>
                Free medical camps and health awareness activities for rural
                communities.
              </p>

            </div>

          </div>

          <div className="achievement-item">

            <div className="achievement-circle blue">
              <i className="bi bi-people-fill"></i>
            </div>

            <div>

              <h5>Women Empowerment</h5>

              <p>
                Skill development and self-employment opportunities for women.
              </p>

            </div>

          </div>

        </div>

      </Col>

    </Row>
  </Container>
</section>
    </>
  );
};

export default About; 