import React from 'react'
import { PiCurrencyInr } from "react-icons/pi";
import { addToCart } from '@/app/Redux/atcSlice';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from '@/app/Redux/Store';

const BuyAgain = ({data}) => {
    const dispatch = useDispatch();
    const handleadd=()=>{
        console.log(data,"this is data")
         dispatch(addToCart(data));
        // dispatch(addToCart(prod))
        // console.log("added to cart", data)
    }
  return (
    <Provider store={store}>
    <div>
        <div>
            <div className='mx-2 px-2'>
                <div class="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm p-2">
                    <div class="relative p-2">
                        <img class="w-full" src={data.image} alt="Product Image" />
                        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE</div>
                    </div>
                    <div class="p-4">
                        <h3 class="p-2 text-lg font-medium mb-2">{data.prodName}</h3>
                        <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.</p>
                        <div class="flex items-center justify-between p-2">
                            <span class="font-bold text-lg flex items-center text-black"><p className='mx-1'><PiCurrencyInr /></p> {data.price}</span>
                            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={()=>handleadd()}>Buy Again</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Provider>
  )
}

export default BuyAgain