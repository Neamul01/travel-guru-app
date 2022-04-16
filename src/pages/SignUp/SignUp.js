import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='w-full h-full bg-white relative'>
            <div
                style={{ width: '570px', height: '485px' }}
                className='border-2 
                border-gray-400 rounded-sm bg-white mx-auto absolute top-64 
                left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-12 py-4'>
                <h3 className='font-bold text-2xl'>Create an Account</h3>
                <input className='outline-none w-full border-b-2 border-gray-400 block h-8 mt-8' type="text" id='FirstName' name='firstName' placeholder='First Name' />
                <input className='outline-none w-full border-b-2 border-gray-400 block h-8 mt-8' type="text" id='LastName' name='LastName' placeholder='Last Name' />
                <input className='outline-none w-full border-b-2 border-gray-400 block h-8 mt-8' type="text" id='login' name='login' placeholder='Username or Email' />
                <input className='outline-none w-full border-b-2 border-gray-400 block h-8 mt-8 mb-3' type="password" id='password' name='password' placeholder='Password' />
                <input className='outline-none w-full border-b-2 border-gray-400 block h-8 mt-8' type="password" id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' />

                <button className='w-full bg-yellow-500 py-2 mt-6 rounded-sm text-base'>Login</button>
                <p className='text-black text-center mt-2'>Already Have an Account? <Link to={'/login'} className='text-red-400 underline'>Login</Link> </p>
            </div>
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 social-custom'>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;