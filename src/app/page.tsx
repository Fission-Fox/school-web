"use client";
import { useState } from "react";
import LandingHeader from "@/components/landingPage/LandingHeader";
import CeoMessage from "@/components/landingPage/ceoMessage";
import HomeTestimonial from "@/components/landingPage/homeTestimonial";
import LandingFooter from "@/components/landingPage/landingFooter";
import HomeHero from "@/components/landingPage/landingHero";
import RisingStar from "@/components/landingPage/risingStar";
import ImagePopup from "@/components/ImagePopup"; // Import the Image Popup component

export default function Page() {
  const [showPopup, setShowPopup] = useState(true); // State to manage popup visibility
  const [isPopupClosed, setIsPopupClosed] = useState(false); // State to manage component render after popup

  // Function to close the pop-up
  const closePopup = () => {
    setShowPopup(false); // Hide the pop-up
    setIsPopupClosed(true); // Set the popup to closed, which allows components to show
  };

  return (
    <div>
      {showPopup && <ImagePopup onClose={closePopup} />}{" "}
      {/* Conditionally render the pop-up */}
      {/* Only render the page components once the pop-up is closed */}
      {isPopupClosed && (
        <>
          <LandingHeader />
          <HomeHero />
          <HomeTestimonial />
          <CeoMessage />
          <RisingStar />
          <LandingFooter />
        </>
      )}
    </div>
  );
}
