"use client";
import { useState, useEffect } from "react";
import LandingHeader from "@/components/landingPage/LandingHeader";
import CeoMessage from "@/components/landingPage/ceoMessage";
import HomeTestimonial from "@/components/landingPage/homeTestimonial";
import LandingFooter from "@/components/landingPage/landingFooter";
import HomeHero from "@/components/landingPage/landingHero";
import RisingStar from "@/components/landingPage/risingStar";
import '../styles/globals.css'

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  // Set to true after the component has mounted on the client
  }, []);

  if (!isClient) {
    return null;  // Render nothing initially on the server side
  }

  return (
    <>
      <LandingHeader />
      <HomeHero />
      <HomeTestimonial />
      <CeoMessage />
      <RisingStar />
      <LandingFooter />
    </>
  );
}