import React from 'react';
import quizCard from '../../assets/images/online-test1.png'

const ArInfoCard = () => {
  return (
    <div className='text-white flex justify-evenly items-center flex-row-reverse gap-3'>
      <div>
        <div className='h-24 w-24 bg-white rounded-md flex justify-center items-center bg-opacity-20'>
          <img src={quizCard} alt="" />
        </div>
      </div>
      <div className='text-right'>
        <div className='text-2xl'>احصل على شهادة</div>
        <div className='text-sm opacity-60'>خلافًا للاعتقاد الشائع ، فإن Lorem Ipsum ليس مجرد نص عشوائي. لها جذور في BC ، مما يجعلها أكثر من 2000 عام.</div>
      </div>
    </div>
  );
}

export default ArInfoCard;
