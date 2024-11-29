import React from 'react';
import { motion } from 'framer-motion'
import AnimatedImg from '../../assets/Icons/AnimatedImg';
const WhyChooseByteBold = () => {
    return (
        <div className="max-w-[1170px] px-3 md:mt-28 mt-28 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center" id='about'>
            {/* Left Side Image */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                viewport={{once : true}}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                 className="order-2 sm:order-1">
                <AnimatedImg />
            </motion.div>

            {/* Right Side Content */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative order-1 sm:order-2"
            >
                {/* Sub-title with vertical line */}
                <div className="flex items-center">
                    <div className="h-[2px] md:w-20 w-16 bg-[#FFC300] rounded-full mr-2"></div>
                    <span className="text-[#FFC300] md:text-xl text-sm font-semibold font-Outfit leading-6">Why Us</span>
                </div>
                {/* Heading */}
                <h2 className='md:text-4xl text-3xl text-[#02264A] mt-7 font-soehne lg:leading-[61px] md:leading-10'>Why Choose ByteBold?</h2>
                {/* Divider Line */}
                <div className="w-full h-[2px] bg-[#2637501a] my-4"></div>
                {/* Description */}
                <p className="text-[#22405ca9] md:text-xl text-base ">
                    Because we don’t believe in overpricing. We deliver high-quality websites at a price point that’s fair —without cutting corners. Our team is committed to providing dedicated, personal service, ensuring that your brand stands out in the digital landscape.
                </p>
        </motion.div>
        </div >
    );
};

export default WhyChooseByteBold;
