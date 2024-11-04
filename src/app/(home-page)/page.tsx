'use client'

import React, { useRef } from 'react'
// import { split } from '@/app/animations/text'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Header from '@/app/components/Header';


const Page = () => {
    const containerRef = useRef(null)
  
    useGSAP(
      () => {
        // split()
  
        const colors = ['#EC3C3C', '#EFD05C', '#51BA81', '#3C83EC']
  
        const tl = gsap.timeline({ repeat: -1 })
  
        colors.forEach((color, index) => {
          tl.to('.explore-text', {
            duration: 1,
            color: color,
            ease: 'power1.inOut',
            delay: index * 1,
          })
        })
  
        tl.to('.explore-text', {
          duration: 1,
          color: colors[0],
          ease: 'power1.inOut',
          delay: 2,
        })
  
        return () => tl.kill()
      },
      { scope: containerRef }
    )
  
    return (
        <div className="text-gray-50 scrollbar-hide px-[30px]" ref={containerRef}>
            <section className="relative h-screen mb-24">
                <div>
                    <Header />
                </div>
            </section>
        </div>
    )
}

export default Page