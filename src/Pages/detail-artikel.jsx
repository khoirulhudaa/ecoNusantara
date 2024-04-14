import React, { useEffect } from 'react'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Jawa, RajaEmpat } from '../Assets'
import Footer from '../Components/footer'
import Wisata from '../Data/wisata.json'
import Rempah from '../Data/rempah'
import Kuliner from '../Data/kuliner'
import { getInformation } from '../Store/informationSlice'

const DetailArtikel = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const detail = useSelector((state) => state.Information.detail)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleClick = (data) => {
    navigate(`/detail-card/${data?.nama}`)
    dispatch(getInformation(data))
  }

  return (
    <div className='w-screen h-max oveflow-x-hidden'>

      <div className='w-screen overflow-x-hidden h-max'>
        <div className='absolute text-white z-[22223] w-full flex items-center justify-between py-7 px-4 md:px-12'>
          <a href={'/'}>
            <h2 className='text-[24px] md:top-0 relative top-1 md:text-[30px] font-bold'>ecoNusantara 🗺️</h2>
          </a>
          <div className='w-max hidden md:flex items-center'>
            <ul className='flex items-center text-white'>
               <Link to={'/'}>
                <li className='ml-10 cursor-pointer hover:brightness-[90%]'>Beranda</li>
               </Link>
               <a href="#informasi">
                <li className='ml-10 cursor-pointer hover:brightness-[90%]'>Informasi</li>
               </a>
               <a href='#daftar'>
                <li className='ml-10 cursor-pointer hover:brightness-[90%]'>Daftar Wisata</li>
               </a>
            </ul>
          </div>
        </div>
        <div className='relative w-full h-[70vh] overflow-hidden'>
          <div className='w-full flex items-center justify-between'>
            <div class="absolute left-0 h-max z-[99999] bottom-32 md:bottom-10 px-12 py-3 rounded-tr-full rounded-br-full w-max text-slate-900 bg-white border border-gray-100">
              {detail?.nama}
            </div>
            <div class="absolute h-max z-[99999] right-4 md:right-12 bottom-10 px-12 py-3 rounded-full w-max bg-gray-400 text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
              EcoNusantara
            </div>
          </div>
          <div className='absolute left-0 top-0 z-[2222] w-screen h-full bg-black bg-opacity-[0.2]'></div>
          <img src={detail?.gambar === '/src/Assets/rajaampat.jpeg' ? RajaEmpat : detail?.gambar} alt="hero-img" className={`w-full h-auto relative ${detail?.gambar === '/src/Assets/citarasa.jpeg' ? 'md:bottom-[109%]' : 'bottom-[0px]'}`} />
        </div>

        <div id='informasi' className='w-full p-4 md:p-12'>
          <div className='w-max flex text-[20px] items-center'>
            <Link to={'/'}>
              <small className='text-blue-700 cursor-pointer underlined'>Beranda</small>
            </Link>
            <FaChevronRight className='mx-4 text-[12px] text-slate-500' />
            <small>{detail?.nama}</small>
          </div>

          <h2 className='md:my-12 my-6 text-[32px] md:text-[64px] text-slate-800 font-bold'>{detail?.nama}</h2>
          <div className='leading-loose text-slate-600 md:mt-6 w-full'>
            <p className='mb-6 w-[95%] md:text-[16px] text-[14px]'>ndonesia, dengan kekayaan alamnya yang luar biasa, merupakan surga bagi para pencinta wisata alam. Dari hutan hujan tropis yang tebal hingga gunung-gunung megah, pantai-pantai berpasir putih, dan lautan yang menakjubkan, Indonesia menawarkan berbagai destinasi wisata alam yang tak tertandingi.</p>
            <p className='mb-6 w-[95%] md:text-[16px] text-[14px]'>Pulau Bali menawarkan kombinasi indah antara keindahan pantai yang memukau seperti Pantai Kuta dan Pantai Nusa Dua, serta lereng gunung yang subur di daerah Ubud. Sementara itu, Pulau Jawa menampilkan keajaiban alam seperti Gunung Bromo dengan padang pasir dan kawahnya yang menakjubkan.</p>
            <p className='mb-6 w-[95%] md:text-[16px] text-[14px]'>Jangan lupakan pula Taman Nasional Komodo yang menjadi rumah bagi hewan langka komodo serta keindahan bawah lautnya yang memesona. Keindahan alam Indonesia juga tercermin dalam Taman Nasional Raja Ampat, dengan pulau-pulau kecil, karang-karang, dan kehidupan bawah laut yang tak tertandingi. Dari Sabang hingga Merauke, setiap sudut Indonesia adalah pesta visual alam yang akan menghipnotis siapa pun yang berkunjung.</p>
          </div>
        </div>

        <div id='daftar' className='relative w-screen h-max pt-4 pl-4 md:pl-12 pb-12'>
          <img src={Jawa} className='absolute scale-[1.6] top-[-30px] right-0 opacity-[0.2]  z-[-1]' alt='Jawa' />
          <div className='rounded-full text-white mb-4 bg-blue-400 w-max py-3 px-6'>{detail?.nama === 'Rempah-rempah' ? 'Nusa2 - Cita Rasa Rempah' : detail?.nama === 'Kuliner Nusantara' ? 'Nusa3 - Selera Khas Nusantara' : 'Nusa1 - Wisata Populer Nusantara'}</div>
          <h2 className='font-bold hidden md:flex items-center text-[36px]'>🏔️ <span className='relative top-1 ml-3'>{detail?.nama === 'Rempah-rempah' ? 'Aneka Ragam Rempah' : detail?.nama === 'Kuliner Nusantara' ? 'Kuliner Lokal Nusantara' : 'Rekomendasi 6 Wisata Nusantara'}</span></h2>
          <div className='w-full pr-6 pb-5 overflow-x-auto items-center'>
              <div className='w-max flex justify-between items-center mt-12'>
                {
                    detail?.nama === 'Kuliner Nusantara' ? (
                        Kuliner?.map((data, index) => (
                            <div key={index} className='relative w-[140px] h-[300px] mr-12 rounded-full bg-white shadow-lg py-4 before:absolute before:w-full before:h-[80%] before:bg-blue-600 before:bottom-0 before:left-0 before:rounded-tl-full before:rounded-tr-full overflow-hidden before:bg-opacity-[0.2] border-[2px] border-dashed border-blue-400 text-center flex flex-col items-center justify-between'>
                                <div className='relative border border-white w-[60px] h-[60px] bg-white rounded-full overflow-hidden bg-contain'>
                                    <img src={data?.gambar} alt="ikon-kategori" loading='lazy' className='rounded-full h-full' />
                                </div>
                                <div>
                                    <p>{data?.nama}</p>
                                    <small>{data?.lokasi}</small>
                                </div>
                                <div onClick={() => handleClick(data)} className='relative w-[60px] h-[60px] bg-blue-600 rounded-full text-white flex items-center justify-center cursor-pointer active:scale-[0.98] hoveer:brightness-[90%]'>
                                    <FaArrowRight />
                                </div>
                            </div>
                        ))
                    ):
                      (detail?.nama === 'Wisata Nusantara' ? Wisata : Rempah)?.map((data, index) => (
                            <div key={index} className='w-[340px] h-[440px] mr-6 bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[20px]'>
                                <div className='relative w-full overflow-hidden h-[50%]'>
                                    <div className='absolute z-[9999] rounded-full top-4 right-4 bg-white text-blue-600 border border-white px-5 py-2 w-max h-max text-[14px] flex items-center justify-center'>
                                        <p>Liburan</p> 
                                    </div>
                                    <img src={data?.gambar} alt="Wisata" loading='lazy' className='hover:scale-[1.2] duration-[1s] h-full w-full' />
                                </div>
                                <div className='w-full flex flex-col items-end justify-between h-[50%] pt-2'>
                                    <div className='w-full h-[100%] p-4'>
                                        <h2 className='font-bold text-[22px] mb-2'>{data?.nama}</h2>
                                        <p className='leading-loose text-slate-500 text-[14px]'>{data?.lokasi}</p>
                                    </div>
                                    <div onClick={() => {handleClick(data)}} className='w-full flex items-center text-center justify-center py-5 bg-blue-600 text-white cursor-pointer hover:brightness-[90%] duration-200'>
                                        Lihat Artikel
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default DetailArtikel
