import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CustomCarousel } from './Carousel';

export const ModalComp = ({ displayModal, modalInfo }) => {
  const handleClose = () => {
    displayModal(false);
  };
  const { description, imgUrls, showModal, subtitle, title, visitUrl } = modalInfo || {};

  return (
    <div>
      <Modal dialogClassName="custom-modal-container" show={showModal} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="custom-modal-header">
          <Modal.Title className="custom-modal-title">{showModal && <CustomCarousel imgUrls={imgUrls} title={title} />}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          {title}
          <br />
          {subtitle}
          <hr />
          {description}
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            <a href={visitUrl} target="_blank" rel="noreferrer">
              Visit Site
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
