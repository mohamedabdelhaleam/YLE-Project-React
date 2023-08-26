import React from 'react';
import { BiSolidChart,BiSolidTimeFive } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';

const BuyCard = () => {
  return (
    <div className="bg-[#FDF8EE] py-8 px-8 font-['Roboto]">
        <div className='my-1'>$18.99</div>
        <div className='my-1'>68% Dis. $58.88 USD</div>
        <div className='my-3 w-full flex justify-center items-center py-2 bg-[#EF9204] text-white text-lg font-medium uppercase'>
            <div>Buy Now</div>
        </div>
        <div className='my-1 text-lg font-medium text-[#2c2c2c]'>This Course Include:</div>
        <div className='my-1 flex justify-start justify-items-start gap-[calc(32px+10px)]'><div className='flex justify-center text-[#606060] text-lg font-normal items-center gap-[6px]'><BiSolidChart color='#EF9204'/>Skill Level: </div> <div className='text-lg'> Beginner</div></div>
        <div className='my-1 flex justify-start justify-items-start gap-[calc(40px+10px)]'><div className='flex justify-center text-[#606060] text-lg font-normal items-center gap-[6px]'><BiSolidTimeFive color='#EF9204'/>Duration: </div> <div className='text-lg'> 05hrs 45 min</div></div>
        <div className='my-1 flex justify-start justify-items-start gap-[calc(6px+10px)]'><div className='flex justify-center text-[#606060] text-lg font-normal items-center gap-[6px]'><AiFillEdit color='#EF9204'/>Last Updated: </div> <div className='text-lg'> March 21,2023</div></div>
        <div className='my-1 flex justify-start justify-items-start gap-[calc(48px+10px)]'><div className='flex justify-center text-[#606060] text-lg font-normal items-center gap-[6px]'><BsBook color='#EF9204'/>Lessons: </div> <div className='text-lg'> 10 Lessons</div></div>
        <div className='my-1 flex justify-start justify-items-start gap-[calc(44px+10px)]'><div className='flex justify-center text-[#606060] text-lg font-normal items-center gap-[6px]'><HiOutlineUserGroup color='#EF9204'/>Students: </div> <div className='text-lg'> 1500</div></div>
    </div>
  );
}

export default BuyCard;
