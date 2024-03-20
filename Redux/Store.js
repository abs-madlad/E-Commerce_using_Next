"use client"
import { configureStore} from "@reduxjs/toolkit";
import atcSlice from "./atcSlice";

const persistedCartState = localStorage.getItem("cartState");
const initialState = persistedCartState ? JSON.parse(persistedCartState) : [];


const store= configureStore({
    reducer: {
        cart:  atcSlice,   
    },
    preloadedState: {
        cart: initialState,
    },  
})
store.subscribe(() => {
    const cartState = store.getState().cart;
    localStorage.setItem("cartState", JSON.stringify(cartState));
  });

  export const selectTotalPrice= (state)=>{
    return state.cart.reduce((total, item)=>{
        const itemTotalPrice= item.quantity*item.price;
        return total+itemTotalPrice
    },0);
  }

// export const SelectItemTotal=(state,itemId)=>{
//     const item= state.cart.find(item=>item._id === itemId);
//     console.log("this is item",item);
//     // console.log("this is item._id",item._id);
//     console.log("this is state",state);
//     return item ? item.quantity * item.price:0;
// }

// const counterFromStorage= JSON.parse(localStorage.getItem('counter')) || {};

// const dataFromStorage= JSON.parse(localStorage.getItem('reduxData')) || {};

// const cartFromStorage= dataFromStorage.cart || [];
// const counterFromStorage = dataFromStorage.counter || {};


// const store =configureStore({
//     reducer: {
//         cart: cartReducer,
//         counter: counterReducer,
//     },
//     
// });

// store.subscribe(()=> {
//     const currentState= store.getState();
//     const newData= {
//         items :currentState.cart.items,
//         counter: currentState.cart.counter,
//     };
//     localStorage.setItem('reduxData', JSON.stringify(newData))
// })

export default store;