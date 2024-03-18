"use client";
import JuniorImageList from "@/components/galleryjunior";
import { Box } from "@mui/material";
import Childbest from "./components/childbest";
import EnrollChild from "./components/enrollChild";
import HeroSection from "./components/heroSection";
import JuniorFooter from "./components/juniorDashboard";
import Leadlearning from "./components/leadlearning";
import Owngrade from "./components/owngrade";
import SessionTime from "./components/sessionTime";
import Testimonials from "./components/testimonials";

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <Leadlearning />
      <EnrollChild />
      <Childbest />
      <SessionTime />
      {/* <Preschool /> */}
      <Owngrade />
      <Testimonials />
      <JuniorImageList />
      <JuniorFooter />

      {/* <Newsletter /> */}
    </Box>
  );
}
