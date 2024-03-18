"use client"

import {React, useState,useEffect } from 'react'

import Header from '../components/Header'
import Da from '../components/extra/Da'
import { MdKeyboardArrowDown } from "react-icons/md";
import classD from '../components/extra/DataSet/classD';
import Dd from '../components/footer/cc';
import Skool from '../components/extra/Skool';
import ProductCard from '../components/body/ProductCard';
import schoolD from '../components/extra/DataSet/schoolD';
import pustak from '../components/extra/DataSet/pustak';
import workbooks from '../components/extra/DataSet/workbooks';
import Subjects from '../components/extra/subjects';

const page =() =>{
    const [toggle, setToggle]= useState(true);
    const [sim, setSim]= useState(true);
    const [open,setOpen]= useState(true);
    const [data,setData]= useState([]);
    const [selectedboxes,setSelectedboxes]= useState([]);

    const handleboxes=(event,schoolId) =>{
      const ischecked= event.target.checked;
      console.log(ischecked)
      const updatedSelectedboxes= ischecked? [...selectedboxes,schoolId]: selectedboxes.filter((id) => id !==schoolId);
      setSelectedboxes(updatedSelectedboxes);
      console.log(updatedSelectedboxes)
  };

    useEffect(()=>{
      const fetchData= async() =>{
        try{
          const response= await fetch('http://localhost:8080/api/product/');
          console.log('Response aagya mitro',response);
          const result= await response.json();
          setData(result.data);
          const bookProducts= result.data.filter(products=> products.subcategory.name === 'Textbooks')
          setData(bookProducts)
          console.log(result.data);
        } catch(error){
          console.error('Lafda ho gya',error);
        }
      }
      fetchData();
    },[]);

    const filteredGR= data.filter((prod)=>{
      const GR= prod.name;
      if(selectedboxes.length==workbooks[0].items.length){
        return data;
      }else if(selectedboxes.length>0){
        return selectedboxes.some((selectedGR)=> GR.includes(selectedGR))
      }else{
        return data;
      }
    })
  
    const dropDown=() =>{
      setToggle(!toggle);
    };
  
    const khulja=() =>{
      setSim(!sim);
    }

    const openn=() =>{
        setOpen(!open);
    }

  return (
    <div className='flex flex-col bg-white'>
        <div><Header /></div>
        <div className='flex'>
            <div className='bg-gray-100 flex flex-col w-1/4 '>
              <div className='border-b border-gray-400 px-10 py-4'>
                <h2 className='text-lg font-bold text-black mt-[190px]'>Filter</h2>
              </div>
              <div onClick={khulja} className='p-4 flex flex-col  px-10'>
              {workbooks.map((data) => (
                <div key={data.id} className='flex justify-between'>
                <p className='text-md text-black font-bold'>{data.name}</p>
                <div ><MdKeyboardArrowDown /></div> 
                </div>
              ))}

              </div>
                {sim && (<Subjects handleboxes={handleboxes} selectedboxes={selectedboxes} />)}
              <div onClick={dropDown} className='p-4 flex flex-col  px-10'>
              {classD.map((data) => (
                <div key={data.id} className='flex justify-between'>
                <p className='text-md text-black font-bold'>{data.name}</p>
                <div ><MdKeyboardArrowDown /></div> 
                </div>
              ))}

              </div>
              { toggle && ( <Da /> )}

              <div onClick={openn} className='p-4 flex flex-col  px-10'>
                {schoolD.map((data) => (
                    <div key={data.name} className='flex justify-between'>
                        <p className='text-md text-gray-600 font-bold'>{data.name}</p>
                        <div ><MdKeyboardArrowDown /></div> 
                    </div>
                ))}
              </div>
              {open && (<Skool />)}

            </div>
       
    
        <div className='text-gray-500 mt-[180px] md:mt-[210px] mx-10'>
            <h2 className='font-bold text-2xl mb-5'>General Reading</h2>
        
            <div className='flex flex-wrap mx-5 my-5'>
            {filteredGR.map((prod) => (
                <ProductCard key={prod._id}{...prod} />
            ))}

            </div>
        </div>
        </div>

        < Dd />

    </div>
  )
}
export default page
