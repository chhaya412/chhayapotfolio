import React from 'react'
import Image from 'next/image';

const Footer = () => (
    <footer className="bg-gray-800 text-gray-400">
        <div className="container mx-auto px-12 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-3">
                    <Image className="rounded-full" src={"/logo.jpg"} width={50} height={50} alt="logo" />
                    <span className="font-bold text-xl text-white-800">My Portfolio</span>
                </div>
                <div className="flex flex-wrap justify-center space-x-6">
                    <a href="#home" className="hover:text-white">Home</a>
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#process" className="hover:text-white">Process</a>
                    <a href="#portfolio" className="hover:text-white">Portfolio</a>
                    <a href="#blog" className="hover:text-white">Blog</a>
                    <a href="#services" className="hover:text-white">Services</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="text-center mt-8 text-sm">
                <p>Developed with <span className="text-red-500">&hearts;</span></p>
            </div>
        </div>
    </footer>
);

export default Footer