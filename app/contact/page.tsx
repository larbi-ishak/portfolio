"use client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';


function TextareaWithButton() {
  const notify = () => toast.success("Message sent!");
  const warnEmpty = () => {
    toast.warn("Message Empty! please type ur msg", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }
  const [textVal, setTextVal] = useState("")
  const handleChange = (e: any)=>{
    setTextVal(e.target.value)
  }

  const handleMessage = ()=>{
    if ( textVal != ""){
      notify()
    } else {
      warnEmpty()
    }
    console.log(textVal)
    setTextVal("")
  }
  return (
    <div className="grid relative w-full gap-2">
      <Textarea placeholder="Type your message here." value={textVal} onChange={handleChange} style={{height: "150px"}} />
      <Button className="absolute right-10 bottom-5" onClick={handleMessage}>Send Me Message</Button>
        <ToastContainer  autoClose={2000}/>
    </div>
  )
}

export default function Contact(){
    return (
        <main>
            <TextareaWithButton />
            <div className="continer border mt-6 pl-6">
                <p className="my-2 text-lg font-bold ">Join my newsletter</p>
                <p className="text-zinc-400 mb-2">Join my newsletter to unlock a world of software engineering insights and innovation. Stay updated on industry trends, gain exclusive access to resources, and connect with a like-minded community. Whether you're a seasoned pro or just starting, let's journey into the future of tech together! Subscribe today.</p>
                <div className="flex mb-4 gap-2 flex-wrap">
                    <input type="email" placeholder="Type your email" className="w-8 min-w-fit px-8  border bg-transparent" />
                    <Button>Join newsletter</Button>
                </div>
            </div>
        </main>
    )
}