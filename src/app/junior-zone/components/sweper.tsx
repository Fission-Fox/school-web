"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function SidebarSlider() {
  return (
    <div className="w-[100%] ">
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
          <div className=" h-[330px] mt-7 bg-[#490d59] xl:rounded-br-[290px] flex flex-col justify-center items-center rounded-2xl xl:rounded-bl-[166px] xl:rounded-tl-[166px] xl:rounded-tr-[94px]">
            <div className="flex gap-20 sm:gap-40 mb-10">
              <div>
                <div>
                  <p className="text-[20px] sm:text-[40px]  font-bold text-[#ffffff]">
                    John Deo
                  </p>
                </div>
                <div className="flex text-[#FEC624]  ">
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                </div>
              </div>
              <div className="text-[#ffffff] bg-[#E8063C] rounded-full  ">
                <FormatQuoteIcon style={{ fontSize: "50px" }} />
              </div>
            </div>
            <div>
              <p className="text-[14px] pl- sm:text-[20px] ml-1 text-[#ffffff]">
                The passage experienced a surge in popularity <br />
                during the 1960s when Letraset used it on their <br />
                dry-transfer sheets, and again during the 90s <br />
                as desktop publishers.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[330px] mt-7 bg-[#490d59] xl:rounded-br-[290px] flex flex-col justify-center items-center rounded-2xl xl:rounded-bl-[166px] xl:rounded-tl-[166px] xl:rounded-tr-[94px]">
            <div className="flex gap-20 sm:gap-40 mb-10">
              <div>
                <div>
                  <p className="text-[20px] sm:text-[40px]  font-bold text-[#ffffff]">
                    John Deo
                  </p>
                </div>
                <div className="flex text-[#FEC624]  ">
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                </div>
              </div>
              <div className="text-[#ffffff] bg-[#E8063C] rounded-full  ">
                <FormatQuoteIcon style={{ fontSize: "50px" }} />
              </div>
            </div>
            <div>
              <p className="text-[14px] pl- sm:text-[20px] ml-1 text-[#ffffff]">
                The passage experienced a surge in popularity <br />
                during the 1960s when Letraset used it on their <br />
                dry-transfer sheets, and again during the 90s <br />
                as desktop publishers.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[330px] mt-7 bg-[#490d59] xl:rounded-br-[290px] flex flex-col justify-center items-center rounded-2xl xl:rounded-bl-[166px] xl:rounded-tl-[166px] xl:rounded-tr-[94px]">
            <div className="flex gap-20 sm:gap-40 mb-10">
              <div>
                <div>
                  <p className="text-[20px] sm:text-[40px]  font-bold text-[#ffffff]">
                    John Deo
                  </p>
                </div>
                <div className="flex text-[#FEC624]  ">
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                </div>
              </div>
              <div className="text-[#ffffff] bg-[#E8063C] rounded-full  ">
                <FormatQuoteIcon style={{ fontSize: "50px" }} />
              </div>
            </div>
            <div>
              <p className="text-[14px] pl- sm:text-[20px] ml-1 text-[#ffffff]">
                The passage experienced a surge in popularity <br />
                during the 1960s when Letraset used it on their <br />
                dry-transfer sheets, and again during the 90s <br />
                as desktop publishers.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[330px] mt-7 bg-[#490d59] xl:rounded-br-[290px] flex flex-col justify-center items-center rounded-2xl xl:rounded-bl-[166px] xl:rounded-tl-[166px] xl:rounded-tr-[94px]">
            <div className="flex gap-20 sm:gap-40 mb-10">
              <div>
                <div>
                  <p className="text-[20px] sm:text-[40px]  font-bold text-[#ffffff]">
                    John Deo
                  </p>
                </div>
                <div className="flex text-[#FEC624]  ">
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                  <div>
                    <StarIcon />
                  </div>
                </div>
              </div>
              <div className="text-[#ffffff] bg-[#E8063C] rounded-full  ">
                <FormatQuoteIcon style={{ fontSize: "50px" }} />
              </div>
            </div>
            <div>
              <p className="text-[14px] pl- sm:text-[20px] ml-1 text-[#ffffff]">
                The passage experienced a surge in popularity <br />
                during the 1960s when Letraset used it on their <br />
                dry-transfer sheets, and again during the 90s <br />
                as desktop publishers.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
