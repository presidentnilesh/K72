import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    // stair effect 
    useGSAP(function () {
        const tl = gsap.timeline()
        tl.from(stairParentRef.current, {
            display: 'block',
            delay :-0.1

        })
        tl.from('.stair', {
            height: '100%',
            stagger: {
                amount: -0.15
            }
        }
        )
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.15
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%'
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.2,
            scale :1 
        })
    }, [currentPath])

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full  fixed z-20 top-0'>
                <div className='h-screen w-screen flex '>
                    <div className='stair bg-black h-full w-1/5 '></div>
                    <div className='stair bg-black h-full w-1/5 '></div>
                    <div className='stair bg-black h-full w-1/5 '></div>
                    <div className='stair bg-black h-full w-1/5 '></div>
                    <div className='stair bg-black h-full w-1/5 '></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs