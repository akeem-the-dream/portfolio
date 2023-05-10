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
  const tt = "";
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={overlayUrl} alt="image" />
        <div className="proj-txtx">
          <Button
            variant="primary"
            onClick={() =>
              displayModal(
                true,
                description,
                imgUrls,
                subtitle,
                title,
                visitUrl
              )
            }
            style={{ color: "black" }}
          >
            Learn More
          </Button>
          <h4>{title}</h4>
          <span>{overlayDes}</span>
        </div>
      </div>
    </Col>
  );
};
