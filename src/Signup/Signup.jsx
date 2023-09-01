import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../assets/images/YLE-logo.png'
import loginImg from '../assets/images/Exlorer_Illustration1.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [userName ,setUserName] =useState("")
  const [email ,setEmail] =useState("")
  const [password ,setPassword] =useState("")
  const [confirmPassword ,setConfirmPassword] =useState("")

  const confirmPass = ()=>{
    if (password === confirmPassword) {
      return true
    }
    else{
      return false
    }
  }

  console.log(confirmPass());

  const handleSignup =(e)=>{

  }
  return (
    <div className='bg-[#FDF8EE] w-full h-screen py-6'>
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-center mx-4'>
            <div><AiOutlineHome size={50}/></div>
            <div><img src={logo} alt="" srcset="" /></div>
        </div>
        <div className='flex justify-between items-center py-24 xl:py-1 
            xs:flex-col-reverse
            sm:flex-col-reverse
            md:flex-col-reverse'>
            <div className='w-1/2 xs:w-full sm:w-full md:w-full flex justify-center items-center mx-4'>
                <form action="" className='w-full xs:text-center sm:text-center md:text-center'>
                    <label htmlFor="" className='font-bold text-4xl'>Create Account</label>
                    <br />
                    <label htmlFor="" className="text-lg font-normal font-['Poppins'] ">have a account ?  <span><Link to="/en/login" className='text-[#6C70D1]'>Sign in</Link></span> </label>
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>User Name</label>
                    <br />
                    <input type="text" className="px-8 xs:py-2 my-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%]" placeholder='halim@gmail.com' 
                    onChange={(e)=>{
                      setUserName(e.target.value)
                    }}/>
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>Email</label>
                    <br />
                    <input type="email" className="px-8 xs:py-2 my-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%]" placeholder='halim@gmail.com' 
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}/>
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>Password</label>
                    <br />
                    <input type="password" className="px-8 xs:py-2 my-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%]" placeholder='halim@gmail.com' 
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}/>
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>Confirm Password</label>
                    <br />
                    <input type="password"  className="px-8 xs:py-2 my-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%]" placeholder='halim@gmail.com' 
                    onChange={(e)=>{
                      setConfirmPassword(e.target.value)
                    }}/>
                    <br /><br /><br />
                    <div className='bg-[#2B2E7F] text-white w-[70%] xs:m-auto sm:m-auto md:m-auto rounded-full flex justify-center items-center py-4 text-2xl font-bold px-4' 
                    onClick={handleSignup}
                    
                    >
                        <button disabled={confirmPass}>Sign Up</button>
                    </div>
                </form>
            </div>
            <div className='w-1/2  xs:hidden sm:hidden md:hidden'>
                <img src={loginImg} alt="" srcset="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
