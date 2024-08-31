import React from 'react';
import "./OurServices.css";
import CateringServicesList from '../CateringServicesList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const OurServices = () => {

  var settings = {
    dots: true,
    infinite: true, // Enable infinite looping
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 1500, // Adjust the transition speed (1500ms = 1.5s)
    cssEase: "ease-in-out", // Smooth transition effect
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplaySpeed: 1500,
          infinite: true, // Ensure infinite looping on all breakpoints
          autoplay: true,
          dots: true,
          speed: 1500,
          cssEase: "ease-in-out",
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 1500,
          infinite: true, // Ensure infinite looping on all breakpoints
          autoplay: true,
          dots: true,
          speed: 1500,
          cssEase: "ease-in-out",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 1500,
          infinite: true, // Ensure infinite looping on all breakpoints
          autoplay: true,
          dots: true,
          speed: 1500,
          cssEase: "ease-in-out",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1500,
          infinite: true, // Ensure infinite looping on all breakpoints
          autoplay: true,
          dots: true,
          speed: 1500,
          cssEase: "ease-in-out",
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1500,
          infinite: true, // Ensure infinite looping on all breakpoints
          autoplay: true,
          dots: true,
          speed: 1500,
          cssEase: "ease-in-out",
        }
      }
    ]
  };
  
    return (
        <div className='our-services-page my-5'>
            <Container>
            <div className='heading-section pt-5'>
                    <h1 className='heading text-center'>Our Services</h1>
                </div>

                <div className='service-list row my-5'>

                    <div className='col'>
                        
                    <Slider {...settings}>
                    {
                        CateringServicesList && CateringServicesList.map((service , index) => {
                            return (
                                <div className='catering-service-list' key={service.id}>
                                    <Card style={{ marginRight: '15px' }} className='shadow'>
                                        <div className='text-center py-5 catering-icon'>{service.cateringIcon}</div>
                                        <Card.Body>
                                            <Card.Title className='text-center '>{service.cateringTitle}</Card.Title>
                                            <Card.Text className='text-center py-3'>{service.cateringDescription}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                    </Slider>

                    </div>

                </div>
            </Container>
        </div>
    );
}

export default OurServices;
