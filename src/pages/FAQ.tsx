import React, { useState } from 'react';

const faqData = [
  {
    question: "How does the system know when I've passed away?",
    answer: "Saygoodbyes.com's system is triggered by your appointed representative (the person you choose). Once they login and provide notification, the system begins the process of delivering your messages. We recommend choosing someone you trust implicitly."
  },
  {
    question: "Can my representative read my messages?",
    answer: "No. Privacy is our core pillar. Only your representative has the authority to trigger the delivery. They cannot open, read or edit the contents of the messages you have written for others. The system will trigger the delivery of an additional private message to anyone on your list that you select."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. All answers are encrypted. We use the highest industry-standard security protocols to ensure that your private thoughts remain private until the moment they are meant to be shared."
  },
  {
    question: "What happens if my representative passes away before me?",
    answer: "You can update your representative assignee at any time. We also suggest that you appoint a secondary contact. The system sends check-in emails to you and your representative(s) as frequently as you would like to ensure that you and your representative(s) are well."
  },
  {
    question: "Can I edit my messages after I save them?",
    answer: "Yes. You can add new people, remove contacts or rewrite your messages as your life and relationships evolve."
  },
  {
    question: "Is there a cost to use SayGoodbyes?",
    answer: "Yes. We charge a small fee for a big service! Our one-time, all-inclusive cost is $XXX."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fff5f7] py-16 px-6 lg:py-24 min-h-screen">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl mt-10 md:text-5xl font-black tracking-tight" style={{ color: '#2a5df7' }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-700 font-medium">
            Everything you need to know about securing your legacy.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#fadce1] rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
              >
                <span className="text-lg font-bold text-gray-900 group-hover:text-[#2a5df7] transition-colors">
                  {item.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="h-6 w-6 text-[#eb6580]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-xl text-gray-800 leading-snug font-medium border-t border-[#fff5f7] pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? - Using the pink accent background */}
        <div className="mt-16 text-center p-8 bg-[#fdeef1] rounded-3xl border border-[#fadce1] shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Still have questions?</h3>
          <p className="text-gray-700 mt-2 font-medium">
            We're here to help you through this process with care.
          </p>
          <a 
            href="/contact" 
            className="mt-6 inline-block font-black uppercase tracking-wider text-sm transition-colors"
            style={{ color: '#eb6580' }}
          >
            Contact our support team →
          </a>
        </div>
        
      </div>
    </div>
  );
}