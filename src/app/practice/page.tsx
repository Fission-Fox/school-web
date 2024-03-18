"use client";
import images from "@/assets/images/line.png";
import LandingHeader from "@/components/landingPage/LandingHeader";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/images/flyer.png";
export default function page() {
  return (
    <div>
      <LandingHeader />
      <div className="text-[26px] flex flex-col items-center justify-center sm:text-[50px] mb-10 text-blue-900 text-center   mt-6  font-bold">
        Practice Material
        <Image className="logo" src={images} alt="" />
      </div>
      <div className="w-full flex justify-center gap-5 flex-wrap">
        <Link
          target="_blank"
          href={
            "https://drive.google.com/drive/folders/1U7qV_oGntn4x-Q_omJBEHIg5pAtt3DTV?usp=sharing"
          }
        >
          <div className="cursor-pointer text-[14px] xl:text-[16px] !flex  bg-[#E8063C] hover:bg-[#4D0D58] border-[#E8063C] border-[3px] px-2 xl:px-6 py-2 xl:py-3 font-semibold text-[#ffffff] rounded-full">
            Class Nine
          </div>
        </Link>
        <Link
          target="_blank"
          href={
            "https://drive.google.com/drive/folders/1RQKpzi_OuA_U3Viz70rYrMo7dWgw8Nq4"
          }
        >
          <div className="cursor-pointer text-[14px] xl:text-[16px] !flex  bg-[#E8063C] hover:bg-[#4D0D58] border-[#E8063C] border-[3px] px-2 xl:px-6 py-2 xl:py-3 font-semibold text-[#ffffff] rounded-full">
            Class Matric
          </div>
        </Link>
        <Link
          target="_blank"
          href={
            "https://drive.google.com/drive/u/0/folders/11fltW8IGyAx5yAE8ktGbphXWzWopIR02"
          }
        >
          <div className="cursor-pointer text-[14px] xl:text-[16px] !flex  bg-[#E8063C] hover:bg-[#4D0D58] border-[#E8063C] border-[3px] px-2 xl:px-6 py-2 xl:py-3 font-semibold text-[#ffffff] rounded-full">
            Class 1st Year
          </div>
        </Link>
        <Link
          target="_blank"
          href={
            "https://drive.google.com/drive/u/1/folders/15A-jXTB3tNyyvWksMSdqXZu7f66xHnlY"
          }
        >
          <div className="cursor-pointer text-[14px] xl:text-[16px] !flex  bg-[#E8063C] hover:bg-[#4D0D58] border-[#E8063C] border-[3px] px-2 xl:px-6 py-2 xl:py-3 font-semibold text-[#ffffff] rounded-full">
            Class 2nd Year
          </div>
        </Link>
      </div>
      <div className="w-full flex justify-center mt-24" id="Achievers">
        <Image src={img} alt="img" />
      </div>
    </div>
  );
}
