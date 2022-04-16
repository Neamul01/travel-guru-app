import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div className='grid grid-cols-2 items-center justify-center text-white w-full h-5/6 px-40'>
            <div>
                <h2 className='uppercase text-8xl tracking-tighter	'>Cox's bazar</h2>
                <p className='text-gray-300 mt-8'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className='h-96 w-96 bg-white text-black rounded ml-auto p-6'>
                <label htmlFor="origin">Origin</label>
                <input className='block w-full h-10 rounded-sm bg-gray-300 p-4 mt-2 mb-4'
                    type="text" name='origin' id='origin' placeholder='Dhaka' />
                <label htmlFor="destination">Destination</label>
                <input className='block w-full h-10 rounded-sm bg-gray-300 p-4 mt-2 mb-4'
                    type="text" name='destination' id='destination' placeholder="Cox's Bazar" />
                <div className='grid grid-cols-2 gap-2 w-full'>
                    <div>
                        <label htmlFor="destination">From</label>
                        <input className='h-10 w-full block rounded-sm bg-gray-300 p-4 mt-2 mb-4'
                            type="date" name='from' id='from' placeholder="Cox's Bazar" />
                    </div>
                    <div >
                        <label htmlFor="destination">To</label>
                        <input className='h-10 w-full block rounded-sm bg-gray-300 p-4 mt-2 mb-3'
                            type="date" name='to' id='to' placeholder="Cox's Bazar" />
                    </div>
                </div>
                <Link to='/' className=' block bg-yellow-500 p-3 mt-4 text-center rounded-md'>Start Booking</Link>
            </div>
        </div>
    );
};

export default Booking;