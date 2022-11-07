import React from 'react';
import Banner from './Banner';
import Events from './Events';
import Projects from './Projects';
import Volunteers from './Volunteers';

const Home = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Banner></Banner>
            <Events></Events>
            <Projects></Projects>
            <Volunteers></Volunteers>
        </div>
    );
};

export default Home;