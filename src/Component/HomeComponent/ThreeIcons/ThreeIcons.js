import React from 'react';
import "./ThreeIcons.css";
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import IconsList from "../../Lists/IconsList"

const ThreeIcons = () => {
    return (
        <div className='three-icons-page my-5 my-sm-5'>
            <Container>

                <div className='row g-4'>

                    { 
                        IconsList && IconsList?.map((icon, index) =>
                        {
                            return(
                                <div className='col-md-4' key={index}>
                                <Card>
                                <Card.Img 
                                                variant="top" 
                                                src={icon.image}
                                                className='img-fluid'
                                                alt='feature-img  '
                                                />
                                                 <Card.Body>
                                                      <Card.Title>{icon.title}</Card.Title>
                                                      <Card.Text>
                                                        {icon.description}
                                                      </Card.Text>
                                                </Card.Body>
                                            </Card>                    
                                </div>
            
                            )
                        })
                    }



                </div>
            </Container>
        </div>
    );
}

export default ThreeIcons;
