"use client"
import { useState , React} from 'react'
import {IoIosArrowForward } from "react-icons/io";


const Data = () => {
  return (
    <div className='bg-white p-2 absolute top-[117px]'>

      <div>
        <ul>
          <li className='hover:text-sky-400 flex items-center'><IoIosArrowForward />Winter Uniforms</li>
          <li className='hover:text-sky-400 flex  items-center'><IoIosArrowForward />Summer Uniforms</li>
        </ul>
      </div>

    </div>
  )
}

export default Data