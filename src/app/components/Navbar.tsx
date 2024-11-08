import { Rotate as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const NAV_LINKS = [
    { id: 1, title: 'Opinion', href: '/opinion' },
    { id: 2, title: 'Features', href: '/features' },
    { id: 3, title: 'Patnerships', href: '/patnerships' },
    { id: 4, title: 'About Us', href: '/about-us' },
  ];
  const TAG_LINKS = [
    { id: 1, title: 'Articles', href: '/articles' },
    { id: 2, title: 'Film & Video', href: '/film-video' },
    { id: 3, title: 'Podcast', href: '/podcast' },
    { id: 4, title: 'Opinion', href: '/opinion' },
    { id: 5, title: 'Partnership', href: '/partnership' },
    { id: 6, title: 'Feature', href: '/feature' },
  ];

  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <nav className="w-[495px] font-[300] hidden sm:flex justify-end items-center gap-x-6 gap-y-2 flex-wrap mt-4">
        {NAV_LINKS.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="text-[18px] text-gray-50"
          >
            <p>{link.title}</p>
          </Link>
        ))}
        <button className="text-[18px] text-gray-50">
          <Image src="/images/search.svg" alt="search" width={20} height={20} />
        </button>
        <div className="block">
          <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>

      {/* Overlay and mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white h-screen">
          {/* Header */}
          <div className="absolute top-8 left-8">
            <Image src="/Logo.svg" alt="logo" width={87} height={30} />
          </div>

          {/* Tag Links */}
          <div className="flex flex-col items-start text-left space-y-6 min-w-[900px]">
            {TAG_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className="group relative text-[50px] font-light leading-[47px]"
              >
                <span className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:left-0">
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    width={51}
                    height={33}
                  />
                </span>
                <span className="pl-8 group-hover:pl-[70px] transition-all duration-500">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="absolute bottom-8 text-xs text-gray-400 flex space-x-4">
            <a href="mailto:hello@soli.earth">hello@soli.earth</a>
            <Link href="/terms">
              <p>Terms & Conditions</p>
            </Link>
            <Link href="/privacy">
              <p>Privacy Policy</p>
            </Link>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 text-xl"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
