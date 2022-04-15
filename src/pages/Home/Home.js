import React from 'react';
import './Home.css'
import coxs from '../../images/Rectangle1.jpg'
import sentMartin from '../../images/Rectangle2.png';
import sundarban from '../../images/Rectangle3.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home = () => {
    return (
        <div className='h-screen' style={{ backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.663), rgba(0, 0, 0, 0.619)), url(${coxs})` }}>
            <div className='flex items-center h-screen text-white'>
                <div className=' ml-16'>
                    <h2 className='uppercase text-8xl'>cox's bazar</h2>
                    <p className='text-white my-8'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className='text-black bg-yellow-500 rounded-lg py-3 px-6'>Booking <ArrowRightAltIcon /></button>
                </div>
                <div className='w-96 h-96 m-2 px-3 hover:border-yellow-500 border-4 hover:border-4 rounded-2xl relative' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.409), rgba(219, 219, 219, 0)), url(${coxs})`, backgroundSize: 'cover' }}>
                    <h2 className='uppercase text-4xl absolute bottom-6'>cox's bazar</h2>
                </div>
                <div className='w-96 h-96 m-2 px-3 hover:border-yellow-500 border-4 hover:border-4 rounded-2xl relative' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.409), rgba(219, 219, 219, 0)), url(${sentMartin})`, backgroundSize: 'cover' }}>
                    <h2 className='uppercase text-4xl absolute bottom-6'>sent martin</h2>
                </div>
                <div className='w-96 h-96 ml-2 px-3 hover:border-yellow-500 border-4 hover:border-4 rounded-2xl relative' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.409), rgba(219, 219, 219, 0)), url(${sundarban})`, backgroundSize: 'cover' }}>
                    <h2 className='uppercase text-4xl absolute bottom-6'>sundarban</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;