import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
export default function SessionTime() {
  return (
    <div className="flex  justify-center mt-20">
      <div className="w-[90%]  relative sm:w-[600px] md:w-[700px] lg:w-[850px] h-[400px] md:h-[480px] lg:h-[538px] mt-14 flex flex-col items-center rounded-3xl lg:rounded-tl-[274px]  lg:rounded-tr-[30px]  lg:rounded-bl-[274px] lg:rounded-br-[274px] justify-center bg-[#490D59]">
        <div className="bg-[#E8063C] absolute -top-11  w-[85px] lg:w-[102px] h-[85px]  lg:h-[102px] flex justify-center items-center rounded-full text-[white]">
          <AccessAlarmIcon
            sx={{ fontSize: { xs: "40px", sm: "50px", md: "70px" } }}
          />
        </div>
        <div>
          <p className="text-[30px] sm:text-[40px] lg:text-[60px] font-bold text-[#ffffff]">
            Session Times
          </p>
        </div>
        <div>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] ml-2 mr-2  text-[#ffffff]">
            We provide full day care from 8.30am to 3.30pm for children aged 18{" "}
            <br />
            months to 5 years,
          </p>
        </div>
        <div className="flex items-center mt-2 justify-evenly w-[90%] sm:w-[450px] lg:w-[550px] rounded-full  h-[49px] hover:bg-[#FFD600] bg-[#ffffff]">
          <div>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold">
              Early Drop Off
            </p>
          </div>
          <div className="text-[20px] sm:text-[30px]">|</div>
          <div>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]  font-bold">
              8.00am – 10.00am
            </p>
          </div>
        </div>
        <div className="flex items-center mt-2 justify-evenly w-[90%] sm:w-[450px] lg:w-[550px] rounded-full  h-[49px] hover:bg-[#FFD600] bg-[#ffffff]">
          <div>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold">
              Early Drop Off
            </p>
          </div>
          <div className="text-[20px] sm:text-[30px]">|</div>
          <div>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]  font-bold">
              8.00am – 10.00am
            </p>
          </div>
        </div>
        <div className="flex items-center mt-2 justify-evenly w-[90%] sm:w-[450px] lg:w-[550px] rounded-full  h-[49px] hover:bg-[#FFD600] bg-[#ffffff]">
          <div>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold">
              Early Drop Off
            </p>
          </div>
          <div className="text-[20px] sm:text-[30px]">|</div>
          <div>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]  font-bold">
              8.00am – 10.00am
            </p>
          </div>
        </div>
        <div className="flex items-center mt-2 justify-evenly w-[90%] sm:w-[450px] lg:w-[550px] rounded-full  h-[49px] hover:bg-[#FFD600] bg-[#ffffff]">
          <div>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold">
              Early Drop Off
            </p>
          </div>
          <div className="text-[20px] sm:text-[30px]">|</div>
          <div>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px]  font-bold">
              8.00am – 10.00am
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
