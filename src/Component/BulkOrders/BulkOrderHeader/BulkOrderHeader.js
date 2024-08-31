import React from 'react';
import "./BulkOrderHeader.css";
import { Container } from 'react-bootstrap';

const BulkOrderHeader = () => {
    return (
        <div className="bulk-order-header">
        <Container className="d-flex flex-column h-100 justify-content-center align-items-center text-light">
          <h1 className="fw-semibold">Special Deals for Bulk Orders!</h1>
          <p className='mt-3 fst-italic'>Feast Big, Save Big! Perfect Deals for Your Celebrations and Corporate Events.</p>
  
        </Container>
      </div>
    );
}

export default BulkOrderHeader;
