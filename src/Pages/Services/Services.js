import React, { useEffect } from 'react';
import "./Services.css";
import ServicesHeader from '../../Component/ServicesComponent/ServicesHeader/ServicesHeader';
import OurServices from '../../Component/ServicesComponent/OurServices/OurServices';
import ServicesGetaQuote from '../../Component/ServicesComponent/ServicesGetaQuote/ServicesGetaQuote';
import { FaWhatsappSquare } from "react-icons/fa";

const Services = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='serivies-page'>
            <ServicesHeader />
            <OurServices />
            <ServicesGetaQuote />

            <div className='whatsapp-icon'>
            <span><a href="https://wa.me/919159170659" target='blank'><span className='icon'><FaWhatsappSquare /></span></a></span>           
            </div>

        </div>
    );
}

export default Services;
