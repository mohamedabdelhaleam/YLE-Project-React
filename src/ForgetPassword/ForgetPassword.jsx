import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../assets/images/YLE-logo.png'
import ForgetImg from '../assets/images/Key-rafiki1.png'

const ForgetPassword = () => {
  const [email,setEmail] = useState("")
  
  const sendEmail =(e)=>{

  }
  return (
    <div className='bg-[#FDF8EE] w-full h-screen py-6'>
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-center '>
            <div><AiOutlineHome size={50}/></div>
            <div><img src={logo} alt="" srcset="" /></div>
        </div>
        <div className='flex justify-between items-center py-24'>
            <div className='w-1/2'>
                <form action="">
                    <label htmlFor="" className='font-bold text-4xl'>Forget Password</label>
                    <br />
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>Email</label>
                    <br />
                    <input type="email" className="px-8 my-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%]" placeholder='Type Your Email'
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}/>
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

export default ForgetPassword;
