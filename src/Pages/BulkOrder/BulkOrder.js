import React, { useEffect } from 'react';
import "./BulkOrder.css";
import BulkOrderHeader from '../../Component/BulkOrders/BulkOrderHeader/BulkOrderHeader';
import GetaQoute from '../../Component/BulkOrders/GetaQuote/GetaQoute';
import { FaWhatsappSquare } from "react-icons/fa";

const BulkOrder = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bulk-order-section-page'>
            <BulkOrderHeader />
            <GetaQoute />

            <div className='whatsapp-icon'>
            <span><a href="https://wa.me/919159170659" target='blank'><span className='icon'><FaWhatsappSquare /></span></a></span>           
            </div>

        </div>
    );
}

export default BulkOrder;
