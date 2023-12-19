import Img from "@/assets/images/line.png";
import img from "@/assets/images/pic5.png";
import imgs from "@/assets/images/pic6.png";
import imgss from "@/assets/images/pic7.png";
import imgsss from "@/assets/images/pic8.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Image from "next/image";

export default function Popular() {
  return (
    <>
      <div id="popular">
        <div className="  w-full flex flex-col items-center ">
          <h1 className="font-bold text-[50px] font-sans text-blue-900  text-center mt-36 ">
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
        <div className=" flex justify-center mb-40 ">
          <button className=" px-5 py-2  text-blue-900 font-sans font-bold text-lg border hover:bg-[#D2093C] hover:!text-white rounded-md mt-16 ">
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
