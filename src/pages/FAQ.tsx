import React, { useState } from 'react';

const faqData = [
  {
    question: "How does the system know when I've passed away?",
    answer: "The system relies on your appointed 'Guardian' (the dependent you choose). Once they log in and provide notification, the system begins the process of delivering your saved messages. We recommend choosing someone you trust implicitly."
  },
  {
    question: "Can my Guardian read my messages?",
    answer: "No. Privacy is our core pillar. Your Guardian only has the authority to trigger the delivery; they cannot open, read, or edit the contents of the messages you've written for others."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. All messages are encrypted at rest. We use industry-standard security protocols to ensure that your private thoughts remain private until the moment they are meant to be shared."
  },
  {
    question: "What happens if my Guardian passes away before me?",
    answer: "You can update your Guardian at any time. We also recommend appointing a secondary contact or setting up 'check-in' reminders to ensure your account always has a path to activation."
  },
  {
    question: "Can I edit my messages after I save them?",
    answer: "Yes, your list is living. You can add new people, remove contacts, or rewrite your messages as your life and relationships evolve."
  },
  {
    question: "Is there a cost to use SayGoodbyes?",
    answer: "We offer a free tier for basic needs. For users who want to store larger files (like video goodbyes) or have multiple guardians, we offer a premium legacy plan."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 lg:py-24">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about securing your legacy.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Smooth Expand/Collapse */}
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Still have questions?</h3>
          <p className="text-gray-500 mt-2">
            We're here to help you through this process with care.
          </p>
          <a 
            href="/contact" 
            className="mt-6 inline-block text-blue-600 font-bold hover:text-blue-700 transition-colors"
          >
            Contact our support team →
          </a>
        </div>
        
      </div>
    </div>
  );
}