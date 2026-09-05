import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
      <div className=' '>
    <div className=''>
        <div>
         
          <div className='flex items-center justify-center text-[9.5vw] leading-[8vw] pt-5 uppercase font1 text-center'>
            L'étincelle
        </div>
        <div className='flex items-center justify-center text-[9.5vw] leading-[8vw] pt-5 uppercase font1 text-center'>qui<div className='h-[8vw] w-[16vw] rounded-full overflow-hidden '><Video /></div>génère
        </div>
        <div className='flex items-center justify-center text-[9.5vw] leading-[8vw] pt-5 uppercase font1 text-center'>
            la créativité
        </div>
        </div>
        <div className='relative '>
          <p className='pl-290 mt-8 '>
            K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
          </p>
        </div>
    </div>
    </div>
  )
}

export default HomeHeroText