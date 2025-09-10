import React from 'react'

const SocialIcons = ({ className = "" }) => (
    <div className={`flex space-x-4 ${className}`}>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><line x1="7" y1="12" x2="7.01" y2="12"></line><line x1="12" y1="12" x2="12.01" y2="12"></line><line x1="17" y1="12" x2="17.01" y2="12"></line></svg></a>
    </div>
);

const About = () => (
    <section id="about" className="bg-gray-100 py-24">
        <div className="container mx-auto px-12">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl grid md:grid-cols-2 gap-12 items-center">
                <div className="relative flex flex-col items-center">
                    <img src="/profile.jpg" alt="About Brooklyn Gilbert" className="rounded-2xl shadow-lg w-full max-w-xs" />
                    <div className="mt-6">
                        <SocialIcons />
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">I am Professional User Experience Designer</h2>
                    <p className="text-gray-600">
                        I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
                    </p>
                    <p className="text-gray-600">
                        I design and develop services for customers specializing creating stylish, modern websites, web services.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#portfolio" className="bg-purple-600 text-white px-8 py-3 text-center rounded-md hover:bg-purple-700 transition-all shadow-md">My Projects</a>
                        <a href="#" className="bg-white text-gray-800 px-8 py-3 text-center rounded-md hover:bg-gray-100 transition-all shadow-md border border-gray-200">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About