import React from 'react';

const navbar = () => {
    return (
        <div className=' pt-3 flex justify-evenly'>
        <div>
           <h1 className='text-2xl text-yellow-200'> Brand Name</h1>
        </div>
            <ul className='flex '>
                <li>Home</li>
                <li className='ml-5 text-yellow-200'>Contact</li>
                <li className='ml-5 text-yellow-200'>About us</li>
                <li className='ml-5  w-16 hover:bg-black hover:cursor-pointer bg-green-800 border-1 rounded-lg'> <span className='ml-3 mt-2 text-white '>Login</span> </li>
                <li className='ml-5  w-20 hover:bg-black hover:cursor-pointer bg-green-800 border-1 rounded-lg'> <span className='ml-3 mt-2 text-white '>Register</span> </li>
            </ul>
        </div>
    );
};

export default navbar;