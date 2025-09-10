import React from 'react'

const Clients = () => {
    const clientLogos = ['Dribbble', 'Linked In', 'Amazon', 'Medium', 'Spotify', 'Google'];
    return (
        <div className="py-16">
            <div className="container mx-auto px-12 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Happy Clients</h2>
                <p className="text-gray-500 mt-2 mb-10">I've had the pleasure of working with a diverse range of companies, from startups to established brands.</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                    {clientLogos.map(logo => (
                        <div key={logo} className="flex justify-center">
                            <p className="text-2xl font-semibold text-gray-400 grayscale hover:grayscale-0 hover:text-gray-600 transition-all">{logo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients