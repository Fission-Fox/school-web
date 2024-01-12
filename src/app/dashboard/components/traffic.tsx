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

export default function Traffic() {
  return (
    <div className="w-[49%] h-[345px] rounded-3xl bg-white m-2">
      <div className="flex justify-between ">
        <div className="text-[#A3AED0] mt-4 ml-4">Daily Traffic</div>

        <div className="flex mt-3 px-3">
          <Arrowdropup />
          <p className="text-[#05CD99] font-semibold ">+2.45%</p>
        </div>
      </div>

      <div className="flex px-3 ">
        <p className="font-bold   text-3xl mt-3 ">2.579</p>
        <p className="text-[#A3AED0] py-5 text-base">Visitors</p>
      </div>
      <div className="flex flex-col gap-4 px-8 mt-6">
        <div>
          <Image src={charts} alt="" />
        </div>

        <div>
          <Image src={days} alt="" />
        </div>
      </div>
    </div>
  );
}
