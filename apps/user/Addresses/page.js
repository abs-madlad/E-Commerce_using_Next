import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Header from '@/app/components/Header'
import Dd from '@/app/components/footer/cc'
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col bg-white text-black h-screen'>
        <div><Header /></div>
        <div className='mt-[140px] p-2'>
            <div className='flex items-center'>
                <Link href="./../user"><div className='p-1'>
                    <span>Your Account</span>
                </div></Link>
                <span><p> <MdOutlineKeyboardArrowRight /> </p></span>
                <p className='text-orange-400'>Your Addresses</p>
            </div>
            <div className='py-2'>
                <div>
                    <p className='text-2xl font-medium'>Your Addresses</p>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='border-gray-300 border-dashed border-2 p-2 rounded-lg'>
                    <div className='p-2'>
                        <div className='p-2 text-4xl'>
                            <span className='text-center flex justify-center'><FaPlus /></span>
                            <p className='flex justify-center'>Add Address</p>
                        </div>
                    </div>
                </div>
                <div className='border-gray-300 border-2 p-2 rounded-lg mx-2'>
                    <div>
                        <div>
                            <p>Default Address</p>
                            <hr />
                            <div>
                                <ul>
                                    <li>Niggesh</li>
                                    <li>flat no. 69 Janta Flats</li>
                                    <li>Jhilmil Jamuna paar</li>
                                    <li>New Delhi, Delhi</li>
                                    <li>India</li>
                                    <li>Phone number: 95XXXXXXXX</li>
                                    
                                </ul>
                                <div>
                                    <div className='flex text-cyan-300'>
                                        <span>Edit</span>
                                        <span>|</span>
                                        <span>Remove</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-gray-300 border-2 p-2 rounded-lg'>
                    <div>
                        <div>
                            <p>Alternate Address</p>
                            <hr />
                            <ul>
                                <li>Nisha</li>
                                <li>flat no. 420 Janta Flats</li>
                                <li>Jhilmil Jamuna paar</li>
                                <li>New Delhi, Delhi</li>
                                <li>India</li>
                                <li>Phone number: 97XXXXXXXX</li>
                            </ul>
                            <div>
                                <div className='flex text-cyan-300'>
                                <span>Edit</span>
                                <span>|</span>
                                <span>Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page