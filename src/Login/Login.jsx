import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../assets/images/YLE-logo.png'
import loginImg from '../assets/images/Exlorer_Illustration1.png'
import './Login.css'

const Login = () => {
  return (
    <div className='bg-[#FDF8EE] w-full py-6'>
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-center '>
            <div><AiOutlineHome size={50}/></div>
            <div><img src={logo} alt="" srcset="" /></div>
        </div>
        <div className='flex justify-between items-center py-24 xl:py-1'>
            <div className='w-1/2'>
                <form action="">
                    <label htmlFor="" className='font-bold text-4xl'>WELCOME BACK!</label>
                    <br />
                    <label htmlFor="" className="text-lg font-normal font-['Poppins'] ">Don’t have a account, <span>Sign up</span> </label>
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>Username</label>
                    <br />
                    <input type="text" className="px-8 my-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%]" placeholder='halim@gmail.com'/>
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>Password</label>
                    <br />
                    <input type="password"  className="px-8  my-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%]" placeholder='halim@gmail.com'/>
                    <br />
                    <br />
                    <div className='flex justify-between items-center w-[70%]'>
                        <div>
                            <input type="checkbox" name="" id="" className='rounded-full w-4 h-4'/>
                            <label htmlFor="" className='text-lg font-normal px-4'>Remember me</label>
                        </div>
                        <label htmlFor="">Forget password?</label>
                    </div>
                    <br />
                    <div className='bg-[#2B2E7F] shadow-md text-white w-[70%] rounded-full flex justify-center items-center py-4 text-2xl font-bold px-4'>
                        <button>Sign In</button>
                    </div>
                    <br /><br />
                    <hr className='w-[70%] hr-text'  data-content="or continue with"/>
                    <br />
                    <div className='w-[70%] flex justify-between items-center'>
                        <div className='h-14 rounded-lg w-24 border-2 border-[#6C70D1]'></div>
                        <div className='h-14 rounded-lg w-24 border-2 border-[#6C70D1]'></div>
                        <div className='h-14 rounded-lg w-24 border-2 border-[#6C70D1]'></div>
                    </div>
                </form>
            </div>
            <div className='w-1/2'>
                <img src={loginImg} alt="" srcset="" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
