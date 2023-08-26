import React from 'react';

const EditProfile = () => {
  return (
    <div className='w-full'>
        <div></div>
        <div></div>
        <div>
            <form action="">
                <div className='flex items-start gap-4'>
                    <div className='flex flex-col w-1/4'>
                        <br />
                        <label htmlFor="">User Name*</label>
                        <input type="text" placeholder='Username' className="border-2 border-black"/>
                        <br />
                        <label htmlFor="">First Name*</label>
                        <input type="text" placeholder='First Name' className="border-2 border-black"/>
                        <br />
                        <label htmlFor="">Date of Birth*</label>
                        <input type="text" placeholder='DateofBirth' className="border-2 border-black"/>
                        <br />
                        <label htmlFor="">Location*</label>
                        <input type="text" placeholder='Country' className="border-2 border-black"/>
                    </div>
                    <div className='flex flex-col w-1/4'>
                        <br />
                        <label htmlFor="">Email*</label>
                        <input type="text" placeholder='Email' className="border-2 border-black"/>
                        <br />
                        <label htmlFor="">Last Name*</label>
                        <input type="text" placeholder='Last Name' className="border-2 border-black"/>
                        <br />
                        <label htmlFor="">Phone Number*</label>
                        <input type="text" placeholder='Phone Number' className="border-2 border-black"/>
                        <br />
                        <label htmlFor="">Gender</label>
                        <select name="" id="" className="border-2 border-black">
                            <option value="">Select Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>

                </div>
            </form>
        </div>
    </div>
  );
}

export default EditProfile;
