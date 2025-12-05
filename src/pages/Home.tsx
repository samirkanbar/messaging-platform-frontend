import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"

export default function Home() {
  return(
    <>
      <div className="hero-container">
        <div className="hero-sub-container">
          <h1 className="hero-title">
            Say Goodbye, 
            <br className="break-size"/>
            Even When You're Gone.
          </h1>
          <p className="hero-paragraph">
            Create a private list of people you want to send a final message to. 
            Your designated dependent will ensure your goodbyes are delivered when the time comes.
          </p>
          <div className="hero-button-container">
            <div>
              <Input placeholder="Email"/>
            </div>
            <Button variant="outline">
              Get started!
          </Button>
          </div>
        </div>
      </div>

      <section className="py-16 container mx-auto px-4">
          
          <h3 className="text-center text-4xl font-bold mb-12">How It Works</h3>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            
            <div className="step-box">
              <h4 className="text-xl font-semibold mb-2">1. Create Your List</h4>
              <p>Securely write your messages and compile the list of recipients. You remain in full control to edit and update them anytime.</p>
            </div>

            <div className="step-box">
              <h4 className="text-xl font-semibold mb-2">2. Designate a Dependent</h4>
              <p>Choose a trusted person who will be responsible for triggering the message delivery upon verification of your passing.</p>
            </div>

            <div className="step-box">
              <h4 className="text-xl font-semibold mb-2">3. Messages Delivered</h4>
              <p>After dependent verification, your messages are automatically sent to your list, delivering your final goodbyes.</p>
            </div>

          </div>
      </section>
    </>
  )
}