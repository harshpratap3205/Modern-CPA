import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
       
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const key ='_qhHhFE_f7xHoPXM_'
    const service ='service_jmenm2a'
    const template ='template_xqk2jdy'
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');
        
        
        emailjs.sendForm(
            
            service,
            template,
            form.current,
            key,
            
    
       
    )
    .then((result) => {
      setSuccessMessage('Message sent successfully! We will respond within 24 hours.');
      form.current.reset();
    })
    .catch((error) => {
        console.log(error)
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#4f0333]">Modern CPA</h1>
          <div className="flex items-center space-x-6">
            <a href="/contact" className="text-gray-600 hover:text-[#4f0333]">Contact</a>
            <a href="/login" className="text-[#4f0333] border border-[#4f0333] px-4 py-2 rounded hover:bg-[#4f0333] hover:text-white">Client Portal</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[#4f0333] mb-6">Contact Our Experts</h2>
            
            {(successMessage || errorMessage) && (
              <div className={`p-4 rounded-lg mb-8 ${
                successMessage ? 'bg-green-50' : 'bg-red-50'
              }`}>
                <div className="flex items-center">
                  {successMessage ? (
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                  ) : (
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-3" />
                  )}
                  <p className={successMessage ? 'text-green-700' : 'text-red-700'}>
                    {successMessage || errorMessage}
                  </p>
                </div>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4f0333] focus:border-[#4f0333]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4f0333] focus:border-[#4f0333]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#4f0333] focus:border-[#4f0333]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4f0333] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#3a0226] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-8 border-t pt-8">
              <h3 className="text-xl font-semibold text-[#4f0333] mb-4">Direct Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Email: harshpratap122436@gmail.com</p>
                <p className="text-gray-600">Phone: (91) 8178604608</p>
                <p className="text-gray-600">Address: 123 Financial District, Silicon valley, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2024 Modern CPA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;