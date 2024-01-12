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

import Vector from "./vector";
import Line from "./line";
import chart from "@/assets/images/chart.jpg";
import More from "./svg/more";
import BasicTable from "./spentTable";
import charts from "@/assets/images/Charts.jpg";
import days from "@/assets/images/Days.jpg";
import Arrowdow from "./arrowdow";
import Piechart from "./piechart";
import Dotblue from "./dotblue";
import Systemdot from "./systemdot";
import Complextable from "./complextable";
import Thismonth from "./thismonth";
import Weekly from "./weekly";
import Table1 from "./table1";
import Traffic from "./traffic";
import Pie from "./pie";
import Table2 from "./table2";
import Round from "./round";
import Drag from "./drag";
import Check from "./check";
import Check1 from "./check1";
import Task from "./task";
import Fire from "./fire";
import Timer from "./timer";
import April from "./april";
import Year from "./year";
import Video from "./video";
import Get from "./get";
import Plus from "./plus";
import Business from "./business";
import elipse75 from "@/assets/images/Ellipse 75.jpg";
import Dot1 from "./dot1";
import eclipse76 from "@/assets/images/Ellipse76.jpg";
import eclipse77 from "@/assets/images/Ellipse77.jpg";
import Team from "./team";
import fingerprint from "@/assets/images/fingerprint.jpg";
import Cards from "./cards";
import starbucks from "@/assets/images/starbucks.jpg";
import Watch from "./watch";
import Elipse82 from "@/assets/images/Ellipse 82.png";
import fastfood from "@/assets/images/fastfood.png";

const Dashboard = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div className="w-full bg-[#F4F7FE]">
        <div className="w-full h-full bg-[#F4F7FE] p-6">
          <div className="mt-10 ">
            <p className="text-[#707EAE] "> Pages / Dashboard</p>
            <p className="font-bold text-3xl">Main Dashboard</p>
          </div>
        </div>

        {/* <div className="w-full h-[1654] bg-[#F4F7FE]">
          <div className="flex flex-wrap ">
            <div className="w-64 h-24 bg-white rounded-3xl m-2 flex items-center gap-4 p-4" >
              <div>
                <Graph />
              </div>
              <div>
                <p className="text-gray-400 text-center">Earnings</p>
                <p className="text-center font-bold text-lg ">$350.4</p>
              </div>

            </div>
            <div className="w-64 h-24 bg-white rounded-3xl m-2 flex items-center gap-4 p-4" >

              <div>
                <Money />
              </div>
              <div>
                <p className="text-gray-400  text-sm">Spend this month</p>
                <p className=" font-bold text-lg ">$642.39</p>
              </div>
            </div>
            <div className="w-64 h-24 bg-white rounded-3xl m-2 items-center gap-4 p-4" >
              <div>
                <p className="text-gray-400 ">Sales</p>
                <p className=" font-bold text-lg">$574.34</p>
                <div className="flex gap-2">
                  <p className="text-[#05CD99]">+23%</p>
                  <p>since last month</p>
                </div>
              </div>
            </div>
            <div className="w-64 h-24 bg-white rounded-3xl m-2 flex items-center gap-4 p-4" ><div>
              <p className="text-gray-400 text-center text-sm">
                Your balance
              </p>
              <p className=" font-bold text-lg">$1000</p>
            </div>
              <div>
                {" "}
                <Image src={flag} alt="" />
              </div></div>
            <div className="w-64 h-24 bg-white rounded-3xl m-2 items-center flex p-4 gap-4" >
              <div>
                <Image src={Icon} alt="" />
              </div>

              <div>
                <p className="text-gray-400 text-center">New Tasks</p>
                <p className=" font-bold text-lg ">154</p>
              </div>
            </div>
            <div className="w-64 h-24 bg-white rounded-3xl m-2 flex items-center gap-4 p-4" >

              <div>
                <Image src={DOC} alt="" />
              </div>

              <div>
                <p className="text-gray-400 text-center  ">
                  Total Projects
                </p>
                <p className=" font-bold ">2935</p>
              </div>

            </div>
          </div>
        </div> */}

        {/* <div className="!flex w-full justify-center flex-wrap flex-row mt-8">
          < Thismonth />
          < Weekly />
        </div> */}

        <div className="w-full flex justify-center flex-wrap flex-row">
          <Table1 />
          <div className="w-[50%] flex">
            <Traffic />
            <Pie />
          </div>
        </div>
        {/* <div className="flex flex-row">
          <Table2 />
          <Task />

          <div className="w-[24%] h-[345px] rounded-3xl bg-white m-2">
            <div className="flex justify-center mt-5">
              <p className="mr-20"><April /></p> <Year /></div>
          </div>

        </div>

        <div className="flex flex-row">
          <Business />
          <Team />


          <Cards />
          <div className="w-[24%] flex flex-col justify-center h-[345px] rounded-3xl bg-white ">
            <div className="flex items-center justify-center">
              <Image className=" w-[90%] mt-6" src={starbucks} alt="" />
            </div >
            <Image className=" relative ml-6 bottom-6 " src={Elipse82} alt="" />

            <div className="ml-6">
              <div> <p className="font-bold text-[24px]   ">Starbucks</p></div>
              <div className="flex   gap-3 mb-6">
                <div><Image src={fastfood} alt="" /></div>
                <div className="text-[#A3AED0]  text-[18px] "><p >10% cashback & off</p></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Box>
  );
};

export default Dashboard;
