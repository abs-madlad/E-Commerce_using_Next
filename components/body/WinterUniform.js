import React from "react";
import ProductCard from "./ProductCard";
import productData from "./productData";

const WuShang= ()=>{
    return( //px-20
    // Display only 4 product cards at a time , if you add more than 4 they start to shrink.
    //flex justify-center px-5 mx-20 my-10 overflow-x-scroll no-scrollbar
        
                <div className="">
                {productData.map((product)=> (
                <ProductCard key={product.id} {...product}/>
                 ))}
                </div>
        
    )
   
    }

export default WuShang