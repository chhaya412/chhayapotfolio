import React from 'react'

const Hero = () => (
    <section id="home" className="container mx-auto px-12 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Hello, I'm <br /> Chhaya Choudhary
                </h1>
                <p className="text-gray-600 text-lg">
                    I'm a <span className="text-purple-600 font-semibold">UI/UX Designer</span> and <span className="text-purple-600 font-semibold">Developer</span> based in Ahmedabad, India. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
                </p>
                <a href="#contact" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-all shadow-lg transform hover:-translate-y-1">
                    Say Hello!
                </a>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 transform -skew-x-6 rounded-3xl z-0"></div>
                <img
                    src="/profile.jpg"
                    alt="Brooklyn Gilbert"
                    className="relative w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
                />
            </div>
        </div>
    </section>
);

export default Hero