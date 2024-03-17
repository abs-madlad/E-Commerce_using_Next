"use client"

import React, { useState } from 'react'
import WuShang from './WinterUniform'
import pen from './pen'
import ProductCard from './ProductCard'
import { useEffect } from 'react'

const Reuse = () => {
    const[data, setData]= useState([]);
    const[category, setCategory] = useState([]);
    const[book, setBooks] = useState([]);

    const getCategory = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/category/');
            const data = await response.json();

            setCategory(data.data);
        } catch (error) {
            console.error('Error while fetching the data', error);
        }
    }

    useEffect( () => {
        getCategory();
    }, [])

    

    const fetchData = async () => {
        try{
            const response= await fetch('http://localhost:8080/api/product/');
            const result= await response.json();
            setData(result.data);

            const books = result.data.filter(product => {
             return product.category.categoryname === 'Books';
             });

            // Log the filtered books
            console.log(books);
        } catch(error){
            console.log('Lafda ho gya body me', response);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);


  return (

    
    <div>
    {category.map((prod) => (
    <div key={prod._id} >
      
        <div className='flex justify-center mt-10'>
            <div className='flex justify-between items-center w-[1050px] mx-2'>
                <div className=''>
                    <p className='font-bold '>{prod.categoryname}</p>
                </div>
                <div className='hover:bg-sky-400 scale-10'>
                    <p className='font-bold'>View All</p>
                </div>        
            </div>

        </div>
    
        <div>
        <div className="flex justify-center">
            <div className=" overflow-x-auto no-scrollbar mx-12 my-10">
                <div className="flex text-black w-[1050px] ">
                {data.map((item)=> 
                    <div key={item._id} className="mx-2 flex-wrap sm:w-1/4 md:w-1/3 lg:w-1/4">
                  <ProductCard product={item} {...item} />
                </div>    
                /* <ProductCard key={item._id} {...item}/> */
                )}
                </div>
           </div>
        </div>
        </div>

    </div>
    ) )}
    </div>
  )
}

export default Reuse