import React from 'react'
import Header from '../components/Header'
import Dd from '../components/footer/cc'
import { IoCart } from "react-icons/io5";
// import { useDispatch,useSelector } from 'react-redux';
// import { add, remove } from "@/app/Redux/Cartslice";



const page = () => {
  // const dispatch=useDispatch();
  // const cartitems = useSelector((state)=>state.cart)


  //   const handleremove =(id)=>{
  //       dispatch(remove({id}));
  //   }
  return (
    <div className='flex flex-col'>
        <div>
            <Header />
        </div>
        <div className='bg-white'>
        <div>
            <div className='mx-5 sm:mx-24'>
            <table className="min-w-full text-xs sm:text-sm  text-black mt-[180px] mb-[30px]  w-full">
              <thead className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800 w-full">
                <tr className='flex justify-between'>
                  <th scope="col" className=" px-1 sm:px-6 py-4">Image</th>
                  <th scope="col" className=" px-1 sm:px-6 py-4">Product</th>
                  <th scope="col" className=" px-1 sm:px-6 py-4">Quantity</th>
                  <th scope="col" className=" px-1 sm:px-6 py-4">Price</th>
                  <th scope="col" className=" px-1 sm:px-6 py-4">Total</th>
                </tr>
              </thead>
              <tbody className=''>
                <tr className='flex whitespace-nowrap py-4 font-medium col-span-4'>
                <div className='flex items-center mx-5 '>
                  <IoCart className='mx-2 ' /> 
                  <div><p>Your cart is empty!</p></div>
                  </div>
                </tr>
              </tbody>
            </table>
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