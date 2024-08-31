import React, { useState } from 'react';
import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Footer = () => {
    const [whatsappNumber, setWhatsappNumber] = useState(""); // Initial value set to ""
    const [formError, setFormError] = useState(""); // Single error message

    const ValidationForm = () => {
        let err = "";

        // Remove any non-numeric characters and check the length
        const cleanNumber = whatsappNumber.replace(/\D/g, '');

        if (cleanNumber === "") {
            err = "* Number is required";
        } else if (cleanNumber.length !== 10) {
            err = "* Number must be exactly 10 digits";
        }

        setFormError(err);

        return err === ""; // Return true if no errors
    };

    const handleWhatsapp = async (e) => {
        e.preventDefault();
    
        const isValid = ValidationForm();
    
        if (isValid) {
            const number = {
                'Whatsapp Number': whatsappNumber,
                'Date': new Date().toLocaleString() // Correct date format
            };
    
            console.log("Payload:", number); // Log payload
    
            try {
                const response = await axios.post("https://sheetdb.io/api/v1/ikcq3ofmcdcxk", number);
    
                console.log("Response Status:", response.status); // Log status code
                console.log("Response Headers:", response.headers); // Log response headers
                console.log("Response Data:", response.data); // Log response data
    
                    setWhatsappNumber(""); // Reset the input field
                    setFormError(""); // Clear error message
    
                    toast.success("Thank you for subscribing", {
                        position: "bottom-right",
                        style: { bottom: "40px", width: "300px" },
                    });
                
            
            } catch (error) {
                console.error("Error during axios post:", error.response ? error.response.data : error.message);
                toast.error("Failed to subscribe. Please try again later.", {
                    position: "bottom-right",
                    style: { bottom: "40px", width: "300px" },
                });
            }
        } else {
            console.log("Validation failed:", formError);
        }
    };
    
    return (
        <div className='footer-section mt-5 text-light py-5'>
            <Container>
                <Row className='px-2'>
                    <Col md={6} lg={3}>
                        <h6 className='h5'>Quick Links</h6>
                        <div className='d-flex flex-column quick-links'>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/menu"}>Menu</Link>
                            <Link to={"/bulkorders"}>Bulk Orders</Link>
                            <Link to={"/services"}>Services</Link>
                        </div>
                    </Col>

                    <Col md={6} lg={3} className='mt-2 mt-md-0 mt-lg-0'>
                        <h6 className='h5'>Address</h6>
                        <div className='quick-links'>
                            <address className='fst-italic'>
                                214, Erode Main Road,
                                <br />
                                Velusamy Puram, Karur - 639002
                                <br />
                                Tamilnadu, India
                            </address>
                        </div>
                    </Col>

                    <Col md={6} lg={3} className='mt-2 mt-md-5 mt-lg-0'>
                        <h6 className='h5'>Social Links</h6>
                        <div className='quick-links'>
                            <p>
                                <span className='mobile-section'>Mobile : </span>
                                <a href="tel:+919159170659" className='fst-italic'>+91 9159170659</a>
                            </p>
                            <p><span className='email-section'>Email Us: </span><a href="mailto:hotwingsdelight@gmail.com" target='blank'><span className='fst-italic'>hotwingsdelight@gmail.com</span></a></p>
                            <p>
                                <span><a href="https://www.instagram.com/hotwings_cafe/" target='blank'><span className='icon'><FaInstagram /></span></a></span>
                                <span><a href="https://wa.me/919159170659" target='blank'><span className='icon'><FaWhatsapp /></span></a></span>
                            </p>
                        </div>
                    </Col>

                    <Col md={6} lg={3} className='mt-2 mt-md-5 mt-lg-0'>
                        <h6 className='h5'>Subscribe for daily offers</h6>
                        <div className='quick-links'>
                            <form onSubmit={handleWhatsapp}>
                                <div className='whatsapp-section'>
                                    <input
                                        type="text"
                                        value={whatsappNumber}
                                        onChange={(e) => setWhatsappNumber(e.target.value)}
                                        placeholder='WhatsApp number...'
                                    />
                                    <span>
                                        <button type="submit">
                                            <BsFillSendFill />
                                        </button>
                                    </span>
                                </div>
                                {formError && <span className='text-danger'>{formError}</span>}
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
