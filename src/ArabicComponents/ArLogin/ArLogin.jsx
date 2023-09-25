import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../../assets/images/YLE-logo.png'
import loginImg from '../../assets/images/Exlorer_Illustration1.png'
import './ArLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../Api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArLogin = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [userData , setUserData] = useState({})
    const navigate = useNavigate()



    const handleLogin =(e)=>{
        e.preventDefault()
        axios.post(`${baseUrl}/Account/login`,{
            email: email,
            password: password
        }).then((response)=>{
            setUserData(response.data)
            localStorage.setItem("YleUserToken",response.data.token)
            localStorage.setItem("YleUserId",response.data.id)
            navigate('/profile')
        }).catch((error)=>{
            console.log(error);
            toast.error(`${error.response.data}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    }
    console.log(userData);
  return (
    <div className='bg-[#FDF8EE] w-full py-6'>
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-center mx-4'>
            <div><AiOutlineHome size={50}/></div>
            <div><img src={logo} alt="" srcset="" /></div>
        </div>
        <div className='flex justify-between items-start  py-24 flex-row-reverse 
            xl:py-1
            xs:flex-col-reverse
            sm:flex-col-reverse
            md:flex-col-reverse
            '>
            <div className='w-1/2 xs:w-full sm:w-full md:w-full flex justify-center items-center mx-4 xs:m-auto' >
                <form action="" className='w-full xs:text-center text-center sm:text-center md:text-center'>
                    <label htmlFor="" className='font-bold text-4xl'>مرحبًا بعودتك!</label>
                    <br />
                    <label htmlFor="" className="text-lg font-normal font-['Poppins'] ">ليس لديك حساب ،  <span><Link to="/signup" className='text-[#6C70D1]'>قم بالتسجيل</Link> </span> </label>
                    <br />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>البريد الإلكتروني</label>
                    <br />
                    <input type="text" className="px-8 my-2 xs:py-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1] w-[70%] xs:w-[90%] sm:w-[90%]" placeholder='halim@gmail.com'
                    onChange = {(e)=>{
                        setEmail(e.target.value)
                    }} />
                    <br />
                    <label htmlFor="" className='font-semibold text-2xl'>كلمة المرور</label>
                    <br />
                    <input type="password"  className="px-8  my-2 xs:py-2 py-3 text-[#6C70D1] text-lg rounded-full border-2 border-[#6C70D1]  w-[70%] xs:w-[90%] sm:w-[90%]" placeholder='123456789' 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <br />
                    <br />
                    <div className='flex justify-between m-auto items-center w-[70%] xs:w-[90%] xs:m-auto sm:w-[90%] sm:m-auto md:m-auto'>
                        <div>
                            <input type="checkbox" name="" id="" className='rounded-full w-4 h-4'/>
                            <label htmlFor="" className='text-lg font-normal px-4 xs:text-base'>تذكرنى</label>
                        </div>
                        <label htmlFor=""><Link to="/forget-password" className='text-[#6C70D1]'>نسيت كلمة المرور؟</Link></label>
                    </div>
                    <br />
                    <div className='bg-[#2B2E7F] shadow-md m-auto text-white w-[70%] xs:m-auto sm:m-auto md:m-auto rounded-full flex justify-center items-center py-4  text-2xl font-bold px-4'>
                        <button onClick={handleLogin}>تسجيل الدخول</button>
                    </div>
                    <br /><br />
                    <hr className='w-[70%] hr-text m-auto'  data-content="او باستخدام"/>
                    <br />
                    <div className='w-[70%] m-auto xs:w-[90%] xs:m-auto sm:m-auto md:m-auto flex xs:gap-2 justify-between items-center'>
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </div>
  );
}

export default ArLogin;
