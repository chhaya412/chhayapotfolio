import React from 'react'

const Blog = () => {
    const posts = [
        { img: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Blog+1', date: '22 Oct, 2020', comments: 246, title: 'Designing Engaging User Interfaces for M...' },
        { img: 'https://placehold.co/600x400/eab308/ffffff?text=Blog+2', date: '22 Oct, 2020', comments: 246, title: 'Tips for Effective Dashboard Layouts and...' },
        { img: 'https://placehold.co/600x400/84cc16/ffffff?text=Blog+3', date: '22 Oct, 2020', comments: 246, title: 'How to Visualize Data for Better Product...' },
        { img: 'https://placehold.co/600x400/f43f5e/ffffff?text=Blog+4', date: '22 Oct, 2020', comments: 246, title: 'Responsive Design: Adapting to All Devic...' },
    ];
    return (
        <section id="blog" className="py-24">
            <div className="container mx-auto px-12 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Blog</h2>
                <p className="text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">Check out my recent blog posts where I share insights on design, development, and the latest industry trends.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {posts.map((p, i) => (
                        <div key={i} className="text-left rounded-lg overflow-hidden group">
                            <img src={p.img} alt={p.title} className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="pt-4">
                                <p className="text-xs text-gray-500">{p.date} / {p.comments} Comments</p>
                                <h3 className="font-bold text-gray-800 mt-1 group-hover:text-purple-600 transition-colors">{p.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog