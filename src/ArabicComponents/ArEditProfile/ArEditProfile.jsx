import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../Api/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArEditProfile = () => {
    const [userData,setUserData] = useState({})
    const [editImage ,setEditImage] = useState("")
    const [editFirstName ,setEditFirstName] = useState(`${userData.firstName}`)
    const [editLastName ,setEditLastName] = useState("")
    const [editLocation ,setEditLocation] = useState("")
    const [editPhone ,setEditPhone] = useState("")
    
    const token = window.localStorage.getItem("YleUserToken")
    useEffect(()=>{
        axios.get(`${baseUrl}/Account?token=${token}`).then((response)=>{
            setUserData(response.data)
        })
    },[token])
    const editData = (e)=>{
        e.preventDefault();
        axios.post(`${baseUrl}/Account/Edit`,{
            email: userData.email,
            gender: userData.gender,
            imgURL: userData.imgURL,
            firstName: editFirstName,
            lastName: editLastName,
            phoneNumber: editPhone,
            bio: userData.bio,
            location: editLocation,
            dataofBirth: userData.dataofBirth
        }).then((response)=>{
            console.log("Done");
            toast.success(`Changed Done`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }).catch(error => {
            console.log(error)
            toast.error(`Error Please Retype Data`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    }
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
                        <input type="text"  placeholder='اسم المستخدم' value={`${userData.firstName} ${userData.lastName}`} className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">الاسم الأول*</label>
                        <input type="text" placeholder='الاسم الأول' defaultValue={userData.firstName} className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg" onChange={(e)=>{
                            setEditFirstName(e.target.value)
                        }}/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">تاريخ الميلاد*</label>
                        <input type="datetime-local" placeholder='تاريخ الميلاد' value={userData.dataofBirth} className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">موقع*</label>
                        <input type="text" defaultValue={userData.location} placeholder='موقع' className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg" onChange={(e)=>{
                            setEditLocation(e.target.value)
                        }}/>
                    </div>
                    <div className='flex flex-col w-1/3 xs:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2'>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">بريد إلكتروني*</label>
                        <input type="email" value={userData.email} placeholder='بريد إلكتروني' className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg"/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">اسم العائلة*</label>
                        <input type="text" placeholder='اسم العائلة' defaultValue={userData.lastName} className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg" onChange={(e)=>{
                            setEditLastName(e.target.value)
                        }}/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">رقم التليفون*</label>
                        <input type="text" placeholder='رقم التليفون' defaultValue={userData.phoneNumber} className="border-2 text-right border-[#AAAAAA] px-2 py-2 placeholder:text-lg" onChange={(e)=>{
                            setEditPhone(e.target.value)
                        }}/>
                        <br />
                        <label htmlFor="" className="text-xl font-medium">النوع</label>
                        <select name="" id="" value={userData.gender} className="border-2 text-right  border-[#AAAAAA] px-2 py-2 placeholder:text-lg">
                            <option value="">أختر النوع</option>
                            <option value="Male">ذكر</option>
                            <option value="Female">أنثي</option>
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
                <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 bg-[#FF7426] text-white w-1/3 mr-4' onClick={editData}>حفظ التغييرات</button>
                <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 text-[#FF7426] w-1/3'>إلغاء</button>

            </form>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </div>
  );
}

export default ArEditProfile;
