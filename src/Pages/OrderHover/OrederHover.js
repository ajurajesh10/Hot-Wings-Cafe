import React from 'react';
import "./OrderHover.css"; // Create a CSS file for styling
import OnlineOrder from '../../Component/HomeComponent/OnlineOrder/OnlineOrder';

const OrederHover = ({ setOrder }) => {

    
    return (
        <div className="order-hover-modal">
            <div className="order-hover-content">
                <OnlineOrder />
                <button className='closeBtn' onClick={() => setOrder(false)}>Bact to Site</button>
            </div>
        </div>
    );
}

export default OrederHover;
