import React from 'react'
import "../assets/CSS/Home.css";
import hero from "../assets/Images/hero.jpeg";
import about from "../assets/Images/about.jpeg";
import program1 from "../assets/Images/program1.jpeg";
import program2 from "../assets/Images/program2.jpeg";
import program3 from "../assets/Images/program3.jpeg";
import program4 from "../assets/Images/program4.jpeg";
import { PiBookBookmarkFill } from "react-icons/pi";
import { RiWomenFill } from "react-icons/ri";
import { BsLeafFill } from "react-icons/bs";
import { MdGradient, MdHealthAndSafety } from "react-icons/md";
import{FaUsers, FaHandHoldingHeart, FaBullseye} from "react-icons/fa";
import {FaCalendarAlt, FaFemale, FaGraduationCap} from "react-icons/fa";
import { Container, Card, Button } from "react-bootstrap";
import childrenImage from "../assets/Images/impact.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import update1 from "../assets/Images/program1.jpeg";
import update2 from "../assets/Images/program2.jpeg";
import update3 from "../assets/Images/program3.jpeg";

import {Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTools,
  FaBookReader,
  FaBriefcase,
  FaPeopleArrows,
} from "react-icons/fa";
import logo from "../assets/Images/ngo_logo.jpeg";

const updates = [
  {
    id: 1,
    image: update1,
    date: "June 23, 2026",
    title:
      "Jagruti Foundation organized a successful educational camp for village students.",
  },
  {
    id: 2,
    image: update2,
    date: "February 15, 2026",
    title:
      "Tree plantation drive conducted near Trimbakeshwar with volunteers.",
  },
  {
    id: 3,
    image: update3,
    date: "January 27, 2026",
    title:
      "Community awareness program completed successfully with volunteers.",
  },
  {
    id: 4,
    image: update1,
    date: "December 10, 2025",
    title:
      "Blood Donation Camp organized with participation from over 150 donors.",
  },
  {
    id: 5,
    image: update2,
    date: "November 02, 2025",
    title:
      "Women's empowerment workshop conducted for rural communities.",
  },
];
const Home = () => {
  return (
    <>
    {/* HERO SECTION */}
    <section data-aos="fade-up" className="hero-section"
    style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
    marginTop: "-120px",   // pull hero behind navbar
    paddingTop: "120px",   // keep content below navbar
    zIndex: 1
  }}
>
  {/* Overlay */}
  <div style={{ minHeight: "100vh", display: "flex", alignItems: "flex-start", paddingTop: "120px"}}>
    <div className="container-fluid">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className=" hero-content col-lg-6 col-md-8" style={{ paddingLeft: "140px", paddingRight:"20px"}}>
          <h1 className="fw-bold" style={{fontSize: "clamp(3rem,6vw,5rem)", lineHeight: "1.3", color: "#fff" }}>
            Empowering Lives
            <br />
            Through Skill,
            <br />
            Care &
            <span style={{ color: "#D62828" }}> Compassion</span>
          </h1>

          <p className="mt-4" style={{ fontSize: "1.1rem", lineHeight: "1.9", color: "#f1f1f1" }}>
            Jagruti Foundation in Nashik is one of the leading NGOs,
            working towards education, empowerment and social welfare.
            We believe every individual deserves an opportunity to
            learn, grow and build a brighter future.
          </p>

          <div className="d-flex flex-wrap gap-5 mt-5">
            <button className="discover-btn" style={{ backgroundColor: "#D62828", color: "white", padding: "14px 28px", borderRadius: "8px", fontWeight: "600" }} >
              Discover Our Programs →
            </button>

            <button className="btn btn-outline-light" style={{ padding: "14px 28px", borderRadius: "8px", fontWeight: "600" }}>
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ABOUT SECTION */}

<section data-aos="fade-up">
  <div className="container-fluid" style={{paddingLeft: "150px", paddingRight: "150px"}}>

    <div className="row align-items-center gy-5 gx-5">
      {/* Left Image */}
      <div className="col-lg-6 left-img">
        <img src={about} alt="About" className="img-fluid rounded-4 shadow"
          style={{width: "100%", height: "500px",objectFit: "cover"}}
        />
      </div>

      {/* Right Content */}
      <div className="col-lg-6" style={{paddingLeft: "60px", paddingTop: "50px"}}>
        {/* Who We Are */}
        <div className="about-card d-flex align-items-start mb-4">
          <div
            className="d-flex justify-content-center align-items-center rounded-circle"
            style={{width: "70px", height: "70px", background: "#D6DCFF", color: "#16255F", fontSize: "30px", flexShrink: 0 }}>
            <FaUsers />
          </div>

          <div className="ms-4">
            <h2 className="fw-bold" style={{ color: "#16255F" }} >
              Who We Are?
            </h2>
            <p className="text-secondary" style={{ lineHeight: "1.9", fontSize: "17px" }}>
              Jagruti Foundation empowers communities through
              education, healthcare, skill development and
              compassionate social initiatives.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="about-card d-flex align-items-start my-4">
          <div
            className="d-flex justify-content-center align-items-center rounded-circle"
            style={{ width: "70px", height: "70px", background: "#FFD9DE", color: "#D62828", fontSize: "30px", flexShrink: 0 }}>
            <FaHandHoldingHeart />
          </div>
          <div className="ms-4">
            <h2 className="fw-bold" style={{ color: "#16255F" }}>
              What We Do?
            </h2>
            <p
              className="text-secondary" style={{lineHeight: "1.9", fontSize: "17px" }} >
              We design and implement programs that support
              children's education, women's empowerment,
              healthcare and social development.
            </p>
          </div>
        </div>

        {/* Why We Do It */}
        <div className="about-card d-flex align-items-start mt-4">
          <div
            className="d-flex justify-content-center align-items-center rounded-circle"
            style={{width: "70px", height: "70px",background: "#D6DCFF", color: "#16255F",fontSize: "30px", flexShrink: 0}} >
            <FaBullseye />
          </div>
          <div className="ms-4">
            <h2 className="fw-bold" style={{ color: "#16255F" }}>
              Why We Do It?
            </h2>
            <p className="text-secondary" style={{ lineHeight: "1.9", fontSize: "17px" }} >
              We believe every individual deserves equal
              opportunities, dignity and the chance to build
              a better future.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* PROGRAM SECTION */}

<section className="py-1" data-aos="fade-up">
  <div className="container-fluid">
    <h2 className="text-center fw-bold" style={{color: "#16255F", fontSize: "clamp(2.2rem,5vw,3.5rem)"}}>
      Programs
    </h2>

    <div className="mx-auto mb-4" style={{width: "90px", height: "5px", background: "#D62828", borderRadius: "20px", marginTop: "20px"}}></div>

    <p className="text-center text-secondary mx-auto"
      style={{ maxWidth: "1000px", lineHeight: "1.9",fontSize: "18px"}}>
      Through our diverse programs, Jagruti Foundation empowers
      communities by promoting education, healthcare, women
      empowerment, environmental sustainability and social welfare
      to create lasting positive change.
    </p>

    <div className="row g-4 mt-4" style={{marginLeft:"100px", marginRight:"100px"}}>

      {/* CARD 1 */}
      <div className="col-lg-3 col-md-6">
        <div className="program-card">
          <img src={program1} alt="education" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
          <div className="program-overlay">
            <div className="program-icon">
              <PiBookBookmarkFill />
            </div>
            <h3>Education</h3>
            <p>
              Empowering children through quality education,
              learning opportunities and brighter futures.
            </p>
            <button className="circle-btn">
              →
            </button>
          </div>
        </div>
      </div>

      {/* CARD 2 */}

      <div className="col-lg-3 col-md-6">
        <div className="program-card">
          <img
            src={program2} alt="women empowerment" className="img-fluid w-100 h-100" style={{objectFit: "cover" }} />
          <div className="program-overlay">
            <div className="program-icon">
              <RiWomenFill />
            </div>
            <h3>Women Empowerment</h3>
            <p>
              Empowering women through education,
              skill development and equal opportunities.
            </p>
            <button className="circle-btn">
              →
            </button>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-lg-3 col-md-6">
        <div className="program-card">
          <img src={program3} alt="environment" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
          <div className="program-overlay">
            <div className="program-icon">
              <BsLeafFill />
            </div>
            <h3>Environmental</h3>
            <p>
              Promoting environmental sustainability through
              plantation and conservation.
            </p>
            <button className="circle-btn">
              →
            </button>
          </div>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="col-lg-3 col-md-6">
        <div className="program-card">
          <img src={program4} alt="health" className="img-fluid w-100 h-100" style={{objectFit: "cover" }} />
          <div className="program-overlay">
            <div className="program-icon">
              <MdHealthAndSafety />
            </div>
            <h3>Health</h3>
            <p>
              Improving community well-being through
              healthcare camps and awareness.
            </p>
            <button className="circle-btn">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* IMPACT SECTION */}
    <section className="py-5" data-aos="fade-up">
  <div className="container-fluid" style={{paddingLeft: "150px", paddingRight: "150px"}}>
    <h2 className="text-center fw-bold" style={{ color: "#16255F", fontSize: "clamp(2.2rem,5vw,3.5rem)" }}> Our Impact</h2>
    <div className="mx-auto mb-5"style={{width: "90px", height: "5px", background: "#D62828", borderRadius: "20px", marginTop: "20px"}}></div>
    <div className="row text-center">

      <div className="col-lg-3 col-md-6 border-end impact-card">
        <div className="rounded-circle d-flex justify-content-center align-items-center mx-auto"
          style={{ width: "65px", height: "65px", background: "#D6DCFF", color: "#16255F", fontSize: "28px", }} >
          <FaCalendarAlt />
        </div>
        <h5 className="mt-3">Activities in</h5>
        <h1 className="fw-bold display-2 text-danger">26</h1>
        <p>states &<br />union territories</p>
      </div>

      <div className="col-lg-3 col-md-6 border-end impact-card">
        <div className="rounded-circle d-flex justify-content-center align-items-center mx-auto"
          style={{ width: "65px", height: "65px", background: "#D6DCFF", color: "#16255F", fontSize: "28px", }} >
          <FaUsers />
        </div>
        <h5 className="mt-3">Children Reached</h5>
        <h1 className="fw-bold display-2 text-danger">10K+</h1>
        <p>states &<br />union territories</p>
      </div>

      <div className="col-lg-3 col-md-6 border-end impact-card">
        <div className="rounded-circle d-flex justify-content-center align-items-center mx-auto"
          style={{ width: "65px", height: "65px", background: "#D6DCFF", color: "#16255F", fontSize: "28px", }} >
          <FaFemale />
        </div>
        <h5 className="mt-3">Girls & Women Reached</h5>
        <h1 className="fw-bold display-2 text-danger">7K+</h1>
        <p>states &<br />union territories</p>
      </div>

      <div className="col-lg-3 col-md-6 impact-card">
        <div className="rounded-circle d-flex justify-content-center align-items-center mx-auto"
          style={{ width: "65px", height: "65px", background: "#D6DCFF", color: "#16255F", fontSize: "28px", }} >
          <FaGraduationCap />
        </div>
        <h5 className="mt-3">Youth Reached</h5>
        <h1 className="fw-bold display-2 text-danger">8K+</h1>
        <p>states &<br />union territories</p>
      </div>

    </div>
  </div>
  <div className="row">
  <div className="col-12 pt-5 pb-0 ps-5 pe-5">
    <img
      src={childrenImage}
      alt="Children"
      className="img-fluid w-100"
      style={{ height: "100%", display: "block" }}
    />
  </div>
</div>
</section>

{/* LATEST UPDATES */}
<section data-aos="fade-up"
      style={{
        padding: "0 0 5% 0",
        background: "linear-gradient(to bottom, #FFFFFF 0%, #f2f5ff 100%)",
        overflow: "hidden",
        boxShadow: "none",
    marginTop: 0,
      }}
    >
      <Container>

        {/* ================= SECTION HEADING ================= */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4%",
          }}
        >
          <h2 
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              color: "#0B2C6B",
              marginBottom: "1%",
            }}
          >
            Latest Updates
          </h2>

          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#E53935",
              borderRadius: "10px",
              margin: "0 auto",
            }}
          />
        </div>

        {/* ================= SWIPER ================= */}
        <Swiper
          modules={[Autoplay]}
          navigation
          loop={true}
          centeredSlides={true}
          watchSlidesProgress={true}
          slidesPerView={2}
          slideToClickedSlide={true}
          spaceBetween={35}
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            576: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            992: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
          }}
        >
          {updates.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <Card
                  style={{
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",

                    boxShadow: isActive
                       ? "0 4px 12px rgba(0,0,0,0.08)"
  : "none",

                    transform: isActive
                      ? "scale(1.02)"
                      : "scale(0.95)",

                    filter: isActive
                      ? "blur(0)"
                      : "blur(1.5px)",

                    opacity: isActive
                      ? 1
                      : 0.65,

                    transition:
                      "all 0.6s ease",

                    margin: "5% 0",

                    minHeight: "100%",
                  }}
                >

                  {/* ================= IMAGE ================= */}
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {/* ================= DATE BADGE ================= */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "5%",
                        left: "5%",

                        backgroundColor: "#E53935",
                        color: "#FFFFFF",

                        padding: "8px 14px",
                        borderRadius: "20px",

                        fontSize: "0.8rem",
                        fontWeight: "600",
                      }}
                    >
                      {item.date}
                    </span>
                  </div>

                  {/* ================= CARD BODY ================= */}
                  <Card.Body
                    style={{
                      padding: "8%",
                    }}
                  >

                    {/* TITLE */}
                    <Card.Text
                      style={{
                        color: "#222222",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        fontWeight: "500",

                        minHeight: "80px",

                        marginBottom: "5%",
                      }}
                    >
                      {item.title}
                    </Card.Text>

                    {/* VIEW MORE BUTTON */}
                    <Button
                      variant="link"
                      style={{
                        padding: "0",

                        textDecoration: "none",

                        color: "#0B2C6B",

                        fontWeight: "700",

                        fontSize: "0.95rem",
                      }}
                    >
                      View More

                      <span
                        style={{
                          marginLeft: "8px",

                          color: "#E53935",

                          fontSize: "1.2rem",

                          transition:
                            "transform 0.3s ease",
                        }}
                      >
                        →
                      </span>
                    </Button>

                  </Card.Body>
                </Card>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </section>

{/* FOOTER */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        /* ================= FOOTER ================= */
        .footer-section {
          position: relative;
          overflow: hidden;
          background: #031436;
          color: #fff;
          top: -30px;
          padding: 105px 0 30px;
          font-family: 'Poppins', sans-serif;
        }

        /* ================= WAVE ================= */
        .footer-wave {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 1;
        }

        .footer-wave svg {
          display: block;
          width: 100%;
          height: 82px;
        }

        .footer-content {
          position: relative;
          z-index: 2;
        }

        /* ================= HEADINGS ================= */
        .footer-section h5 {
          position: relative;
          display: inline-block;
          margin: 0 0 22px;
          padding-bottom: 8px;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
        }

        .footer-section h5::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 30px;
          height: 2px;
          background: #d82120;
        }

        /* ================= LINKS ================= */
        .footer-link {
          padding: 5px 0;
          color: #b0c2de;
          font-size: 14px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .footer-link:hover {
          color: #fff;
          transform: translateX(4px);
        }

        /* ================= FOCUS ================= */
        .focus-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          color: #b0c2de;
          font-size: 13.5px;
          transition: 0.3s ease;
        }

        .focus-item svg {
          font-size: 19px;
          min-width: 20px;
        }

        .focus-item:hover {
          color: #fff;
          transform: translateX(4px);
        }

        /* ================= CONTACT ================= */
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 13px;
        }

        .contact-item > svg {
          color: #d82120;
          font-size: 16px;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .contact-item strong {
          display: block;
          margin-bottom: 2px;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
        }

        .contact-item p {
          margin: 0;
          color: #b0c2de;
          font-size: 13px;
          line-height: 1.5;
        }

        /* ================= SOCIAL ICONS ================= */
        .social-icons {
          display: flex;
          gap: 12px;
          margin-top: 18px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          padding: 9px;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .facebook {
          background: #1877f2;
        }

        .instagram {
          background: linear-gradient(
            45deg,
            #feda75,
            #fa7e1e,
            #d62976,
            #962fbf,
            #4f5bd5
          );
        }

        .linkedin {
          background: #0a66c2;
        }

        .youtube {
          background: #ff0000;
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 5px 12px rgba(0, 0, 0, 0.25);
        }

        /* ================= BOTTOM ================= */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          margin-top: 25px;
          padding-top: 15px;
          text-align: center;
          color: #8fa5c5;
          font-size: 12px;
        }

        /* ================= TABLET ================= */
        @media (max-width: 991px) {
          .footer-section {
            padding-top: 95px;
          }
        }

        /* ================= MOBILE ================= */
        @media (max-width: 767px) {
          .footer-section {
            padding-top: 90px;
          }

          .footer-column {
            margin-bottom: 10px;
          }
        }

        @media (max-width: 575px) {
          .footer-section {
            padding-top: 80px;
          }

          .footer-about {
            text-align: center;
          }

          .footer-logo {
            justify-content: center;
          }

          .footer-column {
            text-align: center;
          }

          .footer-section h5::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-link:hover,
          .focus-item:hover {
            transform: none;
          }

          .focus-item {
            justify-content: center;
          }

          .contact-item {
            max-width: 310px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer-section">

        {/* ================= CURVED WAVE ================= */}
        <div className="footer-wave">
          <svg
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f2f5ff"
              d="
                M0,0
                L0,62

                C60,60 120,58 180,58
                C250,58 330,59 410,61
                C490,64 560,70 640,78
                C720,87 790,96 865,102
                C940,108 1015,108 1095,102
                C1175,96 1250,84 1320,72
                C1375,63 1410,58 1440,56

                L1440,0
                Z
              "
            />
          </svg>
        </div>

        <Container className="footer-content">

          <Row className="g-4">

            {/* ================= LOGO & DESCRIPTION ================= */}
            <Col lg={3} md={6} className="footer-column">
              <div className="footer-about">

                <div className="footer-logo d-flex align-items-center gap-3">

                  <img
                    src={logo}
                    alt="Jagruti Foundation Logo"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      background: "#fff",
                      padding: "4px",
                    }}
                  />

                  <div>
                    <h4
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      Jagruti Foundation
                    </h4>

                    <p
                      style={{
                        color: "#d82120",
                        fontSize: "13px",
                        margin: "2px 0 0",
                      }}
                    >
                      सेवा ही संकल्प
                    </p>
                  </div>

                </div>

                <p
                  style={{
                    color: "#b0c2de",
                    fontSize: "13.5px",
                    lineHeight: 1.6,
                    margin: "15px 0 0",
                  }}
                >
                  Empowering lives through skill development, education,
                  and care. Together, we build a better tomorrow for every
                  individual and community.
                </p>

                {/* SOCIAL ICONS BELOW DESCRIPTION */}
                <div className="social-icons">

                  <FaFacebookF className="social-icon facebook" />

                  <FaInstagram className="social-icon instagram" />

                  <FaLinkedinIn className="social-icon linkedin" />

                  <FaYoutube className="social-icon youtube" />

                </div>

              </div>
            </Col>

            {/* ================= QUICK LINKS ================= */}
            <Col lg={2} md={6} className="footer-column">

              <h5>Quick Links</h5>

              {[
                "Home",
                "About Us",
                "Programs",
                "Blog & News",
                "Gallery",
                "Contact Us",
              ].map((item) => (
                <div
                  className="footer-link"
                  key={item}
                >
                  <span
                    style={{
                      color: "#d82120",
                      marginRight: 8,
                      fontWeight: 600,
                    }}
                  >
                    ›
                  </span>

                  {item}
                </div>
              ))}

            </Col>

            {/* ================= OUR PROGRAMS ================= */}
            <Col lg={2} md={6} className="footer-column">

              <h5>Our Programs</h5>

              {[
                "Education Programs",
                "Skill Development",
                "Empowerment Projects",
                "Healthcare Initiatives",
                "Community Support",
              ].map((item) => (
                <div
                  className="footer-link"
                  key={item}
                >
                  <span
                    style={{
                      color: "#d82120",
                      marginRight: 8,
                      fontWeight: 600,
                    }}
                  >
                    ›
                  </span>

                  {item}
                </div>
              ))}

            </Col>

            {/* ================= OUR FOCUS ================= */}
            <Col lg={2} md={6} className="footer-column">

              <h5>Our Focus</h5>

              <div className="focus-item">
                <FaTools style={{ color: "#ff9f1c" }} />
                <span>Skill Development</span>
              </div>

              <div className="focus-item">
                <FaBookReader style={{ color: "#4dabf7" }} />
                <span>Education & Training</span>
              </div>

              <div className="focus-item">
                <FaBriefcase style={{ color: "#2ec4b6" }} />
                <span>Employment Support</span>
              </div>

              <div className="focus-item">
                <FaPeopleArrows style={{ color: "#ff6b6b" }} />
                <span>Community Welfare</span>
              </div>

            </Col>

            {/* ================= CONTACT ================= */}
            <Col lg={3} md={6} className="footer-column">

              <h5>Contact Us</h5>

              <div className="contact-item">

                <FaMapMarkerAlt />

                <div>
                  <strong>Address</strong>

                  <p>
                    Anand Chhaya Apartment, Near Satpur Colony,
                    Satpur, Nashik–422007, Maharashtra
                  </p>
                </div>

              </div>

              <div className="contact-item">

                <FaPhoneAlt />

                <div>
                  <strong>Phone</strong>

                  <p>
                    +91 12345 67890
                  </p>
                </div>

              </div>

              <div className="contact-item">

                <FaEnvelope />

                <div>
                  <strong>Email</strong>

                  <p>
                    info@jagrutifoundation.org
                  </p>
                </div>

              </div>

            </Col>

          </Row>

          {/* ================= COPYRIGHT ================= */}
          <div className="footer-bottom">
            © {new Date().getFullYear()} Jagruti Foundation.
            All Rights Reserved.
          </div>

        </Container>

      </footer>
    </>
  )
}

export default Home