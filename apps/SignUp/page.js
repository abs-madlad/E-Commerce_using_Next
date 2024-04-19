"use client"

// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import React from 'react'

const page = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        
        setForm({ ...form, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

    try{
        
        const response = await fetch('http://localhost:8080/api/user', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json',},
            body: JSON.stringify(form),
        });

        console.log(response);

        if (response.ok) {
            console.log('User created successfully!');
        } else {
            const errorData = await response.json(); // This assumes the error response is JSON
            console.error('Error creating user:', response.status, response.statusText, errorData);
        }

    } catch {
        console.error('Error submitting form:', error);
    }

    };

  return (

<main className="flex min-h-screen flex-col items-center justify-center p-24">

<div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-14 py-12 rounded-2xl border border-white" >

  <div className="text-center py-5 text-2xl text-primary "> Sign Up</div>
  
  <div >
    <form  className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
      <div className="my-4">
      <input className="py-2 px-4 rounded-xl bg-black border border-white"   type="text" placeholder="Name" value={form.name} onChange={handleChange} name="name"  />
      <br />
      </div>
     
      <div className="my-4">
      <input className="py-2 px-4 rounded-xl bg-black border border-white"   type="text" placeholder="Email" value={form.email} onChange={handleChange} name="email" />
      </div>
      
      <div className="my-4">
      <input  className="py-2 px-4 rounded-xl bg-black border border-white"   type="text" placeholder="Password" value={form.password} onChange={handleChange} name="password" />
      </div>

      <div>
      
      <button className="bg-gradient-to-r from-gray-900 to-gray-700 px-10 py-3 rounded-xl text-white mt-5 " type="submit" >Sign Up</button>
     
      </div>

    </form>

    <p className="mt-2 text-center text-sm text-white">
      Already a member?{' '}
      <Link href="./SignIn" className="font-semibold leading-6 text-gray-900 hover:text-gray-700">
        Sign In
      </Link>
    </p>

  </div>

</div>

</main> 
    
  )
}

export default page



      