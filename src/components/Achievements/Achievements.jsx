import React from 'react';
import AchievementsCard from '../AchievementsCard/AchievementsCard';


const Achievements = () => {
  return (
    <div className='w-full'>
      <div className='pb-4 pl-4 xs:pl-0 text-3xl font-semibold
      xs:text-center
      sm:text-center
      md:text-center
      lg:text-center
      '>Achievements</div>
      <div className='w-full grid grid-cols-4 gap-4 gap-y-6 xs:m-auto
      xs:grid-cols-1 xs:mx-0
      sm:grid-cols-2 sm:mx-4
      md:grid-cols-3 md:mx-4
      lg:grid-cols-4 lg:mx-4
      '>
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
