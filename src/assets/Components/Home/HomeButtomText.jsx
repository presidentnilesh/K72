import React from 'react' 
import { Link } from 'react-router-dom'


const HomeButtomText = () => {
  return (
    <div className='font-[font2] flex justify-center gap-4 items-center'>
      <div className=' leading-[5vw]  uppercase border-white px-7 border-3 mb-2 pt-2  hover:border-[#c8e07f] hover:text-[#D3FD50] rounded-full '>
      <Link className='inline-block text-[6vw] mb-1 mt-2' to='/project'>Projects</Link>
      </div>

      <div className=' leading-[5vw]  uppercase border-white px-7 border-3 mb-2 pt-2  hover:border-[#cde38c] hover:text-[#D3FD50] rounded-full '>
      <Link className='inline-block text-[6vw] mt-2 mb-1' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}
export default HomeButtomText