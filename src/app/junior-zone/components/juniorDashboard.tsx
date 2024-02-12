import image1 from "@/assets/images/gal-2-1.jpg";
import image2 from "@/assets/images/gal-2-2.jpg";
import image3 from "@/assets/images/gal-2-3.jpg";
import logo from "@/assets/images/logo3.png";
import EmailIcon from "@mui/icons-material/Email";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PlaceIcon from "@mui/icons-material/Place";
import Image from "next/image";
import Link from "next/link";
export default function JuniorFooter() {
  return (
    <div className="bg-[#490D59] flex flex-wrap pl-1 pr-1  justify-evenly items-center pb-10">
      <div className="flex flex-col justify-center">
        <div id="contact">
          <Image className="w-[235px] mt-10" src={logo} alt="" />
        </div>
        <div className="text-[30px] sm:text-[36px] font-bold text-[#ffffff] mt-10">
          Giving your child the <br /> best start in life
        </div>
        <div className="flex items-center mt-5">
          <div className="text-[#FFD600]">
            <PlaceIcon sx={{ fontSize: { xs: "30px", sm: "50px" } }} />
          </div>
          <div className="text-[#ffffff] text-[14px] sm:text-[18px] ">
            A-575 ,Block 5 ,Mochi morr signal ,Opposite Continental
            <br /> Bakery, Karachi, Pakistan
          </div>
        </div>
        <div className="flex items-center mt-5">
          <div className="text-[#FFD600]">
            <PlaceIcon sx={{ fontSize: { xs: "30px", sm: "50px" } }} />
          </div>
          <div className="text-[#ffffff] text-[14px] sm:text-[18px] ">
            164 M, 2, behind Mehfil E Murtaza, Block 3
            <br /> PECHS, Karachi, Pakistan
          </div>
        </div>
        <div className="flex gap-3 mt-10">
          <div>
            <Image className="rounded-3xl" src={image1} alt="" />
          </div>
          <div>
            <Image className="rounded-3xl" src={image2} alt="" />
          </div>
          <div>
            <Image className="rounded-3xl" src={image3} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
        <div className="flex items-center">
          <div className="text-[#FFD600]">
            <FactCheckIcon sx={{ fontSize: { xs: "30px", sm: "50px" } }} />
          </div>
          <div className="text-[20px] sm:text-[36px] font-bold text-[#ffffff]">
            Enrol your child in a Session now!
          </div>
        </div>
        <div className="text-[30px] sm:text-[36px] font-bold text-[#ffffff] mt-10">
          Get In Touch
        </div>
        <div className="text-[#ffffff] text-[14px] sm:text-[18px] ">
          Monday to Friday: 7:30am – 02.00pm
        </div>
        <div className="text-[#ffffff] text-[14px] sm:text-[18px] mt-5">
          Saturday, Sunday: <span className="font-bold">Close</span>
        </div>
        <div className="flex items-center gap-2 mt-10">
          <div className="bg-[#FFD600] px-2 py-2 rounded-full">
            <EmailIcon />
          </div>
          <div className="text-[#ffffff] text-[14px] sm:text-[18px] ">
            Email:{" "}
            <span className="hover:text-[#E8063C] cursor-pointer">
              mralidilshad110@gmail.com
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-10">
          <div className="bg-[#FFD600] px-2 py-2 rounded-full">
            <PhoneIphoneIcon />
          </div>
          <div className="text-[#ffffff] text-[14px] sm:text-[18px] ">
            Phone:{" "}
            <span className="hover:text-[#E8063C] cursor-pointer">
              (021) 34973439, 03332044329
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 xl:mt-0 ">
        <Link href={"/student-zone/admission"}>
          <div className="text-[16px] text-[#ffffff] flex justify-center items-center rounded-full bg-[#E8063C] border-[#E8063C] border-4 hover:bg-[#490D59] w-[209px] h-[55px] font-bold">
            <button>Start Registration</button>
          </div>
        </Link>
        {/* <div className="text-[20px] sm:text-[36px] font-bold text-[#ffffff] mt-10">
          Useful Services
        </div> */}
        {/* <div className="flex items-center gap-10">
          <div>
            <div className="flex gap-2 group cursor-pointer">
              <div className="text-[#FFD600] ">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] group-hover:text-[#E80951] text-[14px] sm:text-[18px]">
                Volunteer
              </div>
            </div>
            <div className="flex gap-2 mt-3 group cursor-pointer">
              <div className="text-[#FFD600] ">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                Advocate
              </div>
            </div>
            <div className="flex gap-2 mt-3 group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                Partner
              </div>
            </div>
            <div className="flex gap-2 mt-3 group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                Sponsor
              </div>
            </div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                Advertise
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                Join or Renew
              </div>
            </div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                Membership Options
              </div>
            </div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                Families Membership
              </div>
            </div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                Contact Us
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
