import React from 'react';
import CourseCardMyCourse from '../CourseCardMyCourse/CourseCardMyCourse';

const CompletedCourses = () => {
  return (
    <div className='grid grid-cols-3 gap-y-16 w-full justify-items-center
      xs:grid-cols-1 xs:m-auto
      sm:grid-cols-1 sm:m-auto 
      md:grid-cols-2 md:m-auto
      '>
    <CourseCardMyCourse />
    <CourseCardMyCourse />
  </div>
  );
}

export default CompletedCourses;
