import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithButton() {
  return (
    <div className="grid relative w-full gap-2">
      <Textarea placeholder="Type your message here." className="h-9"/>
      <Button className="absolute right-10 bottom-5">Send message</Button>
    </div>
  )
}



export default function Contact(){
    return (
        <main>
            <TextareaWithButton />
            <div className="continer border mt-6 pl-6">
                <p className="my-2 text-lg font-bold text-justify">Join my newsletter</p>
                <p className="text-zinc-400 mb-2">Join my newsletter to unlock a world of software engineering insights and innovation. Stay updated on industry trends, gain exclusive access to resources, and connect with a like-minded community. Whether you're a seasoned pro or just starting, let's journey into the future of tech together! Subscribe today.</p>
                <div className="flex mb-4 gap-2">
                    <input type="email" placeholder="Type your email" className="w-8 min-w-fit px-8  border bg-transparent" />
                    <Button>Join newsletter</Button>
                </div>
            </div>
        </main>
    )
}