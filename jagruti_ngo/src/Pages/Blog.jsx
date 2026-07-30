import React, { useState } from "react";
import {
  Container, Row, Col, Card, Button, Form,
  InputGroup, Modal, FloatingLabel
} from "react-bootstrap";

import {
  BsSearch, BsArrowRight, BsBook, BsPeopleFill,
  BsHeartFill, BsCalendar3, BsChevronRight,
  BsMortarboardFill, BsTreeFill, BsHeartPulseFill,
  BsStars, BsPersonHeart, BsSendFill
} from "react-icons/bs";

import blog1 from "../assets/Images/update1.jpeg";
import blog2 from "../assets/Images/update2.jpeg";
import blog3 from "../assets/Images/update3.jpeg";
import blog4 from "../assets/Images/update4.jpeg";
import blog5 from "../assets/Images/update5.jpeg";
import blog6 from "../assets/Images/update6.jpeg";
import heroImage from "../assets/Images/blog-hero.jpeg";

const posts = [
  [
    blog1,
    "May 20, 2025",
    "Empowering Rural Children Through Quality Education",
    "Our education programs continue to bring positive change in rural communities by providing access to learning resources and opportunities."
  ],
  [
    blog2,
    "May 15, 2025",
    "Women Empowerment: Building Stronger Communities",
    "We organized a skill development workshop for women, helping them become financially independent and confident."
  ],
  [
    blog3,
    "May 10, 2025",
    "Planting Hope for a Greener Future",
    "Our environmental initiatives are creating a lasting impact by promoting sustainability and tree plantation drives."
  ],
  [
    blog4,
    "May 05, 2025",
    "Health Camp Brings Smiles to Many Families",
    "We conducted a free health check-up camp for families in need, providing medical support and awareness for a healthier life."
  ],
  [
    blog5,
    "May 02, 2025",
    "Together We Make a Difference",
    "Our youth volunteers are driving meaningful change in the community through dedication, service and compassion."
  ],
  [
    blog6,
    "May 01, 2025",
    "Meet Sunita, a Bright Student",
    "A story of determination, hope and transformation that reminds us of the power of education and support."
  ]
];

const categories = [
  ["Education", "12", <BsMortarboardFill />],
  ["Women Empowerment", "08", <BsPeopleFill />],
  ["Health", "10", <BsHeartPulseFill />],
  ["Environment", "07", <BsTreeFill />],
  ["Community", "09", <BsPeopleFill />],
  ["Success Stories", "06", <BsStars />]
];

const stats = [
  [<BsBook />, "150+", "Stories Published"],
  [<BsPeopleFill />, "50K+", "Lives Impacted"],
  [<BsHeartFill />, "100+", "Volunteers"]
];

const Blog = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <style>{`
        *{box-sizing:border-box}

        body{
          margin:0;
          background:#f7f8fc;
          color:#152451;
          font-family:"Poppins","Segoe UI",Arial,sans-serif;
          line-height:1.6;
          overflow-x:hidden
        }

        /* ================= HERO ================= */

        .blog-hero{
          background:linear-gradient(135deg,#07133f,#172b72);
          padding:150px 0 6%;
          color:#fff;
          overflow:hidden
        }

        .blog-label{
          color:#ff5360;
          font-size:clamp(13px,1.3vw,18px);
          font-weight:700;
          letter-spacing:2px
        }

        .blog-title{
          font:700 clamp(36px,5vw,60px)/1.1 Georgia,serif;
          margin:15px 0
        }

        .blog-title span{color:#ff5360}

        .blog-desc{
          color:#d5daea;
          line-height:1.7;
          max-width:570px
        }

        /* ================= SEARCH ================= */

        .blog-search{
          max-width:550px;
          background:#fff;
          padding:5px;
          border-radius:12px;
          box-shadow:0 10px 30px rgba(0,0,0,.15)
        }

        .blog-search .form-control,
        .blog-search .input-group-text{
          border:0;
          box-shadow:none
        }

        .blog-search .input-group-text{
          color:#8991a5;
          background:#fff
        }

        .search-btn,
        .vol-btn,
        .all-btn,
        .submit-btn{
          background:linear-gradient(135deg,#ed3540,#ff5b64)!important;
          border:0!important;
          border-radius:0 8px 8px 0;
          color:#fff!important;
          font-weight:700!important;
          transition:.3s;
          box-shadow:0 7px 15px rgba(237,53,64,.25)
        }

        .search-btn:hover,
        .vol-btn:hover,
        .all-btn:hover,
        .submit-btn:hover{
          transform:translateY(-4px);
          background:linear-gradient(135deg,#d92330,#ed3540)!important;
          box-shadow:0 12px 25px rgba(237,53,64,.4)
        }

        .search-btn:active,
        .vol-btn:active,
        .all-btn:active,
        .submit-btn:active{
          transform:translateY(-1px)
        }

        /* ================= STATS ================= */

        .blog-stats{
          display:flex;
          gap:30px;
          flex-wrap:wrap;
          margin-top:30px
        }

        .blog-stat{
          display:flex;
          align-items:center;
          gap:10px
        }

        .stat-icon{
          width:46px;
          height:46px;
          border-radius:50%;
          display:grid;
          place-items:center;
          color:#fff;
          background:linear-gradient(145deg,#6079e5,#243b8f);
          box-shadow:
            4px 5px 10px rgba(0,0,0,.25),
            inset 2px 2px 4px rgba(255,255,255,.35);
          transition:.3s
        }

        .blog-stat:hover .stat-icon{
          transform:translateY(-4px) rotate(8deg);
          box-shadow:0 10px 20px rgba(0,0,0,.3)
        }

        .blog-stat small{color:#cbd0df}

        /* ================= HERO IMAGE ================= */

        .hero-image-wrap{
          position:relative;
          width:100%;
          height:450px;
          margin:auto
        }

        .hero-image-wrap:before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,#ff5360,#d92330);
          border-radius:30px 100px 30px 100px;
          transform:rotate(3deg);
          box-shadow:0 20px 45px rgba(0,0,0,.3)
        }

        .hero-img{
          position:relative;
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
          padding:8px;
          background:#fff;
          border-radius:30px 100px 30px 100px;
          transition:.5s
        }

        .hero-image-wrap:hover .hero-img{
          transform:translateY(-5px);
          box-shadow:0 20px 40px rgba(0,0,0,.3)
        }

        /* ================= MAIN ================= */

        .blog-main{padding:5% 0}

        .section-title,
        .side-title,
        .vol-title{
          font:700 clamp(24px,3vw,30px) Georgia,serif;
          color:#101f4c
        }

        .section-title:after,
        .side-title:after{
          content:"";
          display:block;
          width:35px;
          height:3px;
          background:#ed3540;
          margin-top:8px
        }

        /* ================= VIEW BUTTON ================= */

        .view-btn{
          background:#fff!important;
          color:#172653!important;
          border:1px solid #cdd3e2!important;
          border-radius:10px!important;
          font-weight:700!important;
          transition:.3s;
          box-shadow:0 4px 10px rgba(21,37,75,.08)
        }

        .view-btn:hover{
          background:#172b85!important;
          border-color:#172b85!important;
          color:#fff!important;
          transform:translateY(-4px);
          box-shadow:0 10px 20px rgba(23,43,133,.25)
        }

        /* ================= BLOG CARDS ================= */

        .blog-card{
          border:0!important;
          border-radius:15px!important;
          overflow:hidden;
          height:100%;
          box-shadow:0 5px 20px rgba(21,37,75,.08);
          transition:.4s
        }

        .blog-card:hover{
          transform:translateY(-8px);
          box-shadow:0 18px 35px rgba(21,37,75,.17)
        }

        .blog-card img{
          width:100%;
          height:180px;
          object-fit:cover;
          transition:.5s
        }

        .blog-card:hover img{
          transform:scale(1.07)
        }

        .blog-card-body{
          display:flex;
          flex-direction:column
        }

        .blog-date{
          color:#7c8497;
          font-size:11px;
          margin-bottom:8px
        }

        .post-title{
          font-size:16px;
          font-weight:700;
          color:#172653;
          line-height:1.4
        }

        .post-text{
          font-size:12px;
          line-height:1.6;
          color:#687083
        }

        .read-link{
          color:#ed3540;
          text-decoration:none;
          font-size:12px;
          font-weight:700;
          margin-top:auto;
          transition:.3s
        }

        .read-link:hover{
          color:#b8202a;
          padding-left:5px
        }

        /* ================= SIDEBAR ================= */

        .blog-side{
          background:#fff;
          padding:22px;
          border-radius:15px;
          box-shadow:0 5px 20px rgba(21,37,75,.08);
          margin-bottom:20px
        }

        .category-item,
        .popular-post{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:11px 0;
          border-bottom:1px solid #eee;
          transition:.3s
        }

        .category-item:hover{
          transform:translateX(6px)
        }

        .category-left{
          display:flex;
          align-items:center;
          gap:10px;
          font-size:12px;
          font-weight:600
        }

        /* ================= 3D ICONS ================= */

        .category-icon{
          width:42px;
          height:42px;
          border-radius:13px;
          display:grid;
          place-items:center;
          color:#fff;
          font-size:18px;
          background:linear-gradient(145deg,#617be7,#1e378e);
          box-shadow:
            4px 5px 9px rgba(21,37,75,.25),
            inset 2px 2px 4px rgba(255,255,255,.35),
            inset -2px -2px 4px rgba(0,0,0,.2);
          transition:.35s
        }

        .category-item:hover .category-icon{
          transform:translateY(-4px) rotate(-7deg) scale(1.08);
          box-shadow:0 10px 18px rgba(21,37,75,.3)
        }

        .category-item:nth-child(2) .category-icon{
          background:linear-gradient(145deg,#6c8cff,#253b91)
        }

        .category-item:nth-child(3) .category-icon{
          background:linear-gradient(145deg,#ff6b6b,#d62839)
        }

        .category-item:nth-child(4) .category-icon{
          background:linear-gradient(145deg,#45d483,#159957)
        }

        .category-item:nth-child(5) .category-icon{
          background:linear-gradient(145deg,#55c7e8,#168aad)
        }

        .category-item:nth-child(6) .category-icon{
          background:linear-gradient(145deg,#b084ff,#6930c3)
        }

        .category-item:nth-child(7) .category-icon{
          background:linear-gradient(145deg,#ffb347,#e76f00)
        }

        .count{
          background:#f0f2fa;
          color:#172653;
          border-radius:15px;
          padding:4px 8px;
          font-size:10px;
          font-weight:600
        }

        /* ================= POPULAR ================= */

        .popular-section{
          min-height:450px;
          display:flex;
          flex-direction:column
        }

        .popular-post{
          justify-content:flex-start;
          gap:12px;
          border:0
        }

        .popular-post img{
          width:90px;
          height:65px;
          object-fit:cover;
          border-radius:8px;
          flex-shrink:0;
          transition:.4s
        }

        .popular-post:hover img{
          transform:scale(1.07)
        }

        .popular-title{
          font-size:11px;
          font-weight:700;
          color:#172653
        }

        .popular-date{
          font-size:10px;
          color:#888
        }

        .all-btn{
          width:100%;
          margin-top:auto;
          padding:11px!important;
          border-radius:9px!important
        }

        /* ================= PAGINATION ================= */

        .pages{
          display:flex;
          justify-content:center;
          align-items:center;
          gap:8px;
          margin-top:30px
        }

        .page{
          width:38px;
          height:38px;
          padding:0!important;
          border:1px solid #d9deeb!important;
          border-radius:9px!important;
          background:#fff!important;
          color:#172653!important;
          font-weight:600!important;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          transition:.3s
        }

        .page.active,
        .page:hover{
          background:#ed3540!important;
          border-color:#ed3540!important;
          color:#fff!important;
          transform:translateY(-3px);
          box-shadow:0 7px 15px rgba(237,53,64,.25)
        }

        /* ================= VOLUNTEER CTA ================= */

        .volunteer{
          margin-top:45px;
          padding:40px;
          border-radius:20px;
          background:linear-gradient(135deg,#07133f,#253b91);
          color:#fff;
          position:relative;
          overflow:hidden;
          box-shadow:0 15px 35px rgba(7,19,63,.2)
        }

        .volunteer:after{
          content:"";
          position:absolute;
          width:220px;
          height:220px;
          right:-80px;
          top:-100px;
          border-radius:50%;
          background:rgba(255,255,255,.07)
        }

        .vol-icon{
          width:60px;
          height:60px;
          display:grid;
          place-items:center;
          border-radius:18px;
          background:linear-gradient(145deg,#ff6871,#d92330);
          box-shadow:
            5px 7px 12px rgba(0,0,0,.3),
            inset 2px 2px 4px rgba(255,255,255,.3);
          margin-bottom:15px
        }

        .vol-title{
          color:#fff;
          margin-bottom:10px
        }

        .volunteer p{
          color:#d5daea;
          max-width:650px;
          margin-bottom:0
        }

        .vol-btn{
          padding:12px 22px!important;
          border-radius:10px!important;
          white-space:nowrap
        }

        /* ================= MODAL ================= */

        .vol-modal .modal-content{
          border:0;
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 20px 60px rgba(0,0,0,.25)
        }

        .vol-modal .modal-header{
          background:linear-gradient(135deg,#0B2C6B,#164E9E);
          color:#fff;
          padding:20px 25px;
          border:0
        }

        .vol-modal .modal-title{
          color:#fff;
          font-weight:700
        }

        .vol-modal .modal-body,
        .vol-modal .modal-footer{
          background:#F8FAFC
        }

        .vol-modal .form-control,
        .vol-modal .form-select{
          border:0;
          box-shadow:0 3px 12px rgba(21,37,75,.08);
          transition:.3s
        }

        .vol-modal .form-control:focus,
        .vol-modal .form-select:focus{
          border-color:#1e378e;
          box-shadow:
            0 0 0 .2rem rgba(30,55,142,.12),
            0 5px 15px rgba(21,37,75,.08)
        }

        .cancel-btn{
          border-radius:50px!important;
          font-weight:600!important
        }

        .submit-btn{
          border-radius:50px!important;
          padding-left:22px!important;
          padding-right:22px!important
        }

        /* ================= RESPONSIVE ================= */

        @media(max-width:991px){

          /* Navbar-safe spacing */
          .blog-hero{
            padding:130px 0 60px;
            text-align:center
          }

          .blog-desc,
          .blog-search{
            margin-left:auto;
            margin-right:auto
          }

          .blog-stats{
            justify-content:center
          }

          .hero-image-wrap{
            width:85%;
            height:400px;
            margin-top:20px
          }

          .sidebar{
            margin-top:30px
          }

          .volunteer{
            text-align:center
          }

          .vol-icon{
            margin-left:auto;
            margin-right:auto
          }

          .vol-btn{
            margin-top:20px
          }
        }

        @media(max-width:575px){

          /* Extra spacing for mobile navbar */
          .blog-hero{
            padding:120px 0 50px
          }

          .blog-title{
            font-size:35px
          }

          .blog-stats{
            flex-direction:column;
            align-items:center;
            gap:15px
          }

          .hero-image-wrap{
            width:95%;
            height:300px
          }

          .hero-image-wrap:before,
          .hero-img{
            border-radius:25px 65px 25px 65px
          }

          .blog-card img{
            height:200px
          }

          .section-head{
            align-items:flex-start!important;
            gap:20px;
            flex-direction:column
          }

          .blog-side{
            padding:18px
          }

          .popular-section{
            min-height:420px
          }

          .volunteer{
            padding:30px 20px
          }

          .vol-title{
            font-size:25px
          }

          .blog-search button{
            padding-left:12px;
            padding-right:12px
          }

          .blog-search button svg{
            display:none
          }
        }
      `}</style>

      {/* ================= HERO ================= */}

      <section className="blog-hero">
        <Container>
          <Row className="align-items-center g-5">

            <Col lg={6}>
              <div className="blog-label">
                OUR BLOG
              </div>

              <h1 className="blog-title">
                Stories of Change,
                <br />
                Updates that <span>Inspire</span>
              </h1>

              <p className="blog-desc">
                Stay updated with the latest stories, achievements,
                news and insights from our journey of creating a better tomorrow.
              </p>

              <InputGroup className="blog-search">
                <InputGroup.Text>
                  <BsSearch />
                </InputGroup.Text>

                <Form.Control
                  placeholder="Search articles, topics..."
                />

                <Button className="search-btn">
                  Search
                  <BsArrowRight className="ms-2" />
                </Button>
              </InputGroup>

              <div className="blog-stats">
                {stats.map((s, i) => (
                  <div className="blog-stat" key={i}>

                    <div className="stat-icon">
                      {s[0]}
                    </div>

                    <div>
                      <b>{s[1]}</b>
                      <br />
                      <small>{s[2]}</small>
                    </div>

                  </div>
                ))}
              </div>
            </Col>

            <Col lg={6}>
              <div className="hero-image-wrap">
                <img
                  src={heroImage}
                  className="hero-img"
                  alt="Our work"
                />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= BLOG CONTENT ================= */}

      <main className="blog-main">
        <Container>

          <Row>

            {/* BLOG POSTS */}

            <Col lg={8}>

              <div className="section-head d-flex justify-content-between align-items-end mb-4">

                <div>
                  <div className="blog-label">
                    LATEST STORIES
                  </div>

                  <h2 className="section-title">
                    Our Latest Blog Posts
                  </h2>
                </div>

                <Button className="view-btn">
                  View All
                  <BsArrowRight className="ms-2" />
                </Button>

              </div>

              <Row className="g-4">

                {posts.map((p, i) => (

                  <Col md={6} xl={4} key={i}>

                    <Card className="blog-card">

                      <img
                        src={p[0]}
                        alt={p[2]}
                      />

                      <Card.Body className="blog-card-body">

                        <div className="blog-date">
                          <BsCalendar3 className="me-1" />
                          {p[1]}
                        </div>

                        <h3 className="post-title">
                          {p[2]}
                        </h3>

                        <p className="post-text">
                          {p[3]}
                        </p>

                        <a href="#" className="read-link">
                          Read More
                          <BsArrowRight className="ms-1" />
                        </a>

                      </Card.Body>

                    </Card>

                  </Col>

                ))}

              </Row>

              {/* PAGINATION */}

              <div className="pages">

                {[1, 2, 3].map(n => (

                  <Button
                    className={`page ${n === 1 ? "active" : ""}`}
                    key={n}
                  >
                    {n}
                  </Button>

                ))}

                <span>...</span>

                <Button className="page">
                  10
                </Button>

                <Button className="page">
                  <BsArrowRight />
                </Button>

              </div>

            </Col>

            {/* SIDEBAR */}

            <Col lg={4} className="sidebar">

              {/* CATEGORIES */}

              <div className="blog-side">

                <h3 className="side-title">
                  Categories
                </h3>

                {categories.map((c, i) => (

                  <div className="category-item" key={i}>

                    <div className="category-left">

                      <span className="category-icon">
                        {c[2]}
                      </span>

                      {c[0]}

                    </div>

                    <span>

                      <span className="count">
                        {c[1]}
                      </span>

                      <BsChevronRight className="ms-1" />

                    </span>

                  </div>

                ))}

              </div>

              {/* POPULAR POSTS */}

              <div className="blog-side popular-section">

                <h3 className="side-title">
                  Popular Posts
                </h3>

                {posts.slice(0, 3).map((p, i) => (

                  <div className="popular-post" key={i}>

                    <img
                      src={p[0]}
                      alt={p[2]}
                    />

                    <div>

                      <div className="popular-title">
                        {p[2]}
                      </div>

                      <div className="popular-date">
                        {p[1]}
                      </div>

                    </div>

                  </div>

                ))}

                <Button className="all-btn">
                  View All Posts
                  <BsArrowRight className="ms-2" />
                </Button>

              </div>

            </Col>

          </Row>

          {/* ================= VOLUNTEER CTA ================= */}

          <section className="volunteer">

            <Row className="align-items-center">

              <Col lg={8}>

                <div className="vol-icon">
                  <BsPersonHeart size={32} />
                </div>

                <h2 className="vol-title">
                  Be the Change. Join Our Volunteer Community.
                </h2>

                <p>
                  Your time, skills and compassion can help us create
                  meaningful change in the lives of children, women and communities.
                </p>

              </Col>

              <Col lg={4} className="text-lg-end">

                <Button
                  className="vol-btn"
                  onClick={() => setShowForm(true)}
                >
                  Become a Volunteer
                  <BsArrowRight className="ms-2" />
                </Button>

              </Col>

            </Row>

          </section>

        </Container>

        {/* ================= VOLUNTEER MODAL ================= */}

        <Modal
          className="vol-modal"
          show={showForm}
          onHide={() => setShowForm(false)}
          centered
          size="lg"
          scrollable
        >

          <Modal.Header closeButton>

            <div>

              <Modal.Title>
                Join Us as a Volunteer
              </Modal.Title>

              <small className="opacity-75">
                Be a part of our mission and make a difference.
              </small>

            </div>

          </Modal.Header>

          <Modal.Body className="p-4">

            <Form>

              <Row className="g-4">

                <Col xs={12} md={6}>
                  <FloatingLabel
                    controlId="fullName"
                    label="Full Name"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel
                    controlId="email"
                    label="Email Address"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel
                    controlId="phone"
                    label="Phone Number"
                  >
                    <Form.Control
                      type="tel"
                      placeholder="Phone Number"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={12} md={6}>
                  <FloatingLabel
                    controlId="city"
                    label="City"
                  >
                    <Form.Control
                      type="text"
                      placeholder="City"
                    />
                  </FloatingLabel>
                </Col>

                <Col xs={12}>

                  <FloatingLabel
                    controlId="interest"
                    label="Area of Interest"
                  >

                    <Form.Select>

                      <option>Select an area</option>
                      <option>Education</option>
                      <option>Healthcare</option>
                      <option>Women Empowerment</option>
                      <option>Environment</option>
                      <option>Community Service</option>

                    </Form.Select>

                  </FloatingLabel>

                </Col>

                <Col xs={12}>

                  <FloatingLabel
                    controlId="message"
                    label="Why do you want to volunteer?"
                  >

                    <Form.Control
                      as="textarea"
                      placeholder="Tell us how you would like to contribute..."
                      style={{ height:"120px" }}
                    />

                  </FloatingLabel>

                </Col>

              </Row>

            </Form>

          </Modal.Body>

          <Modal.Footer>

            <Button
              variant="light"
              className="cancel-btn px-4 border"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>

            <Button
              className="submit-btn"
              onClick={() => {
                alert("Volunteer registration submitted!");
                setShowForm(false);
              }}
            >
              Join as Volunteer
              <BsSendFill className="ms-2" />
            </Button>

          </Modal.Footer>

        </Modal>

      </main>
    </>
  );
};

export default Blog;