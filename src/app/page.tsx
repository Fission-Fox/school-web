"use client";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import { Box, colors } from "@mui/material";
import img from "../../public/images/pic 1.png";
import Image from "next/image";
import imgs from "../../public/images/pic 2.png";
import imgss from "../../public/images/pic 3.png";
import imagess from "../../public/images/pic 4.png";
import images from "../../public/images/line.png";
import Academics from "@/components/academics";
export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Academics />
    </Box>
  );
}
