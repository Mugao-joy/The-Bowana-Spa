import React from "react";
//import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-white text-lg font-bold">BOWANA</h2>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Blogs</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Book Appointment</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
