import React from 'react';

const Services = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    serviceName="Waxing"
                    imageUrl=""
                />
                <ServiceCard
                    serviceName="Massage"
                    imageUrl="Bowana-app\src\assets\massage.jpg"
                />
                <ServiceCard
                    serviceName="Facial"
                    imageUrl="Bowana-app\src\assets\facial.jpg"
                />
                <ServiceCard
                    serviceName="Laser Hair Removal"
                    imageUrl=""
                />
                <ServiceCard
                    serviceName="DIY Kit"
                    imageUrl=""
                />
            </div>
        </div>
    )
}

const ServiceCard = ({ serviceName, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={imageUrl} alt={serviceName} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{serviceName}</h2>
                <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-lg">Book Now</button>
            </div>
        </div>
    )
}

export default Services