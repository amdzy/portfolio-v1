import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from 'next-themes';
import Moon from '../svg/Moon';
import Sun from '../svg/Sun';

const ResponsiveNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  const { theme, setTheme } = useTheme();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  const navLinkStyle =
    'no-underline text-gray-800 dark:text-lightestSlate text-lg hover:text-main dark:hover:text-main cursor-pointer';

  const navLinks = [
    <ScrollLink
      to="about"
      key="1"
      smooth={true}
      duration={500}
      className={navLinkStyle}
      onClick={() => setMenuOpen(false)}
    >
      About
    </ScrollLink>,
    <ScrollLink
      to="projects"
      key="2"
      smooth={true}
      duration={500}
      className={navLinkStyle}
      onClick={() => setMenuOpen(false)}
    >
      Projects
    </ScrollLink>,
    <ScrollLink
      to="contact"
      key="3"
      smooth={true}
      duration={500}
      className={navLinkStyle}
      onClick={() => setMenuOpen(false)}
    >
      Contacts
    </ScrollLink>,
    <button
      aria-label="dark mode switch"
      key="mode"
      className="dark:text-lightSlate hover:text-main dark:hover:text-main"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme !== 'dark' ? <Moon /> : <Sun />}
    </button>,
  ];

  const sticky = 'sticky top-0 shadow-md';
  return (
    <header
      className={`p-4 md:pr-16 md:pl-16 lg:pr-20 lg:pl-20 z-30 bg-white pb-0 pt-0 transition-all duration-300 dark:bg-lightNavy ${
        (hideOnScroll || menuOpen) && sticky
      } `}
    >
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
      />
      {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
    </header>
  );
};

const Navbar = ({ menuOpen, setMenuOpen, navLinks }: any) => (
  <div className="flex items-center justify-between p-4 pt-2 pb-2">
    <Link href="/">
      <a className="text-xl font-bold no-underline text-white">
        <Image src="/logo.svg" alt="logo" width={48} height={48} />
      </a>
    </Link>
    <nav className="hidden md:flex space-x-10 items-center">{navLinks}</nav>
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 dark:text-lightestSlate"
    >
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>
  </div>
);

const MobileMenu = ({ children }: { children: any }) => (
  <nav className="p-4 flex flex-col space-y-3 md:hidden items-center ">
    {children}
  </nav>
);

const MenuAlt4Svg = ({ menuOpen }: { menuOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-100 ease h-8 w-8 dark:text-white ${
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
