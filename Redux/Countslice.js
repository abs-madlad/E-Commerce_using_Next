// "use client"
// import {createSlice} from "@reduxjs/toolkit"

// const counterFromStorage= JSON.parse(localStorage.getItem('counter')) || {};

// const Countslice= createSlice({
//     name: "counter",
//     initialState: counterFromStorage,
//     reducers:{
//         setCounter: (state,action)=>{
//             const {productId,value}= action.payload;
//             state[productId]=value;
//             localStorage.setItem("counter",JSON.stringify(state));
//             // console.log("this is the value",value);

//         },
//         increment: (state,action) => {
//             const {productId}= action.payload;
//             state[productId]= (state[productId] || 0) + 1;
//             localStorage.setItem('counter', JSON.stringify(state));
//             // console.log("This is c froms storage",counterFromStorage)
//         },
//         decrement: (state,action) => {
//             const {productId} = action.payload;
//             state[productId]= Math.max((state[productId] || 0) - 1, 1);
//             localStorage.setItem('counter', JSON.stringify(state));
//             console.log("This is c froms storage",counterFromStorage)

//         },
//         resetCounter: (state, action) => {
//       const { productId } = action.payload;
//       state[productId] = 1;
//       console.log("state", state)
//       localStorage.setItem("counter", JSON.stringify(state));
//     },
//     },
// });

// export const { setCounter,increment, decrement,resetCounter } = Countslice.actions;
// export default Countslice.reducer;