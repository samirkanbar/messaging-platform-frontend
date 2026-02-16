import graveyard from '../assets/images/sebastien-gabriel--IMlv9Jlb24-unsplash.jpg';
import dove from '../assets/images/awmleer-6XcziMmkNgQ-unsplash.jpg'
import sunset from '../assets/images/gwyn-hay-w9sZeXnQi7U-unsplash.jpg'
import TestimonialCarousel from '@/components/TestimonialCarousel/TestimonialCarousel';

export default function About() {
  return (
    <div className="bg-white text-gray-900 font-sans pt-24 pb-16 overflow-x-hidden">

      <section className="w-full pt-12 pb-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: '#2a5df7' }}>
          About Us
        </h1>
      </section>
      
      {/* --- SECTION 1: MISSION AND VISION (Image Right) --- */}
      <section className="w-full py-16 flex justify-center">
        <div className="container max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12"> 
          <div className="flex-[3] text-center md:text-left space-y-4">
            <h2 className="text-4xl font-black tracking-tight" style={{ color: '#2a5df7' }}>
              Our Mission and Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              The death of a Saygoodbyes.com subscriber triggers a 
              process by which all contacts on the subscribers list receive 
              notification of the death, funeral arrangements, (where available), 
              preferred charities, etc. Subscribers create (and would be able to add to or delete) 
              a list of names to be informed with standard or customized message(s) 
              in the event of the subscriber’s demise. Subscribers can rest in peace, 
              assured that their end-of-life transition will be easier for their family 
              and that they will say a proper goodbye to the community that populated their life.
            </p>
          </div>
          <div className="flex-[2] w-full flex justify-center">
            <img src={graveyard} className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]" alt="Mission" />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: OUR STORY (Image Left) --- */}
      <section className="w-full py-16 bg-gray-50 flex justify-center border-y border-gray-100">
        <div className="container max-w-6xl px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-[2] w-full flex justify-center">
            <img src={dove} className="w-full max-w-sm rounded-full border-8 border-white shadow-xl aspect-square object-cover" alt="Story" />
          </div>
          <div className="flex-[3] text-center md:text-left space-y-4">
            <h2 className="text-4xl font-black tracking-tight" style={{ color: '#eb6580' }}>
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Saygoodbyes.com enables its subscribers to inform a selected 
              group of family, friends, associates and contacts in the event 
              of the subscriber’s death. Saygoodbyes.com enables older people 
              to avoid the difficult emotions associated with fearing that they 
              may pass away without their acquaintances even knowing. It helps 
              guide their loved ones as to who they should inform of the passing, 
              funeral arrangements, etc.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TRUST/SECURITY (Image Right) --- */}
      <section className="w-full py-16 flex justify-center">
        <div className="container max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12"> 
          <div className="flex-[3] text-center md:text-left space-y-4">
            <h2 className="text-4xl font-black tracking-tight" style={{ color: '#2a5df7' }}>
              Trust/Security
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              At SayGoodbyes.com, trust is our foundation, and security is our foremost commitment. 
              We understand that entrusting us with your final, most sensitive communications requires absolute confidence.
              <br /><br />
              Our system is designed with a strict dependent-verification process requiring multi-step authentication and often third-party 
              confirmation to ensure that your messages are never sent prematurely or to the wrong person.
              All messages and information are stored using industry-standard encryption and protected by robust security protocols... 
              ensuring that your privacy is maintained at the highest level. <br /><br />
              We pledge that 
              your carefully composed words, will remain secure, private, and reliably delivered only when your pre-planned conditions 
              are officially met.
            </p>
          </div>
          <div className="flex-[2] w-full flex justify-center">
            <img src={sunset} className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]" alt="Security" />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION (Full Width & Centered) --- */}
      <section className="w-full py-20 bg-gray-900 text-white flex flex-col items-center">
        <div className="container w-full max-w-screen-xl px-6 text-center">
          <h3 className="text-[#eb6580] uppercase tracking-[0.3em] font-bold text-sm mb-4">
            Testimonials
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Shared Experiences
          </h2>
          
          <div className="w-full flex justify-center">
             <div className="w-full">
                <TestimonialCarousel />
             </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}