import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/YLE-logo.png'

const Profile = () => {
  return (
    <div>
        <div className='py-4'>
            <div className='m-auto max-w-[1280px]'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="Yle Logo" srcset="" />
                        
                    </div>
                    <div className='flex justify-between items-center gap-12'>
                        <ul className='flex justify-between items-center gap-y gap-12'>
                            <li><NavLink to='/' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>Home</NavLink></li>
                            <li><NavLink to='/about' className='active:text-[#FF7426] text-[#FF7426] text-lg font-semibold capitalize'>About</NavLink></li>
                            <li><NavLink to='/courses' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>courses</NavLink></li>
                            <li><NavLink to='/our-service' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>our service</NavLink></li>
                            <li><NavLink to='/contact-us' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>contact us</NavLink></li>
                        </ul>
                        <div className='text-2xl font-medium capitalize bg-[#4D2C5E] rounded-full text-white py-2 px-8'>
                            login
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='my-24'>
            <div className='m-auto max-w-[1280px]'>
                <div className='flex justify-between items-start gap-16'>
                    <div className='w-1/3'>
                        <ul className='text-lg font-medium capitalize'>
                            <li className='py-2 rounded-md bg-[#FF7426] text-white  px-5 '> <Link to="edit-profile" className='active:text-white '> Edit Profile</Link></li>
                            <li className='py-2 rounded-md px-5'> <Link to="my-courses"> my Courses</Link></li>
                            <li className='py-2 rounded-md px-5'> <Link to="account-security"> Account Security</Link></li>
                            <li className='py-2 rounded-md px-5'> <Link to="achievements"> Achievements</Link></li>
                            <li className='py-2 rounded-md px-5'> <Link to="privacy"> Privacy</Link> </li>
                            <li className='py-2 rounded-md px-5'> <Link to="delete-account"> Delete Account</Link></li>
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;