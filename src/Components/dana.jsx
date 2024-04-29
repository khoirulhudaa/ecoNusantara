import React from 'react'
import { DanaBg, Papua, Qrcode } from '../Assets'

const Dana = () => {
  return (
    <div className='relative'>
      <img src={Papua} className='absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]' alt='Sumatera' />
      <div className='ml-4 lg:ml-14 rounded-full mt-10 text-white mb-4 lg:text-[16px] text-[13px] bg-blue-400 w-max py-3 px-6'>BantuNusantaraBangkit</div>
      <h2 className='ml-14 font-bold hidden lg:flex items-center text-[36px]'>🏔️ <span className='relative top-1 ml-3'>Membantu Alam Nusantara</span></h2>
      <div className='relative w-screen h-max bg-blue-700 mt-10 mb-4 lg:my-14 overflow-hidden'>
          <img src={DanaBg} alt="bg-dana" className='absolute left-0 top-0 w-full h-auto opacity-[0.1]' />
          <div className='w-full lg:flex h-full items-center py-2 lg:py-0'>
            <div className='relative flex flex-col justify-center px-4 lg:px-14 py-6 lg:py-20 lg:w-1/2 h-full z-[444]'>
              <h2 className='text-white border-b border-b-white pb-6 text-[22px] lg:text-[36px] mb-6'>#PeduliAlamNusantara</h2>
              <div className='w-full mb-3'>
                <h3 className='font-[600] mb-2 text-white'>🌳 Hutan Mangrove Rusak</h3>
                <p className='leading-loose text-[14px] text-slate-300 mb-10'>Hutan mangrove mengalami kerusakan serius karena aktivitas manusia dan perubahan iklim. Perlindungan terhadap mangrove penting untuk melindungi pantai dari abrasi dan menjaga keanekaragaman hayati.</p>
                <h3 className='font-[600] mb-2 text-white'>🌋 Korban letusan gunung</h3>
                <p className='leading-loose text-[14px] text-slate-300 mb-10'>Letusan gunung baru-baru ini menyebabkan kerusakan luas dan korban jiwa. Kesiapsiagaan dan mitigasi bencana menjadi kunci dalam menghadapi ancaman alam.</p>
                <h3 className='font-[600] mb-2 text-white'>🏞️ Pelestarioan Cagar Alam</h3>
                <p className='leading-loose text-[14px] text-slate-300 mb-10'>Pelestarian cagar alam mendesak untuk melindungi keanekaragaman hayati dan memperkuat ketahanan lingkungan. Mari bersatu dalam menjaga kelestarian alam untuk masa depan yang lebih baik.</p>
              </div>
            </div>
            <div className='relative w-full lg:w-1/2 flex lg:pb-0 pb-10 items-center justify-center z-[33] h-full'>
              <img src={Qrcode} alt="qrcode" className='w-[90%] lg:w-[65%] rounded-[12px]' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dana
