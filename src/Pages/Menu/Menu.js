import React, { useEffect, useState } from 'react';
import "./Menu.css";
import MenuHeader from '../../Component/MenuComponent/MenuHeader/MenuHeader';
import MenuCategory from '../../Component/MenuComponent/MenuCategory/MenuCategory';
import MenuDisplay from '../../Component/MenuComponent/MenuDispaly/MenuDisplay';
import DinningMenu from '../../Component/MenuComponent/DinningMenu/DinningMenu';
import OnlineOrder from "../../Component/HomeComponent/OnlineOrder/OnlineOrder";
import { FaArrowUp } from "react-icons/fa";

const Menu = ({setOrder}) => {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const [category, setCategory] = useState("All");

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
        <div className='menu-page'>
            <MenuHeader />
            <MenuCategory category={category} setCategory={setCategory} />
            <MenuDisplay category={category} setOrder={setOrder} />
            <DinningMenu />
            <OnlineOrder />

            <div id='back-top' className={visibility ? "active" : ""} onClick={scrollTop}>
            <FaArrowUp />
            </div>

        </div>
    );
}

export default Menu;
