"use client"

// import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import  Cookies  from 'js-cookie';


import React from 'react'

const page = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {

    setForm({ ...form, [e.target.name] : e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
            credentials: 'include',
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error logging user:', response.status, response.statusText, errorData);
            return;  // Stop further execution if there's an error
        }

        // At this point, the response is OK, so you can proceed to log cookies
        const accessToken = Cookies.get("token");
        console.log("Cookies:", document.cookie);
        console.log('Token:', accessToken);
        console.log("Logged in successfully!!")

        // Additional code for handling successful login
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">

    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-14 py-12 rounded-2xl border border-white" >

      <div className="text-center py-5 text-2xl text-primary "> Sign In</div>
      
      <div >
        <form method="POST" className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
         
          <div className="my-4">
          <input className="py-2 px-4 rounded-xl bg-black border border-white"   type="text" placeholder="Email" value={form.email} onChange={handleChange} name="email"/>
          </div>
          
          <div className="my-4">
          <input  className="py-2 px-4 rounded-xl bg-black border border-white"   type="password" placeholder="Password" value={form.password} onChange={handleChange} name="password"/>
          </div>

          <p className="text-sm text-white">
          <Link href="./ForgotPassword" className="font-semibold leading-6 text-white hover:text-blue-700">
            forgot password?
          </Link>
        </p>

          <div>
          <button className="bg-gradient-to-r from-gray-900 to-gray-700 px-10 py-3 rounded-xl text-white mt-5 " type="submit" >Sign In</button>
          </div>

        </form>

        <p className="mt-2 text-center text-sm text-white">
          Not a member?{' '}
          <Link href="./SignUp" className="font-semibold leading-6 text-gray-900 hover:text-gray-700">
            Sign Up
          </Link>
        </p>

      </div>

    </div>

    </main>
  )
}

export default page