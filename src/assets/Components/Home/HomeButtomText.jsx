import React from 'react' 
import { Link } from 'react-router-dom'


const HomeButtomText = () => {
  return (
    <div className='font-[font2] flex justify-center gap-4 items-center'>
      <Link className=' text-[6vw] leading-[6vw]  uppercase border-white px-7 border-3 mb-3 pt-2  hover:border-[#c8e07f] hover:text-[#D3FD50] rounded-full ' to='/Project'>Projects</Link>
      <div></div>
      <Link className=' text-[6vw] leading-[6vw]  uppercase border-white px-7 border-3 mb-3 pt-2  hover:border-[#cde38c] hover:text-[#D3FD50] rounded-full ' to='/Agence'>Agence</Link>
    </div>
  )
}

export default HomeButtomText