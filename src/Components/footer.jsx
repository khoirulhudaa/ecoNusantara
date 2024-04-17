import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { GrayFlower, Papua } from '../Assets'
import { useEmailFormik } from '../Validations/emailValidation'
import SweetAlert from './SweetAlert'

const Footer = () => {

  const [error, setError] = useState('')

  const handleErrorMessage = (error) => {
      setError(error)
  }

  const handleResponse = () => {
      SweetAlert({
          title: 'Berhasil mengikuti!',
          icon: 'success',
          showCancelButton: false
      })
      setError('')
  }

  const emailFormik = useEmailFormik({
      onError: handleErrorMessage,
      onResponse: handleResponse
  })

  return (
    <div className='relative'>
      <img src={GrayFlower} alt="flower" className='w-[400px] right-[10%] top-[-150px] rotate-[-10deg] absolute' />
      <div className='relative w-screen h-max md:h-[200px] mt-[240px] md:mt-[180px] md:py-0 py-12 px-4 md:px-20 bg-blue-800 md:flex border-b-[2px] border-b-slate-200 items-center justify-between text-white md:rounded-tl-[140px]'>
        <p className='relative w-full md:w-1/2 leading-loose'>Ikuti kami terus untuk mendapatkan berbagai berita terupdate dari ecoNusantara seputar negeri ini 🇮🇩.</p>
        <div className='relative w-full md:w-1/2 z-[222] flex items-center md:justify-end'>
          <div className='w-[98%] md:w-[70%] md:mt-0 mt-6 bg-white rounded-[12px] overflow-hidden flex justify-between items-center py-2 px-6'>
            <input type="text" placeholder='Masukan email anda...' name='email' value={emailFormik.values.email} onChange={emailFormik.handleChange} className='outline-0 border-slate-200 h-[44px] text-slate-500 w-[90%]' />
            <div className='ml-3 mr-4 h-[30px] w-[1px] bg-slate-400'></div>
            <FaPaperPlane onClick={() => emailFormik.handleSubmit()} className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] text-blue-900 text-[20px]' />
          </div>
        </div>
      </div>
      <footer className='relative overflow-hidden w-screen px-4 md:px-16 py-6 md:py-20 md:flex items-center justify-between bg-blue-800 text-white'>
          <img src={Papua} alt="Papua" className='absolute right-0 scale-[1.4] bottom-0 opacity-[0.6]' />
          <div className='w-full md:w-[30%] h-full z-[33]'>
              <h2 className='font-bold text-[28px] my-6'>ecoNusantara 🗺️</h2>
              <p className='font-normal text-slate-200 leading-loose text-[14px]'>Website informasi Nusantara seputar wisata, rempah dan kulinar nya yang beraneka ragam.</p>
          </div>
          <div className='w-full md:w-[70%] h-full justify-end md:flex items-center'>
            <div className='w-full md:mt-0 mt-8 md:pt-0 pt-8 md:border-0 border-t-white border-t md:w-[40%] w-full z-[33]'>
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
    </div>
  )
}

export default Footer
