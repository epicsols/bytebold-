import React from 'react';
import SingleService from '../../components/Shared/SingleService';

import WebDesgin from '../../assets/Icons/WebDesgin';
import SeoIcon from '../../assets/Icons/SeoIcon';
import Ongoing from '../../assets/Icons/Ongoing';
import WebDevelopment from '../../assets/Icons/WebDevelopment';
import Ecommerce from '../../assets/Icons/Ecommerce';

const services = [
    {
        title: 'SEO Optimization',
        desc: 'We implement on-page SEO strategies to ensure your site ranks well and reaches the right audience.',
        icon: SeoIcon,
    },
    {
        title: 'Ongoing Maintenance',
        desc: 'We provide ongoing maintenance to keep your site secure, updated, and performing at its best.',
        icon: Ongoing,
    },
    {
        title: 'Web Design',
        desc: 'We create custom designs that reflect your brand’s personality, ensuring your site is visually stunning and user-friendly.',
        icon: WebDesgin,
    },
    {
        title: 'Web Development',
        desc: 'Our development process is rooted clean, efficient code that brings your vision to life, ensuring your site is responsive and secure.',
        icon: WebDevelopment,
    },
    {
        title: 'E-commerce Solutions',
        desc: 'Whether you’re launching a new online store or upgrading your current one, we build seamless e-commerce experiences.',
        icon: Ecommerce,
    },
    // Add more services here if needed
];

const Services = () => {
    return (
        <div className='max-w-[1170px] overflow-hidden pt-36 mx-auto' id='servies'>
            {/* Mobile Top Section */}
            <div className='block md:hidden  p-4 '>
                <div className="flex items-center">
                    <div className="h-[2px] md:w-20 w-16 bg-[#FFC300] rounded-full mr-2"></div>
                    <span className="text-[#FFC300] md:text-xl text-sm font-semibold font-Outfit leading-6">Services</span>
                </div>
                <h2 className='md:text-4xl text-3xl text-[#02264A] mt-7 font-soehne lg:leading-[61px] md:leading-10'>Web Services that Drive Results</h2>
                <p className='text-[#22405ca9] md:text-xl text-base mt-4'>We are a brand strategy & digital design agency experience more than ten years of experience.</p>
            </div>

            {/* Desktop Grid Layout */}
            <div className='hidden md:grid grid-cols-1 md:grid-cols-10 gap-4'>
                {services.slice(0, 2).map((service, index) => (
                    <div key={index} className={`col-span-3`}>
                        <SingleService Icon={service.icon} title={service.title} desc={service.desc} />
                    </div>
                ))}
                <div className='col-span-4  p-4'>
                    <div className="flex items-center">
                        <div className="h-[2px] md:w-20 w-16 bg-[#FFC300] rounded-full mr-2"></div>
                        <span className="text-[#FFC300] md:text-xl text-sm font-semibold font-Outfit leading-6">Services</span>
                    </div>
                    <h2 className='text-4xl text-[#02264A] mt-7 font-soehne leading-[61px]'>Web Services that Drive Results</h2>
                    <p className='text-[#22405ca9] mt-4'>We are a brand strategy & digital design agency experience more than ten years of experience.</p>
                </div>
            </div>

            {/* Horizontal Scrollable Row for Mobile */}
            <div className='mt-4 md:mt-8'>
                <div className='md:hidden overflow-x-auto'>
                    <div className='flex space-x-4 p-4'>
                        {services.map((service, index) => (
                            <div key={index} className='min-w-[80%] sm:min-w-[60%]'>
                                <SingleService Icon={service.icon} title={service.title} desc={service.desc} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regular grid for larger screens */}
                <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                    {services.slice(2).map((service, index) => (
                        <div key={index}>
                            <SingleService Icon={service.icon} title={service.title} desc={service.desc} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
