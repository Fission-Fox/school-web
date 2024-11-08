"use client";
import CoverImg from "@/components/coverImg";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";

import AcademicsCoaching from "@/components/academicsCoaching";
import WelcomeCoaching from "@/components/welcomecoaching";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "@/assets/images/HigherAchevier.jpeg";
export default function HomePage() {
  return (
    <>
      <CoverImg />
      <WelcomeCoaching />
      <AcademicsCoaching />
      <div className="w-full mt-24" id="Achievers">
        <Image src={img} alt="img" />
      </div>
    </>
  );
}
