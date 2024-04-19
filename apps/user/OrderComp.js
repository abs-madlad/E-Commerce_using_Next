import React from 'react'
import { PiCurrencyInr } from "react-icons/pi";
import { addToCart } from '@/app/Redux/atcSlice';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from '@/app/Redux/Store';


const OrderComp = ({data}) => {
    const dispatch = useDispatch();
    const handleadd=()=>{
        console.log(data,"this is data")
         dispatch(addToCart(data));
        // dispatch(addToCart(prod))
        // console.log("added to cart", data)
    }
  return (
    <Provider store={store}>
    <div className='my-2 py-1 mx-5 md:mx-10 lg:mx-28'>
        <div className='py-1 sectionArea'>
            <div className='py-1'>
                <div className=''>
                    <div className=''>
                        <div className='column border-transparent rounded-md bg-gray-200 py-1 w-full px-5'>
                            <div className='flex justify-between'>
                                <div className='float-left py-1'>
                                    <div className='flex py-1 grid grid-cols-2 lg:grid-cols-4'>
                                        <div className='orderplaced text-gray-800 flex flex-col p-2 text-sm'>
                                            <span className='p-1'>ORDER PLACED</span>
                                            <span className='p-1 font-semibold'>{data.date}</span>
                                        </div>
                                        <div className='total text-gray-800 flex flex-col p-2 text-sm'>
                                            <span className='p-1'>TOTAL</span>
                                            <span className='font-semibold p-1 flex items-center'><PiCurrencyInr /> {data.price}</span>
                                        </div>
                                        <div className='shipto text-gray-800 flex flex-col p-2 text-sm'>
                                            <span className='p-1'>SHIP TO</span>
                                            <span className='p-1 font-semibold'>{data.address}</span>
                                        </div>
                                        <div className='py-2 mx-5 text-gray-800'>
                                            <span className=''>ORDER ID: {data.id}</span>
                                            <div className='flex'>
                                                <span className='text-cyan-600'>View order details</span>
                                            </div>
                                            <span className='text-cyan-600'>Invoice</span>
                                        </div>
                                        <div className='mx-1'>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-black border-transparent rounded-md border-2 p-2 w-full'>
                    <div className='py-1'>
                        <div className='top'>
                            <div>
                                <div className='top 1 flex text-xl font-bold '>
                                    <span>Delivered :</span>
                                    <span>{data.delivered}</span>
                                </div>
                                <div className='top 2 flex justify-start'>
                                    <span>Package was handled to resident</span>
                                </div>
                            </div>
                        </div>
                        <div className='bottom py-2'>
                            <div>
                                <div className='py-2 flex flex-col sm:flex-row justify-between my-2 mx-2'>
                                    <span className='py-2 justify-center'><img className='w-[100px] h-[100px]' src={data.image}/></span>
                                    <div className='flex-wrap'>
                                        <div><span className='text-cyan-600'>{data.prodName}</span></div>
                                        <div className='my-1'></div>
                                        <div className='flex'>
                                            <div className='bg-yellow-300 border-gray-400 border-2 rounded-lg mx-1 hover:bg-yellow-500'>
                                                <button className='py-1 font-semibold mx-1' onClick={()=>handleadd()}>Buy it Again</button>
                                            </div>
                                            <div className='border-gray-400 border-2 rounded-lg mx-1 hover:bg-gray-200'>
                                                <button className='py-1 font-semibold mx-1'>View your item</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-2'>
                                        <div>
                                            <div className='border-2 border-transparent rounded-lg bg-yellow-400 hover:bg-yellow-500 p-2'><button className='py-1'>Get product support</button></div>
                                            <div className='p-2 border-2 border-gray-600 rounded-md my-1 hover:bg-gray-200'><button className='py-1'>Leave seller feedback</button></div>
                                            <div className='p-2 border-2 border-gray-600 rounded-md hover:bg-gray-200'><button className='py-1'>Write a product review</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='extra'></div>
            </div>
        </div>
    </div>
    </Provider>
  )
}

export default OrderComp