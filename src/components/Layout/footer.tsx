import FacebookIcon from "@/assets/images/facebook";
import logo from "@/assets/images/footer-logo-Copy.png";
import InstagramIcon from "@/assets/images/instagram";
import Location2Icon from "@/assets/images/location2";
import PhoneIcon from "@/assets/images/phone";
import Tweeter2Icon from "@/assets/images/tweeter2";
import Tweeter3Icon from "@/assets/images/tweeter3";
import YoutubeIcon from "@/assets/images/youtube";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      {/* <div className=" flex  justify-evenly bg-[#FAFAFA]  sm:h-[142px] pt-14 ">
        <div>
          <div className="font-bold text-[24px]">
            Consulting Agency For Your Business
          </div>
          <div className="text-[14px] text-[#737373] font-normal mt-3">
            the quick fox jumps over the lazy dog
          </div>
        </div>
        <div>
          <button className="w-[160px] h-[58px] text-[#FFFFFF] bg-[#16697A] border rounded hover:bg-[#FAFAFA]  hover:text-[#16697A] hover:border-[#16697A] ">
            Contact Us
          </button>
        </div>
      </div> */}

      <div className="flex flex-col xl:flex-row  xl:justify-center pl-[35%] sm:pl-[40%] xl:pl-1 mt-10 text-[#FFFFFF] bg-[#000000] text-[14px] font-semibold pt-14 pb-24 ">
        <div className="mr-40">
          <Image src={logo} alt="" />

          <div className="font-bold text-[16px] mt-6">
            There are course and event custom <br />
            post types so you can easily create <br />
            and <br />
            manage course, events.
          </div>
        </div>
        <div className="mr-40">
          <div className="font-bold text-[16px]">About Us</div>
          <div className="mt-8">Carrier</div>
          <div className="mt-4">We are hiring</div>
          <div className="mt-4">Blog</div>
        </div>

        <div className="mr-40">
          <div className="font-bold text-[16px]">Legal</div>
          <div className="mt-8">About Us</div>
          <div className="mt-4">Carrier</div>
          <div className="mt-4">We are hiring</div>
          <div className="mt-4">Blog</div>
        </div>

        <div>
          <div className="font-bold text-[16px]">Get In Touch</div>
          <div className="flex">
            <div className="mr-3 mt-8">
              <PhoneIcon />
            </div>
            <div className="mt-8">(480) 555-0103</div>
          </div>
          <div className="flex mt-4">
            <div className="mr-3">
              <Location2Icon />
            </div>
            <div>4517 Washington Ave. Manchester, Kentucky 39495</div>
          </div>
          <div className="flex mt-4">
            <div className="mr-3 ">
              <Tweeter2Icon />
            </div>
            <div>debra.holt@example.com</div>
          </div>
        </div>
      </div>
      <hr />
      <div className=" flex flex-col lg:flex-row  lg:justify-between pt-8 bg-[#000000] pb-8">
        <div className="ml-0 lg:ml-52 text-[#ffffff] gap-1 flex">
          © 2022 <div className="text-[#D2093C]"> Echooling. </div> All Rights
          Reserved
        </div>
        <div className="flex  mr-52  hover-[#D2093C]">
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
