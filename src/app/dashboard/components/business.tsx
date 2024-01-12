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

export default function Business() {
  return (
    <div className="w-[24%] h-[345px] rounded-3xl bg-white m-2">
      <div className="flex px-5 py-5 gap-3">
        <Fire />
        <div className="text-sm">
          <p className="text-gray-400 text-xs">Business Design</p>
          <p className="text-[#2B3674] font-bold">New lession is available</p>
        </div>
      </div>
      <div className="text-[20px] font-bold text-[#2B3674] pl-[26px] mt-6">
        <p>What do you need to know to create better products?</p>
      </div>
      <div className="w-[394px] h-[149px] bg-[#FAFCFE] mt-5 rounded-2xl">
        <div className="flex justify-center py-5">
          <div className="flex gap-2 px-6 font-bold text-[#2B3674] ">
            <Timer />
            <p className="mr-10">85 mints</p>
          </div>
          <div className="flex text-[#2B3674] ">
            <Video />
            <p>Video format</p>
          </div>
        </div>

        <div className="py-5 px-32 ">
          <Get />
        </div>
      </div>
    </div>
  );
}
