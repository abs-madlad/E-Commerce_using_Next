"use client"

import React from 'react'
import { useState } from 'react';

const page = () => {

        const [form, setForm] = useState({
          email: "",
        })
      
        const handleChange = (e) => {
      
          setForm({ ...form, [e.target.name] : e.target.value})
        }
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
      try{
          
          const response = await fetch('http://localhost:8080/api/user/forgot-password', {
              method: 'POST',
              headers: {'Content-Type' : 'application/json',},
              body: JSON.stringify(form),
              credentials: 'include'
          });
      
          if (response.ok) {
           alert("Email sent successfully!!!!") }
      
      } catch(error) {
          console.error('Error submitting form:', error);
      }
      
      };

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-14 py-12 rounded-2xl border border-white" >

      <div className="text-center py-5 text-2xl text-primary "> ForgotPassword </div>
      
      <div >
        <form method="POST" className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
         
          <div className="my-4">
          <input className="py-2 px-4 rounded-xl bg-black border border-white"   type="text" placeholder="Email" value={form.email} onChange={handleChange} name="email"/>
          </div>
          
          <div>
          <button className="bg-gradient-to-r from-gray-900 to-gray-700 px-10 py-3 rounded-xl text-white mt-5 " type="submit" >Send</button>
          </div>

        </form>

      </div>

    </div>

    </main>
  )
}

export default page