"use client";
import React from 'react'
import Header from '../../components/Header';
import Dd from '../../components/footer/cc';
import { removeFromCart } from '@/app/Redux/atcSlice';
import { useDispatch,useSelector } from 'react-redux';
import Counter from '@/app/components/Counter';
// import { selectTotalPrice } from '@/app/Redux/Store';
// import { SelectItemTotal } from '@/app/Redux/Store';

const Cartpage = () => {
    const dispatch=useDispatch();
    const cartItems = useSelector((state)=> state.cart); // this state.cart is accessing the state in the store
    console.log("cart", cartItems)
    // const Total= useSelector(selectTotalPrice);

    // const total = useSelector(state=> SelectItemTotal(state,itemId));
  const handleRemoveItem= (id)=> {
    dispatch(removeFromCart(id))
  }

  


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
              <tbody>
              <div>
                        
                {/* {cart.cartItems.map((item)=>  */}

                {cartItems.map((item)=>(
                  
                
                            <tr key={item._id} className='cartCard my-2 flex justify-between'> 
                                <td className=" px-1 sm:px-6 py-4"><img src={`http://localhost:8080/api/product/${item.image}`} className='w-[60px]' alt='img'/> <button className='btn px-2' onClick={()=>handleRemoveItem(item._id)}>Remove</button></td>
                                <td className=" px-1 sm:px-6 py-4"><p className='text-black'>{item.name}</p></td>
                                <td className=" px-1 sm:px-6 py-4"><p><Counter _id={item._id} /></p></td>
                                <td className=" px-1 sm:px-6 py-4"><h5 className='text-black '>{item.price}</h5></td>
                                <td className=" px-1 sm:px-6 py-4">total</td>
                            </tr>
                        ))}
                </div>
                <div className='flex flex-col items-center '>
                  </div>
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

export default Cartpage