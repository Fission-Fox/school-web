import Image from "next/image";
import React from "react";
import coverImage from "@/assets/images/cover Image.jpg";
export default function CoverImg() {
  return (
    <section className="py-24 w-full table relative h-[60vh] mt-5 ">
      <Image
        src={coverImage}
        alt="Background Image"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
        }}
      />
      <div className="mx-auto md:!mx-36 relative flex flex-col justify-center h-full">
        <div className=" flex flex-col items-start   w-[70%] m-auto mt-36 ml-20 sm:ml-30 xl:ml-40">
          <div className="text-[#FFFFFF] flex justify-center items-center text-[14px] sm:text-[16px] md:!text-[20px] xl:!text-[26px] bg-[#D2093C] px-3 py-1">
            Great Quality Cocial life
          </div>
          <div className="text-[30px] sm:text-[50px] md:text-[60px] xl:text-[70px] text-[#ffffff] font-bold ">
            Discover the world of <br />
            possible university.
          </div>
          <div className="px-5 py-2 border flex justify-center items-center rounded-[6px] hover:bg-[#D2093C] hover:border-none mt-5">
            <button className="text-[#ffffff] font-semibold text-[14px] sm:text-[16px]">
              Admission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
