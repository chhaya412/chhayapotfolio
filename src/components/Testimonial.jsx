import React from 'react'

const Testimonial = () => (
    <div className="bg-white py-24">
        <div className="container mx-auto px-12 text-center max-w-3xl">
             <h2 className="text-3xl font-bold text-gray-800">Testimonial</h2>
             <p className="text-gray-500 mt-2 mb-10">Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations.</p>
             <div className="relative">
                <p className="text-xl italic text-gray-700">"From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!"</p>
                <p className="mt-6 font-bold text-gray-800">Esther Howard</p>
                <p className="text-sm text-gray-500">Managing Director, ABC Company</p>
             </div>
        </div>
    </div>
);

export default Testimonial