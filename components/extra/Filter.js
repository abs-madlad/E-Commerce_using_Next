"use client"
import React from 'react'
import { useState } from 'react';
import Header from '../Header'
import Da from './Da'
import { MdKeyboardArrowDown } from "react-icons/md";
import classD from './DataSet/classD';
import Dd from '../footer/cc';
import Skool from './Skool';

const Filter = () => {

  const [toggle, setToggle]= useState(true);
  const [sim, setSim]= useState(true);

  const dropDown=() =>{
    setToggle(!toggle);
  };

  const khulja=() =>{
    setSim(!sim);
  }

  return (

    <div className='flex flex-col bg-white'>
    <div><Header /></div>
    <div className='flex'>
      <div className='bg-gray-100 w-1/4 hidden md:flex flex-col'>
        <div className='border-b border-gray-400 px-10 py-4'>
          <h2 className='text-lg font-bold text-black mt-[190px]'>Filter</h2>
        </div>
        <div onClick={dropDown} className='p-4 flex flex-col  px-10'>
        {classD.map((data) => (
          <div key={data.id} className='flex justify-between'>
          <p className='text-md text-gray-600 font-bold'>{data.name}</p>
          <div ><MdKeyboardArrowDown /></div> 
          </div>
        ))}

        </div>
        { toggle && ( <Da /> )

          }

          <div onClick={khulja} className='p-4 flex flex-col  px-10'>
        {classD.map((data) => (
          <div key={data.name} className='flex justify-between'>
          <p className='text-md text-gray-600 font-bold'>School</p>
          <div ><MdKeyboardArrowDown /></div> 
          </div>
        ))}

        </div>
        {sim && ( <Skool />)}
      </div>
      <div className='mt-40 ml-5'>
          <h2 className='font-bold text-gray-500 text-xl'>Study Material Kit</h2>
      </div>
    </div>
    
    < Dd />
    </div>
  )
}

export default Filter