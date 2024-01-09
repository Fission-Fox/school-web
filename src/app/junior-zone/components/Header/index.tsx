"use client";
// import LogoLight from "@/assets/images/logo-light.png";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/Logo-3.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TemporaryDrawer from "../menu";
export default function Header() {
  const [isOpen, setMenu] = useState(false);

  return (
    <div>
      <div className="">
        {/* <nav className="bg-[#490D59] py-2" id="navbar">
          <div className="flex flex-wrap items-center justify-evenly">
            <div className="!hidden lg:!flex gap-7">
              <div className="text-[#ffffff] hover:text-[#BC0844] cursor-pointer">
                <AccountCircleIcon /> <span>Login & Register</span>
              </div>
              <div className="text-[#ffffff] hover:text-[#BC0844] cursor-pointer">
                <SearchIcon /> <span>Search Keyword</span>
              </div>
            </div>
            <div className=" justify-center text-[12px] sm:text-[16px] sm:justify-normal !flex !flex-wrap gap-1 sm:gap-7">
              <div className="text-[#ffffff]  flex flex-wrap items-center gap-1">
                <div className=" rounded-full h-10 w-10 flex justify-center items-center hover:bg-[#D22457] hover:border-none">
                  <EmailIcon />
                </div>
                <div>Email:</div>{" "}
                <span className="hover:text-[#BC0844] cursor-pointer">
                  user@example.com
                </span>
              </div>
              <div>
                <div className="text-[#ffffff] flex flex-wrap items-center gap-1">
                  <div className=" rounded-full h-10 w-10 flex  justify-center items-center hover:bg-[#D22457] hover:border-none">
                    <PhoneIphoneIcon />
                  </div>
                  <span>Phone:</span>{" "}
                  <span className="hover:text-[#BC0844] cursor-pointer">
                    +44 (0) 207 689 7888
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav> */}
        <div className="ml-1 sm:ml-10 md:ml-20 lg:ml-0  flex items-center bg-[#ffffff]  fixed z-50 w-full top-0 !justify-between lg:!justify-evenly gap-5">
          <div>
            <Image className="w-[100px]" src={logo} alt="" />
          </div>
          <div className="text-[18px]   font-bold !hidden lg:!flex gap-8">
            <Link href={"#home"}>
              <div className="hover:text-[#BC0B54] cursor-pointer">Home</div>
            </Link>

            <Link href={"#aboutUs"}>
              <div className="hover:text-[#BC0B54] cursor-pointer">
                About Us
              </div>
            </Link>
            <Link href={"#classes"}>
              <div className="hover:text-[#BC0B54] cursor-pointer">Classes</div>
            </Link>

            <Link href={"#testimonial"}>
              <div className="hover:text-[#BC0B54] cursor-pointer">
                Testimonials
              </div>
            </Link>
            <Link href={"#contact"}>
              <div className="hover:text-[#BC0B54] cursor-pointer">Contact</div>
            </Link>
          </div>
          <div className="flex mr-1 sm:mr-10 md:mr-20 lg:gap-4  items-center">
            <div>
              <TemporaryDrawer />
            </div>
            <div className="text-[14px] xl:text-[16px] !hidden lg:!flex  bg-[#E8063C] hover:bg-[#4D0D58] border-[#E8063C] border-[3px] px-2 xl:px-6 py-2 xl:py-3 font-semibold text-[#ffffff] rounded-full">
              Apply Today
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
