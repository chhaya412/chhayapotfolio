import React from 'react'

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const Portfolio = () => {
    const projects = [
        { img: 'https://placehold.co/600x400/fb7185/ffffff?text=Project+1', cat: 'UI-UX Design', title: 'Product Admin Dashboard', desc: 'I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.' },
        { img: 'https://placehold.co/600x400/818cf8/ffffff?text=Project+2', cat: 'UI-UX Design', title: 'Product Admin Dashboard', desc: 'Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.' },
        { img: 'https://placehold.co/600x400/4ade80/ffffff?text=Project+3', cat: 'UI-UX Design', title: 'Product Admin Dashboard', desc: 'Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.' },
        { img: 'https://placehold.co/600x400/facc15/ffffff?text=Project+4', cat: 'UI-UX Design', title: 'Product Admin Dashboard', desc: 'Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.' },
        { img: 'https://placehold.co/600x400/22d3ee/ffffff?text=Project+5', cat: 'UI-UX Design', title: 'Product Admin Dashboard', desc: 'Implemented interactive charts and widgets to visualize product data effectively for stakeholders.' },
        { img: 'https://placehold.co/600x400/c084fc/ffffff?text=Project+6', cat: 'UI-UX Design', title: 'Product Admin Dashboard', desc: 'Enhanced user experience by streamlining workflows and optimizing interface components and so on.' },
    ];

    return (
        <section id="portfolio" className="bg-gray-100 py-24">
            <div className="container mx-auto px-12 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Portfolio</h2>
                <p className="text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden group text-left transform hover:-translate-y-2 transition-all duration-300">
                            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <p className="text-purple-600 text-sm font-semibold">{p.cat}</p>
                                <h3 className="text-xl font-bold text-gray-800 mt-2">{p.title}</h3>
                                <p className="text-gray-500 mt-2 text-sm">{p.desc}</p>
                                <a href="#" className="inline-flex items-center text-purple-600 font-semibold mt-4 group-hover:underline">
                                    Case Study <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-12 bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-all shadow-md">
                    More Project
                </button>
            </div>
        </section>
    );
};

export default Portfolio