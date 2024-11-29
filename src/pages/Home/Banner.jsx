import React from 'react';
import { motion} from 'framer-motion'// Make sure to adjust the image path
import BannerImg from '../../assets/Icons/BannerImg';

const Banner = () => {
  return (
    <section className="w-full  md:h-[90vh] sm:h-[70vh] h-auto bg-gradient-to-r from-[#042E58] to-[#001F3F]" >
      <div className="max-w-[1170px] h-full mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2">

        {/* Left side content */}
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
         className=" flex flex-col mt-24 items-start justify-center lg:text-left mb-8 lg:mb-0">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold font-soehne text-white mb-4">Create Beautiful, Bold Websites Elevate Brand.</h1>
          <p className="md:text-xl text-base font-Outfit text-[#ffffffbd] md:leading-[33px] leading-6 mb-6">
            At ByteBold, we specialize in high-quality web design and development, creating custom websites that make your business stand out.
          </p>
          <button className="bg-[#12908D] hover:bg-[#FFC300] text-white hover:text-[#001F3F]  px-8 py-4 rounded-full  transition duration-300">
            Get Started Today
          </button>
        </motion.div>

        {/* Right side image */}
        <div className="flex md:-mb-16 sm:-mb-10 -mb-16 items-end">
          <BannerImg />
        </div>

      </div>
    </section>
  );
};

export default Banner;
