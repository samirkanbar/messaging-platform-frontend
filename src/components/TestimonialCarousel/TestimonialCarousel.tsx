import React, { useState, useEffect } from 'react';

const testimonials = [
  { quote: "Saygoodbyes.com is a true gift! It makes the difficult passing of a loved one MUCH easier.", author: "— Michael B." },
  { quote: "I am truly grateful for Saygoodbyes.com. It has made my pre-death planning a simpler, more personal task.", author: "— Sarah T." },
  { quote: "We are grateful for Saygoodbyes, which has saved us much pain and heartache. Thank you!", author: "— James P." },
];

const SLIDE_DURATION = 5000;

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <h3 className="text-center text-4xl font-bold mb-10">Kind Words from Our Users</h3>
      
      <div className="mx-auto max-w-4xl overflow-hidden">
        
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full p-6 text-center"
            >
              <p className="text-2xl italic mb-4 text-gray-700">"{testimonial.quote}"</p>
              <p className="text-xl font-semibold text-pink-600">{testimonial.author}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}