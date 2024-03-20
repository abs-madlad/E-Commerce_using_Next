"use client"

import {React,useEffect, useState } from 'react'

import Header from '../components/Header'
// import Da from '../components/extra/Da'
import { MdKeyboardArrowDown } from "react-icons/md";
import classD from '../components/extra/DataSet/classD';
import Dd from '../components/footer/cc';
import Skool from '../components/extra/Skool';
import ProductCard from '../components/body/ProductCard';
import productData from '../components/body/productData';
import Genx from '../components/extra/Genx';
import Gen from '../components/extra/DataSet/Gen';
import Sizelist from '../components/extra/Sizelist';
import sizes from '../components/extra/DataSet/sizes';


const page = () => {

    const [toggle, setToggle]= useState(true);
    const [sim, setSim]= useState(true);
    const [open,setOpen]= useState(true);
    const [data, setData]= useState([]);
    const [selectedboxes, setSelectedboxes] = useState([]);

    const handlebox=(e,GenId) => {
         const ischecked= e.target.checked;
         const updatedSelectedBoxes= ischecked? [...selectedboxes,GenId]: selectedboxes.filter((item)=> item !== GenId);
         setSelectedboxes(updatedSelectedBoxes);
         console.log(updatedSelectedBoxes)   
     }

  //   const [genderFilter, setGenderFilter] = useState('');  // gender filter for filtering products by gender.

  //   const filterByGender = (gender) => {
  //   setGenderFilter(gender);
  // };
  
  // const filteredProducts = data.filter((prod) => {
  //   const productName = prod.name.toLowerCase();

  //   // Assuming your product names contain gender-related keywords
  //   return genderFilter === '' || productName.includes(genderFilter.toLowerCase());
  // });

      useEffect(() => {
        // fetchData();
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/product');
            const result = await response.json();
            const winterUniformProducts = result.data.filter(
              (product) => product.subcategory.name === 'Winter Uniforms'
            );
      
            setData(winterUniformProducts);
          } catch (error) {
            console.error('Mission Failed Successfully', error);
          }
        };
        fetchData();
      }, []);

      const filteredProducts = data.filter((prod) => {
        const productName = prod.name;

        if(selectedboxes.length == 3){
          return data;
        }
        if(selectedboxes.length===Gen[0].items.length){
          return data;
        }
        if (selectedboxes.length > 0) {
          return selectedboxes.some((selectedGender) => productName.includes(selectedGender));
        } else {
          return true;
        }
      });

      // const filter = (e) => {

      // }

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
    <div className='bg-gray-100 hidden md:flex flex-col w-1/4 '>
      <div className='border-b border-gray-400 px-8 py-4'>
        <h2 className='text-lg font-bold text-black mt-[180px]'>Filter</h2>
      </div>
      <div onClick={dropDown} className='p-4 flex flex-col  px-10'>
      {Gen.map((data) => (
        <div key={data.id} className={'flex justify-between'}
       >
        <p className='text-md text-black font-bold'>{data.name}</p>
        <div ><MdKeyboardArrowDown /></div> 
        </div>
      ))}
         
      </div>
      { toggle && ( <Genx handlebox={handlebox} selectedboxes={selectedboxes} /> )}

      <div onClick={openn} className='p-4 flex flex-col  px-10'>
        {sizes.map((data) => (
            <div key={data.name} className='flex justify-between'>
                <p className='text-md text-gray-600 font-bold'>{data.name}</p>
                <div ><MdKeyboardArrowDown /></div> 
            </div>
        ))}
      </div>
      {open && (<Sizelist />)}

        <div onClick={khulja} className='p-4 flex flex-col  px-10'>
      {classD.map((data) => (
        <div key={data.name} className='flex justify-between'>
        <p className='text-md text-gray-600 font-bold'>School</p>
        <div ><MdKeyboardArrowDown /></div> 
        </div>
      ))}
         
      </div>
      {sim && ( <Skool />)}
    
    
    </div>
    

    <div className='text-gray-500 mt-[180px] md:mt-[210px] mx-2 md:mx-10'>
        <h2 className='font-bold text-2xl mb-5'>Winter Uniforms</h2>
        <div className='flex flex-wrap md:mx-5 my-5'>
        {filteredProducts.map((prod) => (
          <ProductCard key={prod._id} {...prod} />
        ))}
        
        </div>
        
    </div>
    </div>

    < Dd />
    </div>
    
  )
}

export default page