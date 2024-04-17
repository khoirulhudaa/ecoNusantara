import React from 'react'

const CardSkeletonArticle = () => {
  return (
    <section className='w-screen px-4 md:px-12 mx-auto flex flex-col mt-8 pb-4'>
        <div className='w-full h-[240px] mt-10 border border-blue-600 border-dashed rounded-[12px] bg-white shadow-lg p-5'>
            <div className='w-full h-[50%] flex items-center justify-between overflow-hidden text-left rounded-[8px]'>
                <h3 className='text-[20px] relative bottom-5 bg-slate-300 animate-pulse rounded-full h-[30px] w-[80%] cursor-pointer hover:text-blue-600 active:scale-[0.99] underline font-[500]'>
                </h3>
                <div className='rounded-full text-[12px] w-max h-max px-12 py-4 hidden relative bottom-5 md:flex items-center justify-center bg-slate-300 animate-pulse mr-4'>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-0 items-center'>
                <div className='rounded-full md:mb-0 mb-3 w-max h-[36px] px-12 flex items-center justify-center bg-slate-300 text-slate-500 mr-3'>
                </div>
                <div className='rounded-full md:mb-0 mb-3 max-w-[56%] h-[36px] px-12 flex items-center justify-center bg-slate-300 text-blue-600 mr-4'>
                    <p className='max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                    </p>
                </div>
            </div>
            <hr className='mt-4' />
            <div className="w-full flex items-center">
                <div className='rounded-full w-max h-max px-12 relative bottom-1 py-4 flex items-center justify-center mt-5 bg-slate-300 animate-pulse text-[12px]'>
                    <p>
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full h-[240px] my-3 border border-blue-600 border-dashed rounded-[12px] bg-white shadow-lg p-5'>
            <div className='w-full h-[50%] flex items-center justify-between overflow-hidden text-left rounded-[8px]'>
                <h3 className='text-[20px] relative bottom-5 bg-slate-300 animate-pulse rounded-full h-[30px] w-[80%] cursor-pointer hover:text-blue-600 active:scale-[0.99] underline font-[500]'>
                </h3>
                <div className='rounded-full text-[12px] w-max h-max px-12 py-4 hidden relative bottom-5 md:flex items-center justify-center bg-slate-300 animate-pulse mr-4'>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-0 items-center'>
                <div className='rounded-full md:mb-0 mb-3 w-max h-[36px] px-12 flex items-center justify-center bg-slate-300 text-slate-500 mr-3'>
                </div>
                <div className='rounded-full md:mb-0 mb-3 max-w-[56%] h-[36px] px-12 flex items-center justify-center bg-slate-300 text-blue-600 mr-4'>
                    <p className='max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                    </p>
                </div>
            </div>
            <hr className='mt-4' />
            <div className="w-full flex items-center">
                <div className='rounded-full w-max h-max px-12 relative bottom-1 py-4 flex items-center justify-center mt-5 bg-slate-300 animate-pulse text-[12px]'>
                    <p>
                    </p>
                </div>
            </div>
        </div>
        <div className='w-full h-[240px] my-3 border border-blue-600 border-dashed rounded-[12px] bg-white shadow-lg p-5'>
            <div className='w-full h-[50%] flex items-center justify-between overflow-hidden text-left rounded-[8px]'>
                <h3 className='text-[20px] relative bottom-5 bg-slate-300 animate-pulse rounded-full h-[30px] w-[80%] cursor-pointer hover:text-blue-600 active:scale-[0.99] underline font-[500]'>
                </h3>
                <div className='rounded-full text-[12px] w-max h-max px-12 py-4 hidden relative bottom-5 md:flex items-center justify-center bg-slate-300 animate-pulse mr-4'>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-0 items-center'>
                <div className='rounded-full md:mb-0 mb-3 w-max h-[36px] px-12 flex items-center justify-center bg-slate-300 text-slate-500 mr-3'>
                </div>
                <div className='rounded-full md:mb-0 mb-3 max-w-[56%] h-[36px] px-12 flex items-center justify-center bg-slate-300 text-blue-600 mr-4'>
                    <p className='max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap'>
                    </p>
                </div>
            </div>
            <hr className='mt-4' />
            <div className="w-full flex items-center">
                <div className='rounded-full w-max h-max px-12 relative bottom-1 py-4 flex items-center justify-center mt-5 bg-slate-300 animate-pulse text-[12px]'>
                    <p>
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CardSkeletonArticle
