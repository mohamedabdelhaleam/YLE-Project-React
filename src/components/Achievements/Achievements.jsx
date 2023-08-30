import React from 'react';
import AchievementsCard from '../AchievementsCard/AchievementsCard';


const Achievements = () => {
  return (
    <div className='w-full'>
      <div className='pb-4 pl-4 xs:pl-0 text-3xl font-semibold'>Achievements</div>
      <div className='w-full grid grid-cols-4 gap-4 gap-y-6 xs:grid-cols-1 xs:mx-4'>
      <AchievementsCard />
      <AchievementsCard />
      <AchievementsCard />
      <AchievementsCard />
      <AchievementsCard />
      </div>
    </div>
  );
}

export default Achievements;
