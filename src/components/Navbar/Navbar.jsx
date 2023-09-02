import React from 'react';
import logo from '../../assets/images/YLE-logo.png'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='bg-transparent py-4'>
        <div className='m-auto max-w-[1280px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Yle Logo" srcset="" />
                </div>
                <div className='flex justify-between items-center gap-12'>
                    <ul className='flex justify-between items-center gap-y gap-12'>
                        <li><NavLink to='/en/' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>Home</NavLink></li>
                        <li><NavLink to='/en/about' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>About</NavLink></li>
                        <li><NavLink to='/en/courses' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>courses</NavLink></li>
                        <li><NavLink to='/en/our-service' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>our service</NavLink></li>
                        <li><NavLink to='/en/contact-us' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>contact us</NavLink></li>
                    </ul>
                    <div className='text-2xl font-medium capitalize bg-[#4D2C5E] rounded-full text-white py-2 px-8'>
                        login
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
