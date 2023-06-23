import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import github from "../assets/img/github.png";
import githubWhite from "../assets/img/github-white.png";
import linkedin from "../assets/img/linkedin.svg";
import linkedinWhite from "../assets/img/linkedin-white.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import sun from "../assets/img/sun.svg";
import moon from "../assets/img/moon.svg";

export const NavBar = ({ Darkmode, toggle }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const handleChange = () => {
    toggle();
  };

  // effect for the light and dark mode
  useEffect(() => {
    const rootElm = document.querySelector(":root");

    if (Darkmode && rootElm) {
      rootElm.style.setProperty("--bgColBlack", "#121212");
      rootElm.style.setProperty("--bgColWhite", "#fff");
      rootElm.style.setProperty("--borderCol", "rgba(255, 255, 255, 0.5)");
      rootElm.style.setProperty("--bannerImg", "var(--bannerImgUrl)");
      rootElm.style.setProperty("--pColor", "#b8b8b8");

      rootElm.style.setProperty("--mainPurple", "#aa367c");
      rootElm.style.setProperty("--mainBlue", "#4a2fbd");
      rootElm.style.setProperty("--altPurple", " rgba(170, 54, 124, 0.5)");
      rootElm.style.setProperty("--altBlue", " rgba(74, 47, 189, 0.5)");
    } else if (rootElm) {
      rootElm.style.setProperty("--bgColBlack", "#fff");
      rootElm.style.setProperty("--bgColWhite", "#121212");
      rootElm.style.setProperty("--borderCol", "rgba(0, 0, 0, 0.5)");
      rootElm.style.setProperty("--bannerImg", "var(--altbannerImgUrl)");
      rootElm.style.setProperty("--pColor", "#4c4c4c");

      rootElm.style.setProperty("--mainPurple", "#4a2fbd");
      rootElm.style.setProperty("--mainBlue", "#aa367c");
      rootElm.style.setProperty("--altPurple", "rgba(74, 47, 189, 0.5) ");
      rootElm.style.setProperty("--altBlue", "rgba(170, 54, 124, 0.5) ");
    }
  }, [Darkmode]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <input
                className="checkbox-input "
                type="checkbox"
                id="darkmode-toggle"
                onChange={handleChange}
              />
              <label className="checkbox-label" htmlFor="darkmode-toggle">
                <img
                  alt="sun"
                  src={sun}
                  className="checkbox-sun checkbox-label-svg"
                />
                <img
                  alt="moon"
                  src={moon}
                  className="checkbox-moon checkbox-label-svg"
                />
              </label>
              <div className="social-icon">
                <a href="https://github.com/akeembrisco">
                  <img src={Darkmode ? githubWhite : github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/akeem-brisco-6b3b47128/">
                  <img src={Darkmode ? linkedinWhite : linkedin} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
