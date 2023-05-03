import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../../providers/ActiveLink';
import { HiMenuAlt1, HiOutlineUserCircle, HiX } from "react-icons/hi";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <header className='fixed top-0 md:top-5 w-full text-white z-50'>
            <div className="container">
                <nav className='flex justify-between items-center py-2'>
                    {
                        menuActive ? <button onClick={() => setMenuActive(false)} className='text-3xl md:hidden'><HiX /></button> : <button onClick={() => setMenuActive(true)} className='text-3xl md:hidden'><HiMenuAlt1 /></button>
                    }
                    <div className='md:w-1/3 ml-3 mr-auto'>
                        <h1 className='text-2xl flex items-center'><span className='text-3xl font-black text-primary'>B</span>engal <span className='text-3xl font-black text-primary'>D</span>ining</h1>
                    </div>
                    <ul className={`absolute right-0 top-[4.79rem] p-3 min-h-[calc(100vh-9rem)] md:w-1/3 md:min-h-[auto] leading-10 md:leading-3 rounded-md md:static md:flex justify-center items-center gap-7 transition-[left] ${menuActive ? 'left-0' : 'left-[-100%]'}`}>
                        <li className='font-semibold'><ActiveLink to={"/"}>Home</ActiveLink></li>
                        <li className='font-semibold'><a href='#about'>About</a></li>
                        <li className='font-semibold'><ActiveLink to={'/blog'}>Blog</ActiveLink></li>
                    </ul>
                    <div className='flex justify-end items-center gap-5 md:w-1/3'>
                        <h3 className=' py-3'><HiOutlineUserCircle className='text-4xl' /></h3>
                        <Link to='/login'><button className='btn primary-btn'>LogIn</button></Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;