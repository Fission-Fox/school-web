import logo from "@/assets/images/bluelogo.png";
import FacebookIcon from "@/assets/images/facebook";
import InstagramIcon from "@/assets/images/instagram";
import Location2Icon from "@/assets/images/location2";
import PhoneIcon from "@/assets/images/phone";
import Tweeter2Icon from "@/assets/images/tweeter2";
import Tweeter3Icon from "@/assets/images/tweeter3";
import YoutubeIcon from "@/assets/images/youtube";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" ml-0 m-auto">
      <div className="flex flex-col xl:flex-row  xl:justify-center pl-6 sm:pl-[40%] xl:pl-1 mt-10 text-[#FFFFFF] bg-[#000000] text-[14px] font-semibold pt-14 pb-24 ">
        <div className="mr-40">
          <Image
            src={logo}
            alt=""
            style={{
              width: "100px",
            }}
          />

          <div className="font-bold !text-[14px] md:text-[18px]  ">
            <p>
              {" "}
              There are course and event custom <br />
              post types so you can easily create <br />
              and <br />
              manage course, events.
            </p>
          </div>
        </div>
        <br />

        <div className="mr-40">
          <Link href="#coverimg">
            {" "}
            <div>
              {" "}
              <p className="font-bold text-[16px]">Home</p>{" "}
            </div>{" "}
          </Link>

          <Link href="#academics">
            <div>
              {" "}
              <p className="mt-8">Academics</p>{" "}
            </div>
          </Link>
          <Link href="#campuslife">
            <div>
              {" "}
              <p className="mt-4">Campus life</p>{" "}
            </div>
          </Link>
          <Link href="#upcoming">
            <div>
              {" "}
              <p className="mt-4">Events</p>{" "}
            </div>
          </Link>

          <Link href="#student">
            <div>
              {" "}
              <p className="mt-4">Testimonial</p>{" "}
            </div>{" "}
            <br />
          </Link>
        </div>

        <div className="text-12">
          <div>
            {" "}
            <p className="font-bold text-[16px]">Get In Touch</p>{" "}
          </div>
          <div className="flex flex-wrap gap-5">
            <div>
              <div className="flex">
                <div className="mr-3 mt-8">
                  <PhoneIcon />
                </div>
                <div>
                  {" "}
                  <p className="mt-8 flex"> 03332044313</p>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="mr-3">
                  <Location2Icon />
                </div>
                <div className="w-40">
                  {" "}
                  <p>
                    GULSHAN CAMPUS: <br />B 133, Block 13D Gulshan-e-Iqbal,
                    Karachi, Sindh, Pakistan
                  </p>{" "}
                </div>
              </div>
              <div className="flex mt-4">
                <div className="mr-3 ">
                  <Tweeter2Icon />
                </div>
                <div>
                  {" "}
                  <p>www.studentszone.com.pk</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-12 ml-0 md:ml-24">
          <div className="flex flex-wrap gap-5">
            <div>
              <div className="flex">
                <div className="mr-3 mt-8">
                  <PhoneIcon />
                </div>
                <div>
                  {" "}
                  <p className="mt-8 flex"> 03332044313</p>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="mr-3">
                  <Location2Icon />
                </div>
                <div className="w-40">
                  {" "}
                  <p>
                    PECHS CAMPUS: <br />
                    164 M, 2, behind Mehfil E Murtaza, Block 3 PECHS, Karachi,
                    Pakistan
                  </p>{" "}
                </div>
              </div>
              <div className="flex mt-4">
                <div className="mr-3 ">
                  <Tweeter2Icon />
                </div>
                <div>
                  {" "}
                  <p>www.studentszone.com.pk</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className=" flex flex-col lg:flex-row  lg:justify-between pl-4 pr-2 pt-8 bg-[#000000] pb-8 items-center">
        <div className="ml-0 lg:ml-52 text-[#ffffff] gap-1 flex text-[15px]">
          <p>
            © 2024 <span className="text-[#D2093C]">Students` Zone</span>
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="flex mr-0 lg:mr-52 p-10 hover-[#D2093C] ">
          <div className="mr-7">
            <FacebookIcon />
          </div>
          <div className="mr-7">
            <InstagramIcon />
          </div>
          <div className="mr-7">
            <Tweeter3Icon />
          </div>
          <div className="mr-7">
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
