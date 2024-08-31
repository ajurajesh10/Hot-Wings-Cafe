import React, { useEffect, useState } from 'react';
import "./Home.css";
import CarouselImage from '../../Component/HomeComponent/CarouselImage/CarouselImage';
import ThreeIcons from '../../Component/HomeComponent/ThreeIcons/ThreeIcons';
import HomeMenuBar from '../../Component/HomeComponent/HomeMenuBar/HomeMenuBar';
import OnlineOrder from '../../Component/HomeComponent/OnlineOrder/OnlineOrder';
import AboutUs from '../../Component/HomeComponent/AboutUs/AboutUs';
import LocationFeedback from '../../Component/HomeComponent/LocationFeedback/LocationFeedback';
import Timings from '../../Component/HomeComponent/LocationFeedback/Timings/Timings';
import { FaArrowUp } from "react-icons/fa";

const Home = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const [visibility , setVisibility] = useState(false)

    const toggleVisible = () =>
    {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300)
        {
            setVisibility(true)
        }
        else if (scrolled <= 300)
        {
            setVisibility(false)
        }
    }

    const scrollTop = () =>
    {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    if(typeof window !== "undefined")
    {
        window.addEventListener("scroll" , toggleVisible)
    }


    return (
        <div className='home-page'>
            <CarouselImage />
            <ThreeIcons />
            <HomeMenuBar />
            <OnlineOrder />
            <AboutUs />
            <Timings />
            <LocationFeedback />

            <div id='back-top' className={visibility ? "active" : ""} onClick={scrollTop}>
            <FaArrowUp />
            </div>

        </div>
    );
}

export default Home;
