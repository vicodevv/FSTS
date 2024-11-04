import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      tl.to('.intro-text', {
        duration: 1,
        y: 0,
        ease: 'power1.inOut',
      });

      return () => tl.kill();
    },
    { scope: containerRef }
  );

  return (
    <div className="text-gray-50 scrollbar-hide h-[93px]" ref={containerRef}>
      <section className="relative">
        <div className="flex justify-between">
          <h6 className="flex text-head-70 sm:text-head-110 items-center gap-x-4 gap-y-2 flex-wrap mt-4">
            <Image src="/Logo.svg" alt="logo" width={87} height={30} />
          </h6>
          <Navbar />
        </div>
      </section>
    </div>
  );
};

export default Header;
