import React from 'react';
import Login from '../../Authentication/Login/Login';
import Banner from './Banner/Banner';
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
        </div>
    );
};

export default Home;