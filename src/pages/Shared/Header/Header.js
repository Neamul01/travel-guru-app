import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png'

const Header = () => {
    return (
        <nav className='flex items-center justify-center border mt-10'>
            <img className='w-32 h-14 mr-20' src={logo} alt="logo" />
            <input className='py-2 px-5 mx-2 border-black h-11 w-96' type="text" placeholder='Search Here' />
            <Link className='py-2 px-5 mx-2' to={'/news'}>News</Link>
            <Link className='py-2 px-5 mx-2' to={'/destination'}>Destination</Link>
            <Link className='py-2 px-5 mx-2' to={'/blog'}>Blog</Link>
            <Link className='py-2 px-5 mx-2' to={'/contact'}>Contact</Link>
            <Link className='py-2 px-5 mx-2' to={'login'}>Login</Link>
        </nav>
    );
};

export default Header;