import React from 'react';
import Rating from '@mui/material/Rating';

const CourseReview = () => {
  return (
    <div className='border-b-2 border-[#979797] pb-4 gap-4 flex flex-col'>
      <div className='flex gap-4 items-center'>
        <div className="w-14 h-14 rounded-full bg-slate-500"></div>
        <div>
            <div className='text-xl font-semibold'>Carla D.</div>
            <div className='flex gap-4 items-center'>
                <div><Rating name="size-small" defaultValue={4} precision={1} size="small" className='pt-1'/></div>
                <div className='text-[#AFAFAF]'>3 years ago</div>
            </div>
        </div>
      </div>
      <div className='text-[#606060]'>
            Lorem Ipsum is simply dummy text of the printing :
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.
        </div>
    </div>
  );
}

export default CourseReview;
