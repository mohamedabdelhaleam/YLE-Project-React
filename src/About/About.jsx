import React from 'react';
import logo from '../assets/images/YLE-logo.png'
import AboutImg from '../assets/images/unsplash_-uHVRvDr7pg.jpg'
import { NavLink } from 'react-router-dom';
import AboutWho from '../components/AboutWho/AboutWho';
import AboutCard from '../components/AboutCard/AboutCard';
import AboutTeamCard from '../components/AboutTeamCard/AboutTeamCard';
import maestroImg from "../assets/images/Maestro.png"
import klarnaImg from "../assets/images/Klarna.png"
import amazonImg from "../assets/images/AmazonPay.png"
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div>
        <div className='bg-[#FDF8EE] py-4'>
        <div className='m-auto max-w-[1280px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Yle Logo" srcset="" />
                </div>
                <div className='flex justify-between items-center gap-12'>
                    <ul className='flex justify-between items-center gap-y gap-12'>
                        <li><NavLink to='/en/' className='active:text-[#FF7426] text-[#1D1D1D] text-lg font-semibold capitalize'>Home</NavLink></li>
                        <li><NavLink to='/en/about' className='active:text-[#FF7426] text-[#FF7426] text-lg font-semibold capitalize'>About</NavLink></li>
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
    <div className=' bg-[#FDF8EE] py-8'>
      <div className='m-auto max-w-[1280px] w-full flex justify-evenly items-center gap-8 xs:flex-col sm:flex-col md:flex-col px-4'>
        <div>
          <img src={AboutImg} alt="" srcset="" />
        </div>
        <div className='w-1/2 flex justify-between gap-14 items-start lg:gap-4 flex-col xs:w-full xs:text-center sm:w-full sm:text-center md:w-full md:text-center'>
          <div className="text-[#FEC536] font-['Roboto'] font-bold text-4xl xs:w-full sm:w-full md:w-full"> ~ WHO WE ARE</div>
          <div className="font-['Roboto'] font-medium text-5xl text-[#1D1D1DE5] xs:w-full sm:w-full md:w-full">We Help To Get Solutions</div>
          <div className="font-['Roboto'] font-medium text-xl text-[#1D1D1DE5] xs:w-full sm:w-full md:w-full">Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
          </div>
          <div className='flex flex-col justify-center xs:w-full items-center sm:w-full md:w-full gap-8 w-3/4 lg:w-full'>
            <AboutWho />
            <AboutWho />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='m-auto max-w-[1280px] py-8'>
        <div className='flex justify-evenly items-center gap-16 flex-col xs:px-4 sm:px-4 md:px-4 lg-px-2'>
          <div className='font-bold text-4xl text-center text-[#9F9E9E] xs:text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
          </div>
          <div className="grid grid-cols-3 gap-12 xs:grid-cols-1 sm:grid-cols-2 md:gap-4 sm:gap-4 sm:gap-y-12 md:gap-y-12 md:grid-cols-2 justify-items-center">
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='m-auto max-w-[1280px] py-8'>
        <div className='flex justify-evenly items-center gap-16 flex-col'>
          <div className='font-bold text-4xl text-center text-[#EF9204]'>
            Our Team
          </div>
          <div className="grid grid-cols-3 gap-12 xs:grid-cols-1 xs:mx-4 sm:mx-4 md-mx-4 sm:grid-cols-2 lg:mx-4 lg:gap-6 md:grid-cols-2">
            <AboutTeamCard />
            <AboutTeamCard />
            <AboutTeamCard />
            <AboutTeamCard />
            <AboutTeamCard />
            <AboutTeamCard />
            <AboutTeamCard />
            <AboutTeamCard />
            <AboutTeamCard />
          </div>
        </div>
      </div>
    </div>
    <div className='bg-[#FDF8EE] py-16'>
      <div className='m-auto max-w-[1280px]'>
        <div className='text-center text-3xl pb-8 font-bold text-[#EF9204]'>Our Partners</div>
        <div className='grid grid-cols-5 gap-6'>
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
        <Subscribe />
      </div>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default About;
