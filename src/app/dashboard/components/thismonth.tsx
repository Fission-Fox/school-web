import React from "react";
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
import zigzag from "@/assets/images/zigzag.png";
import line2 from "@/assets/images/line2.png";
export default function Thismonth() {
  return (
    <div className="w-full  md:w-[49%] rounded-3xl bg-white pb-4  m-2 px-8">
      <div>
        <div className="flex justify-between p-4 ">
          <div>
            <button className="flex bg-[#F4F7FE] rounded-lg mt-3 ">
              <Calender /> <p className="text-[#A3AED0] ">this month</p>
            </button>
          </div>
          <Graph />
        </div>
      </div>
      <div>
        <p className="font-bold w-[149.81px] h-[39.88px] text-3xl mt-3">
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

      <div className="flex mb-10">
        <div className="flex flex-row mt-4">
          {" "}
          <Tick />
          <div className="text-[#05CD99] text-sm font-semibold">
            <p className="mr-20">On Track</p>{" "}
          </div>
        </div>
        <div>
          <div className="">
            <Image className="h-[65px]" src={zigzag} alt="" />
            <Image className="h-[50px]" src={line2} alt="" />
          </div>
        </div>
      </div>
      <div className="flex  justify-evenly ml-16 ">
        <p className="text-[#A3AED0]">Sep</p>
        <p className="text-[#A3AED0]">Oct</p>
        <p className="text-[#A3AED0]">Nov</p>
        <p className="text-[#A3AED0]">Dec</p>
        <p className="text-[#A3AED0]">Jan</p>
        <p className="text-[#A3AED0]">Feb</p>
      </div>
    </div>
  );
}
