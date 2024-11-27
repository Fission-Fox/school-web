

"use client";

import React from "react";
import Image from "next/image";
import PopImage from "../assets/images/HigherAchevier.jpeg";

export default function ImagePopup({ onClose }) {
  // Handle click on the background to close the popup
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gradient-to-br from-white/30 to-blue-500/20 backdrop-blur-sm backdrop-saturate-200 flex justify-center items-center z-50"
      onClick={handleBackgroundClick} // Handle background click
    >
      <div
        className="relative p-6 max-w-[70%] w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Stop propagation for the container
      >
        {/* Image */}
        <div className="mb-6">
          <Image
            src={PopImage}
            alt="Pop-up Image"
            height={0}
            width={0}
            className="max-w-full h-auto rounded-lg shadow-lg block mx-auto"
            onClick={onClose} // Close popup when clicking on the image
          />
        </div>
      </div>
    </div>
  );
}

