"use client";
import CoverImg from "@/components/coverImg";
import Welcome from "@/components/welcome";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import Academics from "@/components/academics";
import Campuslife from "@/components/campuslife";
import StandardImageList from "@/components/gallery";
import Student from "@/components/student";
import Upcoming from "@/components/upcoming";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function HomePage() {
  return (
    <>
      <CoverImg />
      <Welcome />
      <Academics />
      {/* <Popular /> */}
      <Campuslife />
      <Upcoming />
      <Student />
      <StandardImageList />
    </>
  );
}
