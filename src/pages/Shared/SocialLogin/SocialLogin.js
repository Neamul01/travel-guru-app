import React from 'react';

const SocialLogin = () => {
    return (
        <div style={{ width: '570px' }} className='px-12'>
            <div className='w-full flex items-center'>
                <div className='w-5/6 bg-gray-500' style={{ height: '2px' }}></div>
                <span className='mx-2'>Or</span>
                <div className='w-5/6 bg-gray-500' style={{ height: '2px' }}></div>
            </div>
            <button className='w-full py-2 mt-4 rounded-2xl bg-transparent border-2 border-gray-500' >Contunue With Facebook</button>
            <button className='w-full py-2 mt-2 rounded-2xl bg-transparent border-2 border-gray-500' >Contunue With Google</button>

        </div>
    );
};

export default SocialLogin;