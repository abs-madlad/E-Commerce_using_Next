"use client"

import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import Header from '../../components/Header';
import Dd from '../../components/footer/cc';
import { FaUser , FaShoppingCart } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaExchangeAlt } from "react-icons/fa";
import { TbShieldHalf } from "react-icons/tb";
import SimilarProd from './SimilarProd';
import SimilarData from './SimilarData';


const page = () => {
    const [table, setTable]= useState(true);
    const[review, setReview] = useState(false);
    const [activeButton, setActiveButton] = useState("description");


    const openTable=() => {
        setTable(true);
        // setReview(true);
        setActiveButton("description");
    }

    const Review = () => {
        setTable(false);
        setReview(true);
        setActiveButton("review");
    }

    useEffect(() => {
        // Set the initial active button when the component mounts
        setActiveButton('description');
      }, []);

  return (
    <div className='bg-white h-screen'>
        <div>
            <Header />
        </div>
        <div className='flex justify-center'>
            <div className='flex justify-between mx-10'>
            <div className='mt-[200px] mr-5'>
                <div className='bg-white p-2 border-gray-300 border-2 h-[500px]'>

                    <div className='bg-gray-200 p-4 h-[400px]'>
                        <img className='w-[306px]' src='https://www.schoolshop.in/backend/web/uploads/product/1708181539.png'></img>
                    </div>

                    <div className='bg-white p-2'>
                        <div className='bg-gray-200 p-1 w-[60px]'>
                            <img className='w-[54px]' src="https://www.schoolshop.in/backend/web/uploads/product/1708181539.png" alt="kuch bhi" />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='text-black mt-[200px]'>
                <div className=''>
                    <h2 className='font-bold text-2xl'>AIS Study Material Kit Class 1</h2>
                    <p className='text-gray-500 my-1'>SKU No : 977076</p>
                    <div><p>⭐⭐⭐⭐⭐</p></div>
                    <div className='flex items-center'>
                        <p><FaIndianRupeeSign /></p>
                        <p className='mx-1 font-bold my-1 text-xl'>4000</p>
                        <p className='text-gray-500'>MRP (Inclusive of all taxes)</p>
                    </div>
                    <div>
                        <p className='text-gray-600 font-bold'>Quantity</p>
                        <div className='flex justify-between my-1'>
                            <div className='bg-gray-100 border-gray-300 border-2 px-4 py-2'>
                              <button className=''>1</button>
                            </div>
                            <div className='bg-blue-600 text-white p-2 flex items-center'>
                                <button className='mx-1'>Add to Cart</button>
                                <p><FaShoppingCart /></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-500 font-bold my-1'>Check Delivery Status</p>
                        <div className='flex'>
                            <div className='border-gray border-2'>
                                <input type="text" placeholder='Enter Pincode Here'/>
                            </div>
                            <div className='bg-gray-600 border-gray-200 p-1'>
                                <button className='text-white '>Check</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='mt-[200px] mx-10'>
                <div className='border-l border-gray-300 p-4'>
                <div className='mb-2'>
                    <h2 className='font-bold text-xl text-black'>Product Specification</h2>
                </div>
                <div className='border-b border-gray-200 my-2'>
                    <table>
                        <tbody className='text-black'>
                            <tr className='my-2'>
                                <td className='text-gray-500'>Class</td>
                                <td className='text-black'>: 1st</td>
                            </tr>
                            <tr className='my-2'>
                                <td className='text-gray-500'>Study Kit for</td>
                                <td className='text-black'>: Amity International School</td>
                            </tr>
                            <tr className='my-2'>
                                <td className='text-gray-500'>Session Year</td>
                                <td className='text-black'> : 2024-25</td>
                            </tr>
                            <tr className='my-2'>
                                <td className='text-gray-500'>Kit of</td>
                                <td className='text-black'>: Textbooks + Workbooks + Notebooks</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='text-black'>
                    <div className='flex items-center border-b border-gray-200 my-2'>
                        <p className='text-red-500 text-3xl mx-1'><LiaShippingFastSolid /></p><p>Fast Shipping</p>
                    </div>
                    <div className='flex items-center border-b border-gray-200 my-2'>
                        <p className='text-red-500 text-3xl mx-1'><FaExchangeAlt /></p> <p>Easy to Exchange</p>
                    </div>
                    <div className='flex items-center border-b border-gray-200 my-2'>
                        <p className='text-red-500 text-3xl mx-1'><TbShieldHalf /></p> <p>100% Safe & Secure Payments</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='bg-white flex flex-col justify-center'>
            <div className='flex justify-center text-black'>
                <button onClick={openTable} className={"p-4 border-blue border-2 m-1 ${activeButton === 'description' ? 'bg-blue-500 text-white' : 'border-blue border-2'}"}>Description</button>
                <button onClick={Review} className={"p-4 border-blue border-2 m-1 ${activeButton === 'review' ? 'bg-blue-500 text-white' : 'border-blue border-2'}"}>Write Review</button>
            </div>


            {table ? (
                <center><div className='p-4 border-gray-300 border-2 w-[80%] '>
            <center><table className='text-black w-[75%] my-10'>
                    <thead>
                        <tr>
                            <td>Kit Products</td>
                            <td>Qty</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-sky-100'>
                            <td className=''>Amity English Worksheet Class 1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Amity Hindi Worksheet Class 1</td>
                            <td>1</td>
                        </tr>
                        <tr className='bg-sky-100'>
                            <td>Amity Mathematics Worksheet Class 1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>CELA Integrated Worksheet Starters</td>
                            <td>1</td>
                        </tr>
                        <tr className='bg-sky-100'>
                            <td className='text-green-300'>Show More</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table></center>
            </div></center>
        ) : (
          review && (
            <div className='flex justify-center'>
              <input className='px-2 border-gray-400 border-2 text-black' type='text' placeholder='Write a Review'></input>
              <button className='p-2 border-gray-300 text-black border-2'>Send</button>
            </div>
          )
        )}       
            
            
        </div>
        <div className='bg-white'>
            <div className='bg-white'>
                <div className='flex items-center justify-center'>
                    <div className='my-8   w-[5%] h-[3px] bg-blue-500'><hr /></div>
                    <h3 className=' my-8  text-black font-bold text-xl'>SIMILAR PRODUCTS</h3>
                    <div className='my-8 w-[5%] h-[3px] bg-blue-500'><hr /></div>
                </div>
                <div className='flex justify-center text-black'>
                    {SimilarData.map((product) => (
                        <SimilarProd key={product.id} {...product} />
                    ))}
                </div>
                <div className=''>
                        <br />
                        <br />
                </div>
            </div>
            
        </div>
        <div>
            <Dd />
        </div>
    </div>
  )
}

export default page