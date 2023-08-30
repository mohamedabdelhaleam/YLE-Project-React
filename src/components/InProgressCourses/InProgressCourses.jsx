import React from 'react';
import CourseCardMyCourse from '../CourseCardMyCourse/CourseCardMyCourse';

const InProgressCourses = () => {
  return (
    <div className='grid grid-cols-3 gap-y-16 w-full'>
    <CourseCardMyCourse />
    <CourseCardMyCourse />
    <CourseCardMyCourse />
  </div>
  );
}

export default InProgressCourses;
