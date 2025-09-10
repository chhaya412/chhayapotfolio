import React from 'react'



const ResearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);

const AnalyzeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
);

const DesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
);

const LaunchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const WorkProcess = () => {
    const processes = [
        { icon: <ResearchIcon />, title: '1. Research', description: 'Design meets function in every pixel, blending clarity with intuitive motion.' },
        { icon: <AnalyzeIcon />, title: '2. Analyze', description: 'Crafting clean, thoughtful interfaces where form flows seamlessly into function and clarity.' },
        { icon: <DesignIcon />, title: '3. Design', description: 'I design seamless digital experiences with precision, purpose, and a touch of elegance.' },
        { icon: <LaunchIcon />, title: '4. Launch', description: 'I craft digital products where thoughtful design meets performance-driven, responsive development.' },
    ];

    return (
        <section id="process" className="py-24">
            <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800">Work Process</h2>
                    <p className="text-gray-600">Driven by design and powered by code, I create digital interfaces that feel intuitive and perform seamlessly. Every layout, animation, and component is crafted with intention — merging usability with visual clarity.</p>
                    <p className="text-gray-600">I blend clean design with efficient code to build engaging, user-friendly web experiences that stand out.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                    {processes.map(p => (
                        <div key={p.title} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="mb-4">{p.icon}</div>
                            <h3 className="font-bold text-xl text-gray-800 mb-2">{p.title}</h3>
                            <p className="text-gray-500 text-sm">{p.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess