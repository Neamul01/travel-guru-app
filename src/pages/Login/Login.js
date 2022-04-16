import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-full h-full bg-white relative'>
            <div
                style={{ width: '570px', height: '457px' }}
                className='border-2 
                border-gray-400 rounded-sm bg-white mx-auto absolute top-64 
                left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-12 py-8'>
                <h3 className='font-bold text-2xl'>Login</h3>
                <input className='outline-none w-full border-b-2 border-gray-400 block h-8 mt-12' type="text" id='login' name='login' placeholder='Username of Email' />
                <input className='outline-none w-full border-b-2 border-gray-400 block h-8 mt-9 mb-6' type="text" id='password' name='password' placeholder='Password' />
                <div className='flex items-center'>
                    <input type="checkbox" name="remember" id="remember" className='mr-3' />
                    <label htmlFor="remember">Remember Me</label>
                    <p className="text-red-400 ml-auto underline">Forgot Password</p>
                </div>
                <button className='w-full bg-yellow-500 py-2 my-4 mt-10 rounded-sm text-base'>Login</button>
                <p className='text-black text-center mt-4'>Don't Have an Account? <Link to={'/login'} className='text-red-400 underline'>Create An Account</Link> </p>
            </div>
        </div>
    );
};

export default Login;