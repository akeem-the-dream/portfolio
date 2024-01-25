import React from "react";
import headerImg from "../assets/img/header-img.svg";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import html_icon from "../assets/img/html_icon.png";
import css_icon from "../assets/img/css_icon.png";
import react_icon from "../assets/img/react_icon.png";
import agile_logo from "../assets/img/agile-logo.jpg";
import jira_logo from "../assets/img/jira_logo.png";
import github from "../assets/img/github.png";
import problem_solving from "../assets/img/problem-solving.png";
import rest_api_icon from "../assets/img/rest-api-icon.png";
import figma_icon from "../assets/img/figma_icon.png";
import nodeJS_logo from "../assets/img/nodeJS_logo.svg";
import javascript_logo from "../assets/img/javascript_logo.png";
export const About = () => {
  const skills = [
    {
      name: "HTML",
      img: html_icon,
    },
    {
      name: "CSS",
      img: css_icon,
    },
    {
      name: "React",
      img: react_icon,
    },
    {
      name: "Javascript",
      img: javascript_logo,
    },
    {
      name: "NodeJs",
      img: nodeJS_logo,
    },
    {
      name: "UX/UI Design",
      img: figma_icon,
    },
    {
      name: "REST API",
      img: rest_api_icon,
    },
    {
      name: "Problem Solving",
      img: problem_solving,
    },
    {
      name: "GitHub",
      img: github,
    },
    {
      name: "Jira",
      img: jira_logo,
    },
    {
      name: "Agile",
      img: agile_logo,
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>
                About
                <hr className="under-line" />
              </h2>
              <div className="row" style={{ marginTop: "10vh" }}>
                <div className="col-6">
                  <img
                    className="about-img"
                    src={headerImg}
                    alt="Akeem Photo"
                  />
                  <h2> Who is this guy?</h2>
                  <p>
                    Hey, I am Akeem Brisco a Software and Tech enthusiast with
                    strong problem-solving skills, critical thinking abilities,
                    and a passion for learning. I have years of experience as a
                    Front-End Developer, with expertise in application
                    development, RESTful APIs, agile methodologies, and
                    collaboration with cross-functional teams. My technical
                    skills include proficiency in programming languages, writing
                    SQL queries, and working with tools like Jira, GitHub, and
                    Jenkins. As a team player, I am enthusiastic about
                    technology and always eager to apply my skills to help
                    achieve business goals.
                  </p>
                </div>
                <div className="col-6 skills">
                  <h1>
                    Skills
                    <hr className="under-line" />
                  </h1>
                  <ul>
                    {skills.map((each) => (
                      <li key={each.name}>
                        <img src={each.img} alt={each.name} />
                        <h2>{each.name}</h2>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="col-6">
                 
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      HTML
                    </div>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated about-progress-bar"
                      style={{
                        width: "57%",
                      }}
                    >
                      80%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">CSS</div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "57%",
                      }}
                    >
                      80%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      React
                    </div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "64%",
                      }}
                    >
                      90%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      JavaScript
                    </div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "64%",
                      }}
                    >
                      90%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      Node.js
                    </div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "50%",
                      }}
                    >
                      70%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      UX/UI Design
                    </div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "43%",
                      }}
                    >
                      60%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      REST API
                    </div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "57%",
                      }}
                    >
                      80%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      Problem Solving
                    </div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "64%",
                      }}
                    >
                      90%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      Git/Jira
                    </div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "57%",
                      }}
                    >
                      80%
                    </div>
                  </div>
                  <br />
                  <div className="progress about-progress">
                    <div className="progress-bar about-progress-title">
                      Agile
                    </div>
                    <div
                      className="progress-bar progress-bar-animated progress-bar-striped about-progress-bar"
                      style={{
                        width: "57%",
                      }}
                    >
                      80%
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
