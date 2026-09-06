import React from 'react' 
import { Link } from 'react-router-dom'


const HomeButtomText = () => {
  return (
    <div className='font-[font2] flex justify-center gap-4 items-center'>
      <div className=' leading-[0.7] uppercase border-white px-7 border-3 pt-5 mb-2  hover:border-[#c8e07f] hover:text-[#D3FD50] rounded-full '>
      <Link className='inline-block text-[7vw]' to='/project'>Projets</Link>
      </div>

      <div className=' leading-[0.7]  uppercase border-white px-7 border-3 pt-5 mb-2  hover:border-[#cde38c] hover:text-[#D3FD50] rounded-full '>
      <Link className='inline-block   text-[7vw]' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}
export default HomeButtomText