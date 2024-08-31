import React from "react";
import "./MenuHeader.css";
import { Container } from "react-bootstrap";

const MenuHeader = () => {
  return (
    <div className="menu-hero-header">
      <Container className="d-flex flex-column h-100 justify-content-center align-items-center text-light">
        <h1 className="fw-semibold">A Symphony of Flavors Awaits You</h1>
        <p className='mt-3 fst-italic'>Kindly enjoy your time with us!. We know mistakes can happen, & we are always happy to correct any errors made by our staff.</p>

      </Container>
    </div>
  );
};

export default MenuHeader;
