"use client";
import React from 'react';

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const Cta = () => (
    <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-12 text-center">
            <h2 className="text-4xl font-bold">Do you have a Project Idea? <br /> Let's discuss your project!</h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">I'm always open to discussing new projects and creative ideas. Let's connect and build something amazing together.</p>
            <a href="#contact" className="mt-8 inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-all shadow-lg">
                Let's work Together <ArrowRightIcon />
            </a>
        </div>
    </section>
);

export default Cta;
