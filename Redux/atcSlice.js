"use client"
// import { counter } from "@fortawesome/fontawesome-svg-core";
import { createSlice } from "@reduxjs/toolkit"


const initialState = [];

const atcSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { _id } = action.payload;
      console.log("this is prodId",_id);
      const existingCartItemIndex = state.findIndex(item =>
        item._id === _id);

        console.log("existing", existingCartItemIndex)
        console.log("action", action.payload)

      if (existingCartItemIndex !== -1) {
        // If item already exists, update quantity
        state[existingCartItemIndex].quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart
        state.push({
          ...action.payload,
          quantity: 1
        });
      }
     
    },
    removeFromCart(state, action) {
      const _id  = action.payload;
      const existingCartItemIndex = state.findIndex(item => item._id === _id);

      if (existingCartItemIndex !== -1) {
        // If item exists, remove it from the cart
        state.splice(existingCartItemIndex, 1);
      }
    },
    increaseCounter(state, action) {
      const _id = action.payload;
      
      const existingCartItemIndex = state.findIndex(item => item._id === _id);
        console.log("outisde if", existingCartItemIndex);
      if (existingCartItemIndex !== -1) {
        // If item exists, increment quantity
        console.log("reducer", state[existingCartItemIndex].quantity)
        state[existingCartItemIndex].quantity += 1;
        console.log("reducer after", state[existingCartItemIndex].quantity)
      }
    },
    setCounter(state, action) {
      const { _id, quantity } = action.payload;

      const existingCartItemIndex = state.findIndex(item => item._id === _id);

      if (existingCartItemIndex !== -1) {
        state[existingCartItemIndex].quantity = quantity;
      }
    },
    decreaseCounter(state,action){
        const _id= action.payload;
        const existingCartItemIndex= state.findIndex(item => item._id === _id);
        if(existingCartItemIndex !== -1){
            state[existingCartItemIndex].quantity -=1 ;
            if(state[existingCartItemIndex].quantity<1){
                state.splice(existingCartItemIndex,1);
            }
        }
    },
  }
});

export const{addToCart, removeFromCart,increaseCounter,setCounter,decreaseCounter}= atcSlice.actions;
export default atcSlice.reducer;