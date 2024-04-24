import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Jawa, Kalimantan, Papua, Sulawesi, Sumatera } from "../Assets";
import LinesHeroBlack from "../Components/LinesHeroBlue";
import Footer from "../Components/footer";
import LinesHero2 from "../Components/lineHero2";
import data from "../Data/images";
import Kuliner from '../Data/kuliner';
import Rempah from '../Data/rempah';
import Wisata from '../Data/wisata.json';
import { getInformation } from "../Store/informationSlice";
import store from "../Store/store";
import '../article.css';

const DetailCard = () => {

  const detailData = store.getState().Information.information

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [active, setActive] = useState('deskripsi')
  const [detail, setDetail] = useState(null)
  const [status, setStatus] = useState(false)


  useEffect(() => {

    setDetail(detailData)
    window.scrollTo(0, 0)
    setStatus(false)
    
  }, [detail, status])
  
  const handleClick = (data) => {
    navigate(`/detail-card/${data?.nama}`)
    dispatch(getInformation(data))
    setStatus(true)
  }

  return (
    <div className="flex flex-col">
      <div className="relative w-full overflow-hidden flex h-max lg:h-[100vh]">
        <div className={`relative w-full lg:w-1/2 pl-4 lg:pl-10 ${detail?.type === 'Wisata' ? 'bg-blue-600 text-white' : 'bg-white text-slate-800'} border-b-[3px] border-b-slate-200 lg:border-b-slate-300 border-dashed`}>
          {
            detail?.type === 'Wisata' ? (
              <LinesHero2 />
            ):
              <LinesHeroBlack />
          }
          <Link to={'/'}>
            <h1 className={`relative top-6 lg:top-7 font-bold text-[24px] lg:py-0 py-2 z-[333] ${detail?.type !== 'Wisata' ? 'lg:bg-transparent bg-blue-500 w-max px-4 lg:px-0 lg:rounded-0 rounded-r-full lg:left-0 left-[-20px] lg:text-black text-white' : 'lg:bg-transparent bg-white w-max px-4 lg:px-0 lg:rounded-0 rounded-r-full lg:text-white lg:left-0 left-[-20px] text-blue-500'}`}>ecoNusantara 🗺️</h1>
          </Link>
          <div className="relative text-[3em] lg:py-0 py-16 lg:text-[6.4em] h-full flex flex-col justify-center font-extrabold mt-[-20px]">
            <h2 className={`${detail?.type === 'Wisata' ? 'text-white' : 'text-blue-500'} mb-2 w-[90%]`}>{detail?.nama}</h2>
            <h2 className="mb-2">{detail?.type === 'Rempah' ? 'Rempah Nusantara' : detail?.type === 'Kuliner' ? 'Kuliner' : 'Wisata'}</h2>
          </div>
        </div>
        <div className={`w-full lg:w-1/2 relative hidden md:flex justify-center right-0 ${detail?.type === 'Wisata' ? 'border-t-0 border-l-0 border-r-0 border-b-slate-400 border-[2px] border-dashed' : 'border-t-0 border-l-0 border-r-0 border-b-white-400 border-[2px] border-b-dashed'}`}>
          {
            detail?.type === 'Wisata' ? (
              <img
                src={detail?.pulau === 'Sumatera' ? Sumatera : detail?.pulau === 'Jawa' ? Jawa : detail?.pulau === 'Kalimantan' ? Kalimantan : detail?.pulau === 'Sulawesi' ? Sulawesi : Papua}
                className="h-auto w-full flex justify-center items-ecnter object-contain brightness-50"
                alt="image"
              />
            ):
              <img
                src={detail?.gambar}
                className="h-full w-full object-cover brightness-50"
                alt="image"
              />
          }
          <ul className="absolute text-[17px] top-3 right-0 pt-5 pr-10 flex gap-5 text-white cursor-pointer">
            <Link to={'/'}>
              <li className="ml-8">Beranda</li>
            </Link>
            <a href="#informasi">
              <li className="ml-8">Informasi</li>
            </a>
            <a href="#daftar">
              <li className="ml-8">Daftar Rempah</li>
            </a>
          </ul>

          <div className="flex absolute top-1/2 transform translate-y-[-50%] w-full px-16 justify-around items-center">
            {
              data?.[0]?.[detail?.nama]?.map((data, index) => (
                <img key={index} className="object-cover w-[26%] h-[140px] border-dashed border-2 rounded-lg" src={data} alt="image" />
              ))
            }
          </div>
        </div>
      </div>
      <div>
        {
          detail?.type === 'Rempah' ? (
            <div className="px-4 lg:px-10 mt-14 flex gap-3" id="informasi">
              <button onClick={() => setActive('deskripsi')} className={`w-1/2 ${active === 'deskripsi' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-slate-500'} border-0 outline-0 rounded-s-full h-max py-4 font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`}>
                Deskripsi
              </button>
              <button onClick={() => setActive('menanam')} className={`w-1/2 ${active === 'menanam' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-slate-500'} border-0 outline-0 rounded-r-full font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`}>
              <span className="mr-2 lg:flex hidden">Cara</span> Menanam
              </button>
            </div>
          ): detail?.type === 'Kuliner' ? (
            <div className="px-4 lg:px-10 mt-14 flex gap-3" id="informasi">
              <button onClick={() => setActive('deskripsi')} className={`w-1/2 ${active === 'deskripsi' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-slate-500'} border-0 outline-0 rounded-s-full h-max py-4 font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`}>
                Deskripsi
              </button>
              <button onClick={() => setActive('resep')} className={`w-1/2 ${active === 'resep' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-slate-500'} border-0 outline-0 rounded-r-full font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`}>
                Resep
              </button>
            </div>
          ):
            <div className="px-4 lg:px-10 mt-14 flex gap-3" id="informasi">
              <button onClick={() => setActive('deskripsi')} className={`w-1/3 ${active === 'deskripsi' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-slate-500'} rounded-s-full h-max py-4 font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`}>
                Deskripsi
              </button>
              <button onClick={() => setActive('sejarah')} className={`w-1/3 ${active === 'sejarah' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-slate-500'} border-0 outline-0 text-black font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`}>
                Sejarah
              </button>
              <button onClick={() => setActive('biaya')} className={`w-1/3 ${active === 'biaya' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-slate-500'} border-0 outline-0 rounded-r-full text-black font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`}>
                Biaya <span className="ml-2 lg:flex hidden">Akomodasi</span>
              </button>
            </div>
        }
        {
          active === 'biaya' ? (
            <table className="relative w-[92%] lg:w-[92%] text-left px-2 lg:px-6 oerflow-hidden rounded-lg h-max mx-auto mb-12 mt-16">
              <thead className="rounded-[16px]">
                {
                  detail?.header?.map((data, index) => (
                    <th className="border-slate-600 bg-slate-200 text-slate-900 px-6 text-slate-600 font-normal border" key={index}>{data}</th>
                  ))
                }
              </thead>
              <tbody>
                {
                  detail?.body?.map((data, index) => (
                    <tr key={index}>
                      <td className="px-6">{data?.name}</td>
                      <td className="px-6">{data?.value}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ):  
            <div className="custom-content px-6 lg:px-12 py-14" dangerouslySetInnerHTML={{__html: active === 'sejarah' ? detail?.history : active === 'resep' ? detail?.recept : active === 'menanam' ? detail?.build : detail?.description }}>
            </div>
        }
      </div>

      <div id='daftar' className='relative w-screen h-max pt-4 lg:mt-12 pl-4 lg:pl-12 pb-0'>
          <img src={Jawa} className='absolute scale-[1.6] top-[-30px] right-0 opacity-[0.1] z-[-1]' alt='Jawa' />
          <div className='rounded-full text-white mb-4 bg-blue-400 w-max py-3 px-6'>{detail?.nama === 'Rempah-rempah' ? 'Nusa2 - Cita Rasa Rempah' : detail?.nama === 'Kuliner Nusantara' ? 'Nusa3 - Selera Khas Nusantara' : 'Nusa1 - Wisata Populer Nusantara'}</div>
          <h2 className='font-bold hidden lg:flex items-center text-[36px]'>🏔️ <span className='relative top-1 ml-3'>{detail?.type === 'Rempah' ? 'Aneka Ragam Rempah' : detail?.type === 'Kuliner' ? 'Kuliner Lokal Nusantara' : 'Rekomendasi 6 Wisata Nusantara'}</span></h2>
          <div className='w-full lg:pr-6 pb-5 overflow-x-auto items-center'>
              <div className='w-screen lg:w-max lg:flex lg:justify-between items-center mt-12'>
                {
                    detail?.type === 'Kuliner' ? (
                        Kuliner?.map((data, index) => (
                            <div key={index} className='relative w-[90vw] lg:mb-0 mb-6 lg:w-[140px] h-[300px] lg:mr-12 rounded-[12px] lg:rounded-full bg-white shadow-lg py-4 before:absolute before:w-full before:h-[80%] before:bg-blue-600 before:bottom-0 before:left-0 before:rounded-tl-full before:rounded-tr-full overflow-hidden before:bg-opacity-[0.2] border-[2px] border-dashed border-blue-400 text-center flex flex-col items-center justify-between'>
                                <div className='relative border border-white w-[60px] h-[60px] bg-white rounded-full overflow-hidden bg-contain'>
                                    <img src={data?.gambar} alt="ikon-kategori"loading='lazy' className='rounded-full h-full' />
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
                      (detail?.type === 'Wisata' ? Wisata : Rempah)?.map((data, index) => (
                            <div key={index} className='w-[92%] lg:w-[340px] h-[440px] lg:mb-0 mb-6 mr-0 lg:mr-6 bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[12px] lg:rounded-[20px]'>
                                <div className='relative w-full overflow-hidden h-[50%]'>
                                    <div className='absolute z-[9999] rounded-full top-4 right-4 bg-white text-blue-600 border border-white px-5 py-2 w-max h-max text-[14px] flex items-center justify-center'>
                                        <p>Liburan</p> 
                                    </div>
                                    <img src={data?.gambar} alt="Wisata"loading='lazy' className='hover:scale-[1.2] duration-[1s] h-full w-full' />
                                </div>
                                <div className='w-full flex flex-col items-end justify-between h-[50%] pt-2'>
                                    <div className='w-full h-[100%] p-4'>
                                        <h2 className='font-bold text-[22px] mb-2'>{data?.nama}</h2>
                                        <p className='leading-loose text-slate-500 text-[14px]'>{data?.lokasi}</p>
                                    </div>
                                    <div onClick={() => {handleClick(data)}} className='w-full flex items-center text-center justify-center py-5 bg-blue-600 text-white cursor-pointer hover:brightness-[90%] duration-200'>
                                        Lihat Selengkapnya
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
                </div>
            </div>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DetailCard;