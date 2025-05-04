import React from 'react';
import { BuildingOfficeIcon, ChartBarIcon, BookOpenIcon, UserGroupIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const KnowUs = () => {
    const navigate=useNavigate()
  const services = [
    {
      icon: <ChartBarIcon className="h-8 w-8 text-[#4f0333]" />,
      title: "Virtual CFO Services",
      description: "Expert financial leadership on demand with strategic guidance"
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-[#4f0333]" />,
      title: "Retirement Planning",
      description: "Comprehensive strategies for financial future"
    },
  ];

  const specifications = [
    {
      title: "AI-Driven Insights",
      description: "Combining technology with human expertise"
    },
    {
      title: "Cloud Technology",
      description: "Secure and real-time collaboration platform"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#4f0333]">Modern CPA</h1>
          <div className="space-x-6">
            <a href="/services" className="text-gray-600 hover:text-[#4f0333]">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-[#4f0333]">Contact</a>
            <a href="/login" className="text-[#4f0333] border border-[#4f0333] px-4 py-2 rounded hover:bg-[#4f0333] hover:text-white">Login</a>
          </div>
        </div>
      </nav>

      <div className="bg-[#4f0333] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to AICPA & CIMA</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dive into the A&A webcast series! Join us on May 7 at 1pm ET for expert insights on FASB's five-step model and quality management.
          </p>
          <button onClick={()=>{navigate('/signup')}} className="bg-white text-[#4f0333] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100">
            Start Now
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#4f0333] text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#4f0333] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-[#4f0333] hover:underline">Know more →</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f8f9fa] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#4f0333] text-center mb-12">Our Specification</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-6">
                "Our firm delivers strategic financial solutions tailored to your unique needs..."
              </p>
            </div>
            <div className="space-y-6">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#4f0333] mb-2">{spec.title}</h3>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#4f0333] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Modern CPA</h3>
            <p>Professional accounting services you can trust</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Tax Planning</li>
              <li>Audit & Assurance</li>
              <li>Business Advisory</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p>123 Financial Street</p>
            <p>Silicon Valley (USA)</p>
            <p>Phone: (650) 8178604608</p>
            <p>Email: harshpratap122436@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>© 2023 Modern CPA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default KnowUs;