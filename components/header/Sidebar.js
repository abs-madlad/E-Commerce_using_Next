"use client"

import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from 'react';

 
const Sidebar = ({ isOpen, toggleSidebar }) => {

    const close= () => {
        toggleSidebar();
        console.log("Function is closing")
      }

  return (
    <div className=' bg-yellow-300 z-100 absolute left-0 top-0 w-5/6 sm:w-1/3 h-screen'>
        <div className='flex justify-end mr-2 mt-2'>
            <button onClick={close} className='p-2'><MdOutlineClose size={25} /></button>
        </div>
          <ul className='p-5' >
            <li className='flex items-center my-2 text-lg '>Study Material Kit<IoMdArrowDropdown /></li>
            <hr className='border-black'></hr>
            <li className='flex items-center my-2 text-lg '>Uniforms<IoMdArrowDropdown  /></li>
            <hr className='border-black'></hr>
            <li className='flex items-center my-2 text-lg '>Books <IoMdArrowDropdown /></li>
            <hr className='border-black'></hr>
            <li className='flex items-center my-2 text-lg '>Stationery<IoMdArrowDropdown /></li>
            <hr className='border-black'></hr>
            <li className='flex items-center my-2 text-lg '>Notebooks<IoMdArrowDropdown  /></li>
            <hr className='border-black'></hr>
            <li className='flex items-center my-2 text-lg '>Worksheets<IoMdArrowDropdown /></li>
            <hr className='border-black'></hr>
            <li className='flex items-center my-2 text-lg '><FaGraduationCap />Your School<IoMdArrowDropdown /></li>
            <hr className='border-black'></hr>
        </ul>
    </div>
  )
}

export default Sidebar
