'use client'
import { useState } from "react";

export default function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('https://portfolio-web-alpha-one.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata)
      });
      if (response.ok) {
        alert('Message sent');
      }
    } catch (err) {
      console.log('API error ' + err);
    }
  }

  return (
    <div id="contact" className="p-10 mx-auto w-full h-fit bg-slate-900 text-black">
      <h1 className='contact_head text-center text-5xl font-bold text-white'>Contact <span className="text-blue-600">Us</span></h1>
      <form onSubmit={handleSubmit} className="contact_form w-3/5 h-fit mt-8 bg-slate-100 m-auto flex flex-col gap-4">
        <div className="top flex flex-row justify-between ">
        <div className="c_left w-1/2 ">
          <div className="c_left_wrapper flex flex-col">
          <label htmlFor="name">Name</label>
        <input 
          onChange={handleChange}
          id="name"
          className="rounded-md outline-yellow-100 p-4"
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Your name"
          value={formdata.name}
        />
        <label htmlFor="email">Email</label>
        <input 
          onChange={handleChange}
          id="email"
          className="rounded-md outline-yellow-100 p-4"
          autoComplete="off"
          type="text"
          name="email"
          placeholder="Your Email"
          value={formdata.email}
        />
          </div>
       
        </div>
       
        <div className="c_rigjt flex flex-col w-1/2 h-40"> <label htmlFor="message" className="mb-2">Message</label>
       
        <textarea 
          onChange={handleChange}
          id="message"
          className="rounded-md outline-none p-4 ml-2"
          rows={20}
          cols={30}
          placeholder="Enter the message"
          value={formdata.message}
        /></div>
      
       
        <br />
        </div>
        <div className="bottom">

        <button type="submit" className="bg-blue-600 w-full text-white p-4 rounded-md">Send</button>

        </div>
        
      </form>
    </div>
  );
}
