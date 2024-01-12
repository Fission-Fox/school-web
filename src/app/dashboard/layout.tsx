import React from "react";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockPersonIcon from "@mui/icons-material/LockPerson";
type Prop = {
  children: JSX.Element;
};
export default function layout({ children }: Prop) {
  return (
    <div className="flex w-full  mt-36">
      <div className="h-[80vh] bg-[#fdf8f8] w-[300px] text-[#2B3674] font-sans hidden md:!flex flex-col">
        <div className="flex mb-14">
          <p className=" font-extrabold ">HORIZON</p>{" "}
          <p className="flex">FREE</p>
        </div>

        <div className="flex-col">
          <div className="text-[#2B3674] mb-6 flex gap-6">
            {" "}
            <HomeIcon /> Dashboard
          </div>
          <div className="text-[#A3AED0] mb-6 flex gap-6">
            {" "}
            <ShoppingCartIcon /> NFT Marketplace
          </div>
          <div className="text-[#A3AED0] mb-6 flex gap-6">
            {" "}
            <BarChartIcon /> Tables
          </div>
          <div className="text-[#A3AED0] mb-6 flex gap-6">
            {" "}
            <DashboardIcon />
            Kanban
          </div>
          <div className="text-[#A3AED0] mb-6 flex gap-6">
            {" "}
            <PersonOutlineIcon />
            Profile
          </div>
          <div className="text-[#A3AED0] flex gap-6">
            {" "}
            <LockPersonIcon />
            Sign In
          </div>
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}
