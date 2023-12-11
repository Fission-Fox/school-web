import React from "react";
import Image from "next/image";
import line from "@/assets/images/line.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Upcoming() {
  return (
    <div className=" bg-[#f8f7f7] w-full mt-6 pt-20 pb-40">
      <div className="mb-10">
        <div className="flex justify-center ">
          <h1 className="text-[50px] font-sans font-bold mt-6  text-[#00306E]">
            Upcoming Events
          </h1>
        </div>
        <div className="flex justify-center">
          <Image src={line} alt="" />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="bg-[#fff] w-[50%px] h-[70%]">
          <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-10 px-10">
            10{" "}
          </div>
          <div className="px-10">
            <p className="text-[#4D5765] text-[16px]"> April, 2022</p>
            <p className="text-[#D2093C] mt-8">10:30 AM - 12:30PM</p>
            <p className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
              A Better Alternative To <br /> Grading Student Writing
            </p>
            <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
          </div>
          <div className="flex justify-center mt-6 ">
            <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
              <p>
                Find Out More <ArrowForwardIcon />
              </p>
            </button>
          </div>
        </div>

        <div className="bg-[#fff] w-[320px] h-[380px]">
          <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-10 px-10">
            10{" "}
          </div>
          <div className="px-10">
            <p className="text-[#4D5765] text-[16px]"> April, 2022</p>
            <p className="text-[#D2093C] mt-8">10:30 AM - 12:30PM</p>
            <p className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
              A Better Alternative To <br /> Grading Student Writing
            </p>
            <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
          </div>
          <div className="flex justify-center mt-6 ">
            <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
              <p>
                Find Out More <ArrowForwardIcon />
              </p>
            </button>
          </div>
        </div>

        <div className="bg-[#fff] w-[320px] h-[380px]">
          <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-10 px-10">
            10{" "}
          </div>
          <div className="px-10">
            <p className="text-[#4D5765] text-[16px]"> April, 2022</p>
            <p className="text-[#D2093C] mt-8">10:30 AM - 12:30PM</p>
            <p className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
              A Better Alternative To <br /> Grading Student Writing
            </p>
            <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
          </div>
          <div className="flex justify-center mt-6 ">
            <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
              <p>
                Find Out More <ArrowForwardIcon />
              </p>
            </button>
          </div>
        </div>

        <div className="bg-[#fff] w-[320px] h-[380px]">
          <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-10 px-10">
            10{" "}
          </div>
          <div className="px-10">
            <p className="text-[#4D5765] text-[16px]"> April, 2022</p>
            <p className="text-[#D2093C] mt-8">10:30 AM - 12:30PM</p>
            <p className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
              A Better Alternative To <br /> Grading Student Writing
            </p>
            <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
          </div>
          <div className="flex justify-center mt-6 ">
            <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
              <p>
                Find Out More <ArrowForwardIcon />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
