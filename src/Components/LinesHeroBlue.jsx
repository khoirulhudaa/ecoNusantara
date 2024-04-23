import React from 'react'

const LinesHeroBlack = () => {
  return (
    <>
        <div className='absolute w-[350px] h-[120%] border-[4px] border-slate-300 lg:border-slate-300 left-20 top-0 border-t-0 border-b-0 lg:left-[180px] border-opacity-[0.3] border-dashed'>
        </div>
        <div className='absolute w-[350px] lg:hidden flex h-[120%] border-[4px] border-slate-300 lg:border-slate-300 right-20 top-0 border-t-0 border-b-0 lg:right-[180px] border-opacity-[0.3] border-dashed'>
        </div>
        <div className='absolute w-screen h-[1px] border-[2px] border-slate-300 lg:border-slate-300 left-[0px] bottom-14 lg:bottom-[30%] border-opacity-[0.3] border-dashed'>
        </div>
        <div className='absolute w-screen flex h-[1px] border-[2px] border-slate-300 lg:border-slate-300 left-[0px] top-[30%] border-opacity-[0.3] border-dashed'>
        </div>
    </>
  )
}

export default LinesHeroBlack
