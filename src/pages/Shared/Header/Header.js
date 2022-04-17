import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../logo.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const location = useLocation()
    const currentLocation = location.pathname;
    console.log(currentLocation)
    return (
        <nav className='flex items-center justify-between px-40 border-none pt-8 relative  text-white'
            style={{
                backgroundColor: (currentLocation === '/signup' || currentLocation === '/login') && 'white',
                color: (currentLocation === '/login' || currentLocation === '/signup') && 'black'
            }}>
            <Link to={'/'}>
                <img className='w-32 h-14 mr-20' src={logo} alt="logo" />
            </Link>
            <div className='flex'>
                <div className='relative' style={{ display: (currentLocation === '/login' || currentLocation === '/signup') && 'none' }}>
                    <input
                        className='py-2 px-5 pl-9 mx-2 border-white border-2 outline-none h-11 w-96 rounded-md search-custom'
                        style={{
                            background: 'rgba(255, 255, 255, 0.249)'
                        }} type="text" placeholder='Search Your Destination...' />
                    <SearchIcon className='absolute left-5 top-3 ' />
                </div>
                <Link className='py-2 px-5 mx-2' to={'/news'}>News</Link>
                <Link className='py-2 px-5 mx-2' to={'/destination'}>Destination</Link>
                <Link className='py-2 px-5 mx-2' to={'/blog'}>Blog</Link>
                <Link className='py-2 px-5 mx-2' to={'/contact'}>Contact</Link>
                <Link className='py-2 px-6 mx-2 bg-yellow-500 rounded-md' to={'login'}>Login</Link>
            </div>
        </nav >
    );
};

export default Header;