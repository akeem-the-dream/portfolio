import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { send } from "emailjs-com";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    await send(
      "service_c4q5zj9",
      "template_h5jyjlw",
      {
        fullName: JSON.stringify(formDetails.fullName),
        email: JSON.stringify(formDetails.email),
        phone: JSON.stringify(formDetails.phone),
        message: JSON.stringify(formDetails.message),
      },
      "8AAQo8ozRSczXBXlu",
    )
      .then((response) => {
        setStatus({ succes: true, message: "Message sent successfully" });
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        setStatus({
          succes: false,
          message: "Something went wrong, please try again later.",
        });
        console.log("FAILED...", err);
      });
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <h2>
          Get In Touch
          <hr className="under-line" />
        </h2>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          required
                          type="text"
                          value={formDetails.fullName}
                          placeholder="Full Name (required)"
                          onChange={(e) =>
                            onFormUpdate("fullName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          required
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address (required)"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        {status.message && (
                          <Col size={12} sm={12}>
                            <p
                              className={
                                status.success === false ? "danger" : "success"
                              }
                            >
                              {status.message}
                            </p>
                          </Col>
                        )}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
