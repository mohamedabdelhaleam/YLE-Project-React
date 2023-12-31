import React from 'react';

const AccountSecurity = () => {
  return (
    <div className='w-full mx-16 
    xs:mx-0 xs:text-center
    sm:mx-0 sm:text-center
    md:mx-0 md:text-center
    lg:mx-0 lg:text-center
    '>
        <div className='text-4xl font-bold py-4'>Your Account</div>
        <div className='text-xl font-semibold'>Change Password</div>
        <div className='text-lg font-normal'>Change your password, we recommend using a secure password you don’t use anywhere else.</div>
        <div>
            <form action="">
                <div className='flex items-start gap-4'>
                    <div className='flex flex-col w-1/3 
                    xs:w-[90%] xs:text-center xs:m-auto
                    sm:w-[90%] sm:text-center sm:m-auto
                    md:w-[90%] md:text-center md:m-auto
                    lg:w-[90%] lg:text-center lg:m-auto
                    '>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">Current Password</label>
                        <input type="password" placeholder='Enter Current password' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">New Password</label>
                        <input type="password" placeholder='Enter new password' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">Re-type new password</label>
                        <input type="password" placeholder='Re-type new password' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                    </div>

                </div>
                <br />
                <br />
                <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 bg-[#FF7426] text-white w-1/3   mr-4 
                xs:w-1/2 xs:mr-0
                sm:w-1/2 sm:mr-0
                md:w-1/2 md:mr-0
                lg:w-1/2 lg:mr-0
                '>Save change</button>

            </form>
        </div>
    </div>
  );
}

export default AccountSecurity;
