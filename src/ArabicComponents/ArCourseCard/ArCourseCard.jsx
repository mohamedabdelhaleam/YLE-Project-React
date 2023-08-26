import React from 'react';
import Rating from '@mui/material/Rating';
import './CourseCard.css'
import { BiTime,BiCameraMovie } from 'react-icons/bi';
import { AiOutlineDownload } from 'react-icons/ai';
import courseImg from '../../assets/images/little-girl-participating-online-classes1.jpg'

const ArCourseCard = () => {
  return (
    <div className='course relative py-2 w-[360px] lg:w-[320px] px-2 h-[470px] rounded-md border-2  shadow-lg'>
        <div>
          <img src={courseImg} height={400} alt="Course img" className='rounded-lg min-h-[230px]'/>
          <div className='px-2'>
            <div className='flex justify-between items-start flex-row-reverse py-1'>
              <div className='uppercase text-xl font-medium h-14 overflow-hidden'>UI / UX Design للمبتدئين </div>
              <Rating name="size-small" defaultValue={2} precision={1} size="small" className='pt-1'/>
            </div>
            <div className='text-[#FF7426] text-xl font-semibold text-right'>$98</div>
            <br />
            <hr color='black'/>
            <div className='flex justify-between items-center flex-row-reverse text-[#343434] py-2'>
              <div className='flex justify-evenly items-center flex-row-reverse text-sm'><BiTime size={22} color='#343434' /><div className='px-1'>22 ساعة و 30 دقيقة</div>  </div>
              <div className='flex justify-evenly items-center flex-row-reverse text-sm'><BiCameraMovie size={22} color='#343434' /><div className='px-1'>34 دورة</div>  </div>
              <div className='flex justify-evenly items-center flex-row-reverse text-sm'><AiOutlineDownload size={22} color='#343434' /><div className='px-1'>250 مبيعات</div>  </div>
            </div>
          </div>
          <div className='h-[55px] w-[200px] left-20 bg-[#FF7426] text-white rounded-full flex justify-center items-center absolute bottom-[-27.5px]'>
            <div>الانضمام إلى الدورة</div>
          </div>
        </div>
    </div>
  );
}

export default ArCourseCard;
