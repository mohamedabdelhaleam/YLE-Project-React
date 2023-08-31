import React from 'react';

const DeleteAccount = () => {

  return (
    <div className='w-full'>
        <div className='w-1/2  flex justify-around items-start flex-col gap-10 mx-28
        xs:w-full xs:mx-2 xs:text-center
        sm:w-full sm:mx-2 sm:text-center
        md:w-full md:mx-2 md:text-center
        lg:w-full lg:mx-2 lg:text-center
        '>
          <div className='text-4xl font-bold w-full'>Delete Account</div>
          <div className='text-2xl font-medium w-full'>Close Account</div>
          <div>Mohamed, we’re sorry to see you go
              if you’re leaving because you’re receiving too many emails form us , you can change your settings
              Deleting your account will remove all access to your courses, programs and degrees. this includes your progress on current courses, any comments you have made, and any digital statements you have bought.
              Deleting your account cannot be undone. there is no way to restore your account
          </div>
          <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 bg-[#FF7426] text-white w-1/3 
          xs:w-[60%] xs:m-auto
          sm:w-[60%] sm:m-auto
          md:w-[60%] md:m-auto
          lg:w-[60%] lg:m-auto
          '>Delete Account</button>
          
        </div>
    </div>
  );
}

export default DeleteAccount;
