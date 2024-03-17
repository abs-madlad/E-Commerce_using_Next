import React, { useEffect } from 'react'
import { useState } from 'react'
import Gen from './DataSet/Gen'

const Genx = ({handlebox, selectedboxes}) => {


    
    // const fetchData = async () => {
    //   const res = await fetch("http://localhost:8080/api/product/");
    //   const result = await res.json();
    //   console.log(result.data);
    // }

  return (
    <div>
        <div className='flex justify-center '>
            <input placeholder='Search Here' className='px-10 py-2 rounded-lg text-black w-[180px]' />
        </div>
        <div className='mx-5'>
        <ul>
        {Gen.map((category) => (
                <div key={category.id}>
                  <h2 className='font-bold my-2 text-black'>{category.name}</h2>
                  <ul>
                      {category.items.map((item) => (
                        <li key={item.ID} className='p-2 text-black'>
                          <input className='m-1' type='checkbox' id={item.ID} value={item.item} name={category.name} checked={selectedboxes.includes(item.ID)}
                          onChange={(event) => handlebox(event,item.ID)}
                          />
                          <label>{item.item}</label>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
        </ul>
        </div>

    </div>
  )
}

export default Genx