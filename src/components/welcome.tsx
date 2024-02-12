import comment from "@/assets/images/comment.png";
import Image from "next/image";

import image from "@/assets/images/picimage.png";
export default function Welcome() {
  return (
    <div>
      <div className="flex flex-col items-center lg:flex-row justify-center gap-28 mt-36 px-3 w-[90%] lg:w-[80%] m-auto">
        <div className="lg:w-[50%]">
          <Image src={image} alt=" image" />
        </div>

        <div className="leading-[55px] mt-12 w-full lg:w-[50%]">
          <h2 className="text-[50px] font-sans font-bold text-[#00306E]">
            Welcome to
          </h2>
          <h1 className="text-[50px] font-sans font-bold text-[#D2093C]">
            Students` Zone <br />
            Schooling System
          </h1>

          <p className="mt-10 text-[20px] text-blue-900 font-bold text-justify">
            The Most Trusted Name In{" "}
            <span className=" whitespace-nowrap">AKU-EB</span> & Federal Board
          </p>
          {/* <p className="mt-10 text-[16px] text-[#777777] mb-10">
            Have questions?
            <a
              href="#"
              className="text-[#D2093C] text-[16px] font-bold underline "
            >
              {" "}
              Get Free Guide{" "}
            </a>
          </p> */}
          <hr className="w-[80%]" />
          <p className=" mt-10 text-[16px] text-[#777777] ">
            <span className="text-[#00306E] font-bold text-[16px] md:text-[20px] ">
              Students` Zone Coaching Offer{" "}
            </span>{" "}
            <br /> IX,X, XI, XII, O ' LeveL, AGA Khan Board, Federal Board,
            Sindh Board, MDCAT, ECAT AND BCAT Aptitude Test Preparation.
            <br />
            Junior's Coaching Classes From I to VIII
          </p>

          <div className="flex flex-col lg:flex-row w-full ">
            {/* <button className="mt-10 text-[16px] text-[#00306E]  border-2 rounded-md font-bold px-8  hover:bg-[#D2093C] hover:text-white">
              Read More
              <ArrowForwardIcon />
            </button> */}
            <div className="flex mt-10 ">
              <div className="ml-2 md:ml-6">
                <Image src={comment} alt="" />
              </div>
              <div className="ml-4 leading-4">
                <p className="text-[14px] text-[#999999]">Get Support</p>
                <a
                  href=""
                  className="text-left text-[12px] md:text-[18px] text-[#00306E] font-bold hover:text-[#D2093C]"
                >
                  studentzoneschoolingsystemc11@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
