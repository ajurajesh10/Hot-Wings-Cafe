import React from 'react';
import "./ServicesHeader.css";
import { Container } from 'react-bootstrap';

const ServicesHeader = () => {
    return (
        <div className="services-header">
        <Container className="d-flex flex-column h-100 justify-content-center align-items-center text-light">
          <h1 className="fw-semibold">Elevate Your Event with Our Exquisite Catering</h1>
          <p className='mt-3 fst-italic'>Elevate Your Event with Flavors that Impress – Unforgettable Catering for Every Occasion!</p>
        </Container>
        </div>
    );
}

export default ServicesHeader;
