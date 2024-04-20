import React from 'react'

const LinesHeroBlack = () => {
  return (
    <>
        <div className='absolute w-[350px] h-[120%] border-[4px] border-slate-600 left-20 lg:left-[-180px] border-opacity-[0.3] border-dashed'>
        </div>
        <div className='absolute w-screen h-[1px] border-[2px] border-slate-600 left-[0px] top-14 lg:top-[100px] border-opacity-[0.3] border-dashed'>
        </div>
        <div className='absolute w-screen lg:flex hidden h-[1px] border-[2px] border-slate-600 left-[0px] top-[50%] border-opacity-[0.3] border-dashed'>
        </div>
        <div className='absolute w-screen h-[1px] border-[2px] border-slate-600 left-[0px] bottom-[80px] border-opacity-[0.3] border-dashed'>
        </div>
        <div className='absolute w-[350px] h-[120%] border-[4px] border-slate-600 right-20 lg:right-[-120px] border-opacity-[0.3] border-dashed'>
        </div>
    </>
  )
}

export default LinesHeroBlack
