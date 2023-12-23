import React from 'react';
import "../App.css"
import arrow_right_alt from '../assets/arrow_right_alt.svg';

const HomePage = () => {
    return (
        <div className="bg-dark-background flex text-light-font font-Zodiac justify-center items-center h-[90vh] flex-col ">
            <p className="text-9xl font-extrabold text-center text-white">Recruitments</p>
            <p className='text-5xl mt-2 font-extrabold text-white'>2024</p>
            <button id="get_started_button" className="border-2 border-blue-light bg-blue-bg text-blue-light rounded-full mt-9 pl-10 pr-7 py-2 text-3xl font-Satoshi font-medium flex items-center">Get started <img className='pl-4' src={arrow_right_alt} alt="" /></button>
        </div>
    );
};

export default HomePage;
