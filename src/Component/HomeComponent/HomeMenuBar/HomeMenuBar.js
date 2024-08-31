import React from 'react';
import "./HomeMenuBar.css";
import { Col, Container, Row } from 'react-bootstrap';
import MainMenuCategory from '../../Lists/MainMenuCategory';

const HomeMenuBar = () => {

    // Custom handler for navigation with refresh
    const handleNavigation = (path) => {
        // Use window.location.href to force a full page reload
        window.location.href = path;
    };

    return (
        <div className='home-menu-bar'>
            <Container>
                <Row>
                    <h2 className='fw-semibold heading mb-4 mb-md-5 text-center h1'>Check Our Tasty Menu</h2>
                </Row>
                <Row>
                    {MainMenuCategory && MainMenuCategory.map((menu) => (
                        <Col md={6} className='mt-4' key={menu.id}>
                            <div 
                                className='menu-category d-flex justify-content-center align-items-center' 
                                onClick={() => handleNavigation("/menu")}
                            >
                                <h6 className='text-center'>{menu.menu_category}</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default HomeMenuBar;
