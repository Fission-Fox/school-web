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

export default function Table2() {
  return (
    <div className="w-[49%]  rounded-3xl  m-2 ">
      <div className="font-bold text-[30px]   ">
        {/* <div className="flex  justify-between py-4"><p>Complex Table</p>
                    <More /></div> */}

        <Complextable />
      </div>
    </div>
  );
}
