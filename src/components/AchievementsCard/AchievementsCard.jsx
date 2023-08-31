import React from 'react';
import Gold from '../../assets/images/Medallionsgold.png'

const AchievementsCard = () => {
  return (
    <div className='flex rounded-xl justify-between py-3 text-center bg-[#f3f2f188] items-center flex-col shadow-md h-72 px-12'>
      <img src={Gold} alt="" />
      <h1>Food Safety Protocols</h1>
      <h3>Bronze Certified</h3>
      <button className='bg-[#FF7426] text-white py-1 px-8 rounded-md'>Click to see</button>
    </div>
  );
}

export default AchievementsCard;
