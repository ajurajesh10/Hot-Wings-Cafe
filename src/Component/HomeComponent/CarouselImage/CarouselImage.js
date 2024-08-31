import React from 'react';
import "./CarouselImage.css";
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarouselImage = () => {
    return (
        <div className='hero-section'>

    <Carousel fade>

    <Carousel.Item className='carousel-item1 vh-100' interval={2000}> 

    <Carousel.Caption className='h-100 d-flex flex-column align-items-start justify-content-center'>

        <div className='row h-100' data-aos="fade-up">

            <div className='col-lg-8 d-flex flex-column justify-content-center justify-content-lg-end align-items-start'>
      <h2 className='text-capitalize text-start h1'>Dive into Our Menu and Savor Every Bite!</h2>
      <p className='text-start fst-italic'>Explore our diverse menu, where every dish is crafted with passion and flavor, offering a culinary journey you won't forget.</p>
      <Button id='tomato-btn'><Link to={"/menu"} className='text-decoration-none text-light text-capitalize'>Explore Menu</Link></Button>
      </div>

      <div className='col-lg-6 d-none d-lg-block'>

      </div>

      </div>

    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className='carousel-item2 vh-100' interval={2000}>

    <Carousel.Caption className='h-100'>
    
        <div className='row h-100'>
    
      <div className='col-lg-8 d-flex flex-column justify-content-center justify-content-lg-end align-items-start'> 

      <h2 className='text-capitalize text-start h1'>Perfectly Prepared Bulk Orders for Every Occasion!</h2>
      <p className='text-start fst-italic'>Enjoy our delicious, perfectly prepared meals delivered with convenience and flavor to satisfy all your guests.</p>
      <Button id='tomato-btn' className=''><Link to={"/bulkorders"} className='text-decoration-none text-light text-capitalize'>Bulk Orders</Link></Button>

      </div>
    
      <div className='col-lg-6 d-none d-lg-block'>
    
      </div>
    
      </div>
    
    </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className='carousel-item3 vh-100' interval={2000}>

         <Carousel.Caption className='h-100'>
         
             <div className='row h-100'>

             <div className='col-lg-6 d-none d-lg-block'>
         
             </div>

         
           <div className='col-lg-6 d-flex flex-column justify-content-center align-items-start'> 
         
           <h2 className='text-start text-capitalize h1'>Elevate Your Event with Our Premier Catering Services!</h2>
           <p className='text-start fst-italic'>Elevate your event with our catering services. Delightful dishes and flawless service ensure a memorable experience for every guest.</p>
           <Button id='tomato-btn'><Link to={"/services"} className='text-decoration-none  text-light text-capitalize'>Services</Link></Button>
           </div>
         
         
           </div>
         
         </Carousel.Caption>
         </Carousel.Item>

    
    

  </Carousel>
  </div>
    );
}

export default CarouselImage;