import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, description, imgUrls, subtitle, visitUrl, overlayDes, displayModal, overlayUrl }) => {
  return (
    <Col size={12} sm={6} md={6} lg={4}>
      <div className="proj-imgbx hover-effect">
        <img src={overlayUrl} alt="overlay" />
        <div className="proj-txtx" style={{ padding: '10px' }}>
          <h4>{title}</h4>
          <span>{overlayDes}</span>
          <Button variant="primary" onClick={() => displayModal(true, description, imgUrls, subtitle, title, visitUrl)} className="learn-more">
            Learn More
          </Button>
        </div>
      </div>
    </Col>
  );
};
