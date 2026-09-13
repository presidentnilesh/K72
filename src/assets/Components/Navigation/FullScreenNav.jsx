import { useGSAP } from '@gsap/react'
import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { navBarContext } from '../../../Context/NavContext'
import NavBar from './NavBar'

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)

  const [navOpen, setNavOpen] = useContext(navBarContext)
  console.log(navOpen)


  useGSAP(function () {
    const tl = gsap.timeline()

    tl.to('#fullscreennav',{
      display :'block'
    })

    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.2
      }
    })
    tl.from(fullNavLinksRef.current, {
      opacity: 0
    })
    tl.from('.link' ,{
      rotateX:90 ,
      stagger: {
        amount: 0.2
      }
    })

    tl.pause()

    if(navOpen){
      fullScreenRef.current.style.display = 'block'
      tl.play()
    }
    else{
      fullScreenRef.current.style.display = 'null'
      tl.reverse()
    }
  }, [navOpen])
  return (
    <div ref={fullScreenRef} id='fullscreennav' className=' h-screen hidden text-white overflow-hidden w-full z-50 absolute'>
      <div className='h-screen w-full fixed '>
        <div className='h-full w-full flex '>
          <div className='stair bg-red-500 h-full w-1/5 '></div>
          <div className='stair bg-red-500 h-full w-1/5 '></div>
          <div className='stair bg-red-500 h-full w-1/5 '></div>
          <div className='stair bg-red-500 h-full w-1/5 '></div>
          <div className='stair bg-red-500 h-full w-1/5 '></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className='relative'>
        <div className='flex items-start h-20 mt-1 w-full justify-between'>
          <div className='p-4 color-white w-36'>
            <svg className='w-full ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
              <path fill='white' d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>
          <div className='h-30 w-30 cursor-pointer relative'>
            <div className='  h-40 absolute -rotate-45 origin-top w-0.5 bg-[#D3FD50]'></div>
            <div className='  h-40 absolute rotate-45 origin-top right-0 w-0.5 bg-[#D3FD50]'></div>

          </div>
        </div>
        <div className='py-40'>
          <div className='link origin-top relative  border-t  border-white'>
            <p className='absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2] '>Projects</p>
            <div className='moveLink absolute bg-[#D3FD50] text-black flex top-0 '>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />

              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />

              </div>
            </div>
          </div>
          <div className='link origin-top relative  border-t  border-white'>
            <p className='absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2] '>Projects</p>
            <div className='moveLink absolute bg-[#D3FD50] text-black flex top-0 '>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />

              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />

              </div>
            </div>
          </div>
          <div className='link origin-top relative  border-t  border-white'>
            <p className='absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2] '>Projects</p>
            <div className='moveLink absolute bg-[#D3FD50] text-black flex top-0 '>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />

              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />

              </div>
            </div>
          </div>
          <div className='link origin-top relative  border-y  border-white'>
            <p className='absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2] '>Projects</p>
            <div className='moveLink absolute bg-[#D3FD50] text-black flex top-0 '>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />

              </div>
              <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />
                <h2 className='whitespace-nowrap absoulte leading-[0.8] pt-5 text-center text-[8vw] uppercase font-[font2]'>POUR TOUT VOIR</h2>
                <img className='shrink-0 h-23 flex items-center w-65 object-cover rounded-full' src="/k72.png" alt="" />

              </div>
            </div>
          </div>
          {/* here */}
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav