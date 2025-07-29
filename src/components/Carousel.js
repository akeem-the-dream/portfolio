import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CustomCarousel = ({ imgUrls, title }) => {
  return (
    <Carousel>
      {imgUrls.map((imgSrc, index) => {
        return (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={imgSrc} alt={title} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
