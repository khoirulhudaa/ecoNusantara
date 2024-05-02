import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { Papua } from '../Assets'
import SweetAlert from '../Components/SweetAlert'
import { useEmailFormik } from '../Validations/emailValidation'

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
      {
        error !== '' ? (
          <SweetAlert 
            title='Terjadi kendala!'
            icon='dengaer'
            showCancelButton={false}
          />
        ):
          null
      }
      <div className='relative w-screen h-max lg:h-[200px] mt-[80px] lg:mt-[100px] lg:py-0 py-12 px-4 lg:px-20 bg-blue-800 lg:flex border-b-[2px] border-b-slate-200 items-center justify-between text-white lg:rounded-tl-[140px]'>
        <p className='relative w-full lg:w-1/2 text-slate-200 lg:text-[16px] text-[14px] leading-loose'>Ikuti kami terus untuk mendapatkan berbagai berita terbaru dari ecoNusantara seputar negeri ini 🚀.</p>
        <div className='relative w-full lg:w-1/2 z-[222] flex items-center lg:justify-end'>
          <div className='w-[98%] lg:w-[70%] lg:mt-0 mt-6 bg-white rounded-[12px] overflow-hidden flex justify-between items-center py-2 px-6'>
            <input type="text" placeholder='Masukan email anda...' name='email' value={emailFormik.values.email} onChange={emailFormik.handleChange} className='outline-0 border-slate-200 h-[44px] text-slate-500 w-[90%]' />
            <div className='ml-3 mr-4 h-[30px] w-[1px] bg-slate-400'></div>
            <FaPaperPlane onClick={() => emailFormik.handleSubmit()} className='cursor-pointer active:scale-[0.98] hover:brightness-[90%] text-blue-900 text-[20px]' />
          </div>
        </div>
      </div>
      <footer className={`relative overflow-hidden w-screen px-4 lg:px-16 py-6 lg:py-20 lg:flex items-center justify-between bg-blue-800 text-white ${window.location.pathname === '/' ? 'pb-16 lg:pb-24' : 'pb-24'}`}>
          <img src={Papua} alt="Papua" className='absolute right-0 scale-[1.4] bottom-0 opacity-[0.6]' />
          <div className='relative top-0 lg:top-[-35px] w-full lg:w-[30%] h-full z-[33]'>
              <h2 className='font-bold text-[28px] my-6'>ecoNusantara 🗺️</h2>
              <p className='font-normal text-slate-200 leading-loose text-[14px] lg:text-[16px]'>Website informasi Nusantara seputar wisata, rempah dan kuliner nya yang beraneka ragam.</p>
          </div>
          {
            window.location.pathname === '/' ? (
              <div className='relative z-[444] w-full lg:w-[70%] h-full justify-end lg:flex items-center top-0 lg:top-[-16px]'>
                <div className='w-full lg:mt-0 mt-8 lg:pt-0 pt-8 lg:border-0 border-t-white border-t lg:w-[40%] w-full z-[33]'>
                  <ul className='lg:text-[15px] text-[14px]'>
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
                <div className='w-full lg:w-[40%] lg:mt-0 mt-8 lg:mb-0 mb-8 h-full z-[33]'>
                  <ul className='lg:text-[15px] text-[14px]'>
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
            ):
              null
          }
           <div className='absolute bottom-0 left-0 flex items-center bg-white w-screen text-blue-700 rounded-[6px] py-6 z-[99999] justify-center h-[40px]'>
              <small>ecoNusantara Team - 2024</small>
            </div>
      </footer>
    </div>
  )
}

export default Footer
