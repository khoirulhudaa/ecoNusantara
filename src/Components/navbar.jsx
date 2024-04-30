import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [activeSidebar, setActiveSidebar] = useState(false)

  return (
    <div className='relative w-screen h-[80px] bg-blue-900 lg:bg-blue-700 text-white px-4 lg:px-12 flex items-center border-0'>
        
        {/* Sidebar */}
        <div className={`w-[80vw] h-screen z-[2222222222] fixed ${activeSidebar ? 'left-0' : 'left-[-100%]'} duration-200 top-0 bg-white p-6`}>
          <ul className='w-full text-[17px] mt-10'>
              <a href="#home">
                <li className='text-black border-t border-t-slate-300 py-8'>Beranda</li>
              </a>
              <a href="#tour">
                <li className='text-black border-t border-t-slate-300 py-8'>Wisata Alam</li>
              </a>
              <a href="#spice">
                <li className='text-black border-t border-t-slate-300 py-8'>Rempah-rempah</li>
              </a>
              <a href="#culinary">
                <li className='text-black border-t border-t-slate-300 py-8'>Kuliner</li>
              </a>
              <a href="#article">
                <li className='text-black mb-12 border-y border-y-slate-300 py-8'>Artikel Nusantara 2024</li>
              </a>
          </ul>
        </div>
        {/* End Sidebar */}
        
        <div className='w-max lg:w-[20%] text-blue-600 rounded-lg flex items-center h-full'>
            <h2 className='font-[500] text-[20px] lg:text-[24px] text-white'>EcoNusantara 🗺️</h2>
        </div>

        {/* toggle */}
        {
          activeSidebar ? (
            <div onClick={() => setActiveSidebar(!activeSidebar)} className={`ml-auto relative ${activeSidebar ? 'right-[0px]' : 'right-[-70px]'} duration-200 w-[42px] h-[42px] flex lg:hidden flex-col items-center justify-center text-white bg-red-500 rounded-[6px] text-[20px]`}>
              <FaTimes />
            </div>
          ):
            <div onClick={() => setActiveSidebar(!activeSidebar)} className={`ml-auto relative ${activeSidebar ? 'right-[-70px]' : 'right-[0px]'} w-[42px] h-[42px] flex lg:hidden flex-col items-center bg-white justify-center rounded-[6px] p-2`}>
              <div className='my-1 w-full h-[2px] rounded-full bg-slate-400'></div>
              <div className='my-1 w-full h-[2px] rounded-full bg-slate-400'></div>
              <div className='my-1 w-full h-[2px] rounded-full bg-slate-400'></div>
            </div>
        }
        {/* toggle */}
        
        <div className='w-[80%] hidden lg:flex items-center justify-end'>
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
