import React from 'react';
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%] '>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button className='bg-gray-600 text-white px-5 py-2sm:px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xssm:text-sm' onClick={()=>setToken('')} >Logout</button>
    </div>
  )
}

export default Navbar