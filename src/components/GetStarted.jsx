import React from 'react';

function GetStarted() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Get started with your new Trézor</h1>
      <p className="text-lg text-gray-600 mb-12">Download the app and follow the steps to get started.</p>
      
      <div className="flex gap-4 mb-16">
        <button className="bg-green-600 text-white px-6 py-3 rounded-md">
          Download for desktop
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md">
          Continue in browser
        </button>
      </div>

      <h2 className="text-3xl font-bold mb-8">This is how it works</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            number: 1,
            title: 'Download Trézor Suite',
            description: 'Download the suite for desktop for the best experience, or click "Continue in browser" to open the web app.'
          },
          {
            number: 2,
            title: 'Install the app',
            description: 'Install the desktop app on your computer. This step isn\'t necessary for web app users.'
          },
          {
            number: 3,
            title: 'Set up your Trézor',
            description: 'Follow the steps to set up your account. This takes about 15 minutes.'
          },
          {
            number: 4,
            title: 'Start using Trézor',
            description: 'You\'re ready to use Trézor securely. Check our guide to learn how to get the most out of it.'
          }
        ].map((step) => (
          <div key={step.number} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full text-gray-600">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Prefer expert guidance?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img 
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Expert guidance"
            className="rounded-lg"
          />
          <div>
            <h3 className="text-2xl font-bold mb-6">Get started with Trézor Expert</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Personal 1:1 guide for Trézor setup
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                60-minute live, online session
              </li>
            </ul>
            <button className="bg-green-600 text-white px-6 py-3 rounded-md">
              Book for USD 99
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;