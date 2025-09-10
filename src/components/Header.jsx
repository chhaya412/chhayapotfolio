import { useState } from "react";
import Image from "next/image";

const Header = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const navLinks = ['Home', 'About', 'Process', 'Portfolio', 'Blog', 'Services'];

    return (
        <header className="sticky top-0 bg-white/30 backdrop-blur-lg z-50 shadow-sm">
            <div className="container mx-auto px-12 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Image className="rounded-full" src={"/logo.jpg"} width={50} height={50} alt="logo" />
                    <span className="font-bold text-xl text-gray-800">My Portfolio</span>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setActiveLink(link)}
                            className={`text-gray-600 hover:text-purple-600 transition-colors ${activeLink === link ? 'text-purple-600 font-semibold' : ''}`}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                <a href="#contact" className="hidden md:inline-block bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition-all shadow-md">
                    Contact
                </a>
                <div className="md:hidden">
                    <button className="text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header