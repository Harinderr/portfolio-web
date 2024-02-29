'use client'
import { useState } from "react";

export default function Contact() {
 const [formdata , setFormdata] = useState({

 })
  function handleChange(event) {
     const {name,value} = event.target
   setFormdata({...formdata, [name] : value})
  }
  
 async function handleSubmit(e) {
e.preventDefault();
try {
  const response = await fetch('http://localhost:3000/api/contact', {
    method : 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body : JSON.stringify(formdata)

  })
  if(response.ok) {
    alert('message sent')
  }

}
catch(err) {
  console.log('api error '+err)
}

}
  

    return (
      <div id="contact" className=" p-10 mx-auto  h-screen bg-slate-100 text-black">
        <h1 className='text-center text-2xl font-bold'>Contact <span>us</span></h1>
        <form onSubmit={(e)=> handleSubmit(e)}  action="" className="contact_form w-3/4 bg-slate-100 m-auto flex flex-col">
          <label htmlFor="name">Name</label>{" "}
          <input onChange={handleChange} id="name" autoComplete="off" type="text" name="name" placeholder="Your name" />
          <label htmlFor="email">Email</label>{" "}
          <input onChange={handleChange} id="email" autoComplete="off" type="text" name="email" placeholder="Your Email" />
          <label htmlFor="subject">Subject</label>{" "}
          <input onChange={handleChange} id="subject" autoComplete="off" type="text" name="subject" placeholder="subject" />
          <label htmlFor="message">Message</label>
          <input onChange={handleChange}  id="message" autoComplete="off"name="message" placeholder="Enter your message"/>
          <br />
          <button type="submit" className="bg-orange-500 w-full text-white p-2 rounded-md">Send</button>
        </form>
      </div>
    );
  }
  