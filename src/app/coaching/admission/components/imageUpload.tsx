"use client";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type Prop = {
  setFiles: any;
};

export default function InputFileUpload({ setFiles }: Prop) {
  const [img, setImage] = useState(null);
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setFiles(file);
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };
  return (
    <div className="w-40 ">
      <div>
        {img && (
          <img
            src={img}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        )}
      </div>

      <Button
        sx={{ backgroundColor: "#00306E", marginY: "20px" }}
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        {img ? "Change Photo" : "Upload Photo"}
        <VisuallyHiddenInput onChange={handleFileChange} type="file" />
      </Button>
    </div>
  );
}
