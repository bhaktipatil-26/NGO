import {Container, Row, Col } from "react-bootstrap";
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

import React from 'react'

const Footer = () => {
  return (
    <>
        
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

export default Footer