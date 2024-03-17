import React from 'react'
import Sidebar from './Sidebar';
import { HiBars3 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaUser , FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {useState} from 'react'
import Link from 'next/link';

const Blue = () => {

  const [open, setOpen]= useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  }

//  const closeSidebar = () => {
//     setOpen(false);
//   };

  return (
    
    
    <div className=' bg-blue-500 h-24 lg:h-20 flex justify-center  items-center px-14 xs:px-1' >

    <div className=' flex lg: justify-center'>
      <div className='flex flex-col lg:flex-row'>
      <div className='logo flex my-2'>
      <span className="border-gray-300 border rounded p-2 mx-4 lg:hidden">
      <button onClick={toggleSidebar}><HiBars3 /></button>
      {
        open && (
            <Sidebar isOpen={open} toggleSidebar={toggleSidebar} />
        )
      }
      </span>
      <div>
        <Link href='/'><img src='../../../../logo.png' alt='logo' className='w-[135px] md:w-[200px] lg:w-[250px]' ></img></Link>
      </div>
      </div>

      <div className="flex items-center mx-5" >
        <div className='text-black lg:w-[600px] md:w-[529px] sm:w-[490px] xs:w-[300]' >
          <input type='text'
          placeholder='Example: Amrit Hindi Pathmala'
          className='border rounded py-1 px-2 w-full'
          />
        </div>

        <div>
          <button className='ml-2 bg-gray-600 py-1 px-2 rounded'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6 text-white-500'
            >
          <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-5.2-5.2'
            />
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a6 6 0 1 0-12 0 6 6 0 0 0 12 0z' />
          </svg>
          </button>
          </div>
         </div>
        </div>

        <div className="flex flex-col md:flex-row lg:items-center space-x-2 xs:flex-row ">
          <div className="flex items-center">
            <div className="mx-2 hover:text-blue-400">
              <Link href='/apps/SignIn'><FaUser /></Link>
            </div>
            <div >
              <p className='hidden md:text-white text-xs font-bold  hover:text-blue-600 md:text-base '>Sign In</p>
            </div>
            <div >
            <p className='text-black text-sm font-bold '>|</p>
          </div>
          </div>
          
          <div className='flex items-center hover:text-blue-400 md:text-base lg:text-lg'>

            <div className=''>
            <Link href='/apps/cart'><FaShoppingCart /></Link>
            </div>
            <div className="flex items-center"><IoMdArrowDropdown /> </div>
          </div>
        </div>

        </div>
      
    </div>

  )
}

export default Blue