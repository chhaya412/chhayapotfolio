import React from 'react'

const SocialIcons = ({ className = "" }) => (
    <div className={`flex space-x-4 ${className}`}>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
        <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><line x1="7" y1="12" x2="7.01" y2="12"></line><line x1="12" y1="12" x2="12.01" y2="12"></line><line x1="17" y1="12" x2="17.01" y2="12"></line></svg></a>
    </div>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const Contact = () => {
    const contactInfo = [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>, title: 'Address:', value: 'Ahemdabad, Gujrat' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>, title: 'My Email:', value: 'chhayachoudhary@gmail.com' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>, title: 'Call Me Now:', value: '+91 9693160764' }
    ];
    return (
        <section id="contact" className="bg-gray-50 py-24">
            <div className="container mx-auto px-12">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">Let's discuss your Project</h2>
                        <p className="text-gray-600">I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.</p>
                        <div className="space-y-6">
                            {contactInfo.map(item => (
                                <div key={item.title} className="flex items-start space-x-4">
                                    <div className="bg-purple-600 p-3 rounded-full">{item.icon}</div>
                                    <div>
                                        <p className="font-bold text-gray-800">{item.title}</p>
                                        <p className="text-gray-600">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <SocialIcons className="pt-4" />
                    </div>
                    <form className="space-y-4">
                        <p className="text-gray-600">I'm always open to discussing product design work or partnership opportunities.</p>
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" id="name" placeholder="Name*" className="w-full p-3 placeholder-gray-400 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" id="email" placeholder="Email*" className="w-full p-3 placeholder-gray-400 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="location" className="sr-only">Location</label>
                                <input type="text" id="location" placeholder="Location*" className="w-full p-3 placeholder-gray-400 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition" />
                            </div>
                            <div>
                                <label htmlFor="budget" className="sr-only">Budget</label>
                                <input type="text" id="budget" placeholder="Budget*" className="w-full p-3 placeholder-gray-400 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="sr-only">Subject</label>
                            <input type="text" id="subject" placeholder="Subject*" className="w-full p-3 placeholder-gray-400 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea id="message" placeholder="Message*" rows="5" className="w-full p-3 placeholder-gray-400 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition"></textarea>
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-all shadow-md">
                            Submit <ArrowRightIcon />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact