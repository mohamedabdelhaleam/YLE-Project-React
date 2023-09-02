import React from 'react';
import teamImg from '../../assets/images/nahidphoto.png'
import Rating from '@mui/material/Rating';

const AboutTeamCard = () => {
  return (
    <div className='flex justify-center text-center items-center gap-4 flex-col p-8 rounded-md shadow-lg border-2 border-[#E0E6ED]'>
      <div><img src={teamImg} alt="" srcset="" /></div>
      <div className='flex justify-center items-center flex-col gap-2'>
        <div className="font-['Roboto'] text-2xl font-normal text-[#3B3F5C]">Nahid Hasan</div>
        <div className="font-['Roboto'] text-lg font-light text-[#3B3F5C]">UX/UI Designer</div>
        <div className="font-['Roboto'] text-xl font-light">
          <Rating name="size-small" defaultValue={2} precision={1} size="small" className='pt-1'/>
        </div>
        <div className="font-['Roboto'] text-lg text-[#3B3F5C] font-light">أفضل مصمم فى العالم يصمم وجهات للمواقع والموبيلات و المحلات وكل ما هو جديد</div>
      </div>
    </div>
  );
}

export default AboutTeamCard;
