import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex border my-10 p-6'>
            <input className='py-2 px-4' type="text" placeholder='Search Here' />
            <Link className='py-2 px-4' to={'/news'}>News</Link>
            <Link className='py-2 px-4' to={'/destination'}>Destination</Link>
            <Link className='py-2 px-4' to={'/blog'}>Blog</Link>
            <Link className='py-2 px-4' to={'/contact'}>Contact</Link>
            <Link className='py-2 px-4' to={'login'}>Login</Link>
        </nav>
    );
};

export default Header;