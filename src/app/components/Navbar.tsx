import { Rotate as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const NAV_LINKS = [
    { id: 1, title: 'Opinion', href: '/opinion' },
    { id: 2, title: 'Features', href: '/features' },
    { id: 3, title: 'Patnerships', href: '/patnerships' },
    { id: 4, title: 'About Us', href: '/about-us' },
  ];

  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <nav className="w-[295px] font-[300] hidden sm:flex justify-end items-center gap-x-4 gap-y-2 flex-wrap mt-4">
        {NAV_LINKS.map((link, index) => (
          <Link href={link.href} key={index} className="text-sm text-gray-50">
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="sm:hidden block">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Overlay and mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="text-white flex flex-col items-center">
            {NAV_LINKS.map((link, index) => (
              <Link href={link.href} key={index} className="text-lg mb-4">
                {link.title}
              </Link>
            ))}
            <button onClick={() => setOpen(false)} className="text-lg mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
