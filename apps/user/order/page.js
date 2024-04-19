"use client"
import {React,useState} from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Dd from '@/app/components/footer/cc';
import Header from '@/app/components/Header';
import OrderComp from '../OrderComp';
import PastOrders from '@/app/components/extra/DataSet/PastOrders';
import BuyAgain from '../BuyAgain';



const page = () => {
    const[clickedItem,setClickedItem]= useState(null);

    const handleClickedItems=(item)=>{
        // setClickedItem(item);
        setClickedItem(item === clickedItem ? null : item);
        console.log("Handle ho rha hai")
    }
    const handleButton=()=>{
        console.log("Button click hua");
    }
  return (
    <div className='flex flex-col bg-white'>
        <div>
            <Header />
        </div>
        <div className='mt-[140px]'>
        <div className='text-black flex justify-center sm:justify-normal'>
                <h2 className='text-2xl font-semibold mx-2'>Your Orders</h2>
        </div>
        <div className='text-black flex justify-between'>
            <center><div className='p-1 mx-2 '>
            <input className='p-2 border border-black' type='text' placeholder='Search all orders'></input>
                <button onClick={()=>handleButton} className='border-2 rounded-xl bg-purple-800 text-white p-2 mx-1'>Search</button>
            </div></center>
        </div>
        <div className='text-black'>
            <ul className='flex flex-col sm:flex-row'>
                <li className= {`mx-1 px-1 font-medium`}><span className={`hover:border-b-2 hover:border-blue-600 ${clickedItem==="Orders" ? "border-b-2 border-blue-600":""}`} onClick={()=>handleClickedItems("Orders")}>Orders</span></li>
                <li className={`mx-1 px-1 font-medium  `}><span className={`hover:border-b-2 hover:border-blue-600 ${clickedItem==="Buy Again" ? "border-b-2 border-blue-600":""}`} onClick={()=>handleClickedItems("Buy Again")}>Buy Again</span> </li>
                <li className= {`mx-1 px-1 font-medium`}><span className={`hover:border-b-2 hover:border-blue-600 ${clickedItem==="Not Yet Shipped" ? "border-b-2 border-blue-600":""}`} onClick={()=>handleClickedItems("Not Yet Shipped")}>Not Yet Shipped</span></li>
                <li className={`mx-1 px-1 font-medium`}><span className={`hover:border-b-2 hover:border-blue-600 ${clickedItem==="Cancelled Orders" ? "border-b-2 border-blue-600":""}`} onClick={()=>handleClickedItems("Cancelled Orders")}>Cancelled Orders</span></li>
            </ul>
        </div>
        <div>
        {clickedItem=== "Orders" && (
            PastOrders.map((data) => (
        <OrderComp key={data.id} data={data}/>
    ))
            
        )}
        <div className='flex flex-wrap py-2 my-2 justify-center'>
        {clickedItem=== "Buy Again" && (
            PastOrders.map((data)=>(
            <BuyAgain key={data.id} data={data} />
            ))
        )}
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