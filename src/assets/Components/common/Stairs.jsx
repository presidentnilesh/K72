import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Stairs = () => {
  const stairParentRef = useRef(null)

      useGSAP(function(){

    const tl = gsap.timeline()

    tl.from(stairParentRef.current,{
      display : 'block' 
    })
    tl.from('.stair', {
      height : 0 ,
      stagger:{
        amount : -0.15
      }
    } 
  )
  tl.to('.stair',{
    y:'100%',
    stagger: {
      amount : -0.15
    }
  })
  tl.to(stairParentRef.current,{
    display: 'none' 
  })
  tl.to('.stair',{
    y:'0%'
  })
  })

  return (
    <div ref={stairParentRef} className='h-screen w-full  fixed z-20 top-0'>
      <div className='h-screen w-screen flex '>
      <div className='stair bg-black h-full w-1/5 '></div>
      <div className='stair bg-black h-full w-1/5 '></div>
      <div className='stair bg-black h-full w-1/5 '></div>
      <div className='stair bg-black h-full w-1/5 '></div>
      <div className='stair bg-black h-full w-1/5 '></div>
    </div>
  </div>
  )
}

export default Stairs