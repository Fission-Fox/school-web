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

export default function Team() {
  return (
    <div className="w-[24%] h-[345px] rounded-3xl bg-white m-2">
      <div className="flex justify-between py-5 px-4">
        <div className="text-[#2B3674] font-bold">Team members</div>
        <Plus />
      </div>

      <div className="flex gap-2 border shadow-inner w-[80%] justify-between rounded-lg ml-8 h-14 px-4">
        <div className="flex">
          <div className="px-5">
            {" "}
            <Image src={elipse75} alt="" />
          </div>
          <div className="flex flex-col">
            <p className=" text-[#2B3674] text-[16px] font-bold">
              Adela Parkson
            </p>
            <p className="text-[#A3AED0] text-[12px] font-medium">
              Creative Director
            </p>
          </div>
        </div>
        <Dot1 />
      </div>

      <div className="flex gap-2  w-[80%] justify-between shadow-inner rounded-lg ml-8 h-14 p-2 my-6">
        <div className="flex">
          <div className="px-5">
            {" "}
            <Image src={eclipse76} alt="" />
          </div>

          <div className="flex flex-col">
            <p className=" text-[#2B3674] text-[16px] font-bold">
              Christian Mad
            </p>
            <p className="text-[#A3AED0] text-[12px] font-medium">
              Product Designer
            </p>
          </div>
        </div>
        <Dot1 />
      </div>

      <div className="flex gap-2 w-[80%] justify-between shadow-inner rounded-lg ml-8 h-14 p-2 my-6">
        <div className="flex">
          <div className="px-5">
            {" "}
            <Image src={eclipse77} alt="" />
          </div>
          <div className="flex flex-col">
            <p className=" text-[#2B3674] text-[16px] font-bold">
              Jason Statham
            </p>
            <p className="text-[#A3AED0] text-[12px] font-medium">
              Junior Graphic Designer
            </p>
          </div>
        </div>

        <Dot1 />
      </div>
    </div>
  );
}
