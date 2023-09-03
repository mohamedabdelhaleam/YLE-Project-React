import React from "react";
import "../../Home/Home.css";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import ArSubscribe from "../ArSubscribe/ArSubscribe";
import ArFooter from "../ArFooter/ArFooter";
import ArCourseCard from "../ArCourseCard/ArCourseCard";
import ArNavbar from "../ArNavbar/ArNavbar";

const ArCourses = () => {
  return (
    <div>
      <ArNavbar />
      <div className="header bg-[#FDF8EE] py-16">
        <div className="max-w-[1280px] m-auto">
          <div>
            <div>
              <div className="font-['Jost'] text-center py-8 text-4xl font-semibold text-[#EF9204]">
                الأقسام المتاحة
              </div>
              <div className="grid grid-cols-4 justify-between items-center gap-5 xs:grid-cols-2 text-center mx-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
                <CategoriesCard />
              </div>
            </div>
            <div className="pt-16 pb-8">
              <div className="font-['Jost'] text-3xl font-semibold text-center">
                الدورات
              </div>
              <div className="font-['Poppins'] text-lg font-normal text-[#8A8A8A] text-center">
                Lorem Ipsum is simply dummy text of the printing.
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-12 xs:grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
              <ArCourseCard />
            </div>
          </div>
        </div>
        <div className="m-auto bg-[#FDF8EE] my-16 max-w-[1280px]">
          <ArSubscribe />
        </div>
        <ArFooter />
      </div>
    </div>
  );
};

export default ArCourses;
