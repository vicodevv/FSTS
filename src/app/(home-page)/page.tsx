'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import Header from '@/app/components/Header';
import FeatureCard from '@/app/components/FeatureCard';
import SidebarCard from '@/app/components/SidebarCard';
import { useGSAP } from '@gsap/react';

const Page = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const colors = ['#EC3C3C', '#EFD05C', '#51BA81', '#3C83EC'];

      const tl = gsap.timeline({ repeat: -1 });

      colors.forEach((color, index) => {
        tl.to('.explore-text', {
          duration: 1,
          color: color,
          ease: 'power1.inOut',
          delay: index * 1,
        });
      });

      tl.to('.explore-text', {
        duration: 1,
        color: colors[0],
        ease: 'power1.inOut',
        delay: 2,
      });

      return () => tl.kill();
    },
    { scope: containerRef }
  );

  return (
    <div
      className="text-gray-50 bg-black scrollbar-hide px-[30px]"
      ref={containerRef}
    >
      <section className="relative h-screen mb-24">
        <Header />

        <div className="flex space-x-2">
          {/* Left Main Feature Section */}
          <FeatureCard
            imageSrc="/images/culture.svg"
            tags={['Film & Video', 'Article', 'Feature']}
            title="Soul Stories: Interviews with Groundbreaking Authors"
          />

          {/* Right Sidebar Section */}
          <div className="w-1/3 space-y-8 pl-[40px]">
            <SidebarCard
              imageSrc="/images/culture2.svg"
              tags={['Article', 'Film & Video', 'Feature']}
              title="Writers, Poets, and Storytellers from the Heart of the South"
              date="17 October 2024"
            />
            <SidebarCard
              imageSrc="/images/culture3.svg"
              tags={['Article', 'Film & Video', 'Feature']}
              title="Conversations with Creative Trailblazers and Thought Leaders"
              date="17 October 2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
