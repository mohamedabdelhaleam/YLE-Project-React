import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../assets/images/YLE-logo.png'
import ForgetImg from '../assets/images/Key-rafiki1.png'

const Login = () => {
  return (
    <div className="bg-[#FDF8EE] w-full h-screen py-6 font-['Overpass'] ">
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-center '>
            <div><AiOutlineHome size={50}/></div>
            <div><img src={logo} alt="" srcset="" /></div>
        </div>
        <div className='flex justify-between items-center py-24'>
            <div className='w-1/2'>
                <form action="">
                    <label htmlFor="" className='font-bold text-3xl text-[#444B59]'>Enter your OTP</label>
                    <br />
                    <div className ="flex justify-around gap-4 items-center w-[70%]">
                    <input type="email" className=" h-20 w-20 text-center my-2  text-[#6C70D1] text-4xl border-2 border-[#6C70D1] rounded-full"/>
                    <input type="email" className=" h-20 w-20 text-center my-2  text-[#6C70D1] text-4xl border-2 border-[#6C70D1] rounded-full"/>
                    <input type="email" className=" h-20 w-20 text-center my-2  text-[#6C70D1] text-4xl border-2 border-[#6C70D1] rounded-full"/>
                    <input type="email" className=" h-20 w-20 text-center my-2  text-[#6C70D1] text-4xl border-2 border-[#6C70D1] rounded-full"/>
                    </div>
                    <br /><br />
                    <div className='bg-[#2B2E7F] shadow-md text-white w-[70%] rounded-full flex justify-center items-center py-4 text-2xl font-bold px-4'>
                        <button>Send OTP</button>
                    </div>
                </form>
            </div>
            <div className='w-1/2'>
                <img src={ForgetImg} alt="" srcset="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
