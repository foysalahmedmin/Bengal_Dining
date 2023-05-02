import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../../providers/ActiveLink';
import { HiMenuAlt1, HiOutlineUserCircle, HiX } from "react-icons/hi";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <header>
            <div className="container">
                <nav className='flex justify-between items-center py-2 bg-gray-50 relative'>
                    {
                        menuActive ? <button onClick={() => setMenuActive(false)} className='text-3xl md:hidden'><HiX /></button> : <button onClick={() => setMenuActive(true)} className='text-3xl md:hidden'><HiMenuAlt1 /></button>
                    }
                    <div className='md:w-1/3 ml-3 mr-auto'>
                        <h1 className='text-2xl flex items-center'>Bengal Dining</h1>
                    </div>
                    <ul className={`absolute right-0 top-[4.79rem] p-3 min-h-[calc(100vh-9rem)] md:w-1/3 md:min-h-[auto] leading-10 md:leading-3 rounded-md md:static md:flex justify-center items-center gap-7 transition-[left] ${menuActive ? 'left-0' : 'left-[-100%]'}`}>
                        <li className='font-semibold'><ActiveLink to={"/"}>Home</ActiveLink></li>
                        <li className='font-semibold'><ActiveLink to={'#about'}>About</ActiveLink></li>
                        <li className='font-semibold'><ActiveLink to={'/career'}>Blog</ActiveLink></li>
                    </ul>
                    <div className='flex justify-end items-center gap-5 md:w-1/3'>
                        <h3 className=' py-3'><HiOutlineUserCircle className='text-3xl' /></h3>
                        <Link to='/loginRegister/login'><button className='btn py-2 px-3 rounded-none'>LogIn</button></Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;