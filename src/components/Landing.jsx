import React from 'react'

const Landing = () => {
    return (
        <div className="bg-cover bg-center bg-fixed text-center py-15">
            <div className="absolute inset-0 flex justify-center items-center">
                <img
                    src="../src/assets/Background-sorrounding.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative text-white">
                    <div className="container mx-auto p-20 z-10">
                        <h1 className="lg:text-6xl md:text-4xl text-2xl font-semibold mb-4">Indulge in Traquility</h1>
                        <p className="mb-6 lg:p-5">Discover our opulent oasis of relaxation</p>
                        <a href="/Booking" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full text-lg hover:transition duration-300 ease-in-out">Book Now</a>
                    </div>
                
            </div>
        </div>
    )
}

export default Landing
