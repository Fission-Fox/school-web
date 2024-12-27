"use client";

import React from "react";
import Image from "next/image";
import PopImage from "../assets/images/HigherAchevier.jpeg";
import '../styles/globals.css';

// Define the types for the props
interface ImagePopupProps {
  onClose: () => void; // The onClose function is expected to be a function that returns void
}

const ImagePopup: React.FC<ImagePopupProps> = ({ onClose }) => {
  // Handle click on the background to close the popup
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
            height={500} // Fixed height or dynamic if needed
            width={700}  // Fixed width or dynamic if needed
            className="max-w-full h-auto rounded-lg shadow-lg block mx-auto"
            onClick={onClose} // Close popup when clicking on the image
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
