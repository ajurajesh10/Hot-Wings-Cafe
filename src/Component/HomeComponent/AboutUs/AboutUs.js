import React from 'react';
import "./AboutUs.css";
import { Col, Container, Row } from 'react-bootstrap';
import about from "./about/about-picture.jpg";

const AboutUs = () => {
    return (
        <div className='about-us-page  py-md-5'>
            <Container>
                <Row className='py-3 pb-5 py-md-0 pb-md-0'>

                    <Col lg={6} className='d-flex flex-column justify-content-center align-items-start pt-3 pt-lg-5 p-5 '>
                    <div className=''><p className='h1 heading'>About Us!</p></div>
                    <div className='p-2 paragraph mt-3'>At <span>Hot Wings</span>, we bring together the finest ingredients and culinary artistry to create a dining experience like no other. Located in the heart of <span>Karur</span>, our restaurant offers a warm, welcoming atmosphere where every dish is crafted with care and passion. Whether you're joining us for a casual meal or a special celebration, we promise a memorable experience that delights the senses. Come taste the difference at <span>Hot Wings</span>.</div>
                    </Col>

                    <Col lg={6} className='about-image'>
                      <img src={about} alt="" className='img-flid' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
