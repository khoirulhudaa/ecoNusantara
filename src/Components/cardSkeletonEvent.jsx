import React from 'react'

const CardSkeletonEvent = () => {
  return (
    <section className='relative w-[92vw] mt-16 md:mt-24 mx-auto rounded-[12px] bg-slate-300 animate-pulse duration-200 h-[600px] md:h-min-[220px]'>
        <div className='absolute left-8 bottom-24 rounded-full bg-slate-400 h-[50px] w-[50%] animate-pulse'></div>
        <div className='absolute left-8 bottom-12 rounded-full bg-slate-400 h-[30px] w-[35%] animate-pulse'></div>
    </section>
  )
}

export default CardSkeletonEvent
