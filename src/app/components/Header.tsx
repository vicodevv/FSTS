import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      tl.to('.intro-text', {
        duration: 1,
        y: 0,
        ease: 'power1.inOut',
      })

      return () => tl.kill()
    },
    { scope: containerRef }
  )


  return (
    <div className="text-gray-50 scrollbar-hide" ref={containerRef}>
      <section className="relative">
        <div className="flex items-start justify-between">
          <h6
            className="text-head-70 sm:text-head-110 gap-x-8 gap-y-2 flex-wrap"
            data-animation="paragraph"
          >
            <Image src="/Logo.svg" alt="logo" width={200} height={30} />
          </h6>
          <Navbar />
        </div>
      </section>
    </div>
  )
}

export default Header