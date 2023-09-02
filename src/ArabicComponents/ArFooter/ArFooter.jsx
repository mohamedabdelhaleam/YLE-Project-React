import React from "react";
import logoImg from "../../assets/images/YLE-logo.png";

const ArFooter = () => {
  return (
    <div className="bg-[#FDF8EE] p-8">
      <div className="m-auto max-w-[1280px]">
        <div
          className="flex justify-between items-start text-right flex-row-reverse
        xs:flex-col xs:text-center xs:items-center xs:gap-8
        sm:flex-col sm:text-center sm:items-center sm:gap-8
        md:flex-col md:text-center md:items-center md:gap-8"
        >
          <div className="flex flex-col gap-3 w-1/4 items-center xs:w-full xs:text-center md:w-full sm:text-center sm:w-full md:text-center">
            <div>
              <img src={logoImg} alt="" srcset="" />
            </div>
            <div>
              لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد.
              كان لوريم إيبسوم هو الدمية القياسية في هذه الصناعة ، وهي عبارة عن
              كتاب عينات من النوع.
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="text-center text-lg font-semibold border-b-2 border-black">
              شركة
            </div>
            <div>معلومات عنا</div>
            <div>كيف يعمل؟</div>
            <div>أشهر الكورسات</div>
            <div>خدمة</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-center text-lg font-semibold border-b-2 border-black">
              الدورات
            </div>
            <div>فئات</div>
            <div>كورسات أوفلاين</div>
            <div>دورة فيديو </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-center text-lg font-semibold border-b-2 border-black">
              الدعم
            </div>
            <div>التعليمات</div>
            <div>مركز المساعدة</div>
            <div>حياة مهنية</div>
            <div>خصوصية </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-center text-lg font-semibold border-b-2 border-black">
            للتواصل
            </div>
            <div>+0913-705-3875</div>
            <div>ElizabethJ@jourrapide.com</div>
            <div>
              4808 Skinner Hollow Road
              <br /> Days Creek, OR 97429
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArFooter;
