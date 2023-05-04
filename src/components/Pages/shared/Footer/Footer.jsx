import React from 'react';
import { HiChevronRight, HiOutlineLocationMarker, HiLocationMarker, HiOutlineTag, HiOutlineClock } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className='bg-black text-white py-10'>
            <div className="container">
                <div className='flex flex-wrap justify-between gap-3 py-10'>
                    <div className='flex'>
                        <div><HiOutlineLocationMarker className='text-4xl mr-3 text-primary' /></div>
                        <div>
                            <h3 className='text-2xl mb-5 font-semibold'>Address</h3>
                            <p className='text-gray-300'>97845 Baker st. 567</p>
                            <p className='text-gray-300'>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div><HiOutlineTag className='text-4xl mr-3 text-primary' /></div>
                        <div>
                            <h3 className='text-2xl mb-5 font-semibold'>Reservations</h3>
                            <p className='text-gray-300'>+94 423-23-221</p>
                            <p className='text-gray-300'>bengaldining@chef.com</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div><HiOutlineClock className='text-4xl mr-3 text-primary' /></div>
                        <div>
                            <h3 className='text-2xl mb-5 font-semibold'>Opening Hours</h3>
                            <p className='text-gray-300'>Mon - Sat: 10am - 11pm</p>
                            <p className='text-gray-300'>Sunday: Closed</p>
                        </div>
                    </div>
                    <div className='max-w-[768px]'>
                        <div>
                            <h3 className='text-2xl mb-5 font-semibold'>Keep in touch</h3>
                            <form action="" className='flex border-2 rounded-full overflow-hidden w-full'>
                                <label htmlFor="sub-email"></label>
                                <input className='py-2 px-5 bg-transparent w-72' type="email" id='sub-email' placeholder='Email' />
                                <button className='btn rounded-none bg-primary border-none' type='submit'><HiChevronRight className='text-2xl' /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='text-center'>
                    <h5 className='py-10'>
                        © Bengal Dining - All rights reserved
                    </h5>
                </div>
            </div>
        </footer>
    );
};

export default Footer;