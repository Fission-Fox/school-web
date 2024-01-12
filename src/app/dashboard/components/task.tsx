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

export default function Task() {
  return (
    <div className="w-[24%] h-[345px] rounded-3xl bg-white m-2 ">
      <div className="flex justify-between ">
        <div className="font-bold text-[20px] px-6 mt-5 flex gap-2 ">
          <Round /> Tasks
        </div>
        <div className="py-4 px-4">
          <More />
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between ">
          <div className="flex px-8">
            <Check />
            <p className="text-gray-400 px-3">Landing Page Design</p>
          </div>
          <div className="px-5">
            <Drag />
          </div>
        </div>

        <div className="flex justify-between py-4">
          <div className="flex px-8">
            <Check1 />
            <p className="text-gray-400 px-3">Dashboard Builder</p>
          </div>
          <div className="px-5">
            <Drag />
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="flex px-8">
            <Check1 />
            <p className="text-gray-400 px-3">Mobile App Design</p>
          </div>
          <div className="px-5">
            <Drag />
          </div>
        </div>

        <div className="flex justify-between py-4">
          <div className="flex px-8">
            <Check />
            <p className="text-gray-400 px-3">Illustrations</p>
          </div>
          <div className="px-5">
            <Drag />
          </div>
        </div>

        <div className="flex justify-between  ">
          <div className="flex px-8">
            <Check1 />
            <p className="text-gray-400 px-3">Promotional LP</p>
          </div>
          <div className="px-5">
            <Drag />
          </div>
        </div>
      </div>
    </div>
  );
}
