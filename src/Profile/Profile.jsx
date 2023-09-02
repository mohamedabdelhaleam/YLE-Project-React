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
                //Container 
            }
            <div className='m-auto max-w-[1280px]'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="Yle Logo" srcset="" />
                        
                    </div>
                    <div className='flex justify-between items-center gap-12'>
                        <ul className='flex justify-between items-center gap-y gap-12 xs:hidden sm:hidden md:hidden'>
                            <li><NavLink to='/en/' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>Home</NavLink></li>
                            <li><NavLink to='/en/about' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>About</NavLink></li>
                            <li><NavLink to='/en/courses' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>courses</NavLink></li>
                            <li><NavLink to='/en/our-service' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>our service</NavLink></li>
                            <li><NavLink to='/en/contact-us' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>contact us</NavLink></li>
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
                <div className='flex justify-between items-start gap-4  mb-16
                xs:flex-col
                sm:flex-col
                md:flex-col
                lg:flex-col
                '>
                    <div className='w-[20%] 
                    xs:w-[90%] xs:m-auto
                    sm:w-[90%] sm:m-auto
                    md:w-[90%] md:m-auto
                    lg:w-[90%] lg:m-auto
                    '>
                        <ul className='text-lg font-medium capitalize xs:text-center sm:text-center md:text-center  lg:text-center
                        xs:border-b-2 xs:border-black
                        sm:border-b-2 sm:border-black
                        md:border-b-2 md:border-black
                        lg:border-b-2 lg:border-black
                        '>
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