import React, { useState, useEffect, useRef } from 'react';
import "./MenuDisplay.css";
import MenuList from '../../Lists/MenuList';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import MenuDisplayCard from '../MenuDisplayCard/MenuDisplayCard';

const MenuDisplay = ({ category, setOrder }) => {
    const [Lists, setLists] = useState(MenuList);
    const [searchTerm, setSearchTerm] = useState("");
    const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially
    const menuDisplayRef = useRef(null); // Reference to the component

    useEffect(() => {
        // Clear the search field and reset the visible items whenever the category changes
        setSearchTerm("");
        setVisibleItems(4);
        setLists(MenuList.filter(item => category === "All" || item.menu_category === category));
    }, [category]);

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchTerm(searchValue);

        if (searchValue === "") {
            // If search box is cleared, show the original menu based on the current category
            setLists(MenuList.filter(item => category === "All" || item.menu_category === category));
        } else {
            // Filter menu based on search input and handle "All" category separately
            const filteredMenu = MenuList.filter((item) =>
                (category === "All" || item.menu_category === category) &&
                (item.menu_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                 item.menu_category.toLowerCase().includes(searchValue.toLowerCase()))
            );

            setLists(filteredMenu);
        }

        setVisibleItems(4); // Reset visible items when a new search is performed
    };

    const handleShowLess = () => {
        setVisibleItems(4); // Reset visible items
        if (menuDisplayRef.current) {
            menuDisplayRef.current.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the top
        }
    };

    return (
        <div className='menu-dispaly mt-3 mb-5' ref={menuDisplayRef}>
            <Container>
                <div className='category-title my-5'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <h2>Category: <span className='category-name'>{category}</span></h2>
                        </div>
                        <div className='col-sm-6 d-flex justify-content-sm-end pe-5 text-start mt-3 mt-sm-0'>
                            <Form.Control
                                type="text"
                                placeholder="Search your menu here..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-5'>
                    <h1>Top dishes for you</h1>
                </div>

                <div className='row g-4'>
                    {Lists && Lists.length > 0 ? (
                        Lists.slice(0, visibleItems).map((item) => (
                            <MenuDisplayCard
                                key={item.id}
                                menu_name={item.menu_name}
                                menu_desc={item.menu_desc}
                                menu_price={item.menu_price}
                                menu_quantity={item.menu_quantity}
                                menu_category={item.menu_category}
                                menu_image={item.menu_image}
                                setOrder={setOrder}
                            />
                        ))
                    ) : (
                        <Row className="text-center mt-3">
                            <Col>
                                <h2>No more Menu for you!</h2>
                                <h5 className="fst-italic text-muted">
                                    Search in other categories
                                </h5>
                            </Col>
                        </Row>
                    )}
                </div>

                <div className="text-center mt-4">
                    {visibleItems < Lists.length && (
                        <Button className='showMoreBtn' onClick={() => setVisibleItems(visibleItems + 4)}>
                            Show More
                        </Button>
                    )}
                    {visibleItems > 4 && (
                        <Button variant="secondary" onClick={handleShowLess} className="ms-2">
                            Show Less
                        </Button>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default MenuDisplay;
