import React from 'react'
import { Papua } from '../Assets'

const Footer = () => {
  return (
    <footer className='relative overflow-hidden w-screen px-4 md:px-16 py-6 md:py-20 md:flex items-center justify-between mt-10 bg-blue-800 text-white md:rounded-tl-[140px]'>
        <img src={Papua} alt="Papua" className='absolute right-0 scale-[1.4] bottom-0 opacity-[0.6]' />
        <div className='w-full md:w-[30%] h-full z-[33]'>
            <h2 className='font-bold text-[28px] my-6'>ecoNusantara 🗺️</h2>
            <p className='font-normal text-slate-200 leading-loose text-[14px]'>Website informasi Nusantara seputar wisata, rempah dan kulinar nya yang beraneka ragam.</p>
        </div>
        <div className='w-full md:w-[70%] h-full justify-end fmd:lex items-center'>
          <div className='w-full md:mt-0 mt-8 md:pt-0 pt-8 md:border-0 border-t-white border-t md:w-full md:-full z-[33]'>
            <ul>
              <a href="#home">
                <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Beranda</li>
              </a>
              <a href="#tour">
                <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Wisata Nusantara</li>
              </a>
              <a href="#spice">
                <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Aneka Rempah</li>
              </a>
              <a href="#culinary">
                <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%]'>Kuliner Nusantara</li>
              </a>
            </ul>
          </div>
          <div className='w-full md:w-[40%] md:mt-0 mt-8 md:mb-0 mb-8 h-full z-[33]'>
            <ul>
              <a href="#article">
                <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Artikel Nusantara</li>
              </a>
              <a href="#start">
                <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Jenis Kekayaan Alam</li>
              </a>
              <a href="#contact">
                <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] mb-8'>Kontak Pemandu Wisata</li>
              </a>
              <a href="#map">
                <li className='cursor-pointer active:scale-[0.98] hover:brightness-[90%]'>Peta Digital</li>
              </a>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer
