import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import {IoIosArrowForward } from "react-icons/io";

const Dd = () => {
  return (
    <div className='w-full'>
    
        <div className='bg-yellow-300 flex md:flex-col justify-center items-center px-2'>
            <div className='p-4 bg-white rounded-full md:mt-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
                <div className=" w-6 sm:w-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                </div>
            </div>
            
            <div >
            <div className="help mt-5 mx-10 sm:mx-20 ">
                <p className='text-black text-center text-md sm:text-xl md:text-3xl'>Can we help you?</p>
            </div>
            <div className='mt-2 mb-3 '>
            <a href='mailto:customercare@schoolshop.in'><p className='text-black text-center text-md sm:text-xl md:text-3xl'>customercare@schoolshop.in</p></a>
            </div>
            </div>

        </div>
        <div className='bg-blue-500 px-4 '>
            <div className='blueson justify-center flex flex-col lg:flex lg:flex-row'>

              <div className='flex flex-col sm:flex-row'>
                <div className='mx-5 px-1 w-1/2'>
                    <div className="mt-10 mb-4">
                        <center><img src='../../../../logo.PNG' width={250} height={50}></img></center>
                    </div>
                    <div className="para hidden sm:flex">
                        <p className='text-white pr-2 text-center'>Schoolshop.in is an initiative of the Education Services Organisation (ESO), which has over 10 years of end-to-end experience in fulfilling school supplies, study material and uniform related requirements of students and schools. School Shop is currently expanding its operations pan-India with a thrust on providing study materials online and reaching wider audiences.</p>
                    </div>
                </div>

                <div className=' my-6 w-1/2'>
                    <div className="font mr-12 mb-2">
                        <p className='font-bold text-white text-lg text-center'>IMPORTANT LINKS</p>
                    </div>
                    <div className="bullets text-white flex justify-center ">
                        <ul>
                            <li className='inline-block px-1 lg:flex items-center my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex'/><a href='https://www.schoolshop.in/category/schoollist'><p className='border-gray-300 border lg:border-0'>All Schools</p></a></li>
                            <li className='inline-block px-1 lg:flex items-center my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex'/><a href='https://www.schoolshop.in/category/schoollist'><p className='border-gray-300 border lg:border-0'>About Us</p></a></li>
                            <li className='inline-block px-1 lg:flex items-center my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex'/><a href='https://www.schoolshop.in/category/schoollist'><p className='border-gray-300 border lg:border-0'>Privacy Policy</p></a></li>
                            <li className='inline-block px-1 lg:flex items-center my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex'/><a href='https://www.schoolshop.in/category/schoollist'><p className='border-gray-300 border lg:border-0'>Return & Refund Policy</p></a></li>
                            <li className='inline-block px-1 lg:flex items-center my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex'/><a href='https://www.schoolshop.in/category/schoollist'><p className='border-gray-300 border lg:border-0'>Shipping & Delivery Policy</p></a> </li>
                            <li className='inline-block px-1 lg:flex items-center my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex'/><a href='https://www.schoolshop.in/category/schoollist'><p className='border-gray-300 border lg:border-0'>Terms & Conditions</p></a></li>
                            <li className='inline-block px-1 lg:flex items-center my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex'/><a href='https://www.schoolshop.in/category/schoollist'><p className='border-gray-300 border lg:border-0'>Contact Us</p></a></li>
                            <li className='inline-block px-1 lg:flex items-center my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex'/><a href='https://www.schoolshop.in/category/schoollist'><p className='border-gray-300 border lg:border-0'>Sitemap</p></a></li>
                        </ul>
                    </div>
                  </div>
                </div>

            <div className='flex flex-col sm:flex-row'>
                <div className='my-6 hidden w-1/2 sm:block '>
                    <div className="prod mr-12 pr-18">
                        <p className='font-bold text-white text-lg mb-2 text-center'>PRODUCTS</p>
                    </div>
                    <div className="bullets text-white flex justify-center">
                        <ul>
                            <li className='inline-block px-1 lg:flex my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex' /><a href=''><p className='border-gray-300 border lg:border-0'>Uniforms</p></a></li>
                            <li className='inline-block px-1 lg:flex my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex' /><a href=''><p className='border-gray-300 border lg:border-0'>Books</p></a></li>
                            <li className='inline-block px-1 lg:flex my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex' /><a href=''><p className='border-gray-300 border lg:border-0'>Study Material Kit</p></a></li>
                            <li className='inline-block px-1 lg:flex my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex' /><a href=''><p className='border-gray-300 border lg:border-0'>Stationery</p></a></li>
                            <li className='inline-block px-1 lg:flex my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex' /><a href=''><p className='border-gray-300 border lg:border-0'>Notebooks</p></a></li>
                            <li className='inline-block px-1 lg:flex my-1 hover:text-sky-200'><IoIosArrowForward className='hidden lg:flex' /><a href=''><p className='border-gray-300 border lg:border-0'>Worksheets</p></a></li>

                        </ul>
                    </div>
                </div>

                <div className='my-6 flex flex-col w-1/2'>
                    <div className="touch mb-2">
                        <p className='font-bold text-white text-center text-lg'>GET IN TOUCH</p>
                    </div>
                    <div className="flex justify-center  icons">
                        < FaFacebook size={24}  className="mr-1"/>
                        < FaInstagram size={24} className="mr-1"/>
                        < FaTwitter size={24}   className="mr-1"/>
                        < FaWhatsapp size={24}  className="mr-1"/>
                    </div>

                    <div className='mt-3'>
                        <p className='font-bold text-white text-lg text-center'>PAYMENT METHOD</p>
                    </div>
                    <div className="img flex items-center justify-center">
                        <div className='mr-1 w-[90px] lg:w-[150px]'><img src='../../../../rp.PNG' ></img></div>
                        <div className='mr-1 w-[50px] lg:w-[70px]'><img src='../../../../mc.PNG' ></img></div>
                        <div className='mr-1 w-[50px] lg:w-[70px]'><img src='../../../../v.PNG'  ></img></div>
                    </div>
                    <div className='flex  mt-2 justify-center'>
                        <div className='text-white mr-2 border-white border-2'><button><p className='text-xs p-1'>Net Banking</p></button></div>
                        <div className='text-white mr-2 border-white border-2'><button><p className='text-xs p-1'>Secure Payment</p></button></div>
                    </div>
                    <div className='font-bold text-white text-center text-lg mt-5'>
                        <p>DOWNLOAD APP</p>
                    </div>
                    <div>
                        <center><a href='https://play.google.com/store/apps/developer?id=Schoolshop.in'> <img src='../../../../ps.PNG' className='w-[100px] lg:w-[200px]'></img></a></center> 
                    </div>
                </div>
              </div>

            </div>
        </div>

        <div className="rights bg-black ">
            <div className='py-2'>
            <center><p className='text-white text-xs'>&copy; 2020-2024 Schoolshop.in, All Rights Reserved</p></center>
            </div>
        </div>
       

    </div>
  )
}

export default Dd