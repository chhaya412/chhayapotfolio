import React from 'react'

const Services = () => {
    const services = [
        { title: 'User Experience (UX)', desc: 'I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.' },
        { title: 'User Interface (UI)', desc: 'I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.' },
        { title: 'Web Development', desc: 'I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.' },
    ];
    return (
        <section id="services" className="bg-gray-50 py-24">
            <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">What I do?</h2>
                    <p className="text-gray-600">I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications that deliver value and usability.</p>
                    <p className="text-gray-600">My approach combines creativity and technical expertise to deliver solutions that are both visually appealing and highly functional for users.</p>
                    <a href="#contact" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-all shadow-lg">
                        Say Hello!
                    </a>
                </div>
                <div className="space-y-6">
                    {services.map(s => (
                        <div key={s.title} className="p-6 border-l-4 border-purple-500 bg-white rounded-r-lg shadow-md">
                            <h3 className="font-bold text-xl text-gray-800">{s.title}</h3>
                            <p className="text-gray-600 mt-2">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services