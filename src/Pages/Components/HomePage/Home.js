import React from 'react';
import Login from '../../Authentication/Login/Login';
import './Home.css'
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Login/>
        </div>
    );
};

export default Home;