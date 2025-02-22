import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Service from './Service/Service';
import About from '../Shared/About';
// import about from './../../about/page'

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Service></Service>
            {/* <about></about> */}

       </div>
    );
};

export default HomePage;