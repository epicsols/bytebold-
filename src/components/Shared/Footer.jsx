import React from 'react';

import Logo from '../../assets/images/logo.svg'; // Replace with your logo path
import sms from '../../assets/images/sms.svg'; // Replace with your logo path
import TwitterIcon from '../../assets/Icons/TwitterIcon';
import FbIcon from '../../assets/Icons/FbIcon';
import InstaIcon from '../../assets/Icons/InstaIcon';
import GitIcon from '../../assets/Icons/GitIcon';

const Footer = () => {
    return (
        <footer className="bg-[#042E58]  text-white py-14">
            <div className="max-w-[1170px] mx-auto flex flex-col md:gap-20 gap-4 justify-between items-center px-4">
                {/* Top Footer */}
                <div className="flex sm:flex-row flex-col sm:gap-2 gap-7 items-center justify-between w-full mb-4 md:mb-0">
                    {/* Logo */}
                    <img src={Logo} alt="ByteBold Logo" className="h-10" />

                    {/* Center Menu */}
                    <nav className="sm:hidden md:flex flex space-x-6">
                        <a href="#services" className="hover:text-[#FFC300]">Services</a>
                        <a href="#about" className="hover:text-[#FFC300]">Portfolio</a>
                        <a href="#contact" className="hover:text-[#FFC300]">About us</a>
                        <a href="#blog" className="hover:text-[#FFC300]">Contact</a>
                    </nav>

                    {/* Email with Icon */}
                    <div className="flex items-center">
                        <a href="mailto:info@bytebold.com" className="flex text-xl  items-center gap-2">
                            <div className='w-8 h-8 rounded-full border flex justify-center items-center'>
                                <img src={sms} alt="" />
                            </div>
                            <span>infoByteBold@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className="md:hidden hidden sm:flex items-center justify-center w-full mb-4 md:mb-0">

                    <nav className="flex space-x-6">
                        <a href="#services" className="hover:text-[#FFC300]">Services</a>
                        <a href="#about" className="hovertext-[#FFC300]">Portfolio</a>
                        <a href="#contact" className="hover:text-[#FFC300]">About us</a>
                        <a href="#blog" className="hover:text-[#FFC300]">Contact</a>
                    </nav>

                    {/* Email with Icon */}

                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-1 justify-between items-center w-full">
                    <p className="text-base font-Outfit text-white">© 2024 ByteBold. All rights reserved.</p>

                    {/* Social Media Icons */}
                    <div className="flex socialIcon space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FbIcon />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <InstaIcon />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <GitIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
