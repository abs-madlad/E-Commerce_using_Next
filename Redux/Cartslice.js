// // "use client"
// // import { counter } from "@fortawesome/fontawesome-svg-core";
// // import { counter } from "@fortawesome/fontawesome-svg-core";
// // import {createSlice} from "@reduxjs/toolkit"

// // const cartFromStorage= JSON.parse(localStorage.getItem('cart')) || {items: [], counter: {}};

// // const setCartCounter= (cart)=>{
// //     localStorage.setItem('cart', JSON.stringify(cart));

// // };

// // const getInitialCart = () => {
// //       const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
// //       return cartFromStorage;
// //   };

// //   const clearLocalStorage= () => {
// //   localStorage.removeItem( 'cart' );
// // //   localStorage.r.removeItem('counter');  
// //   };

// //   const updateStorage = (cart) => {
    
// //       localStorage.setItem('cart', JSON.stringify(cart));
    
// //   };

// // const cartFromStorage= JSON.parse(localStorage.getItem("cart")) || [];

// // const initialState={
// //     cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): [],
// //     counter: 0
// // }
// const cartSlice= createSlice({
//     name:"cart",
//      initialState: getInitialCart(),
//     //2 initialState: cartFromStorage,
//     // initialState,
//     reducers:{
//         add(state,action){
//             // console.log("state121", state.cartItems)
//              state.cartItems.push(action.payload);
            
//             //2 setCartCounter(state);
//             // const existingIndex = state.cartItems.findIndex(
//             //     (item) => item.id === action.payload.id
//             //   );
//             //   console.log("existing", existingIndex)
//             //   if(existingIndex>=0){
//             //     state.cartItems[existingIndex]= {...state.cartItems[existingIndex],
//             //     counter: state.cartItems[existingIndex].counter + 1,
//             //     };
//             //   }else {
//             //     console.log("action", action.payload)
//             //     console.log("counter", state.counter)
//             //     let tempProdItem= {...action.payload};
//             //     console.log( Array.isArray(tempProdItem),'array hai ya nhi')
//             //     console.log("cart push se pehle", state.cartItems)
//             //     const nextCartItems = [...state.cartItems, tempProdItem];
//             //     state.cartItems = nextCartItems;
//             //     state.counter = 1;
//             //     console.log(state.cartItems,"after push")

//             //   }
//             //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems, state.counter));
//             //   console.log("localstorage", JSON.stringify(state.cartItems, state.counter));
//             updateStorage(state);
              
//         },


//         remove(state,action){
//              const itemIdToRemove= action.payload;
//             const updatedCart= state.filter((item)=> item.id !== itemIdToRemove);
//             //1 updateStorage(updatedCart);
//             //2 state.items= updatedCart;
//             //2 setCartCounter(state);
//             //1 return updatedCart;
//             // state.cartItems.map((cartItem) => {
//             //     if(cartItem.id === action.payload){
//             //         const nextCartItems= state.cartItems.filter((item) => item.id !==cartItem.id);
//             //         state.cartItems= nextCartItems;
//             //     }
//             //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//             //     return state;
//             // })
//             updateStorage(updatedCart);
//             return updatedCart;
//         },

//         clear(state){
//           clearLocalStorage();
//           return[];
//         // state.cartItems=[];
//         // localStorage.getItem('cartItems', JSON.stringify(state.cartItems));
//         },
//         removeItem(state,action){
//            const itemIdToRemove= action.payload;
//            const updatedCart = state.filter((item) => item._id !== itemIdToRemove);
//            console.log(updatedCart)
//            updateStorage(updatedCart);
//         //2 state.items= updatedCart;
//         //2 setCartCounter(state);
//           return updatedCart;
//         // state.cartItems.map((cartItem)=> {
//         //     if(cartItem.id===action.payload.id){
//         //         const nextCartItems= state.cartItems.filter(
//         //             (item)=> item.id !== cartItem.id
//         //         );
//         //         state.cartItems= nextCartItems;
//         //     }
//         //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//         //     return state;
//         // })
//         },
//         // setCounter(state,action){
//         //     const {productId,value}= action.payload;
//         //     state.counter[productId]=value;
//         //     localStorage.setItem('counter',JSON.stringify(state.counter));
//         // },
//         // increment(state,action){
//         //     const{productId}= action.payload;
//         //     state.counter[productId]=(state.counter[productId] || 0) +1;
//         //     localStorage.setItem('counter',JSON.stringify(state.counter));
//         // },
//         // decrement(state,action){
//         //     const itemIndex= state.cartItems.findIndex(
//         //         (item) => item.id === action.payload.id
//         //     );
//         //     if(state.cartItems[itemIndex].counter >1){
//         //         state.cartItems[itemIndex].counter -=1;
//         //     }else if(state.cartItems[itemIndex].counter===1){
//         //         const nextCartItems= state.cartItems.filter(
//         //             (item)=> item.id !== action.payload.id
//         //         );
//         //         state.cartItems= nextCartItems;

//         //     }
//         //     localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
//             //1 const [productId]= action.payload;
//             //1 state.counter[productId] = Math.max( (state.counter[productId]||0)-1, 1) ;
//             //1 localStorage.setItem("counter", JSON.stringify(state.counter));
//         // },
//         // resetCounter(state,action){
//         //     const [productId]= action.payload;
//         //     state.counter[productId]=1;
//         //     localStorage.setItem("counter", JSON.stringify(state.counter));
//         // }
//     },
// });

// // export const {remove} =cartSlice.actions;
// export const { remove,add,clear, removeItem} = cartSlice.actions;
// // export const { add } = cartSlice.actions;
// export default cartSlice.reducer;
 
// // const clearLocalStorage=()=> {
// //     localStorage.removeItem('items');
// //     localStorage.removeItem('counter');
// // };

// // const updateStorage= (cart,counter)=> {
// //     const dataToStorage= {
// //         items: items,
// //         counter: counter,

// //     };
// //     localStorage.setItem('cart', JSON.stringify(dataToStorage));
// // };