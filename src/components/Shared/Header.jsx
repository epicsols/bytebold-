import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const [isSticky, setIsSticky] = useState(false);
  // Menu items array
  const menuItems = [
    { name: 'Home', link: '#top' },
    { name: 'Services', link: '#servies' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'About Us', link: '#about' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Change '100' to the scroll position at which you want the header to become sticky
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  


  return (
    <>
    <div id='top'></div>
    <header id='top' className={`w-full top-0 pb-3 z-50 transition-all duration-300 ${
      isSticky ? 'sticky bg-gradient-to-r from-[#042E58] to-[#001F3F]' : 'absolute'
    }`}>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="Company Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden h-full lg:flex space-x-8 items-center">
          <nav className="h-full flex items-center">
            <ul className="h-full space-x-6 flex items-center">
              {menuItems.map((menuItem) => {
                const location = useLocation();
                const isActive = location.hash === menuItem.link; // Check if link is active
                console.log(location.hash)
                return (
                  <li
                    key={menuItem.name}
                    className={`group font-Outfit text-base h-full border-[#FFC300] hover:border-t-4  ${isActive ? 'border-t-2 border-[#FFC300]' : ''
                      }`} // Apply active class
                  >
                    <HashLink
                      className="h-full px-4 text-white flex items-center"
                      to={menuItem.link}
                    >
                      {menuItem.name}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Let's Talk Button */}
          <div>
            <HashLink to="#contact" className="border-2 border-[#fff] hover:border-[#FFC300] hover:text-[#001F3F] hover:bg-[#FFC300] text-[#fff] px-6 py-2 rounded-full  transition duration-300">
              Let's Talk
            </HashLink>

          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white px-4 py-6 space-y-4">
          {menuItems.map((menuItem) => (
            <div key={menuItem.name} className="hover:bg-gray-700 p-2">
              <HashLink exact to={menuItem.link} onClick={() => setMobileMenuOpen(false)}>
                {menuItem.name}
              </HashLink>
            </div>
          ))}
          <div>
            <Link to="/contact" className="block border-[#fff] text-[#fff] px-6 py-2 rounded-full hover:bg-[#001F3F] bg-[#001F3F] hover:text-[#fff] transition duration-300 text-center">
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
