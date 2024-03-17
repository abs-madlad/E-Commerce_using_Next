"use client"

import { useState , React} from 'react'
import {IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

const Navitems = () => {

  return (
    <div className='bg-white p-2 absolute top-[128px] w-1/3'>
          <h2 className='text-sky-400 text-lg'>Classes</h2>
          <div className='flex justify-between text-md font-bold'>
            <div className=' mx-4 my-2'>
            <ul>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />Pre-Nursery</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />Nursery</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />KG</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />1st</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />2nd</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />3rd</li></Link>
            </ul>
          </div>
          <div className='mx-4 my-2'>
            <ul>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />4th</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />5th</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />6th</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />7th</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />8th</li></Link>
            </ul>
          </div>
          <div className='mx-4 my-2'>
            <ul>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />9th</li> </Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />10th</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />11th</li></Link>
              <Link href='../../product'><li className='border-dashed border-b border-black flex items-center my-2 hover:text-sky-400'><IoIosArrowForward />12th</li></Link>
            </ul>
          </div>
          </div>
        </div>
  )
}

export default Navitems