"use client";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import Campuslife from "@/components/campuslife";
import StandardImageList from "@/components/gallery";
import Student from "@/components/student";
import Upcoming from "@/components/upcoming";

import Academics from "@/components/academics";
import CoverImgCollege from "@/components/coverImgCollege";
import WelcomeCollege from "@/components/welcomeCollege";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomePage() {
  return (
    <>
      <CoverImgCollege />
      <WelcomeCollege />
      <Academics />
      {/* <Popular /> */}
      <Campuslife />
      <Upcoming />
      <Student />
      <StandardImageList />
    </>
  );
}
