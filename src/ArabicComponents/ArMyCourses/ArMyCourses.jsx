import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const ArMyCourses = () => {
  const [isAllCourses,setIsAllCourses] = useState(true)
  const [isInProgressCourses,setIsInProgressCourses] = useState(false)
  const [isCompletedCourses,setIsCompletedCourses] = useState(false)
  return (
    <div className='w-full'>
        <div className='text-4xl font-bold 
        xs:text-center 
        sm:text-center 
        md:text-center 
        lg:text-center 
        xs:my-8 
        sm:my-8 
        lg:my-8 
        md:my-8
        '>الحساب الخاص بك</div>
        <div className='flex justify-around flex-row-reverse items-center my-6 border-b-2 border-[#AAAAAA] py-3 gap-1 '>
            <div className='text-lg xs:text-center font-medium'><Link to="all-courses" className={isAllCourses ? "text-[#FF7426]" :""}
            onClick={
              (e)=>{
                setIsAllCourses(true)
                setIsInProgressCourses(false)
                setIsCompletedCourses(false)
              }
            }>جميع الدورات</Link></div>
            <div className='text-lg font-medium xs:text-center'><Link to="inprogress-courses" className={isInProgressCourses ? "text-[#FF7426]" :""}
            onClick={
              (e)=>{
                setIsAllCourses(false)
                setIsInProgressCourses(true)
                setIsCompletedCourses(false)
              }
            }>الدورات الجارية</Link></div>
            <div className='text-lg font-medium xs:text-center'><Link to="completed-courses" className={isCompletedCourses ? "text-[#FF7426]" :""}
            onClick={
              (e)=>{
                setIsAllCourses(false)
                setIsInProgressCourses(false)
                setIsCompletedCourses(true)
              }
            }>الدورات المكتملة</Link></div>
        </div>
        <Outlet />
    </div>
  );
}

export default ArMyCourses;
