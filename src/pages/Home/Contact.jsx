import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log(formData);
    };

    return (
        <div className='bg-[#042E58]  mt-32 pt-24' id='contact'>
            <div className="max-w-[1170px] border-b pb-20 border-[#ffffffab] mx-auto px-4">
                <div className="flex max-w-[650px] mx-auto flex-col items-center text-center text-white mb-12">
                    <div className="flex items-center">
                        <div className="h-[2px] md:w-20 w-16 bg-[#FFC300] rounded-full mr-2"></div>
                        <span className="text-[#FFC300] md:text-xl text-sm font-semibold font-Outfit leading-6">Contact Us</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-soehne  mt-2 mb-4">Ready to Get Started ?</h1>
                    <p className="text-lg font-Outfit">Let’s create something amazing together. Contact us today to learn more about how ByteBold can help build the perfect website for your brand.</p>
                </div>

                <form onSubmit={handleSubmit} className=" max-w-[967px] mx-auto py-4 sm:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xl font-medium font-Outfit leading-8 text-[#ffffffab] mb-4" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Enter your  name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-base bg-[#F2F2F2]  focus:outline-none rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-xl font-medium font-Outfit leading-8 text-[#ffffffab] mb-4" htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder='Enter company name'
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-base bg-[#F2F2F2]  focus:outline-none rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-xl font-medium font-Outfit leading-8 text-[#ffffffab] mb-4" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-base  bg-[#F2F2F2] focus:outline-none rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-xl font-medium font-Outfit leading-8 text-[#ffffffab] mb-4" htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Type your message here...'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full p-4 text-base bg-[#F2F2F2] focus:outline-none border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#14B1A8] text-lg text-white hover:text-[#001F3F] py-4 px-14 rounded-full hover:bg-[#FFD449] transition duration-300"
                        > Send Now </button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Contact;
