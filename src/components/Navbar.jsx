import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-white text-lg font-bold">BOWANA</h2>
                </div>
                <div>
                    <ul className="flex space-x-4">
                    <li>
                            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
                                <ul className="submenu">
                                    <li><span>Waxing</span></li>
                                    <li><span>Massage</span></li>
                                    <li><span>Facial</span></li>
                                </ul>
                        </li>
                        <li>
                            <Link to="/bookingform" className="text-white hover:text-gray-300">Book Appointment</Link>
                                <ul className="submenu">
                                    <li><span>House Call Appointment</span></li>
                                    <li><span>Walk-in Appointment</span></li>
                                </ul>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar