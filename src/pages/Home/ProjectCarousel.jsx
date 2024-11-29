import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
// Custom Next Arrow
const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute -top-14 right-4 text-white bg-transparent p-2 rounded-full cursor-pointer hover:bg-[#FFC300] transition"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M26.1212 13.0171L33.2121 20.8086M33.2121 20.8086L26.1212 28.6002M33.2121 20.8086H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute -top-14 right-20 text-white bg-transparent p-2 rounded-full cursor-pointer hover:bg-[#FFC300] transition"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M15.8788 13.0171L8.78788 20.8086M8.78788 20.8086L15.8788 28.6002M8.78788 20.8086H34" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
};

// Array of Project Data
const projects = [
    {
        title: "SaaS Website",
        role: "Design & Development",
        image: project1,
        link: "#", // Add the correct link
        buttonText: "See Project"
    },
    {
        title: "Electric Bike",
        role: "Design & Development",
        image: project2,
        link: "#", // Add the correct link
        buttonText: "See Project"
    },
    {
        title: "Smartfarm",
        role: "Design & Development",
        image: project3,
        link: "#", // Add the correct link
        buttonText: "See Project"
    }
    // Add more projects as needed
];

const ProjectCarousel = () => {
    // Slider settings for react-slick
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show 2 slides on desktop
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1, // Show 1 slide on tablet
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-[#1ABC9C] mt-24 pt-14" id="portfolio">
            <div className="max-w-[1170px] mx-auto px-4 py-8">
                {/* First Row - Heading and Paragraph */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center">
                            <div className="h-[2px] md:w-28 w-16 bg-[#03274C] rounded-full mr-2"></div>
                            <span className="text-[#03274C] md:text-xl text-sm font-semibold font-Outfit leading-6">Our Works</span>
                        </div>
                        <div className="flex flex-col justify-center md:justify-start">
                            <h2 className='md:text-4xl text-3xl text-[#fff] font-soehne'>Our Work Speaks for Itself</h2>
                        </div>
                    </div>
                    {/* Right Side Description */}
                    <div className="col-span-1 h-full hidden sm:flex items-start text-center md:text-left">
                        <p className="text-[#fff] md:text-xl text-base">
                            Take a look at some of the brands we’ve helped transform with stunning web design.
                        </p>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative -mb-40"> {/* Wrapper to position arrows */}
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <div key={index} className="p-4  pb-16">
                                <div className="bg-white  projectslide shadow-lg rounded-lg overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="p-4 flex justify-between items-center">
                                        <div>
                                            <h3 className="text-xl font-bold">{project.title}</h3>
                                            <p className="text-sm text-gray-500">{project.role}</p>
                                        </div>
                                        <a
                                        target="_blank"
                                            href={project.link}
                                            className="bg-[#14B1A8] text-white hover:text-[#001F3F] py-2 px-4 rounded-full hover:bg-[#FFD449] transition duration-300"
                                        >
                                            {project.buttonText}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ProjectCarousel;
