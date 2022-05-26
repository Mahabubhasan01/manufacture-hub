import React from 'react';
import Login from '../../Authentication/Login/Login';
import Banner from './Banner/Banner';
import './Home.css'
import Navbar from './Navbar/Navbar';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
        </div>
    );
};

export default Home;