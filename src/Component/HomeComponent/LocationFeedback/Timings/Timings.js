import React from 'react';
import "./Timings.css";
import { Col, Container, Row } from 'react-bootstrap';

const Timings = () => {
    return (
        <div className='timing-section py-0 py-md-3 py-lg-5'>
            <Container className='py-5'>

                <Row>
                    <Col>
                    <div className='text-center'><p className='h1 heading'>Opening Hours</p></div>
                    </Col>
                </Row>

                <Row className='mt-4'> 
                    <Col className='text-center'>
                    <p className='h5 fst-italic timing-color'>Monday - Sunday : 11 A.M to 11 P.M</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Timings;
