import React from 'react'

const CardSkeletonType = () => {
  return (
    <section className='w-full md:flex justify-between items-center mx-auto'>
        <div className='w-[100%] md:mb-0 mb-6 md:w-[30%] h-[600px] bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[20px]'>
            <div className='relative w-full overflow-hidden h-[65%]'>
                <div className='absolute z-[9999] rounded-full top-4 right-4 bg-slate-300 animate-pulse px-12 py-4 w-max h-max'>
                </div>
                <div className='h-full w-full bg-slate-200 animate-pulse'></div>
            </div>
            <div className='w-full flex flex-col justify-between h-[35%] bg-slate-200 pt-2'>
                <div className='w-full h-[70%] p-4'>
                    <h2 className='font-bold text-[22px] mb-2 bg-slate-300 w-[50%] h-[28px] rounded-full animate-pulse'></h2>
                    <p className='leading-loose bg-slate-300 text-[14px] rounded-full animate-pulse w-[80%] h-[12px] mt-4'></p>
                </div>
                <div className='w-full flex items-center text-center justify-center py-6 bg-slate-300 animate-pulse'>
                    <p className='leading-loose bg-slate-200 text-[14px] rounded-full animate-pulse w-[40%] h-[12px]'></p>
                </div>
            </div>
        </div> 
        <div className='w-[100%] md:mb-0 mb-6 md:w-[30%] h-[600px] bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[20px]'>
            <div className='relative w-full overflow-hidden h-[65%]'>
                <div className='absolute z-[9999] rounded-full top-4 right-4 bg-slate-300 animate-pulse px-12 py-4 w-max h-max'>
                </div>
                <div className='h-full w-full bg-slate-200 animate-pulse'></div>
            </div>
            <div className='w-full flex flex-col justify-between h-[35%] bg-slate-200 pt-2'>
                <div className='w-full h-[70%] p-4'>
                    <h2 className='font-bold text-[22px] mb-2 bg-slate-300 w-[50%] h-[28px] rounded-full animate-pulse'></h2>
                    <p className='leading-loose bg-slate-300 text-[14px] rounded-full animate-pulse w-[80%] h-[12px] mt-4'></p>
                </div>
                <div className='w-full flex items-center text-center justify-center py-6 bg-slate-300 animate-pulse'>
                    <p className='leading-loose bg-slate-200 text-[14px] rounded-full animate-pulse w-[40%] h-[12px]'></p>
                </div>
            </div>
        </div> 
        <div className='w-[100%] md:mb-0 mb-6 md:w-[30%] h-[600px] bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[20px]'>
            <div className='relative w-full overflow-hidden h-[65%]'>
                <div className='absolute z-[9999] rounded-full top-4 right-4 bg-slate-300 animate-pulse px-12 py-4 w-max h-max'>
                </div>
                <div className='h-full w-full bg-slate-200 animate-pulse'></div>
            </div>
            <div className='w-full flex flex-col justify-between h-[35%] bg-slate-200 pt-2'>
                <div className='w-full h-[70%] p-4'>
                    <h2 className='font-bold text-[22px] mb-2 bg-slate-300 w-[50%] h-[28px] rounded-full animate-pulse'></h2>
                    <p className='leading-loose bg-slate-300 text-[14px] rounded-full animate-pulse w-[80%] h-[12px] mt-4'></p>
                </div>
                <div className='w-full flex items-center text-center justify-center py-6 bg-slate-300 animate-pulse'>
                    <p className='leading-loose bg-slate-200 text-[14px] rounded-full animate-pulse w-[40%] h-[12px]'></p>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default CardSkeletonType
