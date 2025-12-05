import { Button } from "@/registry/default/ui/button"

export default function Home() {
  return(
    <div>
      <div>
        <h1>
          Say Goodbye, Even When You're Gone.
        </h1>
        <p>
          Create a private list of people you want to send a final message to. 
          Your designated dependent will ensure your goodbyes are delivered when the time comes.
        </p>
        <div>
          <Button variant="outline">
            Create an Account
          </Button>
          <Button>
            Sign in
          </Button>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}