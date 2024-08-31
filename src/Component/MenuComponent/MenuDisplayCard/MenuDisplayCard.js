import React from 'react';
import "./MenuDisplayCard.css";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const MenuDisplayCard = ({ menu_name, menu_desc, menu_price, menu_quantity, menu_category, menu_image, setOrder }) => {
    return (
        <div className='menu-display-card col-sm-6 col-md-6 col-lg-4 col-xl-4 food-display-card'>
            <Container>
                <Card className='shadow'>
                    <Card.Img src={menu_image} className='img-fluid' />
                    <Card.Body>
                        <Card.Title className='fw-semibold'>{menu_name}</Card.Title>
                        <div className='menu-description'>
                            <p>{menu_desc}</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span className='menu-price'>₹ {menu_price}</span>
                            <span className='badge text-light bg-secondary'>{menu_quantity}</span>
                        </div>
                        <div className='category-info'>
                            <span>Category: <span className='category-name-list'>{menu_category}</span></span>
                        </div>
                        <div className='text-center py-2'>
                            <button className='orderBtn fw-semibold text-light' onClick={() => setOrder(true)}>Order Online</button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default MenuDisplayCard;
