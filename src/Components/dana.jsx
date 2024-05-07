import React, { useEffect, useState } from 'react'
import { DanaBg, Papua } from '../Assets'
import API from '../Services/service'
import '../article.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Dana = () => {

  const [donation, setDonation] = useState(null)

  useEffect(() => {
    (async () => {
      AOS.init()
      const response = await API.getDonation()
      setDonation(response?.data?.data?.[0])
      console.log('donation detail:', response?.data)
    })()
  }, [])

  return (
    <div className='relative'>
      <img src={Papua} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]' alt='Sumatera' />
      <div data-aos="fade-right" className='ml-4 lg:ml-14 rounded-full mt-10 text-white mb-4 lg:text-[16px] text-[13px] bg-blue-400 w-max py-3 px-6'>BantuNusantaraBangkit</div>
      <h2 data-aos="fade-right" className='ml-14 font-bold hidden lg:flex items-center text-[36px]'>🎗️ <span className='relative top-1 ml-3'>Membantu Alam Nusantara</span></h2>
      <div className='relative w-screen h-max bg-blue-700 mt-10 mb-4 lg:my-14 overflow-hidden'>
          <img src={DanaBg} alt="bg-dana" className='absolute left-0 lg:flex hidden top-0 w-full h-auto opacity-[0.1]' />
          <div className='w-full lg:flex h-full items-center py-2 lg:py-0'>
            <div className='relative flex flex-col justify-center px-4 lg:px-14 py-6 lg:py-20 lg:w-1/2 h-full z-[444]'>
              <a href='/' target='__blank' className='text-white'>
                <h2 className='text-white border-b cursor-pointer border-b-white pb-6 text-[20px] lg:text-[36px] mb-6'>{donation?.name_donation}</h2>
              </a>
              <div className='w-full mb-3'>
                <div className='custom-content2 leading-loose text-white' dangerouslySetInnerHTML={{ __html: donation?.content }}></div>
              </div>
            </div>
            <div className='relative w-full lg:w-1/2 flex lg:pb-0 pb-10 items-center lg:pl-0 pl-4 lg:justify-center z-[33] h-full'>
              <img data-aos="zoom-in" src={donation?.thumbnail} alt="qrcode-image" className='w-[60%] lg:w-[70%] lg:w-[65%] rounded-[12px]' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dana
