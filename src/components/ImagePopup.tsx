"use client";

import React from "react";
import Image from "next/image";
import PopImage from "../assets/images/HigherAchevier.jpeg";
import { FaTimes } from "react-icons/fa"; // Importing the close icon from react-icons

export default function ImagePopup({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
    
          padding: "24px",
          borderRadius: "12px",
       
          position: "relative",
          maxWidth: "80%",
          width: "100%",
          margin: "0 16px",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            color: "#FFFFFF", // gray-600
            fontSize: "24px",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          <FaTimes />
        </button>

        {/* Image */}
        <div style={{ marginBottom: "24px" }}>
          <Image
            src={PopImage}
            alt="Pop-up Image"
            height={0}
            width={0}
            style={{
              maxWidth: "80%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

    
      </div>
    </div>
  );
}
