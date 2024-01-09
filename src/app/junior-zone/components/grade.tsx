"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import image1 from "@/assets/images/cl-1-1.jpg";
import image2 from "@/assets/images/cl-1-2.jpg";
import image3 from "@/assets/images/cl-1-3.jpg";
import image4 from "@/assets/images/cl-1-4.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function GradeSlider() {
  return (
    <div>
      <div id="classes" className="!hidden sm:!flex w-[100%] ">
        <Swiper
          style={{ margin: "auto", cursor: "grab" }}
          spaceBetween={50}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex flex-wrap justify-center py-10 gap-6 mt-6">
              <div className="shadow-xl w-[246px] h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-wrap justify-center py-5 gap-6 mt-6">
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="!flex sm:!hidden w-[100%]">
        <Swiper
          style={{ margin: "auto", cursor: "grab" }}
          spaceBetween={50}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex flex-wrap justify-center py-10 gap-6 mt-6">
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-wrap justify-center py-10 gap-6 mt-6">
              <div className="shadow-xl w-[246px] group hover:bg-[#490D59]  h-[254px] flex flex-col justify-center items-center rounded-xl">
                <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                  <div>
                    <p className="font-bold">GRADE</p>
                  </div>
                  <div>
                    <p className="text-[30px] font-bold ">1</p>
                  </div>
                </div>
                <div>
                  <p className="text-[30px] group-hover:text-[white]  font-bold mt-5">
                    Grade 1
                  </p>
                </div>
                <div>
                  <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                    ( 4 - 5 years )
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
