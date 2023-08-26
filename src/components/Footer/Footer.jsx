import React from 'react';
import logoImg from '../../assets/images/YLE-logo.png'

const Footer = () => {
  return (
    <div className='bg-[#FDF8EE] p-8'>
      <div className='m-auto max-w-[1280px]'>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col gap-3 w-1/4'>
            <div><img src={logoImg} alt="" srcset="" /></div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy a type specimen book.</div>
          </div>
          <div className='flex flex-col gap-3 '>
            <div>Company</div>
            <div>About Us</div>
            <div>How to work?</div>
            <div>Populer Course</div>
            <div>Service</div>
          </div>
          <div className='flex flex-col gap-3'>
            <div>Courses</div>
            <div>Categories</div>
            <div>Offline Course</div>
            <div>Video Course</div>
          </div>
          <div className='flex flex-col gap-3'>
            <div>Support</div>
            <div>FAQ</div>
            <div>Help Center</div>
            <div>Career</div>
            <div>Privacy</div>
          </div>
          <di v className='flex flex-col gap-3'>
            <div>Contac Info</div>
            <div>+0913-705-3875</div>
            <div>ElizabethJ@jourrapide.com</div>
            <div>4808 Skinner Hollow Road
            <br /> Days Creek, OR 97429</div>
          </di>
        </div>
      </div>
    </div>
  );
}

export default Footer;
