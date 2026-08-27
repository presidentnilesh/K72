import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Agence = () => {

  const imageDivRef = useRef(null)

  useGSAP(function(){
   gsap.to(imageDivRef.current,{
    x:500,
    repeat:5 
   })
})
  return (
<div>
      <div className='section1'>
      <div className=' absolute overflow-hidden  h-75 w-57 ml-110  top-60 rounded-3xl'> 
        <img ref={imageDivRef} className='h-full object-cover w-full' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className='relative font-[font2] '>
        <div className=' mt-[55vh] '>
        <h1 className=' text-[20vw] uppercase leading-[17vw] text-center'>Soixan7e<br />Douze</h1>
      </div>
      <div className='pl-145 mt-5 '>
        <p className='text-6xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
      </div>
    </div>
    <div className="section2 h-screen">
      
    </div>
</div>
  )
}

export default Agence