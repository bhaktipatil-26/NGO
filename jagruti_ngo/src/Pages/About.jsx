import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaBullseye, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/Images/about-hero.jpeg";

const cards = [
  ["Our Mission", <FaBullseye />, "red", "To empower underprivileged communities through education, healthcare, skill development and sustainable initiatives that create lasting social impact."],
  ["Our Vision", <FaLightbulb />, "blue", "To build an inclusive society where every individual has equal opportunities to learn, grow and live with dignity."],
  ["Our Values", <FaHandsHelping />, "green", "We believe in compassion, integrity, empowerment, inclusivity and sustainability. These values guide our work and help us create meaningful change."]
];

const journey = [
  ["2016", "Foundation", "bi-flag-fill", "Jagruti Foundation was established with the vision to empower communities."],
  ["2018", "Expanding Reach", "bi-book-fill", "Started educational and skill development programs for youth."],
  ["2020", "Growing Impact", "bi-heart-pulse-fill", "Introduced healthcare and women empowerment initiatives."],
  ["2022", "Sustainability", "bi-tree-fill", "Promoted environmental awareness and eco-friendly initiatives."],
  ["2025+", "Building Futures", "bi-stars", "Continuing our journey towards brighter futures and lasting change."]
];

const achievements = [
  ["Community Excellence", "bi-award-fill", "gold", "Honoured for our continuous contribution towards social welfare."],
  ["Environmental Initiatives", "bi-tree-fill", "green", "Plantation drives and awareness campaigns for sustainability."],
  ["Healthcare Programs", "bi-heart-pulse-fill", "red", "Free medical camps and health awareness activities for rural communities."],
  ["Women Empowerment", "bi-people-fill", "blue", "Skill development and self-employment opportunities for women."]
];

const About = () => {
  const journeyRef = useRef(null);

  const scrollJourney = () =>
    journeyRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  return (
    <div className="about-page">
      <style>{`

      /* ================= GLOBAL ================= */

      .about-page{
        width:100%;
        overflow-x:hidden;
        background:#F7F8FC;
        color:#152451;
        font-family:"Poppins","Segoe UI",sans-serif;
      }

      .about-page *{
        box-sizing:border-box;
      }

      .about-page section{
        width:100%;
        padding:clamp(3rem,6vw,5rem) 0;
        background:#F7F8FC;
      }

      /* ================= HERO ================= */

      .about-hero{
        position:relative;
        min-height:100vh;
        display:flex;
        align-items:center;
        padding:120px 0 70px;
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
        isolation:isolate;
      }

      .hero-overlay{
        position:absolute;
        inset:0;
        z-index:-1;
        background:linear-gradient(
          90deg,
          rgba(3,20,54,.96) 0%,
          rgba(3,20,54,.85) 45%,
          rgba(3,20,54,.45) 100%
        );
      }

      .hero-container{
        width:100%;
      }

      .hero-card{
        width:100%;
        max-width:720px;
        padding:clamp(2rem,4vw,3.5rem);
        margin:0;
        border-radius:30px;
        background:rgba(255,255,255,.12);
        border:1px solid rgba(255,255,255,.2);
        backdrop-filter:blur(18px);
        -webkit-backdrop-filter:blur(18px);
        box-shadow:0 25px 60px rgba(0,0,0,.2);
        color:#fff;
      }

      .hero-tag{
        display:inline-block;
        margin-bottom:1.2rem;
        padding:.55rem 1.2rem;
        border-radius:50px;
        background:#E53935;
        color:#fff;
        font-size:.85rem;
        font-weight:600;
      }

      .hero-card h1{
        margin:0 0 1.3rem;
        color:#fff;
        font-size:clamp(2.2rem,5vw,4.5rem);
        line-height:1.08;
        font-weight:800;
      }

      .hero-card p{
        margin:0 0 1rem;
        color:#E2E8F0;
        font-size:clamp(.9rem,1.2vw,1.05rem);
        line-height:1.8;
      }

      .hero-subtitle{
        color:#fff!important;
      }

      .hero-buttons{
        display:flex;
        flex-wrap:wrap;
        gap:1rem;
        margin-top:1.8rem;
      }

      .primary-btn,
      .secondary-btn{
        min-height:48px;
        padding:11px 28px!important;
        border-radius:50px!important;
        font-weight:600!important;
        white-space:nowrap;
        transition:.3s;
      }

      .primary-btn{
        background:#E53935!important;
        border:2px solid #E53935!important;
        color:#fff!important;
      }

      .secondary-btn{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        border:2px solid #fff!important;
        color:#fff!important;
        background:transparent;
      }

      .primary-btn:hover,
      .secondary-btn:hover{
        transform:translateY(-3px);
      }

      .primary-btn:hover{
        background:#C62828!important;
        border-color:#C62828!important;
      }

      .secondary-btn:hover{
        background:#fff!important;
        color:#0B2C6B!important;
      }

      /* ================= TITLES ================= */

      .section-title{
        max-width:750px;
        margin:0 auto 2.5rem;
        text-align:center;
      }

      .section-title h2{
        margin-bottom:.5rem;
        color:#0B2C6B;
        font-size:clamp(2rem,4vw,2.7rem);
        font-weight:800;
      }

      .title-line{
        width:75px;
        height:4px;
        margin:0 auto 1rem;
        border-radius:50px;
        background:#E53935;
      }

      .section-title p{
        margin:0 auto;
        color:#555;
        line-height:1.7;
      }

      /* ================= MISSION ================= */

      .mission-card{
        height:100%;
        padding:2rem;
        border-radius:25px;
        background:#fff;
        text-align:center;
        box-shadow:0 10px 30px rgba(0,0,0,.06);
        transition:.35s;
      }

      .mission-card:hover{
        transform:translateY(-8px);
        box-shadow:0 20px 40px rgba(0,0,0,.12);
      }

      .mission-icon{
        width:80px;
        height:80px;
        margin:0 auto 1.2rem;
        display:grid;
        place-items:center;
        border-radius:50%;
        color:#fff;
        font-size:2.2rem;
      }

      .mission-icon.red{background:#E53935}
      .mission-icon.blue{background:#0B2C6B}
      .mission-icon.green{background:#198754}

      .mission-card h3{
        margin-bottom:.8rem;
        color:#0B2C6B;
        font-size:1.5rem;
        font-weight:800;
      }

      .mission-card p{
        margin:0;
        color:#555;
        line-height:1.8;
      }

      /* ================= JOURNEY ================= */

      .journey-section{
        scroll-margin-top:100px;
      }

      .timeline{
        position:relative;
        display:flex;
        justify-content:space-between;
        gap:2%;
      }

      .timeline:before{
        content:"";
        position:absolute;
        top:35px;
        left:8%;
        right:8%;
        height:4px;
        background:#0B2C6B;
        border-radius:10px;
      }

      .timeline-item{
        position:relative;
        z-index:1;
        width:18%;
        text-align:center;
      }

      .timeline-icon{
        width:70px;
        height:70px;
        margin:auto;
        display:grid;
        place-items:center;
        border-radius:50%;
        background:#0B2C6B;
        color:#fff;
        font-size:1.6rem;
        transition:.3s;
      }

      .timeline-item:hover .timeline-icon{
        background:#E53935;
        transform:translateY(-7px);
      }

      .timeline-year{
        display:block;
        margin:12px 0 5px;
        color:#E53935;
        font-weight:800;
      }

      .timeline-item h5{
        color:#0B2C6B;
        font-weight:800;
      }

      .timeline-item p{
        margin:0;
        color:#555;
        line-height:1.7;
      }

      /* ================= STORY ================= */

      .story-content,
      .achievement-card{
        height:100%;
        padding:clamp(1.5rem,3vw,2.5rem);
        border-radius:28px;
        background:#fff;
        box-shadow:0 12px 30px rgba(0,0,0,.07);
      }

      .story-tag{
        display:inline-block;
        margin-bottom:1rem;
        padding:.45rem 1rem;
        border-radius:50px;
        background:#FFF0F0;
        color:#E53935;
        font-size:.85rem;
        font-weight:700;
      }

      .story-content h3{
        color:#0B2C6B;
        font-size:clamp(1.8rem,3vw,2.4rem);
        font-weight:800;
        line-height:1.3;
      }

      .story-content h3 span{
        color:#E53935;
      }

      .story-content p{
        color:#555;
        line-height:1.85;
      }

      .story-quote{
        margin-top:1.5rem;
        padding:1.2rem;
        border-left:5px solid #E53935;
        border-radius:12px;
        background:#FFF5F5;
      }

      .story-quote p{
        margin:0;
        font-style:italic;
      }

      /* ================= ACHIEVEMENTS ================= */

      .achievement-head{
        display:flex;
        align-items:center;
        gap:1rem;
        margin-bottom:1.2rem;
      }

      .achievement-icon{
        width:65px;
        height:65px;
        flex-shrink:0;
        display:grid;
        place-items:center;
        border-radius:50%;
        background:#E53935;
        color:#fff;
        font-size:1.7rem;
      }

      .achievement-head h4{
        margin:0 0 .2rem;
        color:#0B2C6B;
        font-size:1.5rem;
        font-weight:800;
      }

      .achievement-head span{
        color:#777;
        font-size:.85rem;
      }

      .achievement-item{
        display:flex;
        align-items:flex-start;
        gap:1rem;
        padding:.8rem .5rem;
        border-radius:15px;
      }

      .achievement-circle{
        width:50px;
        height:50px;
        flex-shrink:0;
        display:grid;
        place-items:center;
        border-radius:50%;
        color:#fff;
      }

      .gold{background:#E09B00}
      .green{background:#198754}
      .red{background:#E53935}
      .blue{background:#0B2C6B}

      .achievement-content h5{
        margin:0 0 .3rem;
        color:#0B2C6B;
        font-size:1rem;
        font-weight:800;
      }

      .achievement-content p{
        margin:0;
        color:#555;
        font-size:.9rem;
        line-height:1.6;
      }

      /* =================================================
         TABLET - 769px to 991px
      ================================================= */

      @media(max-width:991px){

        .about-hero{
          min-height:auto;
          padding:120px 0 60px;
        }

        .hero-card{
          max-width:700px;
          margin:auto;
        }

        .timeline{
          display:block;
        }

        .timeline:before{
          display:none;
        }

        .timeline-item{
          width:100%;
          min-height:80px;
          margin-bottom:2.5rem;
          padding-left:5rem;
          text-align:left;
        }

        .timeline-item:last-child{
          margin-bottom:0;
        }

        .timeline-icon{
          position:absolute;
          left:0;
          top:0;
          width:60px;
          height:60px;
        }

        .timeline-item:before{
          content:"";
          position:absolute;
          left:29px;
          top:60px;
          bottom:-40px;
          width:3px;
          background:#0B2C6B;
        }

        .timeline-item:last-child:before{
          display:none;
        }
      }

      /* =================================================
         LARGE MOBILE - 577px to 768px
      ================================================= */

      @media(max-width:768px){

        .about-page section{
          padding:3.5rem 0;
        }

        .about-hero{
          padding:115px 0 50px;
          text-align:center;
        }

        .hero-overlay{
          background:rgba(3,20,54,.78);
        }

        .hero-card{
          padding:2rem;
          border-radius:24px;
        }

        .hero-buttons{
          justify-content:center;
        }

        .achievement-head{
          justify-content:center;
        }
      }

      /* =================================================
         SMALL MOBILE - 576px and below
      ================================================= */

      @media(max-width:576px){

        .about-hero{
          padding:105px 0 40px;
        }

        .hero-card{
          padding:1.5rem 1.2rem;
          border-radius:20px;
        }

        .hero-tag{
          font-size:.75rem;
        }

        .hero-card h1{
          font-size:clamp(1.8rem,9vw,2.3rem);
        }

        .hero-card p{
          font-size:.9rem;
          line-height:1.7;
        }

        .hero-buttons{
          width:100%;
          flex-direction:column;
          gap:.75rem;
        }

        .primary-btn,
        .secondary-btn{
          width:100%;
        }

        .mission-card{
          padding:1.5rem 1.2rem;
        }

        .mission-icon{
          width:70px;
          height:70px;
          font-size:1.9rem;
        }

        .section-title{
          margin-bottom:2rem;
        }

        .section-title h2{
          font-size:2rem;
        }

        .section-title p{
          font-size:.9rem;
        }

        .timeline-item{
          padding-left:4.2rem;
        }

        .timeline-icon{
          width:52px;
          height:52px;
          font-size:1.3rem;
        }

        .timeline-item:before{
          left:25px;
          top:52px;
        }

        .story-content,
        .achievement-card{
          padding:1.4rem;
          border-radius:20px;
        }

        .achievement-head{
          flex-direction:column;
          text-align:center;
        }

        .achievement-item{
          gap:.7rem;
        }

        .achievement-circle{
          width:45px;
          height:45px;
        }

        .achievement-content p{
          font-size:.85rem;
        }
      }

      `}</style>

      {/* ================= HERO ================= */}

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />

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
              Since <strong>2016</strong>, we have been working towards
              building stronger communities through education, healthcare,
              women empowerment, environmental sustainability and social
              development.
            </p>

            <p>
              Our mission is to inspire positive change by providing equal
              opportunities, supporting vulnerable communities and creating
              sustainable solutions that improve lives.
            </p>

            <div className="hero-buttons">

              <Button
                className="primary-btn"
                onClick={scrollJourney}
              >
                Our Journey
              </Button>

              <NavLink
                to="/contact"
                className="secondary-btn"
              >
                Contact Us
              </NavLink>

            </div>

          </div>
        </Container>
      </section>

      {/* ================= MISSION ================= */}

      <section>
        <Container>
          <Row className="g-4">
            {cards.map((x, i) => (
              <Col
                lg={4}
                md={6}
                xs={12}
                key={i}
              >
                <div className="mission-card">
                  <div className={`mission-icon ${x[2]}`}>
                    {x[1]}
                  </div>

                  <h3>{x[0]}</h3>

                  <p>{x[3]}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ================= JOURNEY ================= */}

      <section
        className="journey-section"
        ref={journeyRef}
      >
        <Container>

          <div className="section-title">
            <h2>Our Journey</h2>

            <div className="title-line" />

            <p>
              Every milestone represents our commitment to creating a positive
              impact in society and building stronger communities.
            </p>
          </div>

          <div className="timeline">
            {journey.map((x, i) => (
              <div
                className="timeline-item"
                key={i}
              >
                <div className="timeline-icon">
                  <i className={`bi ${x[2]}`} />
                </div>

                <span className="timeline-year">
                  {x[0]}
                </span>

                <h5>{x[1]}</h5>

                <p>{x[3]}</p>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* ================= STORY ================= */}

      <section>
        <Container>

          <div className="section-title">
            <h2>Our Story</h2>

            <div className="title-line" />

            <p>
              Every milestone in our journey reflects our dedication to serving
              communities with compassion, integrity and hope.
            </p>
          </div>

          <Row className="g-4">

            <Col lg={7}>
              <div className="story-content">

                <span className="story-tag">
                  Since 2016
                </span>

                <h3>
                  Building Hope Through{" "}
                  <span>Compassion & Service</span>
                </h3>

                <p>
                  Jagruti Foundation was established with the vision of
                  creating a society where every individual has equal
                  opportunities to grow, learn and live with dignity.
                </p>

                <p>
                  Over the years, our dedicated volunteers, supporters and
                  community members have worked together to transform thousands
                  of lives through education, healthcare, women empowerment and
                  sustainable development initiatives.
                </p>

                <p>
                  Every initiative we undertake is driven by compassion and a
                  strong belief that even the smallest act of kindness can
                  create lasting social change.
                </p>

                <div className="story-quote">
                  <p>
                    Every act of kindness creates a ripple of hope, inspiring
                    us to continue building stronger communities together.
                  </p>
                </div>

              </div>
            </Col>

            <Col lg={5}>
              <div className="achievement-card">

                <div className="achievement-head">

                  <div className="achievement-icon">
                    <i className="bi bi-trophy-fill" />
                  </div>

                  <div>
                    <h4>Our Achievements</h4>
                    <span>
                      Milestones that inspire us to do more
                    </span>
                  </div>

                </div>

                {achievements.map((x, i) => (
                  <div
                    className="achievement-item"
                    key={i}
                  >
                    <div className={`achievement-circle ${x[2]}`}>
                      <i className={`bi ${x[1]}`} />
                    </div>

                    <div className="achievement-content">
                      <h5>{x[0]}</h5>
                      <p>{x[3]}</p>
                    </div>
                  </div>
                ))}

              </div>
            </Col>

          </Row>

        </Container>
      </section>

    </div>
  );
};

export default About;