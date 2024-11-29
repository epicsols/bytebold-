import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comm from '../../assets/images/comm.svg'
import customer1 from '../../assets/images/customer1.png'
import customer2 from '../../assets/images/customer2.png'
import customer3 from '../../assets/images/customer3.png'
const WhatOurClientsSay = () => {
    // Slider settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    const testimonials = [
        {
            img: customer1,
            title: 'Great Experience!',
            desc: 'ByteBold has helped our business grow tremendously through their innovative solutions.',
            client: 'John Doe, CEO'
        },
        {
            img: customer2,
            title: 'Amazing Support!',
            desc: 'Their support team was always there to assist us. Highly recommend ByteBold!',
            client: 'Jane Smith, Manager'
        },
        {
            img: customer3,
            title: 'Excellent Services!',
            desc: 'Their services are top-notch, and the results exceeded our expectations.',
            client: 'Mike Williams, Entrepreneur'
        },
        // Add more testimonials here
    ];

    return (
        <div className="max-w-[1170px] whatOur  px-3 mx-auto sm:mt-24 mt-8">
            {/* Top Row with Heading and Description */}
            <div className="grid grid-cols-1 md:grid-cols-6 items-center gap-8 mb-12">
                {/* Image above heading */}
                <div className="col-span-4 flex flex-col justify-center md:justify-start">
                    <img
                        src={comm} // Replace with your image URL
                        alt="Client Testimonials"
                        className="sm:w-36 w-14"
                    />
                    <h2 className='md:text-4xl  text-3xl text-[#02264A] font-soehne '>What Our Clients Say</h2>
                </div>
                {/* Right Side Description */}
                <div className="col-span-2 h-full hidden sm:flex  items-end text-center md:text-left">
                    <p className="text-[#22405ca9] md:text-xl text-base ">
                        Don’t just take our word for it. See how we’ve helped businesses like yours build bold, beautiful websites that perform
                    </p>
                </div>
            </div>

            {/* Carousel Slider for Testimonials */}
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="">
                        <div className="p-6">
                            <p className="text-[#22405ca9] md:text-xl text-base ">
                                Don’t just take our word for it. See how we’ve helped businesses like yours build bold, beautiful websites that perform
                            </p>
                            <div className='flex items-center gap-2 mt-4'>
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.client}
                                    className="w-12 h-12 rounded-full border border-gray-200"
                                />
                                <div>
                                    <h3 className='font-Outfit text-base md:text-xl text-[#22405ce1]'>Marcus Dorwart</h3>
                                    <p className='font-Outfit text-base text-[#22405ca9]'>Co-Founder of Mona</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default WhatOurClientsSay;
