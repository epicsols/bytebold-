import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SmartSolution from '../../assets/Icons/SmartSolution'
import Treebranch from '../../assets/Icons/Treebranch'

const SmartSolutions = () => {

    return (
        <div

            className="max-w-[1170px] px-3 md:mt-28 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
            {/* Left Side Content */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative"
            >
                {/* Sub-title with vertical line */}
                <div className="flex items-center">
                    <div className="h-[2px] md:w-20 w-16 bg-[#FFC300] rounded-full mr-2"></div>
                    <span className="text-[#FFC300] md:text-xl text-sm font-semibold font-Outfit leading-6">About Us</span>
                </div>
                {/* Heading */}
                <h2 className="md:text-4xl text-3xl text-[#02264A] mt-7 font-soehne lg:leading-[61px] md:leading-10">
                    ByteBold: Bold Designs, Smart Solutions
                </h2>
                {/* Divider Line */}
                <div className="w-full h-[2px] bg-[#26375031] my-4"></div>
                {/* Description */}
                <p className="text-[#22405ca9] md:text-xl text-base">
                    At ByteBold, we’re passionate about creating websites that do more than look good—they perform.
                    Our team of expert designers and developers work with you to build a site that’s not only beautiful
                    but functional, fast, and built for your business goals. Whether you're a small startup or a growing
                    business, we’ll partner with you to deliver a website that fits your needs and budget.
                </p>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative "
            >
                <SmartSolution />
                <motion.span
                
                 initial={{x: 80,translateX: 30, rotate: 70, translateY: -70, opacity: 1 }}
                 whileInView={{x: 0 , translateX: 0, rotate: 0, translateY: 0, opacity: 1 }}
                 
                 viewport={{
                   once: true
                 }}
                
                 transition={{
                   duration: 2,
                   ease: 'easeInOut',     // Infinite loop
                   repeatType: 'mirror',   // "mirror" makes the animation reverse after each cycle
                 }}
                
                className='absolute -right-6 top-[36%]'>
                    <Treebranch />
                </motion.span>
              
     
            </motion.div>
        </div>
    )
}

export default SmartSolutions
