import React from 'react';
import '../styles/Spinner.css'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100vw]'>
      <span className="loader"></span>
    </div>
  )
}

export default Spinner;