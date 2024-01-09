import React from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import image5 from "@/assets/images/image5.jpeg";
import image7 from "@/assets/images/image7.jpeg";
import image3 from "@/assets/images/presvhool3.jpeg";
import image4 from "@/assets/images/presvhool4.jpeg";
export default function Preschool() {
  return (
    <div>
      <div className="ml-4 flex flex-col relative items-center mt-10">
        <div className="absolute w-[20px] h-[20px] rounded-full bg-[#FFD600]"></div>
        <div className="flex absolute mt-4">
          <div className="w-[20px] h-[20px] rounded-full bg-[#490D59] "></div>
          <div className="w-[20px] h-[20px] rounded-full bg-[#E8063C] "></div>
        </div>
      </div>
      <div>
        <p className="text-[40px] sm:text-[60px] ml-10 font-bold flex justify-center items-center mt-10">
          Preschool Classes
        </p>
      </div>
      <div>
        <p className="text-[16px] sm:text-[18px] ml-10 mr-2 text-[#444444] flex justify-center ">
          Our preschool program has four dedicated classes
        </p>
      </div>
      <div className=" mt-10 w-full">
        <div className="flex gap-10 flex-wrap justify-center">
          <div className="group flex flex-col md:flex-row items-center">
            <div>
              <Image
                className="rounded-3xl ml-2 w-[90%] sm:w-[360px] h-[306px]"
                style={{
                  objectFit: "cover",
                }}
                src={image5}
                alt=""
              />
            </div>
            <div className="border relative -top-10 md:top-0 md:-left-20   bg-[#FFFFFF] shadow-lg shadow-gray-500/50 rounded-3xl group-hover:border-[#E8063C] border-gray-400 w-[90%] sm:w-[250px] h-[244px] flex flex-col justify-center items-center">
              <div>
                <p className="text-[20px] sm:text-[28px] font-bold ">
                  Drawing & Painting
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[18px] text-[#490D59] font-bold">
                    Available:
                  </p>
                </div>
                <div>
                  <p className="18px">20 Seats</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[18px] text-[#490D59] font-bold">
                    Required:
                  </p>
                </div>
                <div>
                  <p className="18px">2 - 6 Years</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-20">
                                <div className="flex items-center gap-2">
                                    <div className="text-[30px] sm:text-[50px] text-[#E8063C] font-bold">
                                        $28
                                    </div>
                                    <div className="16px font-medium">
                                        / month
                                    </div>
                                </div>
                                <div className="border group-hover:bg-[#E8063C] group-hover:text-[#ffffff] w-12 h-12 rounded-full flex items-center justify-center border-gray-400">
                                    <AddIcon style={{ fontSize: "30px" }} />
                                </div>
                            </div> */}
            </div>
          </div>
          <div className="group flex flex-col md:flex-row items-center">
            <div>
              <Image
                className="rounded-3xl ml-2 w-[90%] sm:w-[360px] h-[306px]"
                style={{
                  objectFit: "cover",
                }}
                src={image7}
                alt=""
              />
            </div>
            <div className="border relative -top-10 md:top-0 md:-left-20   bg-[#FFFFFF] shadow-lg shadow-gray-500/50 rounded-3xl group-hover:border-[#E8063C] border-gray-400 w-[90%] sm:w-[250px] h-[244px] flex flex-col justify-center items-center">
              <div>
                <p className="text-[20px] sm:text-[28px] font-bold ">
                  Drawing & Painting
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[18px] text-[#490D59] font-bold">
                    Available:
                  </p>
                </div>
                <div>
                  <p className="18px"> 20 Seats</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[18px] text-[#490D59] font-bold">
                    Required:
                  </p>
                </div>
                <div>
                  <p className="18px">2 - 6 Years</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-20">
                                <div className="flex items-center gap-2">
                                    <div className="text-[30px] sm:text-[50px] text-[#E8063C] font-bold">
                                        $28
                                    </div>
                                    <div className="16px font-medium">
                                        / month
                                    </div>
                                </div>
                                <div className="border group-hover:bg-[#E8063C] group-hover:text-[#ffffff] w-12 h-12 rounded-full flex items-center justify-center border-gray-400">
                                    <AddIcon style={{ fontSize: "30px" }} />
                                </div>
                            </div> */}
            </div>
          </div>
          <div className="group flex flex-col md:flex-row items-center">
            <div>
              <Image
                className="rounded-3xl ml-2 w-[90%] sm:w-[360px] h-[306px]"
                style={{
                  objectFit: "cover",
                }}
                src={image3}
                alt=""
              />
            </div>
            <div className="border relative -top-10 md:top-0 md:-left-20   bg-[#FFFFFF] shadow-lg shadow-gray-500/50 rounded-3xl group-hover:border-[#E8063C] border-gray-400 w-[90%] sm:w-[250px] h-[244px] flex flex-col justify-center items-center">
              <div>
                <p className="text-[20px] sm:text-[28px] font-bold ">
                  Drawing & Painting
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[18px] text-[#490D59] font-bold">
                    Available:
                  </p>
                </div>
                <div>
                  <p className="18px"> 20 Seats</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[18px] text-[#490D59] font-bold">
                    Required:
                  </p>
                </div>
                <div>
                  <p className="18px">2 - 6 Years</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-20">
                                <div className="flex items-center gap-2">
                                    <div className="text-[30px] sm:text-[50px] text-[#E8063C] font-bold">
                                        $28
                                    </div>
                                    <div className="16px font-medium">
                                        / month
                                    </div>
                                </div>
                                <div className="border group-hover:bg-[#E8063C] group-hover:text-[#ffffff] w-12 h-12 rounded-full flex items-center justify-center border-gray-400">
                                    <AddIcon style={{ fontSize: "30px" }} />
                                </div>
                            </div> */}
            </div>
          </div>
          <div className="group flex flex-col md:flex-row items-center">
            <div>
              <Image
                className="rounded-3xl ml-2 w-[90%] sm:w-[360px] h-[306px]"
                style={{
                  objectFit: "cover",
                }}
                src={image4}
                alt=""
              />
            </div>
            <div className="border relative -top-10 md:top-0 md:-left-20   bg-[#FFFFFF] shadow-lg shadow-gray-500/50 rounded-3xl group-hover:border-[#E8063C] border-gray-400 w-[90%] sm:w-[250px] h-[244px] flex flex-col justify-center items-center">
              <div>
                <p className="text-[20px] sm:text-[28px] font-bold ">
                  Drawing & Painting
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[18px] text-[#490D59] font-bold">
                    Available:
                  </p>
                </div>
                <div>
                  <p className="18px"> 20 Seats</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <p className="text-[18px] text-[#490D59] font-bold">
                    Required:
                  </p>
                </div>
                <div>
                  <p className="18px">2 - 6 Years</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-20">
                                <div className="flex items-center gap-2">
                                    <div className="text-[30px] sm:text-[50px] text-[#E8063C] font-bold">
                                        $28
                                    </div>
                                    <div className="16px font-medium">
                                        / month
                                    </div>
                                </div>
                                <div className="border group-hover:bg-[#E8063C] group-hover:text-[#ffffff] w-12 h-12 rounded-full flex items-center justify-center border-gray-400">
                                    <AddIcon style={{ fontSize: "30px" }} />
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
