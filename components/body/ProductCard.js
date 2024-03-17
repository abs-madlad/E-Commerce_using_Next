"use client"
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/Redux/atcSlice';
// import { useDispatch } from 'react-redux';
// import { add } from '@/app/Redux/Cartslice';

const ProductCard= ({p,image,name,rating,price,product}) =>{
  const dispatch = useDispatch();
  // console.log(image)
  // const dispatch = useDispatch();
  // const handleadd= (product)=>{
  //   dispatch(add(product))
  const handleadd =()=>{
        dispatch(addToCart(product));
        console.log('this is present',product);
     }
  // }
    return(
        <div className='bg-white product-card hover:bg-sky-300 flex-col m-1 p-2  border-gray-300 border-2 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[470px]  w-[260px]' >
          <div className='flex justify-center pb-10'>
          <img src={`http://localhost:8080/api/product/${image}`}  className='product-image w-[220px]' ></img>
          </div>
          <h3 className='product-description mt-5'>{name}</h3>
          <div className='product-rating my-2 text-xl'>{renderStarRating(rating)}</div>
          <p className='product-price text-xl'>${price}</p>
          <div className='btn'>
            <button className='flex my-1 items-center' onClick={()=>handleadd()}><FaCartShopping/> <p className='mx-1'>Add to Cart</p></button>
          </div>
        </div>
    )
}

const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  };

  
export default ProductCard