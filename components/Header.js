  "use client"
  import React from 'react'
  import  Blue  from './header/Blue'
  import  Yellow  from './header/Yellow'
import AltBlue from './header/AltBlue'
 

  import { useState, useEffect } from 'react';

  const Header = () => {

    const [size, setSize] = useState(typeof window !== 'undefined' ? window.innerWidth > 640 : false);

    useEffect(() => {
      const handleResize = () => {
        setSize(window.innerWidth > 640);
      };
      window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
    return (

    <div className=' w-full fixed z-40'>

      <div>
      {size ? (
        <Blue/>
      ) : (
        // Render ComponentB if size is false
        <AltBlue />
      )}
      </div>
      <Yellow />
      
    </div>
    )
  }

  export default Header