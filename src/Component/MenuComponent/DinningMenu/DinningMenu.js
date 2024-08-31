import React from 'react';
import "./DinningMenu.css";
import { Col, Container, Row } from 'react-bootstrap';

const DinningMenu = () => {

    const combos = [
        {
            id:1,
            comboNumber: "COMBO - 1",
            comboTitle: "2 Empty Briyani + Half Grill + 1 Mini Coke",
            comboPrice: "320"
        },
        {
            id:2,
            comboNumber: "COMBO - 2",
            comboTitle: "2 Empty Briyani + Half Grill + 1 Mini Coke",
            comboPrice: "330"
        },
        {
            id: 3,
            comboNumber: "COMBO - 3",
            comboTitle: "1 Chicken Fried Rice + 1 Chicken Noodels + Chicken 65",
            comboPrice: "200"
        },
        {
            id: 4,
            comboNumber: "COMBO - 4",
            comboTitle: "1 Chicken Burger + 1 Normal Shawarma Roll",
            comboPrice: "135"
        },
        {
            id: 5,
            comboNumber: "COMBO - 5",
            comboTitle: "1 Chicken Tikka Sandwich + 1 Normal Shawarma Roll",
            comboPrice: "130"
        },
    ]
    return (
        <div className='dinning-menu py-5'>
            <Container>
                <div className='mb-4 mb-lg-5'>
                <h2 className='heading text-center text-h3 text-sm-h2 fs-1 text-light'>COMBO OFFER</h2>
                <p className='text-center fst-italic text-light only-dinning'>( only dinning )</p>
                </div>

                <Row>
                    <Col>
                    {
                            combos.map((item)=>
                            {
                                return(
                                    <div key={item.id} className='py-2'>
                                        <h3 className='text-center text-light fs-3'>{item.comboNumber}</h3>
                                        <p className='text-center text-light fs-5'>{item.comboTitle}</p>
                                        <p className='text-center fs-5 fw-bold text-success'>₹ {item.comboPrice}</p>

                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DinningMenu;
