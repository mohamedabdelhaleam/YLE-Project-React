import React from 'react';

const DeleteAccount = () => {

  return (
    <div className='w-full'>
        <div className='w-1/2 xs:w-full mx-28 xs:mx-2 xs:text-center flex justify-around items-start flex-col gap-10'>
          <div className='text-4xl font-bold'>Delete Account</div>
          <div className='text-2xl font-medium'>Close Account</div>
          <div>Mohamed, we’re sorry to see you go
              if you’re leaving because you’re receiving too many emails form us , you can change your settings
              Deleting your account will remove all access to your courses, programs and degrees. this includes your progress on current courses, any comments you have made, and any digital statements you have bought.
              Deleting your account cannot be undone. there is no way to restore your account
          </div>
          <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 bg-[#FF7426] text-white w-1/3 xs:w-[90%] xs:m-auto '>Delete Account</button>
          
        </div>
    </div>
  );
}

export default DeleteAccount;
