import { Rotate as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface OverlayProps {
  isOpen: boolean;
  closeOverlay: () => void;
  children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  closeOverlay,
  children,
}) => (
  <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white h-screen">
    {/* Header */}
    <div className="absolute top-8 left-8">
      <Image src="/Logo.svg" alt="logo" width={87} height={30} />
    </div>
    {children}
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
      onClick={closeOverlay}
      className="absolute cursor-pointer top-8 right-8 text-xl"
    >
      ✕
    </button>
  </div>
);

const Navbar = () => {
  const NAV_LINKS = [
    { id: 1, title: 'Opinion', href: '/opinion' },
    { id: 2, title: 'Features', href: '/features' },
    { id: 3, title: 'Partnerships', href: '/partnerships' },
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

  const [isOpen, setOpen] = React.useState(false); // For mobile menu
  const [isSearchOpen, setSearchOpen] = React.useState(false); // For search overlay

  const handleSearchOpen = () => setSearchOpen(true);
  const handleSearchClose = () => setSearchOpen(false);
  const handleMenuOpen = () => setOpen(true);
  const handleMenuClose = () => setOpen(false);

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
        <button
          className="text-[18px] text-gray-50"
          onClick={handleSearchOpen} // Open search overlay
        >
          <Image src="/images/search.svg" alt="search" width={20} height={20} />
        </button>
        <div className="block">
          <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <Overlay isOpen={isSearchOpen} closeOverlay={handleSearchClose}>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for"
            className="text-[50px] w-11/12 max-w-[699px] bg-gray-700 bg-transparent border-b-2 border-[#E3E3E333] focus:outline-none focus:border-gray-50 text-[#ffffff] placeholder-[#FFFFFF33] placeholder:text-[50px]"
          />
          <Image
            src="/images/search.svg"
            alt="search"
            width={20}
            height={20}
            className="absolute cursor-pointer left-[1050px] top-1/2 transform -translate-y-1/2"
          />
        </Overlay>
      )}

      {/* Overlay and mobile menu */}
      {isOpen && !isSearchOpen && (
        <Overlay isOpen={isOpen} closeOverlay={handleMenuClose}>
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
        </Overlay>
      )}
    </>
  );
};

export default Navbar;
