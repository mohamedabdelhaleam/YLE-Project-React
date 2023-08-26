import React from 'react';
import quizCard from '../../assets/images/online-test1.png'

const ArPremCard = () => {
  return (
    <div className='text-black flex justify-evenly items-center flex-row-reverse gap-3'>
      <div>
        <div className='h-24 w-24 bg-[#4D2C5E] rounded-md flex justify-center items-center'>
          <img src={quizCard} alt="" />
        </div>
      </div>
      <div>
        <div className="text-3xl font-medium text-right font-['Roboto']">يمكن الوصول إليها بسهولة</div>
        <div className="text-2xl font-medium text-right font-['Roboto'] text-[#8A8A8A]">سيكون التعلم مريحًا جدًا مع Courslab.</div>
      </div>
    </div>
  );
}

export default ArPremCard;
