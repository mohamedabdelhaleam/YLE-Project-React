import {React,useState} from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import logo from '../assets/images/YLE-logo.png'
import ForgetImg from '../assets/images/Key-rafiki1.png'
import Footer from '../components/Footer/Footer';

const Login = () => {
  const [firstNum ,setFirstNum] = useState("")
  const [secondNum ,setSecondNum] = useState("")
  const [thirdNum ,setThirdNum] = useState("")
  const [fourthNum ,setFourthNum] = useState("")

  const convertToOneText = ()=>{

  }

  return (
    <div className="bg-[#FDF8EE] w-full h-full py-6 font-['Overpass'] ">
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-center mx-4'>
            <div><AiOutlineHome size={50}/></div>
            <div><img src={logo} alt="" srcset="" /></div>
        </div>
        <div className='flex justify-between items-center py-24 xs:py-12 sm:py-12 md:py-12 xl:py-1 mx-4
            xs:flex-col-reverse
            sm:flex-col-reverse
            md:flex-col-reverse'>
            <div className='w-1/2 xs:w-full sm:w-full md:w-full m-auto mx-4'>
                <form action="" className='w-full xs:text-center sm:text-center md:text-center'>
                    <label htmlFor="" className='font-bold text-3xl text-[#444B59]'>Enter your OTP</label>
                    <br />
                    <div className ="flex justify-around gap-4 items-center w-[70%] xs:w-[80%] sm:w-[80%] md:w-[80%] xs:m-auto sm:m-auto md:m-auto">
                    <input type="text" className=" h-20 w-20 xs:h-16 xs:w-16 text-center my-2  text-[#6C70D1] text-4xl border-2 border-[#6C70D1] rounded-full" onChange={(e)=>{
                      setFirstNum(e.target.value)
                    }}/>
                    <input type="text" className=" h-20 w-20 xs:h-16 xs:w-16 text-center my-2  text-[#6C70D1] text-4xl border-2 border-[#6C70D1] rounded-full" onChange={(e)=>{
                      setSecondNum(e.target.value)
                    }}/>
                    <input type="text" className=" h-20 w-20 xs:h-16 xs:w-16 text-center my-2  text-[#6C70D1] text-4xl border-2 border-[#6C70D1] rounded-full" onChange={(e)=>{
                      setThirdNum(e.target.value)
                    }}/>
                    <input type="text" className=" h-20 w-20 xs:h-16 xs:w-16 text-center my-2  text-[#6C70D1] text-4xl border-2 border-[#6C70D1] rounded-full" onChange={(e)=>{
                      setFourthNum(e.target.value)
                    }}/>
                    </div>
                    <br /><br />
                    <div className='bg-[#2B2E7F] shadow-md text-white w-[70%] xs:m-auto sm:m-auto md:m-auto rounded-full flex justify-center items-center py-4 text-2xl font-bold px-4'>
                        <button>Send OTP</button>
                    </div>
                </form>
            </div>
            <div className='w-1/2 xs:w-full sm:w-full md:w-full m-auto'>
                <img src={ForgetImg} alt="" srcset="" />
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
