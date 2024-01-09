import testi from "@/assets/images/testi-1-1.png";
import Image from "next/image";
import SidebarSlider from "./sweper";
export default function Testimonials() {
  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-center  items-center mt-10 bg-[#F0F6FA] py-20">
      <div
        id="testimonial"
        className="flex flex-col justify-center items-center"
      >
        <div>
          <p className="text-[16px] text-[#E8063C] font-extrabold">
            TESTIMONIALS
          </p>
        </div>
        <div>
          <p className="text-[30px] sm:text-[48px] mt-4 font-bold">
            Parents Reviews
          </p>
        </div>
        <div className="w-[300px] sm:w-[550px]">
          <SidebarSlider />
        </div>
        {/* <div className="w-[90%] sm:w-[615px] h-[330px] mt-7 bg-[#490D59] xl:rounded-br-[290px] flex flex-col justify-center items-center rounded-2xl xl:rounded-bl-[166px] xl:rounded-tl-[166px] xl:rounded-tr-[94px]">
          <div className="flex gap-20 sm:gap-40 mb-10">
            <div>
              <div className="text-[20px] sm:text-[40px]  font-bold text-[#ffffff]">
                John Deo
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
          <div className="text-[14px] sm:text-[20px] ml-1 text-[#ffffff]">
            The passage experienced a surge in popularity <br />
            during the 1960s when Letraset used it on their <br />
            dry-transfer sheets, and again during the 90s <br />
            as desktop publishers.
          </div>
        </div> */}
      </div>
      <div className="relative">
        <Image
          src={testi}
          alt="testimonials"
          className="w-[90%] sm:w-[687px] "
        />
      </div>
    </div>
  );
}
