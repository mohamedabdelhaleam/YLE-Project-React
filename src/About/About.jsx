import React from 'react';
import logo from '../assets/images/YLE-logo.png'
import AboutImg from '../assets/images/unsplash_-uHVRvDr7pg.jpg'
import { NavLink } from 'react-router-dom';
import AboutWho from '../components/AboutWho/AboutWho';
import AboutCard from '../components/AboutCard/AboutCard';
import AboutTeamCard from '../components/AboutTeamCard/AboutTeamCard';

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
    <div className=' bg-[#FDF8EE] py-8'>
      <div className='m-auto max-w-[1280px] w-full flex justify-evenly items-center gap-8'>
        <div>
          <img src={AboutImg} alt="" srcset="" />
        </div>
        <div className='w-1/2 flex justify-between gap-14 items-start flex-col'>
          <div className="text-[#FEC536] font-['Roboto'] font-bold text-4xl"> ~ WHO WE ARE</div>
          <div className="font-['Roboto'] font-medium text-5xl text-[#1D1D1DE5]">We Help To Get Solutions</div>
          <div className="font-['Roboto'] font-medium text-xl text-[#1D1D1DE5]">Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
          </div>
          <div className='flex flex-col justify-evenly items-start gap-8 w-3/4'>
            <AboutWho />
            <AboutWho />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='m-auto max-w-[1280px] py-8'>
        <div className='flex justify-evenly items-center gap-16 flex-col'>
          <div className='font-bold text-4xl text-center text-[#9F9E9E]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
          </div>
          <div className="grid grid-cols-3 gap-12">
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
          <div className="grid grid-cols-3 gap-12">
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
    </div>
  );
}

export default About;
