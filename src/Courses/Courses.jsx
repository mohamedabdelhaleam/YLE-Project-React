import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../Home/Home.css'
import CategoriesCard from '../components/CategoriesCard/CategoriesCard';
import CourseCard from '../components/CourseCard/CourseCard';

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className='header bg-[#FDF8EE] py-16'>
        <div className='max-w-[1280px] m-auto'>
            <div>
                <div>
                    <div className="font-['Jost'] text-center py-8 text-4xl font-semibold text-[#EF9204]">Our Categories</div>
                    <div className='grid grid-cols-4 justify-between items-center gap-5'>
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                        <CategoriesCard />
                    </div>
                </div>
                <div className='pt-16 pb-8'>
                    <div className="font-['Jost'] text-3xl font-semibold text-center">Courses</div>
                    <div className="font-['Poppins'] text-lg font-normal text-[#8A8A8A] text-center">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
                <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
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
        </div>
      </div>
    </div>
  );
}

export default Courses;
