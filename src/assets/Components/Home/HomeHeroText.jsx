import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
      <div className=' '>
    <div className=''>
      <div className='text-[5vw]'>
        K72
      </div>
  
        <div className='flex items-center justify-center text-[9.5vw] leading-[8vw] pt-5 uppercase font1 text-center'>
            L'étincelle
        </div>
        <div className='flex items-center justify-center text-[9.5vw] leading-[8vw] pt-5 uppercase font1 text-center'>qui<div className='h-[8vw] w-[16vw] rounded-full overflow-hidden '><Video /></div>génère
        </div>
        <div className='flex items-center justify-center text-[9.5vw] leading-[8vw] pt-5 uppercase font1 text-center'>
            la créativité
        </div>
    </div>
    </div>
  )
}

export default HomeHeroText