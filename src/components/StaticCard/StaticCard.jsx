import React from 'react';


const StaticCard = ({logo,num,type}) => {
  return (
    <div className='flex justify-evenly items-center gap-12'>
      <div className='w-20 h-20 bg-[#FF7426] flex justify-center items-center rounded-lg'>
      {
        logo
      }
      </div>
      <div>
        <div className='text-4xl font-semibold'>{num}</div>
        <div className='text-sm font-medium text-[#33363F]'>{type}</div>
      </div>
    </div>
  );
}

export default StaticCard;
