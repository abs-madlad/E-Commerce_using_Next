import React, { useState } from 'react';
import classD from './DataSet/classD'

const Da = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [showAllItems, setShowAllItems] = useState(false);

  const handleCheckboxChange = (event, classId) => {
    const isChecked = event.target.checked;
    console.log(isChecked)
    const updatedSelectedClasses = isChecked? [...selectedClasses, classId] : selectedClasses.filter((id) => id !== classId);
    console.log(updatedSelectedClasses)
    setSelectedClasses(updatedSelectedClasses);
  };


  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };

  const handleShowLessClick = () => {
    setShowAllItems(false);
  };

  return (
    <div>
        <div className='flex justify-center'>
            <input placeholder='Search Here' className='px-10 py-2 rounded-lg text-black w-[200px]' />
        </div>
        <div className='mx-5'>
            <ul>
            <ul>
          {classD.map((category) => (
            <div key={category.id}>
              <h2 className='font-bold my-2 text-black'>{category.name}</h2>
              <ul>
                {/* {category.items.map((item) => ( */}
                {category.items.slice(0, showAllItems ? undefined : 6).map((item) => (
                  <li className='p-2 text-black' key={item.ID}>
                    <input className='m-1'
                      type='checkbox'
                      id={item.ID}
                      name={category.name}
                      checked={selectedClasses.includes(item.ID)}
                      onChange={(event) => handleCheckboxChange(event, item.ID)}
                    />
                    <label htmlFor={item.ID}>{item.item}</label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {showAllItems && (
            <button className='mt-5 text-green-600' onClick={handleShowLessClick}>
              Show Less
            </button>
          )}
          {!showAllItems && (
            <button className='mt-5 text-green-600' onClick={handleShowMoreClick}>
              Show More
            </button>
          )}

        </ul>
        </ul>
        </div>


    </div>
  )
}

export default Da