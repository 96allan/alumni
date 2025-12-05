
import React, { useState } from 'react';
import FadeInSection from '../components/common/FadeInSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
        console.log('Form Submitted:', formData);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-light-bg min-h-screen">
      <section className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-blue-100">Have questions? We'd love to hear from you.</p>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeInSection>
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                   <div className="bg-primary/10 p-3 rounded-full mr-4">
                     <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                   </div>
                   <div>
                     <h3 className="font-semibold text-gray-800">Visit Us</h3>
                     <p className="text-gray-600">123 University Avenue<br/>Kampala, Uganda</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="bg-primary/10 p-3 rounded-full mr-4">
                     <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   </div>
                   <div>
                     <h3 className="font-semibold text-gray-800">Email Us</h3>
                     <p className="text-gray-600">contact@uictalumni.com</p>
                   </div>
                </div>
                <div className="flex items-start">
                   <div className="bg-primary/10 p-3 rounded-full mr-4">
                     <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                   </div>
                   <div>
                     <h3 className="font-semibold text-gray-800">Call Us</h3>
                     <p className="text-gray-600">+256 123 456 789</p>
                   </div>
                </div>
              </div>
              
              <div className="mt-8 h-48 bg-gray-200 rounded-lg w-full flex items-center justify-center overflow-hidden relative">
                  <img src="https://picsum.photos/seed/map/600/400" alt="Map Location" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white/80 px-4 py-2 rounded-md font-semibold text-gray-700 shadow-sm backdrop-blur-sm">View on Google Maps</span>
                  </div>
              </div>
            </div>
          </FadeInSection>

          {/* Contact Form or Success Message */}
          <FadeInSection>
            <div className="bg-white p-8 rounded-lg shadow-md h-full relative">
                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Message Sent!</h2>
                        <p className="text-gray-600 mb-8 max-w-sm">Thank you for reaching out. We have received your message and will get back to you shortly.</p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-md transform hover:scale-105"
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                    <div className="space-y-4 flex-grow">
                        <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            disabled={status === 'submitting'}
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            disabled={status === 'submitting'}
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            disabled={status === 'submitting'}
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
                        />
                        </div>
                        <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            disabled={status === 'submitting'}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none resize-none disabled:bg-gray-100 disabled:text-gray-500"
                        ></textarea>
                        </div>
                        <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-secondary text-white font-bold py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                        {status === 'submitting' ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : 'Send Message'}
                        </button>
                    </div>
                    </form>
                )}
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
