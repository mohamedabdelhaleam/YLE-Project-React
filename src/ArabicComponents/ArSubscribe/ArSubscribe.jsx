import React from 'react';
import arrowSubs from '../../assets/images/Vector.png'
import lampSubs from '../../assets/images/casual.png'

const ArSubscribe = () => {
  return (
    <div className='bg-[#4D2C5E] relative xs:px-4  w-full py-28 overflow-hidden rounded-lg flex justify-center items-center flex-col gap-4' >
      <div className='w-32 h-32 rounded-full border-2 border-white absolute left-[-20px] top-[-20px]'></div>
      <div className='w-32 h-32 rounded-full border-2 border-white absolute left-[-10px] top-[-35px]'></div>
      <div className='w-32 h-32 rounded-full border-2 border-white absolute right-[-20px] top-[-20px]'></div>
      <div className='w-32 h-32 rounded-full border-2 border-white absolute right-[-10px] top-[-35px]'></div>
      <div className='w-32 h-32  absolute xs:bottom-[-10px] left-[60px] bottom-[20px]'>
        <img src={arrowSubs} alt="" srcset="" />
      </div>
      <div className='w-32 h-32  absolute xs:bottom-[-10px] right-[60px] bottom-[20px]'>
        <img src={lampSubs} alt="" srcset="" />
      </div>
      <div className='text-center'>
        <div className='text-white text-4xl font-semibold xs:text-3xl py-3'>اشترك في نشرتنا الإخبارية</div>
        <div className='text-white text-lg font-normal xs:text-base'>لوريم إيبسوم هو ببساطة نص شكلي للطباعة.</div>
      </div>
      
      <form action="" className='w-1/2 xs:w-full flex justify-between items-center p-2 rounded-full overflow-hidden gap-2 bg-white'>
          <input type="text"  className='rounded-full px-3 focus:outline-[#FF7426] py-3 w-3/4'placeholder='عنوان البريد الإلكتروني'/>
          <button className='py-3 px-16 rounded-full text-white bg-[#FF7426]'>اشتراك</button>
      </form>
    </div>
  );
}

export default ArSubscribe;
