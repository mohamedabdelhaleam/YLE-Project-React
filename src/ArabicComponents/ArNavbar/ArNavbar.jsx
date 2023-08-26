import React from 'react';
import logo from '../../assets/images/YLE-logo.png'
import { NavLink } from 'react-router-dom';


const ArNavbar = () => {
  return (
    <div className='bg-transparent py-4'>
        <div className='m-auto max-w-[1280px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Yle Logo" srcset="" />
                </div>
                <div className='flex justify-between items-center gap-12'>
                    <ul className='flex justify-between flex-row-reverse  items-center gap-y gap-12'>
                        <li><NavLink to='/' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>الصفحة الرئيسة</NavLink></li>
                        <li><NavLink to='/about' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>معلومات عنا</NavLink></li>
                        <li><NavLink to='/courses' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>الدورات</NavLink></li>
                        <li><NavLink to='/our-service' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>خدمتنا</NavLink></li>
                        <li><NavLink to='/contact-us' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>اتصل بنا</NavLink></li>
                    </ul>
                    <div className='text-2xl font-medium capitalize bg-[#4D2C5E] rounded-full text-white py-2 px-8'>
                        تسجيل الدخول
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ArNavbar;
