import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import github from "../assets/img/github.png";
import githubWhite from "../assets/img/github-white.png";
import linkedin from "../assets/img/linkedin.svg";
import linkedinWhite from "../assets/img/linkedin-white.svg";

export const Footer = ({ Darkmode }) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
