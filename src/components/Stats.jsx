import React from 'react'

const Stats = () => {
    const stats = [
        { value: '2 Y.', label: 'Experience' },
        { value: '5+', label: 'Projects Completed' },
        { value: '58', label: 'Happy Clients' }
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {stats.map(stat => (
                        <div key={stat.label} className="border-t-2 border-purple-200 pt-4">
                            <p className="text-4xl font-bold text-purple-600">{stat.value}</p>
                            <p className="text-gray-500 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats