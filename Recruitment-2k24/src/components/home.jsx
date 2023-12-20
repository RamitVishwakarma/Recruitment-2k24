import React from 'react';
import "../App.css"
import arrow_right_alt from '../assets/arrow_right_alt.svg';

const Home = () => {
    return (
        <div className="bg-dark-background flex text-light-font font-Zodiac justify-center items-center h-[90vh] flex-col ">
            <h1 className="text-[8.5vw] font-light text-center">Recruitments</h1>
            <h6 className='text-5xl mt-2'>2024</h6>
            <button id="get_started_button" className="border-2 border-blue-light bg-blue-bg text-blue-light rounded-full mt-20 pl-10 pr-7 py-2 text-3xl font-Satoshi flex items-center">Get started <img className='pl-4' src={arrow_right_alt} alt="" /></button>
        </div>
    );
};

export default Home;
