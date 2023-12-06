"use client";
import Welcome from "@/components/welcome";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import { Box } from "@mui/material";

import Image from "next/image";
export default function HomePage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Welcome />
    </Box>
  );
}
