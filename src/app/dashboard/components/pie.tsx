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

export default function Pie() {
  return (
    <div className="w-full md:w-[49%] h-[345px]  rounded-3xl bg-white m-2">
      <div className="flex justify-between">
        <div className="font-bold px-8 py-3">
          <p>Your Pie Chart</p>
        </div>
        <div className="text-[#A3AED0] flex py-3 px-8 text-sm">
          <p>Monthly</p>
          <Arrowdow />
        </div>
      </div>

      <div className="px-32 py-5 ">
        <Piechart />
      </div>

      <div className=" border shadow rounded-lg flex justify-between h-20 w-80 ml-8 ">
        <div className="flex  flex-row">
          <div className="py-6 ">
            <div className="flex gap-2 px-14 w-40 ">
              <p className="py-1 ">
                <Dotblue />
              </p>
              <p className="text-[#A3AED0] text-sm  whitespace-nowrap ">
                Your files
              </p>
            </div>

            <p className="font-bold text-center ">63%</p>
          </div>
          <div className="border"></div>
          <div className="py-6 mr-28 px-6 w-40">
            <div className="flex  gap-2 ">
              <p className="py-1">
                <Systemdot />
              </p>
              <p className="text-[#A3AED0] text-sm ">System</p>
            </div>
            <p className="font-bold px-3 ">25%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
