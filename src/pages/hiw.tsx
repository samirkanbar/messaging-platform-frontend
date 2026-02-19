import React from 'react';

export default function Hiw() {
  const steps = [
    {
      number: "01",
      title: "Create Your Message(s)",
      description: "Sign up and build your private list of loved ones. This is your safe space to draft heartfelt messages to say the things you never got to say, or you can use our suggested message template.",
      accent: "#2a5df7" // Brand Blue
    },
    {
      number: "02",
      title: "Appoint a Trusted Guardian",
      description: "Assign a 'Dependent' or 'Legacy Contact.' This is the person you trust to notify the system when you pass. They won't see your messages and cannot change the list of people to contact.",
      accent: "#eb6580" // Brand Red
    },
    {
      number: "02",
      title: "Write at Your Own Pace",
      description: "Add emails, phone numbers, and personalized notes. You can update these at any time. Your data is encrypted and remains private until the moment it's needed.",
      accent: "#eb6580"
    },
    {
      number: "03",
      title: "Peace of Mind... Delivered",
      description: "When the time comes, your Guardian activates your account. We handle the delivery via email or text, ensuring your final words reach the right people instantly.",
      accent: "#2a5df7"
    }
  ];

  return (
    <div className="bg-white py-16 px-6 lg:py-24 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Saying goodbye... <br className="sm:hidden" />
            <span style={{ color: '#2a5df7' }}>made simple.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-xl md:text-2xl text-gray-500 mx-auto leading-relaxed font-light">
            We ensure that your final messages are delivered exactly as you intended, 
            giving you and your loved ones peace of mind.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {steps.map((step, index) => (
            <div key={index} className="group relative pl-4 border-l-4 transition-all" style={{ borderColor: step.accent }}>
              <div className="flex flex-col">
                {/* Clearly Visible Number */}
                <span className="text-5xl font-black mb-4 block tracking-tighter" style={{ color: step.accent }}>
                  {step.number}
                </span>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Call to Action */}
        <div className="mt-32 text-center py-16 px-8 rounded-[3rem] bg-gray-50 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Ready to secure your final words?
          </h3>
          <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            It takes less than 5 minutes to create your list and appoint your representative.
          </p>
          <button 
            className="text-white px-12 py-5 rounded-full font-extrabold text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            style={{ backgroundColor: '#2a5df7' }}
          >
            Get Started Now
          </button>
        </div>
        
      </div>
    </div>
  );
}