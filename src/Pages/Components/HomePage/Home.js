import React from 'react';
import Login from '../../Authentication/Login/Login';
import Banner from './Banner/Banner';
import BrandSlider from './BrandSlider/BrandSlider';
import './Home.css'
import Navbar from './Navbar/Navbar';
import Parts from './Parts/Parts';
import TotalItems from './Totalitems/TotalItems';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <TotalItems/>
            <BrandSlider/>
        </div>
    );
};

export default Home;