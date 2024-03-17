import React from 'react'
// import {Link} from "react-router-dom"
  // import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
  import { useState } from 'react';
  import { IoMdArrowDropdown } from "react-icons/io";
  import Link from 'next/link';
import Navitems from './Navitems';
import Data from './Data';
import {IoIosArrowForward } from "react-icons/io";

const Yellow = () =>{

  const [show, setShow] = useState(false);
  const [showU, setShowU]= useState(false);
  const [showB, setShowB]= useState(false);
  const [showS, setShowS]= useState(false);

  const handleHover = (e) => {
      e.preventDefault();
      setShow(true);
  }

  const hoverLeave = (e) => {
      e.preventDefault();
      setShow(false);

    const stay= (e) =>{
      e.preventDefault();
      setShow(true);
    }
  } 

  return (
     <div className="bg-yellow-300  py-3 h-12 flex items-center justify-center mb-10 hidden lg:flex xl:hidden">
        <div className='text-black flex'>
              <div className=''>
                <button className='py-3' onMouseEnter={handleHover} onMouseLeave={hoverLeave}>Study Material Kit
              
              {show && (
                    <Navitems onMouseEnter={handleHover} />
              )}</button>
</div>
            <div className='flex items-center m-1 border-r border-black pr-6'> <IoMdArrowDropdown /> </div> 
        </div>

       
        
        <div className='text-black flex mx-2'>
        <button className='py-3' onMouseEnter={() => setShowU(true)} onMouseLeave={() => setShowU(false)}>Uniform 
        {showU && 
          <div className='bg-white p-2 absolute top-[127px] w-1/6'>

            <div>
              <ul>
                <Link href='/Uniform'><li className='my-2 font-bold border-dashed border-b border-black hover:text-sky-400 flex items-center'><IoIosArrowForward />Winter Uniforms</li></Link>
               <Link href='/Summer-Uniform'><li className='my-2 font-bold border-dashed border-b border-black hover:text-sky-400 flex  items-center'><IoIosArrowForward />Summer Uniforms</li></Link>
              </ul>
            </div>

</div>}
        </button>

          {/* <button classname='py-3' onMouseEnter={handleHover} onMouseLeave={hoverLeave}>Uniform
          {show && (
            <Data onMouseEnter={handleHover} />
          )}
          </button> */}

          <div className='flex items-center m-1 border-r border-black pr-6'> <IoMdArrowDropdown /> </div>
        </div>
        <div className='text-black flex mx-2'>
          <button className='py-3' onMouseEnter={() => setShowB(true)} onMouseLeave={() => setShowB(false)}>Books
          {showB && 
           <div className='bg-white p-2 absolute top-[127px] w-1/6 '>
              <div className=''>
                <ul>
                <Link href='/Workbook'><li className='my-2 font-bold border-dashed border-b border-black hover:text-sky-400 flex items-center'><IoIosArrowForward />Workbooks</li></Link>
                <Link href='/Textbook'><li className='my-2 font-bold border-dashed border-b border-black hover:text-sky-400 flex items-center'><IoIosArrowForward />Textbooks</li></Link>
                <Link href='/General-Reading'><li className='my-2 font-bold border-dashed border-b border-black hover:text-sky-400 flex items-center'><IoIosArrowForward />General Reading</li></Link>
                </ul>
              </div>
           </div>
          }
          </button>
          <div className='flex items-center m-1 border-r border-black pr-6'> <IoMdArrowDropdown /> </div>
        </div>
        <div className='text-black flex mx-2'>
          <button className='py-3'>Stationary</button>
          <div className='border-r border-black pr-6'></div>
        </div>
        <div className='text-black flex mx-2'>
          <Link href='/Notebook'><button className='py-3'>Notebooks
          {/* {showS &&
          <div className='bg-white p-2 absolute top-[127px] w-1/6'>
            <div>
              <ul>
                <li className='flex items-center my-2 font-bold border-dashed border-b border-black hover:text-sky-400'><IoIosArrowForward />Interleaf Notebooks</li>
                <li className='flex items-center my-2 font-bold border-dashed border-b border-black hover:text-sky-400'><IoIosArrowForward />Medium Square Notebooks</li>
                <li className='flex items-center my-2 font-bold border-dashed border-b border-black hover:text-sky-400'><IoIosArrowForward />Practical files</li>
              </ul>
            </div>
          </div>
          } */}
          </button></Link>
          <div className='flex items-center m-1 border-r border-black pr-6'></div>
        </div>
        <div className='text-black flex mx-2'>
        <p>Worksheets</p>
        <div className='flex items-center m-1'> </div>
        </div>
        <div className='bg-indigo-950  flex items-center px-5 '>
          <div><img src='../../../../bigger.png' height={70} width={40}></img></div>
          <p className='text-white'>Your School</p>
          <div className='flex items-center m-1'> <IoMdArrowDropdown /> </div>
        </div>

        {/* <Navitems /> */}

    </div>
  )
}

export default Yellow