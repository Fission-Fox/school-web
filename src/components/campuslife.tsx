import main2 from "@/assets/images/main2.jpg";
import line from "@/assets/images/line.png";
import shape from "@/assets/images/shape.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "next/image";

export default function Campuslife() {
  return (
    <div className=" bg-[#f8f7f7] w-full mt-8 pt-20 pb-40 " id="campuslife">
      <div className="mb-10">
        <div className="flex justify-center ">
          <h1 className="text-[50px] font-sans font-bold mt-6  text-[#00306E]">
            Campus Life
          </h1>{" "}
        </div>
        <div className="flex justify-center">
          <Image src={line} alt="" />
        </div>
      </div>

      <div className="flex justify-center flex-col lg:flex-row gap-8 mt-10">
        <div className="text-[#357a38] flex flex-col gap-40 shadow bg-white w-full  lg:w-[40%] pt-8 mt-4 ">
          <div className="w-full">
            <div className="flex flex-row justify-between h-40 w-full py-7 px-2 md:px-9">
              <div className="px-3 flex gap-2">
                <BorderColorIcon style={{ fontSize: "40px" }} />
                <div>
                  <div className="text-[#00306E] text-[16px] md:text-[20px] lg:text-[22px] font-sans font-bold align items-center">
                    Do More, Stress Less
                  </div>
                  <div className="text-[#4d5765] text-[12px] md:text-[15px] flex flex-row mt-4">
                    <p>
                      {" "}
                      Why I say old chap that is spiffing he legged <br />
                      it in my flat easy peasy.
                    </p>
                  </div>
                </div>
              </div>
              <button className="border w-10 h-10 flex items-center justify-center rounded-full   text-[#00306E] hover:bg-[#00306E] hover:text-white">
                <ArrowForwardIcon />
              </button>
            </div>

            <hr className="w-[80%] m-auto" />
            <div className="flex flex-row justify-between h-40 w-full py-7 px-2 md:px-9">
              <div className="px-3 flex gap-2">
                <AssessmentIcon style={{ fontSize: "50px" }} />
                <div>
                  <div className="text-[#00306E] text-[15px] md:text-[20px] lg:text-[22px] font-sans font-bold align items-center">
                    The Business Intelligence
                  </div>
                  <div className="text-[#4d5765] text-[11px] md:text-[15px] lg:text-[12px]flex flex-row mt-4">
                    <p>
                      {" "}
                      Why I say old chap that is spiffing he legged <br />
                      it in my flat easy peasy.
                    </p>
                  </div>
                </div>
              </div>
              <button className="border rounded-full w-10 h-10 flex items-center justify-center text-[#00306E] hover:bg-[#00306E] hover:text-white">
                <ArrowForwardIcon />
              </button>
            </div>
            <hr className="w-[80%] m-auto" />
            <div className="flex flex-row justify-between h-40 w-full py-7 px-2 md:px-9">
              <div className="px-3 flex gap-2">
                <SettingsIcon style={{ fontSize: "50px" }} />
                <div>
                  <div className="text-[#00306E] text-[15px] md:text-[20px] lg:text-[22px] font-sans font-bold align items-center">
                    System Administration
                  </div>
                  <div className="text-[#4d5765] text-[11px] md:text-[15px] flex flex-row mt-4">
                    <p>
                      {" "}
                      Why I say old chap that is spiffing he legged <br />
                      it in my flat easy peasy.
                    </p>
                  </div>
                </div>
              </div>
              <button className="border rounded-full w-10 h-10 flex items-center justify-center  text-[#00306E] hover:bg-[#00306E] hover:text-white">
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
        <div className=" relative max-w-[470px] lg: max-w-auto m-auto lg:m-0">
          <Image src={main2} alt="" />
          <div className="mt-16  xl:mt-80 top-1/2 xl:top-0 right-[25px] lg:right-[-30px] xl:right-[-50px] absolute ">
            <Image className="" src={shape} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 ">
        <button className="mt-10 text-[16px] text-[#00306E]  border-2 rounded font-bold px-10 py-3 hover:bg-[#D2093C] hover:text-white">
          <p>
            {" "}
            More about Campus Life <ArrowForwardIcon />
          </p>
        </button>
      </div>
    </div>
  );
}
