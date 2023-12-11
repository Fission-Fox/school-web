import React from "react";
import courses from "@/components/courses";
export default function Courses() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-evenly w-[1000px] h-60 pt-50 pb-50 bg-[#D2093C]   text-white font-sans gap-10">
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">Successfully </div>
            <div className="font-bold">Trained</div>
            <div className="font-semibold text-[50px]">0</div>
            <div className="font-semibold text-[12px] leading-4 tracking-widest">
              Enrolled Learners
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">Available</div>
            <div className="font-bold">Courses</div>
            <div className="font-semibold text-[50px]">0</div>
            <div className="font-semibold text-[12px] leading-4 tracking-widest">
              Countrywide Awards
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">Scheduled </div>
            <div className="font-bold">events</div>
            <div className="font-semibold text-[50px]">0</div>
            <div className="font-semibold text-[12px] leading-4 tracking-widest">
              Success Events
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-bold">Getting</div>
            <div className="font-bold">Featured on</div>
            <div className="font-semibold text-[50px]">0</div>
            <div className="font-semibold text-[12px] leading-4 tracking-widest">
              ONLINE COURSES
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
