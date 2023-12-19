import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import line from "@/assets/images/line.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { ClassNames } from "@emotion/react";
export default function Upcoming() {
  return (
    <div className=" bg-[#f8f7f7] w-full mt-6 pt-20 pb-40" id="upcoming">
      <div className="mb-10">
        <div className="flex justify-center ">
          <h1 className="text-[35px] lg:text-[50px]  font-sans font-bold mt-6  text-[#00306E]">
            Upcoming Events
          </h1>
        </div>
        <div className="flex justify-center ">
          <Image src={line} alt="" />
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        style={{ width: "90%", margin: "auto", cursor: "grab" }}
        spaceBetween={20}
        breakpoints={{
          1500: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" mb-16 flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-4 xl:!py-10 ">
            <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-2 px-10">
              10{" "}
            </div>
            <div className="px-10">
              <p className="text-[#4D5765] text-[16px]"> April, 2022</p>
              <p className="text-[#D2093C] mt-8">12:00 AM - 01:30PM</p>
              <h3 className="text-[#00306e] text-[18px] xl:text-[20px] font-sans font-bold leading-7 mt-2">
                A Better Alternative To <br /> Grading Student Writing
              </h3>
              <div className="flex flex-row gap-2">
                <div className="text-[#00306e] mt-3">
                  <PersonPinCircleIcon />
                </div>
                <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button className="text-[1b6px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
                <p>
                  Find Out More <ArrowForwardIcon />
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#fff]  w-[300px] !py-4 xl:!py-10 ">
            <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-2 px-10">
              14{" "}
            </div>
            <div className="px-10">
              <p className="text-[#4D5765] text-[16px]"> February, 2022</p>
              <p className="text-[#D2093C] mt-8">10:30 AM - 12:30PM</p>
              <h3 className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
                12 Things Successful <br /> Mompreneurs
              </h3>

              <div className="flex flex-row gap-2">
                <div className="text-[#00306e] mt-3">
                  <PersonPinCircleIcon />
                </div>
                <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
                <p>
                  Find Out More <ArrowForwardIcon />
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#fff]  w-[300px] !py-4 xl:!py-10">
            <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-2 px-10">
              26{" "}
            </div>
            <div className="px-10">
              <p className="text-[#4D5765] text-[16px]"> March, 2022</p>
              <p className="text-[#D2093C] mt-8">01:30 AM - 02:00PM</p>
              <h3 className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
                Ethics in AI Live Event <br /> Machines Judging.
              </h3>
              <div className="flex flex-row gap-2">
                <div className="text-[#00306e] mt-3">
                  <PersonPinCircleIcon />
                </div>
                <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
                <p>
                  Find Out More <ArrowForwardIcon />
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#fff]  w-[300px] !py-4 xl:!py-10">
            <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-2 px-10">
              19{" "}
            </div>
            <div className="px-10">
              <p className="text-[#4D5765] text-[16px]"> April, 2022</p>
              <p className="text-[#D2093C] mt-8">03:00 AM - 04:30PM</p>
              <p className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
                The Importance Of <br /> Intrinsic Motivation.
              </p>
              <div className="flex flex-row gap-2">
                <div className="text-[#00306e] mt-3">
                  <PersonPinCircleIcon />
                </div>
                <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
                <p>
                  Find Out More <ArrowForwardIcon />
                </p>
              </button>
            </div>
          </div>

          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-4 xl:!py-10 ">
            <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-2 px-10">
              10{" "}
            </div>
            <div className="px-10">
              <p className="text-[#4D5765] text-[16px]"> April, 2022</p>
              <p className="text-[#D2093C] mt-8">12:00 AM - 01:30PM</p>
              <h3 className="text-[#00306e] text-[18px] xl:text-[20px] font-sans font-bold leading-7 mt-2">
                A Better Alternative To <br /> Grading Student Writing
              </h3>
              <div className="flex flex-row gap-2">
                <div className="text-[#00306e] mt-3">
                  <PersonPinCircleIcon />
                </div>
                <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button className="text-[1b6px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
                <p>
                  Find Out More <ArrowForwardIcon />
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#fff]  w-[300px] !py-4 xl:!py-10 ">
            <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-2 px-10">
              14{" "}
            </div>
            <div className="px-10">
              <p className="text-[#4D5765] text-[16px]"> February, 2022</p>
              <p className="text-[#D2093C] mt-8">10:30 AM - 12:30PM</p>
              <h3 className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
                12 Things Successful <br /> Mompreneurs
              </h3>

              <div className="flex flex-row gap-2">
                <div className="text-[#00306e] mt-3">
                  <PersonPinCircleIcon />
                </div>
                <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
                <p>
                  Find Out More <ArrowForwardIcon />
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#fff]  w-[300px] !py-4 xl:!py-10">
            <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-2 px-10">
              26{" "}
            </div>
            <div className="px-10">
              <p className="text-[#4D5765] text-[16px]"> March, 2022</p>
              <p className="text-[#D2093C] mt-8">01:30 AM - 02:00PM</p>
              <h3 className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
                Ethics in AI Live Event <br /> Machines Judging.
              </h3>
              <div className="flex flex-row gap-2">
                <div className="text-[#00306e] mt-3">
                  <PersonPinCircleIcon />
                </div>
                <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
                <p>
                  Find Out More <ArrowForwardIcon />
                </p>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#fff]  w-[300px] !py-4 xl:!py-10">
            <div className="text-[#D2093C] text-[50px] font-sans font-bold mt-2 px-10">
              19{" "}
            </div>
            <div className="px-10">
              <p className="text-[#4D5765] text-[16px]"> April, 2022</p>
              <p className="text-[#D2093C] mt-8">03:00 AM - 04:30PM</p>
              <p className="text-[#00306e] text-[20px] font-sans font-bold leading-7 mt-2">
                The Importance Of <br /> Intrinsic Motivation.
              </p>
              <div className="flex flex-row gap-2">
                <div className="text-[#00306e] mt-3">
                  <PersonPinCircleIcon />
                </div>
                <p className="text-[4D5765] text-[16px] mt-4"> New York, USA</p>{" "}
              </div>
            </div>
            <div className="flex justify-center mt-6 ">
              <button className="text-[16px] text-[#00306E]  border-2 rounded font-bold px-14 py-2 hover:bg-[#D2093C] hover:text-white">
                <p>
                  Find Out More <ArrowForwardIcon />
                </p>
              </button>
            </div>
          </div>

          {/* </div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
