import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()
        tl.fromTo('.page-stair', {
            height: 0,
        }, {
            height: '100%',
            duration: 0.4,
            stagger: {
                amount: 0.2,
                from: 'start',
            },
        })
        tl.to('.page-stair', {
            yPercent: 100,
            duration: 0.4,
            stagger: {
                amount: 0.25,
                from: 'start',
            },
        })
        tl.set(stairParentRef.current, { display: 'none' })

        gsap.from(pageRef.current,{
            opacity: 0,
            delay: 1.3,
            scale: 1.2,
        })
    }, {
        scope: stairParentRef,
        dependencies: [currentPath],
        revertOnUpdate: true,
    })
    

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex'>
                    <div className='page-stair h-full w-1/5 bg-black'></div>
                    <div className='page-stair h-full w-1/5 bg-black'></div>
                    <div className='page-stair h-full w-1/5 bg-black'></div>
                    <div className='page-stair h-full w-1/5 bg-black'></div>
                    <div className='page-stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs