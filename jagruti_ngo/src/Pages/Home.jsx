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
import { MdHealthAndSafety } from "react-icons/md";
import{FaUsers, FaHandHoldingHeart, FaBullseye} from "react-icons/fa";
import {FaCalendarAlt, FaFemale, FaGraduationCap} from "react-icons/fa";

const impactData = [
    {
      icon: <FaCalendarAlt />,
      title: "Activities in",
      number: "500+",
      text: "states & union territories",
    },
    {
      icon: <FaUsers />,
      title: "Children Reached",
      number: "10K+",
      text: "states & union territories",
    },
    {
      icon: <FaFemale />,
      title: "Girls & Women Reached",
      number: "7K+",
      text: "states & union territories",
    },
    {
      icon: <FaGraduationCap />,
      title: "Youth Reached",
      number: "9K+",
      text: "states & union territories",
    },
  ];

const Home = () => {
  return (
    <>
    {/* HERO SECTION */}
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>
            Empowering Lives
            <br />
            Through Skill,
            <br />
            Care &
            <span> Compassion</span>
          </h1>

          <p>
            Jagruti Foundation in Nashik is one of the leading NGOs,
            working towards education, empowerment and social welfare.
            We believe every individual deserves an opportunity to
            learn, grow and build a brighter future.
          </p>

          <div className="hero-buttons">
            <button className="program-btn">
              Discover Our Programs →
            </button>
            <button className="contact-btn">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>

{/* ABOUT SECTION */}
    <section className="about-section">
        <div className="about-left">
          <img src={about} alt="About" />
        </div>
        <div className="about-right ms-5">
          <div className="info-box">
            <div className="icon blue">
              <FaUsers />
            </div>

            <div className="text">
              <h2>Who we are?</h2>
              <p>
                Jagruti Foundation empowers communities through education,
                healthcare, skill development and compassionate social initiatives.
              </p>
            </div>
          </div>

          <hr />

          <div className="info-box">
            <div className="icon pink">
              <FaHandHoldingHeart />
            </div>

            <div className="text">
              <h2>What we do?</h2>
              <p>
                We design and implement programs that support children's education,
                women's empowerment and healthcare.
              </p>
            </div>
          </div>

          <hr />

          <div className="info-box">
            <div className="icon blue">
              <FaBullseye />
            </div>

            <div className="text">
              <h2>Why we do it?</h2>
              <p>
                We believe every individual deserves equal opportunities and a better future.
              </p>
            </div>
          </div>

        </div>
        </section>

{/* PROGRAMS SECTION */}

<section className="program-section">
    <h2 className="program-heading">Programs</h2>
    <div className="heading-line"></div>
    <p className="program-para">
        Through our diverse programs, Jagruti Foundation empowers communities by
        promoting education, healthcare, women empowerment,
        environmental sustainability, and social welfare to create lasting
        positive change.
    </p>
    <div className="program-cards">
        <div className="program-card">
            <img src={program1} alt="" />
            <div className="card-overlay">
              <div className="mark"><PiBookBookmarkFill /></div>
                <h3>Education</h3>
                <p>
                    Empowering children through quality education,
                    learning opportunities and brighter futures.
                </p>
                <button className="circle-btn"> →</button>
            </div>
        </div>

        <div className="program-card">
            <img src={program2} alt="" />
            <div className="card-overlay">
              <div className="mark"><RiWomenFill /></div>
                <h3>Women Empowerment</h3>
                <p>
                    Empowering women through education,
                    skill development and equal opportunities.
                </p>
                <button className="circle-btn"> → </button>
            </div>
        </div>

        <div className="program-card">
            <img src={program3} alt="" />
            <div className="card-overlay">
              <div className="mark"><BsLeafFill /></div>
                <h3>Environmental Projects</h3>
                <p>
                    Promoting environmental sustainability through
                    plantation and conservation.
                </p>
                <button className="circle-btn red"> → </button>
            </div>
        </div>

        <div className="program-card">
            <img src={program4} alt="" />
            <div className="card-overlay">
            <div className="mark"><MdHealthAndSafety /></div>
                <h3>Health Initiatives</h3>
                <p>
                    Improving community well-being through
                    healthcare camps and awareness.
                </p>
                <button className="circle-btn"> → </button>
            </div>
        </div>
    </div>
</section>

{/* OUR IMPACT */}

    <section className="impact-section">
      <div className="container">
        <h2 className="impact-title">Our Impact</h2>
        <div className="title-line"></div>

        <div className="impact-grid">
          {impactData.map((item, index) => (
            <div
              className={`impact-card ${
                index !== impactData.length - 1 ? "border-right" : ""
              }`}
              key={index}
            >
              <div className="icon-box">{item.icon}</div>

              <h4>{item.title}</h4>

              <h1>{item.number}</h1>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  

    </>
  )
}

export default Home