import React from 'react';
import logo from '../../assets/images/YLE-logo.png'
import AboutImg from '../../assets/images/unsplash_-uHVRvDr7pg.jpg'
import { NavLink } from 'react-router-dom';
import ArAboutTeamCard from '../ArAboutTeamCard/ArAboutTeamCard';
import maestroImg from "../../assets/images/Maestro.png"
import klarnaImg from "../../assets/images/Klarna.png"
import amazonImg from "../../assets/images/AmazonPay.png"
import ArFooter from '../ArFooter/ArFooter';
import ArSubscribe from '../ArSubscribe/ArSubscribe';
import ArAboutWho from '../ArAboutWho/ArAboutWho';
import ArAboutCard from '../ArAboutCard/ArAboutCard';

const ArAbout = () => {
  return (
    <div>
        <div className='bg-[#FDF8EE] py-4'>
        <div className='m-auto max-w-[1280px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Yle Logo" srcset="" />
                </div>
                <div className='flex justify-between items-center gap-12'>
                    <ul className='flex justify-between flex-row-reverse  items-center gap-y gap-12 xs:hidden sm:hidden md:hidden'>
                        <li><NavLink to='/' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>الصفحة الرئيسة</NavLink></li>
                        <li><NavLink to='/about' className='active:text-[#FF7426] text-lg font-semibold capitalize'>معلومات عنا</NavLink></li>
                        <li><NavLink to='/courses' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>الدورات</NavLink></li>
                        <li><NavLink to='/our-service' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>خدمتنا</NavLink></li>
                        <li><NavLink to='/contact-us' className=' text-[#1D1D1D] text-lg font-semibold capitalize'>اتصل بنا</NavLink></li>
                    </ul>
                    <div className='text-2xl font-medium capitalize bg-[#4D2C5E] rounded-full text-white py-2 px-8'>
                        تسجيل الدخول
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className=' bg-[#FDF8EE] py-8'>
      <div className='m-auto max-w-[1280px] w-full flex flex-row-reverse justify-evenly items-center gap-8 xs:flex-col sm:flex-col md:flex-col px-4'>
        <div>
          <img src={AboutImg} alt="" srcset="" />
        </div>
        <div className='w-1/2 flex justify-between gap-14 items-end text-right lg:gap-4 flex-col xs:w-full xs:text-center sm:w-full sm:text-center md:w-full md:text-center'>
          <div className="text-[#FEC536] font-['Roboto'] font-bold text-4xl xs:w-full sm:w-full md:w-full"> من نحن</div>
          <div className="font-['Roboto'] font-medium text-5xl text-[#1D1D1DE5] xs:w-full sm:w-full md:w-full">نحن نساعد في الحصول علي حلول
</div>
          <div className="font-['Roboto'] font-medium text-xl text-[#1D1D1DE5] xs:w-full sm:w-full md:w-full">   
لوريم إيبسوم هو ببساطة نص شكلي للطباعة و صناعة التنضيد. لقد كان لوريم إيبسوم النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر الميلادي ، 
          </div>
          <div className='flex flex-col justify-center xs:w-full items-center sm:w-full md:w-full gap-8 w-3/4 lg:w-full'>
            <ArAboutWho />
            <ArAboutWho />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='m-auto max-w-[1280px] py-8'>
        <div className='flex justify-evenly items-center gap-16 flex-col xs:px-4 sm:px-4 md:px-4 lg-px-2'>
          <div className='font-bold text-4xl text-center text-[#9F9E9E] xs:text-2xl'>لوريم إيبسوم هو ببساطة نص شكلي لـ صناعة الطباعة والتنضيد. كان Lorem Ipsum هو النص الوهمي القياسي في الصناعة منذ القرن الخامس عشر الميلادي ، عندما كان 
          </div>
          <div className="grid grid-cols-3 gap-12 xs:grid-cols-1 sm:grid-cols-2 md:gap-4 sm:gap-4 sm:gap-y-12 md:gap-y-12 md:grid-cols-2 justify-items-center">
            <ArAboutCard />
            <ArAboutCard />
            <ArAboutCard />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='m-auto max-w-[1280px] py-8'>
        <div className='flex justify-evenly items-center gap-16 flex-col'>
          <div className='font-bold text-4xl text-center text-[#EF9204]'>
            فريقنا
          </div>
          <div className="grid grid-cols-3 gap-12 xs:grid-cols-1 xs:mx-4 sm:mx-4 md-mx-4 sm:grid-cols-2 lg:mx-4 lg:gap-6 md:grid-cols-2">
            <ArAboutTeamCard />
            <ArAboutTeamCard />
            <ArAboutTeamCard />
            <ArAboutTeamCard />
            <ArAboutTeamCard />
            <ArAboutTeamCard />
            <ArAboutTeamCard />
            <ArAboutTeamCard />
            <ArAboutTeamCard />
          </div>
        </div>
      </div>
    </div>
    <div className='bg-[#FDF8EE] py-16'>
      <div className='m-auto max-w-[1280px]'>
        <div className='text-center text-3xl pb-8 font-bold text-[#EF9204]'>شركائنا</div>
        <div className='grid grid-cols-5 gap-6 xs:grid-cols-3 xs:mx-2 sm:grid-cols-4 sm:mx-2 md:grid-cols-4 md:mx-2'>
          <img src={amazonImg} alt="" srcset="" />
          <img src={maestroImg} alt="" srcset="" />
          <img src={klarnaImg} alt="" srcset="" />
          <img src={maestroImg} alt="" srcset="" />
          <img src={amazonImg} alt="" srcset="" />
          <img src={maestroImg} alt="" srcset="" />
          <img src={klarnaImg} alt="" srcset="" />
          <img src={amazonImg} alt="" srcset="" />
          <img src={klarnaImg} alt="" srcset="" />
          <img src={maestroImg} alt="" srcset="" />
        </div>
      </div>
    </div>
    <div className='my-16'>
      <div className='m-auto max-w-[1280px]'>
        <ArSubscribe />
      </div>
    </div>
    <div>
      <ArFooter />
    </div>
    </div>
  );
}

export default ArAbout;
