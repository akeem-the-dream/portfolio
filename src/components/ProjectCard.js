import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const ProjectCard = ({
  title,
  description,
  imgUrls,
  subtitle,
  visitUrl,
  overlayDes,
  displayModal,
  overlayUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={overlayUrl} alt="overlay" />
        <div className="proj-txtx">
          <div>
            <h4>{title}</h4>
            <span>Contribution: {overlayDes}</span>
          </div>
          <Button
            variant="primary"
            onClick={() =>
              displayModal(
                true,
                description,
                imgUrls,
                subtitle,
                title,
                visitUrl,
              )
            }
            style={{ color: "black", marginTop: "15px" }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </Col>
  );
};
