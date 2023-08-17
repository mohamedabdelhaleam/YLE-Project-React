import React from 'react';
import quizCard from '../../assets/images/online-test1.png'

const InfoCard = () => {
  return (
    <div className='text-white flex justify-evenly items-center gap-3'>
      <div>
        <div className='h-24 w-24 bg-white rounded-md flex justify-center items-center bg-opacity-20'>
          <img src={quizCard} alt="" />
        </div>
      </div>
      <div>
        <div className='text-2xl'>Get Ready For a Career</div>
        <div className='text-sm opacity-60'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</div>
      </div>
    </div>
  );
}

export default InfoCard;
