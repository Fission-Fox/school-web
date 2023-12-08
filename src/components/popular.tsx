import Image from "next/image";
import React from "react";
import Img from "@/assets/images/line.png";
import img from "@/assets/images/pic 5.png";
import imgs from "@/assets/images/pic 6.png";
import imgss from "@/assets/images/pic 7.png";
import imgsss from "@/assets/images/pic8.png";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Popular() {
  return (
    <>
      <div>
        <div className="  w-full flex flex-col items-center ">
          <h1 className="font-bold text-[50px] font-sans text-blue-900  text-center mt-5 ">
            Popular Courses
          </h1>

          <Image className="logo" src={Img} alt="" />
        </div>
        <div className="flex  gap-6 justify-center mt-10 flex-wrap">
          <div className="w-[306px] ">
            <Image className=" " src={img} alt="" />
            <div className="flex font-sans gap-6  mt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 bg-red-500 h-2 rounded-[50%]"></div>
                <p className="text-red-500 "> UX Design</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-[50%] bg-blue-900 gap-6"></div>
                <p className="text-blue-900  "> 24 Lessons</p>
              </div>
            </div>
            <p className="font-sans text-25 text-blue-900 font-bold  hover:!text-red-900 cursor-pointer mb-6">
              Dave conservatoire is the Entirely free online.
            </p>{" "}
            <hr />
            <div className="flex gap-28">
              <p className="font-sans gap-2">
                {" "}
                <SupervisorAccountIcon />
                77 Students
              </p>
              <p className="font-sans  text-red-700 font-bold text-xl">
                {" "}
                <AttachMoneyIcon />
                68.00
              </p>
            </div>
          </div>

          <div className="w-[306px] ">
            <Image className="" src={imgs} alt="" />
            <div className="flex font-sans gap-6  mt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 bg-red-500 h-2 rounded-[50%]"></div>
                <p className="text-red-500 "> UX Design</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-[50%] bg-blue-900 gap-6"></div>
                <p className="text-blue-900  "> 39 Lessons</p>
              </div>
            </div>
            <p className="font-sans text-25 text-blue-900 font-bold  hover:!text-red-900 cursor-pointer mb-6">
              Strategy law and Organization foundation.
            </p>{" "}
            <hr />
            <div className="flex  gap-28">
              <p className="font-sans">
                {" "}
                <SupervisorAccountIcon /> 99 Students
              </p>
              <p className="font-sans  text-red-700 font-bold text-xl">
                {" "}
                <AttachMoneyIcon />
                99.00
              </p>
            </div>
          </div>
          <div className="w-[306px] ">
            <Image className="" src={imgss} alt="" />
            <div className="flex font-sans gap-6  mt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 bg-red-500 h-2 rounded-[50%]"></div>
                <p className="text-red-500 "> UX Design</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-[50%] bg-blue-900 gap-6"></div>
                <p className="text-blue-900  "> 20 Lessons</p>
              </div>
            </div>
            <p className="font-sans text-25 text-blue-900 font-bold  hover:!text-red-900 cursor-pointer mb-6">
              Python for Data Science & Machine Learning
            </p>{" "}
            <hr />
            <div className="flex  gap-28">
              <p className="font-sans">
                {" "}
                <SupervisorAccountIcon />
                68 Students
              </p>
              <p className="font-sans text-red-700 font-bold text-xl">
                {" "}
                <AttachMoneyIcon />
                79.00
              </p>
            </div>
          </div>
          <div className="w-[306px] ">
            <Image className="" src={imgsss} alt="" />
            <div className="flex font-sans gap-6  mt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 bg-red-500 h-2 rounded-[50%]"></div>
                <p className="text-red-500 "> UX Design</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-[50%] bg-blue-900 gap-6"></div>
                <p className="text-blue-900  "> 26 Lessons</p>
              </div>
            </div>

            <p className="font-sans text-25 text-blue-900 font-bold hover:!text-red-900 cursor-pointer mb-6">
              The complete web develop Ment bootcamp.
            </p>

            <hr />
            <div className="flex  gap-28">
              <p className="font-sans">
                {" "}
                <SupervisorAccountIcon />
                84 Students
              </p>
              <p className="font-sans  text-red-700 font-bold text-lg">
                {" "}
                <AttachMoneyIcon />
                120.00
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <button className="  text-blue-900 font-sans font-semibold text-xs border hover:bg-red-600 hover:!text-white rounded-md mt-40 2xl:h-11 w-[15%]  xl:h-05 [w-20%]">
            <p>
              View All Courses
              <ArrowForwardIcon />
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
