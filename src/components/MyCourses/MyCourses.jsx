import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyCourses = () => {
  const [isAllCourses,setIsAllCourses] = useState(true)
  const [isInProgressCourses,setIsInProgressCourses] = useState(false)
  const [isCompletedCourses,setIsCompletedCourses] = useState(false)
  return (
    <div className='w-full'>
        <div className='text-4xl font-bold'>My Courses</div>
        <div className='flex justify-around items-center my-6 border-b-2 border-[#AAAAAA] py-3 '>
            <div className='text-lg font-medium'><Link to="all-courses" className={isAllCourses ? "text-[#FF7426]" :""}
            onClick={
              (e)=>{
                setIsAllCourses(true)
                setIsInProgressCourses(false)
                setIsCompletedCourses(false)
              }
            }>All Courses</Link></div>
            <div className='text-lg font-medium'><Link to="inprogress-courses" className={isInProgressCourses ? "text-[#FF7426]" :""}
            onClick={
              (e)=>{
                setIsAllCourses(false)
                setIsInProgressCourses(true)
                setIsCompletedCourses(false)
              }
            }>InProgress Courses</Link></div>
            <div className='text-lg font-medium'><Link to="completed-courses" className={isCompletedCourses ? "text-[#FF7426]" :""}
            onClick={
              (e)=>{
                setIsAllCourses(false)
                setIsInProgressCourses(false)
                setIsCompletedCourses(true)
              }
            }>Completed Courses</Link></div>
        </div>
        <Outlet />
    </div>
  );
}

export default MyCourses;
