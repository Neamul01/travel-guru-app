import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';

const SocialLogin = () => {
    return (
        <div style={{ width: '520px' }} className='px-12'>
            <div className='w-full flex items-center'>
                <div className='w-5/6 bg-gray-500' style={{ height: '2px' }}></div>
                <span className='mx-2'>Or</span>
                <div className='w-5/6 bg-gray-500' style={{ height: '2px' }}></div>
            </div>
            <button className='w-full py-2 mt-4 rounded-2xl hover:bg-slate-300 bg-transparent border-2 border-gray-500' ><FacebookRoundedIcon className='mr-2' /><span>Contunue With Facebook</span></button>
            <button className='w-full py-2 mt-2 rounded-2xl hover:bg-slate-300 bg-transparent border-2 border-gray-500' ><GoogleIcon className='mr-2' /><span>Contunue With Google</span></button>

        </div>
    );
};

export default SocialLogin;