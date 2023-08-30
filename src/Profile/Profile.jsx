import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/YLE-logo.png'
import Footer from '../components/Footer/Footer';
import Subscribe from '../components/Subscribe/Subscribe';

const Profile = () => {
    const [isEditCourses, setIsEditCourses] =useState(true)
    const [isMyCourses, setIsMyCourses] =useState(false)
    const [isAccountSecurity, setIsAccountSecurity] =useState(false)
    const [isAchievements, setIsAchievements] =useState(false)
    const [isPrivacy, setIsPrivacy] =useState(false)
    const [isDeleteAccount, setIsDeleteAccount] =useState(false)
  return (
    <div>
        <div className='py-4'>
            {
                //asdhjkabsvvjdv jsa
            }
            <div className='m-auto max-w-[1280px]'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="Yle Logo" srcset="" />
                        
                    </div>
                    <div className='flex justify-between items-center gap-12'>
                        <ul className='flex justify-between items-center gap-y gap-12'>
                            <li><NavLink to='/' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>Home</NavLink></li>
                            <li><NavLink to='/about' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>About</NavLink></li>
                            <li><NavLink to='/courses' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>courses</NavLink></li>
                            <li><NavLink to='/our-service' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>our service</NavLink></li>
                            <li><NavLink to='/contact-us' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>contact us</NavLink></li>
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
                <div className='flex justify-between items-start gap-4 xs:flex-col mb-16'>
                    <div className='w-[20%] xs:w-[90%] xs:m-auto'>
                        <ul className='text-lg font-medium capitalize xs:text-center'>
                            <li  className={isEditCourses ?'py-2 rounded-md bg-[#FF7426] text-white  px-5':"py-2 px-5"}> <Link to="edit-profile" onClick={
                            (e)=>{
                                setIsEditCourses(true)
                                setIsMyCourses(false)
                                setIsAccountSecurity(false)
                                setIsAchievements(false)
                                setIsPrivacy(false)
                                setIsDeleteAccount(false)
                            }
                            }> Edit Profile</Link></li>
                            <li className={isMyCourses ?'py-2 rounded-md bg-[#FF7426] text-white  px-5':"py-2 px-5"}> <Link to="my-courses" onClick={
                            (e)=>{
                                setIsEditCourses(false)
                                setIsMyCourses(true)
                                setIsAccountSecurity(false)
                                setIsAchievements(false)
                                setIsPrivacy(false)
                                setIsDeleteAccount(false)
                            }
                            }> my Courses</Link></li>
                            <li className={isAccountSecurity ?'py-2 rounded-md bg-[#FF7426] text-white  px-5':"py-2 px-5"}> <Link to="account-security" onClick={
                            (e)=>{
                                setIsEditCourses(false)
                                setIsMyCourses(false)
                                setIsAccountSecurity(true)
                                setIsAchievements(false)
                                setIsPrivacy(false)
                                setIsDeleteAccount(false)
                            }
                            } > Account Security</Link></li>
                            <li className={isAchievements ?'py-2 rounded-md bg-[#FF7426] text-white  px-5':"py-2 px-5"}> <Link to="achievements" onClick={
                            (e)=>{
                                setIsEditCourses(false)
                                setIsMyCourses(false)
                                setIsAccountSecurity(false)
                                setIsAchievements(true)
                                setIsPrivacy(false)
                                setIsDeleteAccount(false)
                            }
                            }> Achievements</Link></li>
                            <li className={isPrivacy ?'py-2 rounded-md bg-[#FF7426] text-white  px-5':"py-2 px-5"}> <Link to="privacy" onClick={
                            (e)=>{
                                setIsEditCourses(false)
                                setIsMyCourses(false)
                                setIsAccountSecurity(false)
                                setIsAchievements(false)
                                setIsPrivacy(true)
                                setIsDeleteAccount(false)
                            }
                            }> Privacy</Link> </li>
                            <li className={isDeleteAccount ?'py-2 rounded-md bg-[#FF7426] text-white  px-5':"py-2 px-5"}> <Link to="delete-account" onClick={
                            (e)=>{
                                setIsEditCourses(false)
                                setIsMyCourses(false)
                                setIsAccountSecurity(false)
                                setIsAchievements(false)
                                setIsPrivacy(false)
                                setIsDeleteAccount(true)
                            }
                            }> Delete Account</Link></li>
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
        <div className='m-auto max-w-[1280px] my-8'>
            <Subscribe />
        </div>
                <Footer />
    </div>
  );
}

export default Profile;