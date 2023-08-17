import React from 'react';
import { MdOutlineRocketLaunch } from 'react-icons/md';

const AboutWho = () => {
  return (
    <div className='flex justify-around items-center gap-2'>
      <div><MdOutlineRocketLaunch color='#FEC536' size={80}/></div>
      <div>
        <div className="font-['Roboto'] text-3xl">Lorem Ipsum</div>
        <div className="font-['Roboto'] text-lg font-normal">Lorem Ipsum is simply dummy
            text of the printing and
            typesetting industry.</div>
      </div>
    </div>
  );
}

export default AboutWho;
