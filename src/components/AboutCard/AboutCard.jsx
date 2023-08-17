import React from 'react';
import { MdOutlineRocketLaunch } from 'react-icons/md';

const AboutCard = () => {
  return (
    <div className='flex relative justify-center text-center items-center gap-28 flex-col p-4 py-16 bg-[#FDF8EE]'>
      <div className='w-3/4 h-3 bg-[#C4C4C4] absolute top-[-6px]'></div>
      <div className='w-3/4 h-3 bg-[#C4C4C4] absolute bottom-[-6px]'></div>
      <div><MdOutlineRocketLaunch color='red' size={50}/></div>
      <div className='flex justify-center items-center flex-col gap-16'>
        <div className="font-['Roboto'] text-2xl font-normal">Lorem Ipsum is simply</div>
        <div className="font-['Roboto'] text-xl font-light">Lorem Ipsum is simply dummy
          text of the printing and typesetting
          industry. Lorem Ipsum has been
          the industry's standard dummy
          text ever since the 1500s,</div>
      </div>
    </div>
  );
}

export default AboutCard;
