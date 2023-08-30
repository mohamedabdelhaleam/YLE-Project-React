import React from 'react';

const ChangePassword = () => {
  return (
    <div className='w-full'>
        <div className='text-4xl font-bold'>Your Account</div>
        <div className='text-xl font-semibold'>Personal Information</div>
        <div>
            <form action="">
                <div className='flex items-start gap-4'>
                    <div className='flex flex-col w-1/3'>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">User Name*</label>
                        <input type="text" placeholder='Username' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">First Name*</label>
                        <input type="text" placeholder='First Name' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">Date of Birth*</label>
                        <input type="text" placeholder='DateofBirth' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">Location*</label>
                        <input type="text" placeholder='Country' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">Email*</label>
                        <input type="text" placeholder='Email' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">Last Name*</label>
                        <input type="text" placeholder='Last Name' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">Phone Number*</label>
                        <input type="text" placeholder='Phone Number' className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">Gender</label>
                        <select name="" id="" className="border-2 border-[#AAAAAA] px-2 py-2 placeholder:text-lg">
                            <option value="">Select Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>

                </div>
                <br />
                <label htmlFor="" className="text-xl font-medium">Tell us something about you</label>
                <br />
                <br />
                <textarea name="" id="" cols="30" rows="10" className='w-[calc(66.67%+16px)] border-2 border-[#AAAAAA]'></textarea>
                <br />
                <br />
                <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 bg-[#FF7426] text-white w-1/3 mr-4'>Save change</button>
                <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 text-[#FF7426] w-1/3 '>Cancel</button>

            </form>
        </div>
    </div>
  );
}

export default ChangePassword;
