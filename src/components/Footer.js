import { Container, Row, Col, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import circleUp from "../assets/img/circleUp.svg";
import github from "../assets/img/github.png";
import githubWhite from "../assets/img/github-white.png";
import linkedin from "../assets/img/linkedin.svg";
import linkedinWhite from "../assets/img/linkedin-white.svg";

export const Footer = ({ Darkmode }) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="footer-logo">
            <a href="/">
              <img className="logo hover-effect" src={logo} alt="Logo" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/akeembrisco">
                <img src={Darkmode ? githubWhite : github} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/akeem-brisco-6b3b47128/">
                <img src={Darkmode ? linkedinWhite : linkedin} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved </p>
            <Nav.Link href="#home" className="up-arrow">
              <img src={circleUp} alt="up arrow" />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
