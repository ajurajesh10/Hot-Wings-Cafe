import React from 'react';
import "./OnlineOrder.css";
import { Col, Container, Row } from 'react-bootstrap';

const OnlineOrder = () => {
    return (
        <div className='order-online-page my-5'>
            <Container>
                <Row>
                    <Col>
                    <div className='heading'><h2 className='text-center h1'>Order Online</h2></div>
                    <div className='online-order mt-5 mt-md-5'>
                        <a href="https://www.zomato.com/karur/hot-wings-karur-locality/order" target='blank'>Zomato</a>
                        <a href="https://www.zomato.com/karur/hot-wings-karur-locality/order" target='blank'>Swiggy</a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OnlineOrder;
