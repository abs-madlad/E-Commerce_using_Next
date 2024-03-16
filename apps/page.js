"use client"
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
// import {add} from "@/app/Redux/Cartslice";
import {addToCart} from "@/app/Redux/atcSlice"


const Homepage= ()=>{
    const [products ,setproducts]=useState([])
    const dispatch = useDispatch();

    const getproducts =async()=>{
        const res =await fetch("http://localhost:8080/api/product/");
        const data =await res.json();
        console.log(data.data)
        setproducts(data.data);
      }

      const handleadd =(product)=>{
        dispatch(addToCart(product));
        console.log('this is present',product);
     }


     useEffect(()=>{
        getproducts();
       },[])
       return (
        <div className='productsWrapper'>
              {
                products.map((product)=>(
                  
                  <div key={product._id} className='card'>
                      <img src={`http://localhost:8080/api/product/${product.image}`} alt='img'/>
                      <h4>{product.name}</h4>
                      <h5>{product.price}</h5>
                      <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>
                  </div>
                ))
              }
        </div>
      )
}

export default Homepage;