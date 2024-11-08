'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import Header from '@/app/components/Header';
import FeatureCard from '@/app/components/FeatureCard';
import SidebarCard from '@/app/components/SidebarCard';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

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
    <div className="text-gray-50 bg-black scrollbar-hide" ref={containerRef}>
      <section className="relative h-screen mb-24">
        <Header />

        <div className="flex space-x-2 px-[30px]">
          {/* Left Main Feature Section */}
          <div className="w-2/3 relative">
            <FeatureCard
              imageSrc="/images/culture.svg"
              tags={['Film & Video', 'Article', 'Feature']}
              title="Soul Stories: Interviews with Groundbreaking Authors"
              className="h-[746px] w-[1030px]"
              width={900}
              height={746}
            />
          </div>

          {/* Right Sidebar Section */}
          <div className="w-1/3 space-y-8 pl-[40px]">
            <SidebarCard
              imageSrc="/images/culture2.svg"
              tags={['Article', 'Film & Video', 'Feature']}
              title="Writers, Poets, and Storytellers from the Heart of the South"
              date="17 October 2024"
              tagClassName="bg-[#FFFFFF33] text-[#FFFFFF]"
              titleClassName="text-[#FFFFFF]"
              dateClassName="text-[#7E7E7E]"
            />
            <SidebarCard
              imageSrc="/images/culture3.svg"
              tags={['Article', 'Film & Video', 'Feature']}
              title="Conversations with Creative Trailblazers and Thought Leaders"
              date="17 October 2024"
              tagClassName="bg-[#FFFFFF33] text-[#FFFFFF]"
              titleClassName="text-[#FFFFFF]"
              dateClassName="text-[#7E7E7E]"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-12 grid grid-cols-2 gap-6 bg-white p-6 px-[30px]">
          <FeatureCard
            imageSrc="/images/culture4.svg"
            tags={['Article', 'Film & Video', 'Feature']}
            title="Redefining the Art of Afrocentric Design"
            className="h-[468px] w-[668px]"
            height={468}
            width={668}
          />
          <FeatureCard
            imageSrc="/images/culture5.svg"
            tags={['Article', 'Film & Video', 'Feature']}
            title="Interviews with Creatives Bridging the Past and Future"
            className="h-[468px] w-[668px]"
            height={468}
            width={668}
          />
          <FeatureCard
            imageSrc="/images/culture.svg"
            tags={['Article', 'Film & Video', 'Feature']}
            title="Soul Stories: Interviews with Groundbreaking Authors"
            className="h-[468px] w-[668px]"
            height={468}
            width={668}
          />
          <FeatureCard
            imageSrc="/images/culture6.svg"
            tags={['Article', 'Film & Video', 'Feature']}
            title="New Narratives: Young Authors Transforming Their Communities"
            className="h-[468px] w-[668px]"
            height={468}
            width={668}
          />
        </div>

        {/* Third Section - New 3x2 Grid Layout */}
        <div className="bg-white p-6 px-[30px]">
          <h3 className="text-[64px] font-bold text-black py-4">Category</h3>
          <div className="grid grid-cols-4 gap-6">
            {/* First Row: FeatureCard spanning 2 columns and 2 SidebarCards */}
            <FeatureCard
              imageSrc="/images/culture6.svg"
              tags={['Film & Video', 'Article', 'Feature']}
              title="New Narratives: Young Authors Transforming Their Communities"
              className="col-span-1 h-[468px] flex"
              height={468}
              width={668}
            />
            <SidebarCard
              imageSrc="/images/culture7.svg"
              tags={['Film & Video', 'Article', 'Feature', 'Opinion']}
              title="Discovering the Beats and Heritage of Emerging Artists"
              date="17 October 2024"
            />
            <SidebarCard
              imageSrc="/images/culture8.svg"
              tags={['Film & Video', 'Article', 'Feature', 'Opinion']}
              title="Exploring the Intersection of Creativity and Social Change"
              date="17 October 2024"
            />

            {/* Second Row: Four SidebarCards */}
            <SidebarCard
              imageSrc="/images/culture9.svg"
              tags={['Film & Video', 'Article', 'Feature']}
              title="Into the Mix: The Fusion of Traditional and Modern Music"
              date="17 October 2024"
            />
            <SidebarCard
              imageSrc="/images/culture10.svg"
              tags={['Film & Video', 'Article', 'Feature', 'Opinion']}
              title="Reclaiming the Lens: Photography by Global South Storytellers"
              date="17 October 2024"
            />
            <SidebarCard
              imageSrc="/images/culture7.svg"
              tags={['Film & Video', 'Article', 'Feature', 'Opinion']}
              title="Discovering the Beats and Heritage of Emerging Artists"
              date="17 October 2024"
            />
            <SidebarCard
              imageSrc="/images/culture8.svg"
              tags={['Film & Video', 'Article', 'Feature', 'Opinion']}
              title="Exploring the Intersection of Creativity and Social Change"
              date="17 October 2024"
            />
          </div>
        </div>
        {/* Fourth Section - Video Feature */}
        <div className="bg-black p-6 px-[30px]">
          <h3 className="text-[64px] font-bold text-white py-4">Category</h3>
          <FeatureCard
            imageSrc="/images/culture.svg"
            tags={['Film & Video', 'Article', 'Feature']}
            title="Heritage in Harmony: Traditional Instruments in Modern Music"
            className="h-[760px] w-full"
            height={768}
            width={1360}
          />
        </div>
        {/* Fifth Section - */}
        <div className="mt-12 grid grid-cols-2 gap-6 bg-black p-6 px-[30px]">
          <FeatureCard
            imageSrc="/images/culture4.svg"
            tags={['Article', 'Film & Video', 'Feature']}
            title="Redefining the Art of Afrocentric Design"
            className="h-[468px] w-[668px]"
            height={468}
            width={668}
          />
          <FeatureCard
            imageSrc="/images/culture5.svg"
            tags={['Article', 'Feature']}
            title="Interviews with Creatives Bridging the Past and Future"
            className="h-[468px] w-[668px]"
            height={468}
            width={668}
          />
        </div>
        {/* Sixth Section - */}
        <div className="mt-12 bg-black relative">
          {/* Background Image */}
          <div className="relative h-[700px] w-full">
            <img
              src="/images/culture11.svg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover bg-[#00000080] opacity-[90%]"
            />

            <div className="max-w-[300px]">
              {/* Overlay Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/culture12.svg"
                  className="relative z-10 h-[388px] w-[388px] shadow-lg"
                  height={388}
                  width={388}
                  alt="Culture"
                />
                <h1 className="text-[34px] max-w-[700px] font-bold text-white ml-[50px] py-4">
                  Discover the best of From South to South  in your inbox
                  weekly.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
