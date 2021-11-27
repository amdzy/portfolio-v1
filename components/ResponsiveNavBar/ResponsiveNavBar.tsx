import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ResponsiveNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="p-4 md:pr-16 md:pl-16 lg:pr-20 lg:pl-20">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
    </header>
  );
};

const navLinks = [
  <Link href={'#about'} key="1">
    <a className="no-underline text-gray-800 text-lg hover:text-gray-600">
      About
    </a>
  </Link>,
  <Link href={'#projects'} key="1">
    <a className="no-underline text-gray-800 text-lg hover:text-gray-600">
      Projects
    </a>
  </Link>,
  <Link href="#contact" key="3">
    <a className="no-underline text-purple-600 text-lg  border-2 border-purple-600 rounded-full p-2 pr-4 pl-4 hover:text-white hover:bg-purple-600 focus:text-white focus:bg-purple-600">
      Say hello
    </a>
  </Link>,
];

const Navbar = ({ menuOpen, setMenuOpen }: any) => (
  <div className="flex items-center justify-between p-4">
    <Link href="/">
      <a className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600">
        <Image src="/logo.svg" alt="logo" width={48} height={48} />
      </a>
    </Link>
    <nav className="hidden md:block space-x-10">{navLinks}</nav>
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
    >
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>
  </div>
);

const MobileMenu = ({ children }: { children: any }) => (
  <nav className="p-4 flex flex-col space-y-3 md:hidden items-center border-b-2 shadow-sm">
    {children}
  </nav>
);

const MenuAlt4Svg = ({ menuOpen }: { menuOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-100 ease h-8 w-8 ${
      menuOpen ? 'transform rotate-90' : ''
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

export default ResponsiveNavBar;
