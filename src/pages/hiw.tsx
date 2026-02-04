import React from 'react';

export default function Hiw() {
  const steps = [
    {
      number: "01",
      title: "Create Your Message(s)",
      description: "Sign up and build your private list of loved ones. This is your safe space to draft heartfelt messages to say the things you never got to say, or you can use our suggested message template.",
      imageLabel: "Illustration of a secure user dashboard"
    },
    {
      number: "02",
      title: "Appoint a Trusted Guardian",
      description: "Assign a 'Dependent' or 'Legacy Contact.' This is the person you trust to notify the system when you pass. They won't see your messages and cannot change the list of people to contact.",
      imageLabel: "Icon showing two hands connecting or a shield"
    },
    {
      number: "03",
      title: "Write at Your Own Pace",
      description: "Add emails, phone numbers, and personalized notes. You can update these at any time. Your data is encrypted and remains private until the moment it's needed.",
      imageLabel: "Graphic of a pen writing a letter or an envelope"
    },
    {
      number: "04",
      title: "Peace of Mind... Delivered",
      description: "When the time comes, your Guardian activates your account. We handle the delivery via email or text, ensuring your final words reach the right people instantly.",
      imageLabel: "Visual of a paper plane or a heart being sent"
    }
  ];

  return (
    <div className="bg-white py-16 px-6 lg:py-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Saying goodbye... made simple.
          </p>
          <p className="mt-4 max-w-2xl text-3xl text-gray-500 mx-auto">
            We ensure that your final messages are delivered exactly as you intended, giving you and your loved ones peace of mind.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full sm:w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-400 text-sm text-center px-4 italic">
                    {step.imageLabel}
                  </span>
                </div>

                <div className="flex-1">
                  <span className="text-5xl font-black text-gray-100 absolute -top-10 left-0 -z-10 sm:relative sm:top-0 sm:block">
                    {step.number}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Bottom */}
        <div className="mt-20 text-center bg-blue-50 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-blue-900">Ready to secure your final words?</h3>
          <p className="text-blue-700 mt-2 mb-6">It takes less than 5 minutes to start your list.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg">
            Get Started for Free
          </button>
        </div>
        
      </div>
    </div>
  );
}