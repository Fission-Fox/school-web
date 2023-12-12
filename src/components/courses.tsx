import React from "react";
import courses from "@/components/courses";
export default function Courses() {
  return (
    <>
      <div className="flex flex-row flex-wrap  justify-evenly pt-50 pb-50 w-[70%] m-auto py-8  bg-[#D2093C]   text-white font-sans gap-10">
        <div className="flex flex-col justify-center items-center px-8 m-auto">
          <div className="font-bold text-xl ">Successfully </div>
          <div className="font-bold text-xl ">Trained</div>
          <div className="font-semibold text-[50px] ">0</div>
          <div className="font-medium  text-[12px] leading-4 tracking-widest  ">
            ENROLLED LEARNERS
          </div>
        </div>
        <div className="inline-block h-[80%] my-auto w-[1px] self-stretch bg-[rgba(255,255,255,.2)] opacity-100 dark:opacity-50"></div>
        <div className="flex flex-col justify-center items-center px-8 m-auto">
          <div className="font-bold text-xl">Available</div>
          <div className="font-bold text-xl">Courses</div>
          <div className="font-semibold text-[50px]">0</div>
          <div className="font-medium text-[12px] leading-4 tracking-widest">
            COUNTRYWIDE AWARDS
          </div>
        </div>
        <div className="inline-block  h-[80%] my-auto w-[1px] self-stretch  bg-[rgba(255,255,255,.2)] opacity-100 dark:opacity-50 "></div>

        <div className="flex flex-col justify-center items-center px-12 m-auto">
          <div className="font-bold text-xl">Scheduled </div>
          <div className="font-bold text-xl">Events</div>
          <div className="font-semibold text-[50px]">0</div>
          <div className="font-medium text-[12px] leading-4 tracking-widest">
            SUCCESS EVENTS
          </div>
        </div>
        <div className="inline-block  h-[80%] my-auto w-[1px] self-stretch bg-[rgba(255,255,255,.2)] opacity-100 dark:opacity-50 "></div>
        <div className="flex flex-col justify-center items-center px-12 m-auto w-full">
          <div className="font-bold text-xl">Getting</div>
          <div className="font-bold text-xl">Featured on</div>
          <div className="font-semibold text-[50px]">0</div>
          <div className="font-medium text-[12px] leading-4 tracking-widest">
            ONLINE COURSES
          </div>
        </div>
      </div>
    </>
  );
}
