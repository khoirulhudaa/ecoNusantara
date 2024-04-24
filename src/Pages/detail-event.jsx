import React, { useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../Components/footer'
import '../article.css'

const DetailEvent = () => {

  const detail = useSelector((state) => state.Information.event)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-screen h-max'>

      <div className='w-screen h-max'>
        <div className='absolute text-white z-[22223] w-full flex items-center justify-between py-7 px-4 lg:px-12'>
          <a href={'/'}>
            <h2 className='text-[22px] lg:top-0 relative top-1 lg:text-[24px] font-bold'>ecoNusantara 🗺️</h2>
          </a>
          <div className='w-max hidden lg:flex items-center'>
            <ul className='flex items-center text-white'>
               <Link to={'/'}>
                <li className='ml-16 cursor-pointer hover:brightness-[90%]'>Beranda</li>
               </Link>
               <a href="#informasi">
                <li className='ml-16 cursor-pointer hover:brightness-[90%]'>Informasi</li>
               </a>
            </ul>
          </div>
        </div>
        <div className='relative w-full h-[40vh] lg:h-[60vh] overflow-hidden bg-blue-600 flex items-center justify-center'>
          <h1 className='relative lg:top-0 top-3 text-[22px] lg:text-[40px] text-white font-[500] text-center w-[94%] z-[55555] text-center mx-auto flex items-center justify-center'>{detail?.name_event}</h1>
          <div className='w-screen h-full bg-black bg-opacity-[0.7] absolute top-0 left-0 z-[3333]'></div>
          <img src={detail?.thumbnail} alt="thumbnail" className='w-full h-full lg:h-auto object-cover absolute left-0 top-0' />
        </div>

        <div id='informasi' className='w-full px-4 lg:px-12 py-12 pb-0'>
          <div className='relative w-full flex text-[20px] items-center'>
            <Link to={'/'}>
              <small className='text-blue-700 cursor-pointer underlined'>Beranda</small>
            </Link>
            <FaChevronRight className='mx-4 text-[12px] text-slate-500' />
            <small className='w-[80%] overflow-hidden overflow-ellipsis whitespace-nowrap'>{detail?.name_event}</small>
          </div>

          <div className='leading-loose text-slate-600 mt-12 w-full'>
            <div className='custom-content' dangerouslySetInnerHTML={{ __html: detail?.content }} />
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default DetailEvent
