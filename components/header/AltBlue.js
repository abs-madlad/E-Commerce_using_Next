"use client"
import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import { FaUser , FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import {useState} from 'react'
import Sidebar from './Sidebar';


const AltBlue = () => {
    const [open, setOpen]= useState(false);
    const toggleSidebar = () => {
    setOpen(!open);
  }
  return (
    <div className='bg-blue-500'>

        <div className='flex flex-col justify-center items-center'>
            <div className='flex '>
            <div className='flex justify-center mr-5 sm:mr-24'>
                <div className="flex items-center border-gray-300 border rounded p-1 mx-4 lg:hidden">
                    <button onClick={toggleSidebar}><FaBars /></button>
                    {
                        open && (
                        <Sidebar isOpen={open} toggleSidebar={toggleSidebar} />
                        )
                    }
                </div>
                <div>
                    <img src='logo.PNG' alt='logo' className='w-[135px] sm:w-[180px] md:w-[200px] lg:w-[250px] ' ></img>
                </div>
                </div>
                <div className="flex flex-col md:flex-row lg:items-center space-x-2 xs:flex-row ">
          <div className="flex items-center">
            <div className="mx-2 hover:text-blue-400">
              <FaUser />
            </div>
            <div >
              <p className='hidden md:text-white text-xs font-bold  hover:text-blue-600 md:text-base '>Sign In</p>
            </div>
            <div >
            <p className='text-black text-sm font-bold '>|</p>
          </div>
          </div>
          
          <div className='flex items-center hover:text-blue-400 md:text-base lg:text-lg'>

            <div className=''><FaShoppingCart /></div>
            <div className="flex items-center"><IoMdArrowDropdown /> </div>
          </div>
        </div>

            </div>

            <div className='flex items-center justify-center'>
                <div className='flex justify-center items-center text-black lg:w-[600px] md:w-[529px] sm:w-[350px] w-[230px] my-2'>
                    <input type='text' placeholder='Example: Amrit Hindi Pathmala' className='border rounded sm:py-1 px-2 w-full '/>
                </div>

                <div>
                    <button className=' bg-gray-600 sm:py-1 px-2 rounded'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='h-6 w-6 text-white-500'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-5.2-5.2' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a6 6 0 1 0-12 0 6 6 0 0 0 12 0z' />
                    </svg>
                    </button>
                </div>

            </div>
        </div>

    </div>
  )
}

export default AltBlue