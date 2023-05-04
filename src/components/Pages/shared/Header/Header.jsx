import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../../providers/ActiveLink';
import { HiMenuAlt1, HiOutlineUserCircle, HiX } from "react-icons/hi";
import { AuthContext } from '../../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [menuActive, setMenuActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = (event) => {
            const topHeight = window.scrollY
            if (topHeight > 80) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`fixed top-0 w-full z-50 transition-[top]  ${scrolled ? 'text-black md:top-0 bg-white' : 'text-white md:top-5 bg-transparent'}`}>
            <div className="container">
                <nav className='flex justify-between items-center py-2'>
                    {
                        menuActive ? <button onClick={() => setMenuActive(false)} className='text-3xl md:hidden'><HiX /></button> : <button onClick={() => setMenuActive(true)} className='text-3xl md:hidden'><HiMenuAlt1 /></button>
                    }
                    <div className='md:w-1/3 ml-3 mr-auto'>
                        <h1 className='text-2xl flex items-center'><span className='text-3xl font-black text-primary'>B</span>engal <span className='text-3xl font-black text-primary'>D</span>ining</h1>
                    </div>
                    <ul className={`
                        w-60
                        p-5 
                        md:w-1/3  
                        absolute 
                        bg-black 
                        md:bg-transparent 
                        bg-opacity-50 
                        top-[4.79rem] 
                        min-h-[calc(100vh-9rem)] 
                        md:min-h-[auto] 
                        leading-10 
                        md:leading-3 
                        rounded-md 
                        md:static 
                        md:flex 
                        justify-center 
                        items-center 
                        gap-7 
                        transition-[left] 
                        ${menuActive ? 'left-0' : 'left-[-100%]'}
                        `}>
                        <li className='font-semibold'><ActiveLink to={"/"}>Home</ActiveLink></li>
                        <li className='font-semibold'><a href='#about'>About</a></li>
                        <li className='font-semibold'><ActiveLink to={'/blog'}>Blog</ActiveLink></li>
                    </ul>
                    <div className='flex justify-end items-center gap-5 md:w-1/3'>
                        {
                            user ?
                                user.photoURL ?
                                    <img src= {user?.photoURL} title={user.displayName} className='w-11 h-11 rounded-full' alt="" />
                                    : <h3 className=' py-3' title={user.displayName}><HiOutlineUserCircle className='text-4xl' /></h3>
                                : ''
                        }
                        {
                            user ?
                                <button onClick={logOut} className='btn primary-btn'>Log-Out</button>
                                : <Link to='/login'><button className='btn primary-btn'>Log-In</button></Link>
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;