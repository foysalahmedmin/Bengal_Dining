import React from 'react';
import Home_Banner from './Home_Banner';
import Chefs_Section from './Chefs_Section';
import Reviews from './Reviews';
import About from './About';

const Home = () => {
    return (
        <>
            <Home_Banner />
            <Chefs_Section />
            <About />
            <Reviews />
        </>
    );
};

export default Home;