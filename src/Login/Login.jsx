import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../assets/images/YLE-logo.png'
import loginImg from '../assets/images/Exlorer_Illustration1.png'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")


    console.log(userName , password);


    const handleLogin =(e)=>{
        
    }
  return (
    <div className='bg-[#FDF8EE] w-full py-6'>
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-center mx-4'>
            <div><AiOutlineHome size={50}/></div>
            <div><img src={logo} alt="" srcset="" /></div>
        </div>
        <div className='flex justify-between items-center py-24 
            xl:py-1 
            xs:flex-col-reverse
            sm:flex-col-reverse
            md:flex-col-reverse
            '>
            <div className='w-1/2 xs:w-full sm:w-full md:w-full flex justify-center items-center mx-4' >
                <form action="" className='w-full xs:text-center sm:text-center md:text-center'>
                    <label htmlFor="" className='font-bold text-4xl'>WELCOME BACK!</label>
                    <br />
                    <label htmlFor="" className="text-lg font-normal font-['Poppins'] ">Don’t have a account, <span><Link to="/en/signup">Sign up</Link> </span> </label>
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>Username</label>
                    <br />
                    <input type="text" className="px-8 my-2 xs:py-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%] xs:w-[90%] sm:w-[90%]" placeholder='halim@gmail.com'
                    onChange = {(e)=>{
                        setUserName(e.target.value)
                    }} />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>Password</label>
                    <br />
                    <input type="password"  className="px-8  my-2 xs:py-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1]  w-[70%] xs:w-[90%] sm:w-[90%]" placeholder='halim@gmail.com' 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <br />
                    <br />
                    <div className='flex justify-between items-center w-[70%] xs:w-[90%] xs:m-auto sm:w-[90%] sm:m-auto md:m-auto'>
                        <div>
                            <input type="checkbox" name="" id="" className='rounded-full w-4 h-4'/>
                            <label htmlFor="" className='text-lg font-normal px-4 xs:text-base'>Remember me</label>
                        </div>
                        <label htmlFor="">Forget password?</label>
                    </div>
                    <br />
                    <div className='bg-[#2B2E7F] shadow-md text-white w-[70%] xs:m-auto sm:m-auto md:m-auto rounded-full flex justify-center items-center py-4  text-2xl font-bold px-4'>
                        <button >Sign In</button>
                    </div>
                    <br /><br />
                    <hr className='w-[70%] hr-text m-auto'  data-content="or continue with"/>
                    <br />
                    <div className='w-[70%] xs:w-[90%] xs:m-auto sm:m-auto md:m-auto flex xs:gap-2 justify-between items-center'>
                        <div className='h-14 rounded-lg w-24 border-2 border-[#6C70D1]'></div>
                        <div className='h-14 rounded-lg w-24 border-2 border-[#6C70D1]'></div>
                        <div className='h-14 rounded-lg w-24 border-2 border-[#6C70D1]'></div>
                    </div>
                </form>
            </div>
            <div className='w-1/2 xs:hidden sm:hidden md:hidden'>
                <img src={loginImg} alt="" srcset="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
