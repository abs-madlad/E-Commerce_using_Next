import React from 'react'
import { useState } from 'react'
import sizes from './DataSet/sizes'

const Sizelist = () => {
    const [selectedboxes, setSelectedboxes] = useState([]);
    const [showItems, setShowItems] = useState(false);


    const handlebox=(e,GenId) => {
        const ischecked= e.target.checked;
        const updatedSelectedBoxes= ischecked? [...selectedboxes,GenId]: selectedboxes.filter((id)=> id !== GenId);
        setSelectedboxes(updatedSelectedBoxes);
    };

    const showMoreClick= () => {
        setShowItems(true);
      };
  
      const showLessClick= () => {
        setShowItems(false);
      };


  return (
    <div>
        <div className='flex justify-center'>
            <input placeholder='Search Here' className='px-10 py-2 rounded-lg text-black w-[180px]' />
        </div>
        <div className='mx-5'>
          <ul>
            <ul>
              {sizes.map((category) => (
                <div key={category.id}>
                  <h2 className='font-bold my-2 text-black'>{category.name}</h2>
                  <ul>
                      {category.items.slice(0, showItems ? undefined: 6).map((item) => (
                        <li key={item.ID} className='p-2 text-black'>
                          <input className='m-1' type='checkbox' id={item.ID} name={category.name} checked={selectedboxes.includes(item.ID)}
                          onChange={(event) => handlebox(event,item.ID)}
                          />
                          <label htmlFor={item.ID}>{item.item}</label>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
              {showItems && (
                <button className='mt-5 text-green-600' onClick={showLessClick}>Show Less</button>
              )}
              {!showItems && (
                <button className='mt-5 text-green-600' onClick={showMoreClick}>Show More</button>
              )}
            </ul>
          </ul>
        </div>
    </div>
  )
}

export default Sizelist