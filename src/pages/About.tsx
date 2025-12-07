import graveyard from '../assets/images/sebastien-gabriel--IMlv9Jlb24-unsplash.jpg';
import dove from '../assets/images/awmleer-6XcziMmkNgQ-unsplash.jpg'
import sunset from '../assets/images/gwyn-hay-w9sZeXnQi7U-unsplash.jpg'
import TestimonialCarousel from '@/components/TestimonialCarousel/TestimonialCarousel';

export default function About() {
  return (
    <>
      <section className="container mx-auto px-4 flex items-stretch h-full pt-24"> 
        <div className="flex-[2] p-4 flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-bold mb-4"> Our Mission and Vision</h2>
          <p className="text-xl leading-relaxed">
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
        <div className="flex flex-1 p-4 justify-center align-center">
          <img src={graveyard} className="w-4/5"/>
        </div>
      </section>

      <section className="container mx-auto px-4 flex items-stretch h-full pt-24">
        <div className="flex flex-1 p-4 justify-center align-center">
          <img src={dove} className=""/>
        </div>
        <div className="flex-[2] p-4 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4"> Our Story</h2>
          <p className="text-xl leading-relaxed">
            Saygoodbyes.com enables its subscribers to inform a selected 
            group of family, friends, associates and contacts in the event 
            of the subscriber’s death. Saygoodbyes.com enables older people 
            to avoid the difficult emotions associated with fearing that they 
            may pass away without their acquaintances even knowing. It helps 
            guide their loved ones as to who they should inform of the passing, 
            funeral arrangements, etc.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 flex items-stretch h-full pt-24"> 
        <div className="flex-[2] p-4 flex flex-col justify-center items-center h-full">
          <h2 className="text-3xl font-bold mb-4"> Trust/Security</h2>
          <p className="text-xl leading-relaxed">
            At SayGoodbyes.com, trust is our foundation, and security is our foremost commitment. 
            We understand that entrusting us with your final, most sensitive communications requires absolute confidence. 
            All messages are stored using industry-standard encryption and protected by robust security protocols, 
            ensuring that your privacy is maintained at the highest level while you are alive. 
            Our system is designed with a strict dependent verification process, requiring multi-step authentication and often third-party 
            confirmation to ensure that your messages are never sent prematurely or to the wrong person. We pledge that 
            your carefully composed words will remain secure, private, and reliably delivered only when the pre-planned c
            onditions of your passing are officially met.
          </p>
        </div>
        <div className="flex flex-1 p-4 justify-center align-center">
          <img src={sunset} className="w-4/5"/>
        </div>
      </section>

      <TestimonialCarousel />
    </>
)
}