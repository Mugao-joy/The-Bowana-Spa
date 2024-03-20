import React from 'react';
import { Link } from 'react-router-dom';
import facialimage from '../assets/facial.jpg'
import Navbar from './Navbar';
import './services.css'

const Services = () => {
    return (
        <>
            <Navbar />
            <div id='services' className="py-16 bg-black">
                <div className="container text-center">
                    <h2 className="text-3xl w-full text-white text-center mb-2">OUR SERVICES</h2>
                    <div className="flex justify-center mb-10">
                        <div className="bg-pink-400 w-20 h-1 rounded border-pink-400 flex justify-center"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-5 lg:mx-20">
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </div>
            </div>
        </>
    )
}

const ServiceCard = () => {
    return (
        <div className="h-fit lg:w-80 md:w-80 w-90 group relative">
            <img className="lg:w-80 md:w-80 w-90" src={facialimage} alt="" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
                <div className="text-center">
                    <button><Link to="/bookingform" className="bg-white p-3 text-2xl rounded-full text-black hover:text-white hover:bg-pink-400">Book Now</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Services