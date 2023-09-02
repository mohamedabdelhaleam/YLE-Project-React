import React from 'react';
import { MdOutlineRocketLaunch } from 'react-icons/md';

const ArAboutWho = () => {
  return (
    <div className='flex justify-around items-center gap-2 xs:flex-col sm:flex-col md:flex-col lg:w-full flex-row-reverse'>
      <div><MdOutlineRocketLaunch color='#FEC536' size={80}/></div>
      <div>
        <div className="font-['Roboto'] text-3xl">لوريم إيبسوم</div>
        <div className="font-['Roboto'] text-lg font-normal">لوريم إيبسوم مجرد دمية نص الطباعة و صناعة التنضيد.</div>
      </div>
    </div>
  );
}

export default ArAboutWho;
