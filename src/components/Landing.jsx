// Landing.jsx
import React from 'react'
import './landing.css'

const Landing = () => {
    return (
        <div className="landing-bg">
            <div className="landing-container text-white">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold mb-4">Indulge in Tranquility</h1>
                <p className="mb-6 lg:p-5">Discover our opulent oasis of relaxation</p>
                <a href="/Booking" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-in-out">Book Now</a>
            </div>
        </div>
    );
}

export default Landing