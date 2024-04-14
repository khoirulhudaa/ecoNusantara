import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [activeSidebar, setActiveSidebar] = useState(false)

  return (
    <div className='relative w-screen h-[80px] bg-blue-700 text-white px-4 md:px-12 flex items-center'>
        
        {/* Sidebar */}
        <div className={`w-full h-screen z-[2222222222] fixed ${activeSidebar ? 'left-0' : 'left-[-100%]'} duration-200 top-0 bg-white p-6`}>
          <div onClick={() => setActiveSidebar(!activeSidebar)} className='relative top-1 ml-auto right-3 cursor-pointer active:scale-[0.98] flex items-center justify-center w-[50px] h-[50px] p-2 bg-red-500 text-white rounded-[10px]'>
            <FaTimes />
          </div>
          <ul className='w-max text-[17px] mt-4'>
              <a href="#home">
                <li className='text-black mb-7 border-b border-b-slate-300 pb-6'>Beranda</li>
              </a>
              <a href="#tour">
                <li className='text-black mb-7 border-b border-b-slate-300 pb-6'>Wisata Alam</li>
              </a>
              <a href="#spice">
                <li className='text-black mb-7 border-b border-b-slate-300 pb-6'>Rempah-rempah</li>
              </a>
              <a href="#culinary">
                <li className='text-black mb-7 border-b border-b-slate-300 pb-6'>Kuliner</li>
              </a>
              <a href="#article">
                <li className='text-black mb-12'>Artikel Nusantara 2024</li>
              </a>
          </ul>
        </div>
        {/* End Sidebar */}
        
        <div className='w-max md:w-[20%] text-blue-600 rounded-lg flex items-center h-full'>
            <h2 className='font-[500] text-[24px] md:text-[22px] text-white'>EcoNusantara 🗺️</h2>
        </div>

        {/* toggle */}
        <div onClick={() => setActiveSidebar(!activeSidebar)} className='ml-auto w-[42px] h-[42px] flex md:hidden flex-col items-center bg-white justify-center rounded-[6px] p-2'>
          <div className='my-1 w-full h-[2px] rounded-full bg-slate-400'></div>
          <div className='my-1 w-full h-[2px] rounded-full bg-slate-400'></div>
          <div className='my-1 w-full h-[2px] rounded-full bg-slate-400'></div>
        </div>
        {/* toggle */}
        
        <div className='w-[80%] hidden md:flex items-center justify-end'>
            <ul className='w-max text-[17px] flex items-center'>
                <a href="#home">
                  <li className='ml-12'>Beranda</li>
                </a>
                <a href="#tour">
                  <li className='ml-12'>Wisata Alam</li>
                </a>
                <a href="#spice">
                  <li className='ml-12'>Rempah-rempah</li>
                </a>
                <a href="#culinary">
                  <li className='ml-12'>Kuliner</li>
                </a>
                <a href="#article">
                  <li className='ml-12'>Artikel Nusantara 2024</li>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
