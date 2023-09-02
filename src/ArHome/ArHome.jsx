import React from 'react';
import headerImg from '../assets/images/header-img.png'
import staticImg from '../assets/images/static.jpg'
import premiumImg from '../assets/images/premuim.png'
import './Home.css'
import InfoCard from '../components/InfoCard/InfoCard';
import StaticCard from '../components/StaticCard/StaticCard';
import { FaRegFolderOpen } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineDiamond } from 'react-icons/md';
import ArCourseCard from '../ArabicComponents/ArCourseCard/ArCourseCard';
import ArPremCard from '../ArabicComponents/ArPremCard/ArPremCard';
import ArSubscribe from '../ArabicComponents/ArSubscribe/ArSubscribe';
import ArNavbar from '../ArabicComponents/ArNavbar/ArNavbar';
import ArFooter from '../ArabicComponents/ArFooter/ArFooter';


const ArHome = () => {
  return (
    <div className='bg-[#FDF8EE]'>
      <ArNavbar />
      <header className='header py-16 h-[900px] relative'>
        <div className='m-auto max-w-[1280px]'>
          <div className='
            flex justify-between items-center flex-row-reverse mt-24
            xs:px-4 xs:text-center xs:justify-center 
            sm:text-center sm:justify-center sm:px-4
            md:px-4 lg:px-4
          '>
              <div className='
              xs:mt-8  xs:text-center
              sm:mt-8 sm:text-center
              md:mt-8 md:text-center
              '>
                  <div className='text-6xl 
                  xs:w-full xs:text-center xs:text-5xl 
                  sm:w-full sm:text-center sm:text-5xl 
                  md:w-full md:text-center md:text-5xl 
                  lg:text-5xl 
                  font-extrabold capitalize text-right'>افضل اختيار <span className='text-[#FF7426]'>للمستقبل</span></div>
                  <div className='text-xl 
                  xs:w-full xs:text-center xs:text-md 
                  sm:w-full sm:text-center sm:text-md 
                  md:w-full md:text-center md:text-md 
                  font-medium py-4 text-[#8A8A8A] text-right'>YLE هي شركة تدريب عالمية مقرها في جميع أنحاء المملكة المتحدة وتتخصص في الدورات التدريبية المعتمدة والمخصصة. نحن نسحق ...</div>
                  <div className='flex justify-end items-center
                    xs:w-full  xs:justify-center 
                    sm:w-full  sm:justify-center 
                    md:w-full  md:justify-center 
                    '><div className='w-1/2 flex justify-center items-center h-12 text-2xl rounded-full bg-[#4D2C5E] text-white text-center'>الكورسات</div></div>
              </div>
              <div   className='xs:hidden sm:hidden'>
                  <img src={headerImg} alt="" srcset=""/>
              </div>
          </div>
          {
            // Div Between the header and Our Best Courses
          }
            <div className='
              flex justify-center items-center absolute bottom-[-128px]  bg-[#4D2C5E] py-20 w-[1280px] rounded-md px-12 gap-4
              xs:w-full xs:flex-col xs:mx-0 xs:mt-28
              sm:w-full sm:flex-col sm:mx-0 sm:mt-28
              md:w-full md:flex-col md:mx-0 md:mt-28
              '>
              <InfoCard />
              <InfoCard />
              <InfoCard />
            </div>
        </div>
      </header>
      {
        // End Header
        // Start Our Best Courses
      }
      <div className='h-96 pt-32 bg-white w-full py-16'>
      <div className='m-auto max-w-[1280px]'>

          <div className='xs:mx-8'>

            <div className='text-center py-14'>
              <div className="text-5xl font-semibold font-['Jost'] py-2">أفضل الدورات لدينا</div>
              <div className="font-['Poppins'] text-xl font-medium text-[#8A8A8A]">لوريم إيبسوم هو ببساطة نص شكلي للطباعة.</div>
            </div>

            <div className='flex justify-evenly items-center mb-28 
            xs:flex-col xs:gap-12
            sm:flex-col sm:gap-12
            md:flex-col md:gap-12
            '>
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
            </div>

            <div className='text-[#33363F] text-xl font-medium flex justify-center'>
              <div className='border-2 border-[#FF7426] py-3 px-6'>اكتشف جميع الدورات</div>
            </div>
          </div>
      </div>

          
          <div className='pt-24 pb-12 xs:px-4'>
            <div className='m-auto max-w-[1280px] flex justify-between items-center gap-6 xs:flex-col sm:flex-col md:flex-col flex-row-reverse'>
              <div>
                  <img src={staticImg} alt="" srcset="" className='h-[750px] static-img rounded-[37px] overflow-hidden'/>
                </div>
                <div className='flex justify-evenly items-right flex-col gap-28'>
                  <div className='text-5xl font-semibold xs:text-center sm:text-center md:text-center text-right'>
                  إنجازاتنا
                  </div>
                  <div className='grid grid-cols-2 gap-y-24 gap-x-32 
                  xs:gap-x-10
                  sm:gap-x-10
                  md:gap-x-10
                  '>
                    <StaticCard logo = {<FaRegFolderOpen    color='white'   size={30} />} num = "250+"  type ="courses"         />
                    <StaticCard logo = {<MdOutlineDiamond   color='white'   size={30} />} num = "25K+"  type ="Offers"          />
                    <StaticCard logo = {<HiOutlineUserGroup color='white'   size={30} />} num = "71K+"  type ="Students"        />
                    <StaticCard logo = {<AiFillPlayCircle   color='white'   size={30} />} num = "25K+" type ="Recorded Classes"/>
                </div>
                </div>
            </div>
          </div>

          <div className='bg-[#FDF8EE] my-16 py-4 header'>
            <div className='m-auto max-w-[1280px]'>
              <div className='flex justify-between items-center xs:px-4 gap-4'>
                <div className='xs:hidden sm:hidden md:hidden'>
                  <img src={premiumImg} alt="" srcset="" />
                </div>
                <div className='flex flex-col justify-center items-start 
                xs:w-full
                sm:w-full
                md:w-full
                xs:items-center
                sm:items-center
                md:items-center
                 gap-8'>
                  <div className='text-6xl font-extrabold  
                  xs:text-center
                  md:text-center
                  sm:text-center
                  ' >التعلم المتميز خبرة</div>
                  <div className='gap-4 flex flex-col justify-center items-start 
                  xs:items-center xs:justify-items-center
                  sm:items-center sm:justify-items-center
                  md:items-center md:justify-items-center
                  '>
                    <ArPremCard />
                    <ArPremCard />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center flex-col gap-8'>
            <div className='text-center flex flex-col justify-center items-center gap-1'>
              <div className="text-3xl font-semibold font-['Poppins] text-[#050C26]">تقويمنا </div>
              <div className="text-xl font-normal font-['Poppins] text-[#8A8A8A]">يمكنك التحقق من الأحداث لدينا في هذا التقويم</div>
            </div>
          <iframe src="https://calendar.google.com/calendar/embed?height=900&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FCairo&showTitle=0&showDate=1&showNav=1&showPrint=0&showTz=0&src=bW9oYW1lZGFiZGVsaGFsZWFtMTNAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uZWcjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=bW9oYW1lZG1hbmNoZXN0cmF3eUBnbWFpbC5jb20&color=%23F4511E&color=%2333B679&color=%230B8043&color=%23E4C441" title='calender' width="1140" height="900" frameborder="0" scrolling="no" className='
          xs:w-full xs:px-4 xs:h-[500px]
          sm:w-full sm:px-4 sm:h-[500px]
          md:w-full md:px-4 md:h-[500px]
          '></iframe>
          </div>                            

      <div className='py-16'>
        <div className='m-auto max-w-[1280px] flex justify-center items-center xs:px-4'>
          <ArSubscribe />
        </div>
      </div>
      <ArFooter />
      </div>
    </div>
  );
}

export default ArHome;