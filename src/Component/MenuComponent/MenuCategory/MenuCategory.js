import React from 'react';
import "./MenuCategory.css";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import MenuCategoryList from '../../Lists/MenuCategoryList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MenuCategory = ({category, setCategory}) => {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: false,
              autoplay:false,
              dots: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: false,
              autoplay:false,
              dots: true
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplay:false,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay:false,
              dots: true

            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay:false,
              dots: true

            }
          }
        ]
      };

    return (

        <div className='menu-category'>

<Container>


                <div className='explore-menu mt-5'>
                    <h1 className='heading text-center'>Explore our Menu</h1>
                </div>

                <div className='menu_list row my-5 '>

                    <div className='col'>
                        

                    <Slider {...settings}>

                    {
                        MenuCategoryList && MenuCategoryList?.map((menu , index)=>

                          
                        {
                          // console.log(menu.menu_category)
                          

                            return(

                                <div className='menu-list-card' onClick={()=>setCategory(prev=> prev===menu.menu_category?"All" : menu.menu_category)} key={menu.id}>


                                <Card>
                                      <Card.Img src={menu.menu_image} className={category === menu.menu_category ? "active" : ""} />
                                      <Card.Body>
                                        <Card.Title className='text-center'>{menu.menu_category}</Card.Title>
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

export default MenuCategory;
