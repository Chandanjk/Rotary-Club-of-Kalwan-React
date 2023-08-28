import React from "react";
import Header from "../common/header";
import paul from "../../images/paul.jpg";
import rotract from "../../images/rotract.jpg";
import innerwheel from "../../images/innerwheel.png";
import rcc from "../../images/rcc.png";
import Posts from "../posts/posts";

const HomePage = () => {
  return (
    <>
      <div className="site-wrap" id="home-section">
        <Header />

        <div className="site-section" id="about-us">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="h4 mb-6">About Rotary</h2>
                <p>
                  {" "}
                  Rotary is a global network of 1.2 million neighbors, friends,
                  leaders, and problem-solvers who see a world where people
                  unite and take action to create lasting change – across the
                  globe, in our communities, and in ourselves.
                </p>
                <p>
                  {" "}
                  The mission of The Rotary Foundation is to enable Rotarians to
                  advance world understanding, goodwill, and peace through the
                  improvement of health, the support of education, and the
                  alleviation of poverty.{" "}
                </p>
                <p>
                  {" "}
                  The Foundation is a not-for-profit corporation supported
                  solely by voluntary contributions from Rotarians and friends
                  of the Foundation who share its vision of a better world.
                </p>
                <p>
                  {" "}
                  This support is essential to make possible Foundation
                  grant-funded projects that bring sustainable improvement to
                  communities in need
                </p>
                <p className="right italic bold">
                  <b>
                    Founded by
                    <br />
                    -Paul Harris
                  </b>
                </p>
                <p>
                  <a
                    href="#works"
                    className="btn btn-primary text-white px-5 left margin-bottom scrollLink"
                  >
                    Our works
                  </a>
                </p>
              </div>
              <div className="col-lg-6">
                <img src={paul} alt="Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* Services*/}
        <div className="site-section bg-light" id="services">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-7 mx-auto text-center">
                <h2 className="heading-29190">Our Services</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="service-29128 text-center">
                  <div className="d-block wrap-icon">
                    <i className="fa fa-user fa-3x"></i>
                  </div>
                  <h3>WE CONNECT PEOPLE</h3>
                  <p>
                    Rotary unites more than a million people.. Through Rotary
                    clubs, people from all continents and cultures come together
                    to exchange ideas and form friendship.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-29128 text-center">
                  <div className="d-block wrap-icon">
                    <i className="fa fa-users fa-3x"></i>
                  </div>
                  <h3>WE TRANSFORM COMMUNITIES</h3>
                  <p>
                    We take action locally and globally Each day, our members
                    pour their passion, integrity, and intelligence into
                    completing projects.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-29128 text-center">
                  <div className="d-block wrap-icon">
                    <i className="fa fa-ambulance fa-3x"></i>
                  </div>
                  <h3>WE SOLVE PROBLEMS</h3>
                  <p>
                    No challenge is too big for us For more than 110 years,
                    we’ve bridged cultures and connected continents to champion
                    peace, fight illiteracy and poverty.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-29128 text-center">
                  <div className="d-block wrap-icon">
                    <i className="fa fa-hand-peace-o fa-3x"></i>
                  </div>
                  <h3>WE RPOMOTE PEACE</h3>
                  <p>
                    Rotary fosters understanding across cultures. We train
                    adults and young leaders to prevent and mediate conflict and
                    help refugees who have fled dangerous areas.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Posts />

        {/* Collaorations */}
        <div className="site-section bg-white" id="collaborations">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-7 mx-auto text-center">
                <h2 className="heading-29190">Collaborations</h2>
              </div>
            </div>

            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 mb-4"
                style={{ height: "auto" }}
              >
                <div className="post-entry-1 h-100" style={{ height: "auto" }}>
                  <div style={{ width: "100%" }} className="center">
                    <img src={rotract} alt="Image" className="img-fluid" />
                  </div>
                  <div
                    className="post-entry-1-contents center"
                    style={{ height: "auto" }}
                  >
                    <h2>
                      <a>Rotaract Club Of Kalwan</a>
                    </h2>
                    <span className="meta d-inline-block mb-3">
                      July 17, 2019{" "}
                    </span>
                    <p>
                      Rotaract clubs bring together people ages 18-30 to
                      exchange ideas with leaders in the community, develop
                      leadership and professional skills, and have fun through
                      service.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mb-4"
                style={{ height: "auto" }}
              >
                <div className="post-entry-1 h-100" style={{ height: "auto" }}>
                  <div style={{ width: "100%" }} className="center">
                    <img src={innerwheel} alt="Image" className="img-fluid" />
                  </div>
                  <div
                    className="post-entry-1-contents center"
                    style={{ height: "auto" }}
                  >
                    <h2>
                      <a>InnerWheel Club Of Kalwan</a>
                    </h2>
                    <span className="meta d-inline-block mb-3">
                      July 17, 2019{" "}
                    </span>
                    <p>
                      International Inner Wheel is one of the largest women’s
                      service voluntary organisations in the world and are
                      active in more than 104 countries
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 mb-4"
                style={{ height: "auto" }}
              >
                <div className="post-entry-1 h-100" style={{ height: "auto" }}>
                  <div style={{ width: "100%" }} className="center">
                    <img src={rcc} alt="Image" className="img-fluid" />
                  </div>
                  <div
                    className="post-entry-1-contents center"
                    style={{ height: "auto" }}
                  >
                    <h2>
                      <a>RCC Club Of Kalwan</a>
                    </h2>
                    <span className="meta d-inline-block mb-3">
                      July 17, 2019{" "}
                    </span>
                    <p>
                      RCC members plan and carry out projects in their
                      communities and support local Rotary club projects.RCC
                      members plan and carry out projects in their communities
                      and support local Rotary club projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
