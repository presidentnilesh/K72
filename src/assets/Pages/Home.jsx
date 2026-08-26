import React from 'react'
import Video from '../Components/Home/Video'
import HomeButtomText from '../Components/Home/HomeButtomText'
import HomeHeroText from '../Components/Home/HomeHeroText'

const Home = () => {
  return (
    <div >  
        <div className=' h-screen w-screen fixed'>
             <Video />
        </div>
        <div className='h-screen w-screen relative overflow-hidden flex-col flex justify-between '>
            <HomeHeroText />
            <HomeButtomText />
        </div>
    </div>
  )
}

export default Home