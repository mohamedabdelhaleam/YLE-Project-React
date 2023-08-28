import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

const MyCourses = () => {
  return (
    <div className='w-full'>
        <div className='text-4xl font-bold'>Your Account</div>
        <div className='flex justify-around items-center my-6 border-b-2 border-[#AAAAAA] py-3 '>
            <div className='text-lg font-medium'>All Courses</div>
            <div className='text-lg font-medium'>InProgress Courses</div>
            <div className='text-lg font-medium'>Completed Courses</div>
        </div>
        <div className='grid grid-cols-2 gap-y-12'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    </div>
  );
}

export default MyCourses;
