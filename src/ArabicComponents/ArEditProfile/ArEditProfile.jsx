import React from 'react';

const ArEditProfile = () => {
  return (
    <div className='w-full 
        xs:text-center
        sm:text-center
        md:text-center
        lg:text-center
    '>
        <div className='text-4xl font-bold'>Your Account</div>
        <div className='text-xl font-semibold'>Personal Information</div>
        <div>
            <form action="" className='mx-1'>
                <div className='flex items-start justify-end gap-4 '>
                    <div className='flex flex-col w-1/3 xs:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2'>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">اسم المستخدم*</label>
                        <input type="text" placeholder='اسم المستخدم' className="border-2 text-right text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">الاسم الأول*</label>
                        <input type="text" placeholder='الاسم الأول' className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">تاريخ الميلاد*</label>
                        <input type="text" placeholder='تاريخ الميلاد' className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">موقع*</label>
                        <input type="text" placeholder='موقع' className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                    </div>
                    <div className='flex flex-col w-1/3 xs:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2'>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">بريد إلكتروني*</label>
                        <input type="text" placeholder='بريد إلكتروني' className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">اسم العائلة*</label>
                        <input type="text" placeholder='اسم العائلة' className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">رقم التليفون*</label>
                        <input type="text" placeholder='رقم التليفون' className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">النوع</label>
                        <select name="" id="" className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg">
                            <option value="">أختر النوع</option>
                            <option value="">ذكر</option>
                            <option value="">أنثي</option>
                        </select>
                    </div>

                </div>
                <br />
                <label htmlFor="" className="text-xl font-medium">اخبرنا عنك</label>
                <br />
                <br />
                <textarea name="" id="" cols="30" rows="10" className='w-[calc(66.67%+16px)] border-2 text-right xs:w-full border-[#AAAAAA]'></textarea>
                <br />
                <br />
                <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 bg-[#FF7426] text-white w-1/3 mr-4'>حفظ التغييرات</button>
                <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 text-[#FF7426] w-1/3'>إلغاء</button>

            </form>
        </div>
    </div>
  );
}

export default ArEditProfile;
