"use client"
import React, { useEffect, useState } from 'react'
import { removeFromCart } from '@/app/Redux/atcSlice';
import { useDispatch,useSelector } from 'react-redux';
// import Counter from '@/app/components/Counter';
import { selectTotalPrice } from '@/app/Redux/Store';
// import Link from 'next/link';
import { counterValue } from '@/app/components/Counter';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaRupeeSign } from "react-icons/fa"

const page = () => {
    // const dispatch=useDispatch();
    const cartItems = useSelector((state)=> state.cart); // this state.cart is accessing the state in the store
    console.log("cart", cartItems)
    const Total= useSelector(selectTotalPrice);

    // const handleRemoveItem= (id)=> {
    //     dispatch(removeFromCart(id))

    // }

    // const getAmount=()=>{
    //     const amount={counterValue(item._id)}*{item.price}
    //     return amount
    // }
    function getAmount(item,price){
        const amount=counterValue(item)*price;
        return amount;
    }

    const downloadPdf = () => {
        const element = document.getElementById('invoice');
    
        html2canvas(element, { scrollY: -window.scrollY }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const ratio = canvas.height / canvas.width;
            const width = pdfWidth;
            const height = ratio * width;
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save('invoice.pdf');
        });
    };
    

  return (
    <div id='invoice' className=' bg-white h-screen text-black p-2 '>
        <div className='p-2 mx-40'>
            <div className='p-2 flex justify-between font-mono my-5'>
                <div><img src="/logo.png" alt="womp womp nigga" /></div>
                <span id='invoicetitle' className='text-5xl font-medium'>INVOICE</span>
            </div>
            <div className='p-2 flex justify-between m-5'>
                <div>
                    <span>Billed to</span>
                    <p>Priya Dumbass Jain</p>
                    <p>8178469769</p>
                    <p>House no:420 Janta flats Jhilmil</p>
                </div>
                <div>
                    <span>Invoice no: abc12345</span>
                    <p>Date: 22/04/24</p>
                </div>
            </div>
        </div>
        <div>
            <center><table className='w-[50rem] mb-10' >
                <thead>
                    <tr className='bg-gray-200'>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {cartItems.map((item)=>(
                            <tr key={item._id} className='cartCard my-2 bg-gray-100'>
                                {/* <td className=" p-[10px] "><img src={`http://localhost:8080/api/product/${item.image}`} className='w-[60px]' alt='img'/> <button className='btn px-2' onClick={()=>handleRemoveItem(item._id)}>Remove</button></td> */}
                                <td className=" p-[10px] "><p className='text-black'>{item.name}</p></td>
                                <td className=" p-[10px] "><p>{counterValue(item._id)}</p></td>
                                <td className=" p-[10px] "><h5 className='text-black '>{item.price}</h5></td>
                                <td className=" p-[10px] ">{getAmount(item._id,item.price)}</td>
                            </tr>
                        ))}
                </tbody>
            </table></center>

            <div>
                <div className='p-5 mx-32'>
                    <div className='px-[15px]'>
                        <div className=' md:pl-[25px] border-l-[1px] border-[#eee] text-[8px] md:text-[15px] flex flex-col flex-wrap'>
                            {/* <h3 className='text-black font-bold text-xl border-b-2 w-auto text-[15px] md:text-[20px] pb-[12px] '>Order Summary</h3> */}
                            <ul className='text-[#676765]'>
                              <li className='py-[12px] border-b-[1px] text-[14px] border-[#eee]'>Subtotal</li>
                              <li className='font-bold text-black text-[14px] md:text-lg flex justify-between py-[12px] border-b-[1px] border-[#eee]'>Total Amount
                              <p className='flex items-center'><FaRupeeSign />{Total}</p>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <center>
                <button id='buttondisable' onClick={downloadPdf} className = 'py-3 px-6 bg-blue-400 rounded-full hover:bg-blue-700 hover:text-white text-center ' >
                    Download Invoice
                </button>
                </center>
            </div>
        </div>
    </div>
  )
}

export default page