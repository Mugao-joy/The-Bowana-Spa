// Landing.jsx
import React from 'react'
import './landing.css'

const Landing = () => {
    return (
        <div className="landing-bg">
            <div className="landing-container text-white">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold mb-4">50% OFF</h1>
                <p className="mb-6 lg:p-5">On your first appointment</p>
                <a href="/bookingform" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-in-out">Book Now</a>
            </div>
        </div>
    )
}

export default Landing