import React, { useEffect, useState } from 'react';
import "./Header.css";
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiCloseLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import pngIcon from "../5_20240829_184343_0002.png";

const Header = ({ setOrder }) => {

    const [menu, setMenu] = useState("Home");
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isSticky);

        return () => {
            window.removeEventListener("scroll", isSticky);
        }
    }, []);

    useEffect(() => {
        // Set the active menu item based on the current path
        switch (location.pathname) {
            case "/menu":
                setMenu("Menu");
                break;
            case "/bulkorders":
                setMenu("Bulk Orders");
                break;
            case "/services":
                setMenu("Services");
                break;
            default:
                setMenu("Home");
        }
    }, [location]);

    // Sticky header
    const isSticky = () => {
        const header = document.querySelector(".header-section");
        const scrollTop = window.scrollY;
        scrollTop >= 120 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
    }

    return (
        <header className='header-section'>
            <Container>
                <Navbar expand="lg" className="p-0">
                    {/* Logo section start */}
                    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                        <img src={pngIcon} alt="logo" className="logo-img me-2" />
                        <span>Hot Wings Cafe</span>
                    </Navbar.Brand>
                    {/* Logo section end */}

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                        show={open}
                        onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className="d-flex align-items-center">
                                Hot Wings Cafe
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/" className={menu === "Home" ? "active" : ""} onClick={() => { setMenu("Home"); handleClose(); }}>
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/menu" className={menu === "Menu" ? "active" : ""} onClick={() => { setMenu("Menu"); handleClose(); }}>
                                    Menu
                                </Nav.Link>
                                <Nav.Link as={Link} to="/bulkorders" className={menu === "Bulk Orders" ? "active" : ""} onClick={() => { setMenu("Bulk Orders"); handleClose(); }}>
                                    Bulk Orders
                                </Nav.Link>
                                <Nav.Link as={Link} to="/services" className={menu === "Services" ? "active" : ""} onClick={() => { setMenu("Services"); handleClose(); }}>
                                    Services
                                </Nav.Link>
                                <Nav.Link as={Link} to="/" onClick={() => handleClose()} className='orderbtn'>
                                    <Button className='border-0' style={{ background: 'tomato' }}>
                                        <span onClick={() => setOrder(true)}>Order Now</span>
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    <div className='ms-md-4 ms-2'>
                        <Nav.Link className='primaryBtn d-none d-sm-inline-block' onClick={() => setOrder(true)}>Order Now</Nav.Link>
                        <li className='d-inline-block d-lg-none ms-3 toggle-btn' onClick={toggleMenu}>
                            {open ? <RiCloseLine /> : <IoMdMenu />}
                        </li>
                    </div>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;
