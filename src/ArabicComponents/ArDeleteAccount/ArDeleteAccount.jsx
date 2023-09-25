import React from 'react';

const DeleteAccount = () => {

  return (
    <div className='w-full flex justify-end items-start'>
        <div className='w-1/2  flex justify-around items-end flex-col gap-10 mx-28
        xs:w-full xs:mx-2 xs:text-center
        sm:w-full sm:mx-2 sm:text-center
        md:w-full md:mx-2 md:text-center
        lg:w-full lg:mx-2 lg:text-center
        '>
          <div className='text-4xl font-bold w-full'>حذف الحساب</div>
          <div className='text-2xl font-medium w-full'>إغلاق الحساب</div>
          <div className='text-right'>محمد، نحن نأسف لرؤيتك تذهب
              إذا كنت ستغادر لأنك تتلقى عددًا كبيرًا جدًا من رسائل البريد الإلكتروني المرسلة منا، فيمكنك تغيير إعداداتك
              سيؤدي حذف حسابك إلى إزالة إمكانية الوصول إلى الدورات والبرامج والدرجات العلمية الخاصة بك. يتضمن ذلك التقدم الذي تحرزه في الدورات التدريبية الحالية وأي تعليقات قدمتها وأي بيانات رقمية اشتريتها.
              لا يمكن التراجع عن حذف حسابك. لا توجد وسيلة لاستعادة حسابك
          </div>
          <button className='text-lg font-medium rounded-md border-2 border-[#FF7426] py-2 bg-[#FF7426] text-white w-1/3 
          xs:w-[60%] xs:m-auto
          sm:w-[60%] sm:m-auto
          md:w-[60%] md:m-auto
          lg:w-[60%] lg:m-auto
          '>حذف الحساب</button>
          
        </div>
    </div>
  );
}

export default DeleteAccount;
