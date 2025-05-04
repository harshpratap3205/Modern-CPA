import React from 'react';
import { CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import ceo from './Modern CPA.jpg'

const AboutUs = () => {
    const Navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-[#4f0333] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Modern CPA
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering CPAs with Cutting-Edge Knowledge & Resources
          </p>
          <div className="flex items-center justify-center space-x-4">
            <CalendarIcon className="h-8 w-8 text-white" />
            <span className="text-xl font-semibold">
              May 7 at 1pm ET
            </span>
          </div>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4f0333] mb-6">
            A&A Webcast Series
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Join industry leaders for an insightful session on the latest developments in accounting standards and quality management practices.
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-[#4f0333]/10">
            <h3 className="text-xl font-bold text-[#4f0333] mb-4">Featured Speakers</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-cover bg-[grey] ">
                    <img src={ceo} alt="" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">harshpratapsingh, CPA</h4>
                  <p className="text-gray-600">CEO of MODERN CPA®</p>
                </div>
              </div>
              
            </div>
          </div>

         
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg border border-[#4f0333]/10">
            <h3 className="text-xl font-bold text-[#4f0333] mb-6">Key Discussion Topics</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="h-6 w-6 text-[#4f0333] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Strategic Direction</h4>
                  <p className="text-gray-600">Latest developments in AICPA's goals and organizational strategy</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="h-6 w-6 text-[#4f0333] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">FASB Five-Step Model</h4>
                  <p className="text-gray-600">In-depth analysis of the final step implementation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircleIcon className="h-6 w-6 text-[#4f0333] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Management</h4>
                  <p className="text-gray-600">Best practices for maintaining excellence in accounting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-[#4f0333] mb-6">
            Don't Miss This Exclusive Event
          </h3>
          <button onClick={()=>{Navigate('/signup')}} className="bg-[#4f0333] hover:bg-[#3a0226] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Register Now
          </button>
        </div>
      </div>

   
      <div className="border-t border-[#4f0333]/10 bg-white">
        <div className="max-w-6xl mx-auto py-8 px-4 text-center text-gray-600">
          <p>© 2024 Modern CPA. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;