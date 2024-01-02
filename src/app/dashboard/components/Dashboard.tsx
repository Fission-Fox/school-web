import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Graph from "./svg/graph";
import { ClassNames } from "@emotion/react";
import Money from "./svg/money";
import flag from "@/assets/images/flag.jpg";
import Shadow from "@/assets/images/Shadow.jpg";
import Icon from "@/assets/images/Icon.jpg";
import DOC from "@/assets/images/DOC.jpg";
import Calender from "./svg/calender";
import Arrowdropup from "./arrowdropup";
import Tick from "./tick";

const Dashboard = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div className="bg-[#F4F7FE] w-full h-[100vh] pl-7">
        <div>
          <div className="mt-10 ">
            <p className="text-gray-500">Pages/Dashboard</p>
            <p className="font-bold text-lg">Main Dashboard</p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="bg-[white] rounded-3xl justify-start pl-4 items-center w-[248px] h-[97px] flex flex-row gap-4">
              <div>
                <Graph />
              </div>
              <div>
                <p className="text-gray-400 text-center">Earnings</p>
                <p className="text-center font-bold ">$350.4</p>
              </div>
            </div>

            <div className="bg-[white] rounded-3xl justify-start pl-4 items-center w-[248px] h-[97px]  gap-4 flex flex-row">
              <div>
                <Money />
              </div>
              <div>
                <p className="text-gray-400  text-sm">Spend this month</p>
                <p className=" font-bold ">$642.39</p>
              </div>
            </div>
            <div className="bg-[white] rounded-3xl justify-start pl-4 items-center w-[248px] h-[97px] flex gap-4">
              <div>
                <p className="text-gray-400 ">Sales</p>
                <p className=" font-bold ">$574.34</p>
                <div className="flex gap-2">
                  <p className="text-[#05CD99]">+23%</p>
                  <p>since last month</p>
                </div>
              </div>
            </div>

            <div className="bg-[white] rounded-3xl  pl-4 items-center w-[248px] h-[97px] flex gap-4 justify-start">
              <div>
                <p className="text-gray-400 text-center text-sm">
                  Your balance
                </p>
                <p className=" font-bold ">$1000</p>
              </div>
              <div>
                {" "}
                <Image src={flag} alt="" />
              </div>
            </div>

            <div className="bg-[white] rounded-3xl justify-start pl-4 items-center w-[248px] h-[97px] flex gap-4">
              <div>
                <Image src={Icon} alt="" />
              </div>

              <div>
                <p className="text-gray-400 text-center">New Tasks</p>
                <p className=" font-bold ">154</p>
              </div>
            </div>

            <div className="bg-[white] rounded-3xl justify-start pl-4 items-center w-[248px] h-[97px] flex gap-4">
              <div>
                <Image src={DOC} alt="" />
              </div>

              <div>
                <p className="text-gray-400 text-center gap-4">
                  Total Projects
                </p>
                <p className=" font-bold ">2935</p>
              </div>
            </div>
          </div>

          {/* 1st box */}

          <div className="w-[774px] h-[345px] bg-white rounded-lg mt-5 px-4 py-4">
            <div>
              <button className="flex bg-[#F4F7FE]  ">
                <Calender /> <p className="text-[#A3AED0]">this month</p>
              </button>
            </div>

            <div>
              <p className="font-bold w-[149.81px] h-[39.88px] text-3xl mt-5">
                $37.5K
              </p>
            </div>

            <div className="flex flex-row text-sm">
              <div className="text-[#A3AED0]">
                <p>Total Spent</p>
              </div>
              <div>
                <Arrowdropup />
              </div>
              <div className="text-[#05CD99] font-semibold">
                <p>+2.45%</p>
              </div>
            </div>

            <div className="flex flex-row mt-4">
              {" "}
              <Tick />
              <div className="text-[#05CD99] text-sm font-semibold">
                <p>On Track</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
