import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"

export default function Home() {
  return(
    <>
      <div className="hero-container">
        <div className="hero-sub-container">
          <h1 className="hero-title">
            Say Goodbye...
            <br />
            After You Are Gone
          </h1>
          <p className="hero-paragraph">
            Create a private list of people you want to send a final message to. 
            <br />Your designated representative will ensure your goodbyes are delivered when the time comes.
          </p>
          {/* <div className="hero-button-container">
            <div>
              <Input placeholder="Your email"/>
            </div>
            <Button variant="outline">
              Get started!
          </Button>
          </div> */}

          <section className="py-16 container mx-auto px-4">
          
            <h3 className="text-center text-5xl font-bold mb-12 text-white">How It Works</h3>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              
              <div className="step-box">
                <h4 className="text-3xl font-semibold mb-2 text-white">1. Create Your List</h4>
                <p className="text-2xl text-white">Securely write your messages and compile a list of recipients. You remain in full control to edit and update the list at anytime.</p>
              </div>

              <div className="step-box">
                <h4 className="text-3xl font-semibold mb-2 text-white">2. Designate a Representative</h4>
                <p className="text-2xl text-white">Choose a trusted person who will be responsible for triggering the message delivery upon verification of your passing.</p>
              </div>

              <div className="step-box">
                <h4 className="text-3xl font-semibold mb-2 text-white">3. Messages Delivered</h4>
                <p className="text-2xl text-white">After the representative's verification, your messages are automatically sent to your list, delivering your final goodbyes.</p>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  )
}