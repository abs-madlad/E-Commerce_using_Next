import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { decrement,increment} from '../Redux/Countslice';
// import { resetCounter } from '../Redux/Countslice';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { increaseCounter,setCounter,decreaseCounter } from '../Redux/atcSlice';

const Counter = ({_id}) => {
    const dispatch = useDispatch();
    // const counterValue = useSelector((state) => state.counter.value);

    const handleIncrement=(_id)=>{
      console.log("handle increment called");
      dispatch(increaseCounter(_id));
      // console.log("this is state",state.cart)
    }

    const handleDecrement=(_id)=>{
      dispatch(decreaseCounter(_id));
    }

    const counterValue = useSelector((state) => {
      // Find the item in the cart array by productId
      const cartItem = state.cart.find(item => item._id === _id);
      
      // If the item is found, return its quantity, otherwise return a default value of 1
      return cartItem ? cartItem.quantity : 1;
    });
    // const handleIncrement=(productId)=> {
    //   dispatch(increment({productId}));
    // };

      // dispatch(add(productId))
      // console.log(productId," is incremented");
   

    // const handleDecrement=(productId)=>{
    //   dispatch(decrement(productId));
    //   console.log(productId,"is Decremented");
    // };

      // if(counterValue >1){
      //     dispatch(decrement({productId}));
      // }else{
      //   dispatch(resetCounter([productId]));
      //   localStorage.removeItem(`counter_${productId}`);
      // }
    

    const handleSetCounter= ()=> {
      dispatch(setCounter({_id}));
   
      
    };
  
    return (
      <div className='flex items-center nigga'>
        <button className='mx-2' onClick={()=>handleIncrement(_id)} ><FaPlus /></button>
        {/* <h1> {counterValue}</h1> */}
        {/* <input type='number' value={counterValue} onChange={(e)=> handleSetCounter(parseInt(e.target.value))} /> */}
        <p value={counterValue} onChange={(e)=> handleSetCounter()}> {counterValue} </p>
        {/* <div>{cartItems.Counter}</div> */}
        {/* <button className='mx-2' onClick={() => dispatch(increment())}><FaPlus /></button> */}
        <button className='mx-2' onClick={()=> handleDecrement(_id)} ><FaMinus /></button>
      </div>
    );
  };
  
  export default Counter;