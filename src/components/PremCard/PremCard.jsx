import React from 'react';
import quizCard from '../../assets/images/online-test1.png'

const PremCard = () => {
  return (
    <div className='text-black flex justify-evenly items-center gap-3'>
      <div>
        <div className='h-24 w-24 bg-[#4D2C5E] rounded-md flex justify-center items-center'>
          <img src={quizCard} alt="" />
        </div>
      </div>
      <div>
        <div className="text-3xl font-medium font-['Roboto']">Easily Accessible</div>
        <div className="text-2xl font-medium font-['Roboto'] text-[#8A8A8A]">Learning Will fell Very Comfortable With Courslab.</div>
      </div>
    </div>
  );
}

export default PremCard;
