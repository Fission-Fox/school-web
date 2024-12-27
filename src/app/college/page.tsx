"use client";

import { useEffect, useState } from "react";
import Campuslife from "@/components/campuslife";

import Academics from "@/components/academics";
import CoverImgCollege from "@/components/coverImgCollege";
import StandardImageListCollege from "@/components/gallerycollege";
import WelcomeCollege from "@/components/welcomeCollege";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImagePopup from "@/components/ImagePopup"; // Assume this is the modal component

export default function HomePage() {
  const [isPopupClosed, setIsPopupClosed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  // Close popup and save state to localStorage
  const closePopup = () => {
    setIsPopupClosed(true);
    localStorage.setItem("popupClosed", "true");
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    // Check if the popup was previously closed
    const isPopupPreviouslyClosed =
      localStorage.getItem("popupClosed") === "true";
    if (!isPopupPreviouslyClosed) {
      setIsModalOpen(true); // Open the modal if popup hasn't been closed before
    }
  }, []);

  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <ImagePopup
          onClose={closePopup} // Callback to close the popup
        />
      )}

      {/* Main Components */}
      <CoverImgCollege />
      <WelcomeCollege />
      <Academics />
      {/* <Popular /> */}
      <Campuslife />
      {/* <Upcoming /> */}
      {/* <Student /> */}
      <StandardImageListCollege />
    </>
  );
}
