import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Earningicon from "./svg/earningicon";
import flag from "@/assets/images/flag.jpg";
import Spend from "@/app/(layout)/dashboard/components/svg/spend";
import Arrow from "@/app/(layout)/dashboard/components/svg/arrowicon";
import Blueicon from "@/app/(layout)/dashboard/components/svg/blueicon";
import Tickicon from "./svg/tickicon";
import Pageicon from "@/app/(layout)/dashboard/components/svg/pageicon";
import Calender from "./svg/calender";
import Arrowdown from "./svg/arrowdown";
import Button from "./svg/button";
import Dollar from "./svg/dollar";
import Line1 from "./svg/line1";
import Trackon from "./svg/trackon";
import Line2 from "./svg/line2";
import Chart from "@/assets/images/chart.jpg";

const Dashboard = () => {
  return (
    <div className="bg-[#F4F7FE] w-full">
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div className="">
          <div className="px-7 mt-6">
            <p className="text-[#707EAE] text-[14px]"> Pages / Dashboard</p>
            <p className="text-[#2B3674] text-[34px] font-sans font-bold leading-8">
              Main Dashboard
            </p>
          </div>

          <div className="flex flex-row gap-5 px-6 mt-10">
            <div className="rounded-2xl shadow w-[350px] h-[100px] px-4 bg-[#ffff] flex  justify-center items-center gap-10">
              <div>
                <Earningicon />
              </div>
              <div>
                <p className=" text-[14px] text-[#A3AED0] ">Earnings</p>
                <p className="text-[#2B3674] text-[24px] font-semibold ">
                  $350.4
                </p>
              </div>
            </div>
            <div className="rounded-2xl shadow w-[350px] h-[100px] bg-[#ffff] flex  justify-center items-center gap-3">
              <div>
                <Spend />
              </div>
              <div>
                <p className=" text-[14px] text-[#A3AED0]">Spend this month</p>
                <p className="text-[#2B3674] text-[24px]  font-semibold">
                  $642.39
                </p>
              </div>
            </div>
            <div className="rounded-2xl shadow w-[350px] h-[100px] bg-[#ffff]">
              <div className="flex flex-col px-4 pt-2">
                <p className=" text-[14px] text-[#A3AED0]">Sales</p>
                <p className="text-[#2B3674] text-[24px]  font-semibold">
                  $574.34
                </p>
                <div className="flex gap-2">
                  <p className="text-[#05CD99] text-[12px] font-sans font-bold">
                    +23%
                  </p>
                  <p className="text-[14px] text-[#A3AED0]">since last month</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow w-[350px] h-[100px] flex  justify-center items-center gap-5 bg-[#ffff]">
              <div className="">
                <p className=" text-[14px] text-[#A3AED0]">Your balance</p>
                <p className="text-[#2B3674] text-[24px]  font-semibold">
                  $1,000
                </p>
              </div>
              <div className="flex">
                <Image
                  className="border rounded-full w-10 h-10 "
                  src={flag}
                  alt=""
                />
                <Arrow />
              </div>
            </div>
            <div className="rounded-2xl shadow w-[350px] h-[100px] bg-[#ffff] flex  justify-center items-center gap-10 ">
              <Blueicon />
              <div>
                <p className=" text-[14px] text-[#A3AED0]">New Tasks</p>
                <p className="text-[#2B3674] text-[24px]  font-semibold">154</p>
              </div>
            </div>
            <div className="rounded-2xl shadow w-[350px] h-[100px] bg-[#ffff]  flex  justify-center items-center gap-6 ">
              <Pageicon />
              <div>
                <p className=" text-[14px] text-[#A3AED0]">Total Projects</p>
                <p className="text-[#2B3674] text-[24px]  font-semibold">
                  2935
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6 mt-6 px-6 ">
            <div className=" rounded-lg shadow w-[780px] h-[345px] px-4 bg-[#ffff]   ">
              <div className="flex justify-between">
                <div className="text-[#A3AED0] flex flex-col">
                  <div>
                    <button className="flex mt-3 shadow bg-slate-100">
                      {" "}
                      <Calender />
                      <p> This month</p>
                    </button>
                  </div>

                  <p className="text-[#2B3674] text-[34px] font-sans font-bold">
                    $37.5K
                  </p>
                  <div className="flex flex-row">
                    <p className="text-[#A3AED0] text-[15px]">Total Spent</p>
                    <Arrowdown />
                    <p className="text-[14px] text-[#05CD99] font-sans font-semibold">
                      +2.45%
                    </p>
                  </div>
                  <div className="mt-3">
                    <Trackon />
                  </div>
                </div>

                <div className="mt-3">
                  <Earningicon />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <Line1 />
                <Line2 />
                <div className="flex flex-row gap-6 mt-4">
                  <p className="text-[#A3AED0]">SEP</p>
                  <p className="text-[#A3AED0]">OCT</p>
                  <p className="text-[#A3AED0]">NOV</p>
                  <p className="text-[#A3AED0]">DEC</p>
                  <p className="text-[#A3AED0]">JAN</p>
                  <p className="text-[#A3AED0]">FEB</p>
                </div>
              </div>
            </div>

            <div className=" rounded-lg shadow w-[750px] h-[345px] px-4 bg-[#ffff] ">
              <div className=" flex mt-2 justify-between">
                <p className="text-[#1B2559] text-[24px] font-semibold">
                  {" "}
                  Weekly Revenue
                </p>
                <div className="mt-3">
                  {" "}
                  <Earningicon />
                </div>
              </div>
              <div className="mt-20">
                <Image src={Chart} alt="chart" />
              </div>
            </div>
          </div>
          <div className="px-6 mt-4">
            <div className=" rounded-lg shadow w-[640px]  bg-[#ffff] ">
              <div className=" mt-2">
                <p className="text-[#1B2559] px-4  text-[24px] py-2 font-semibold">
                  {" "}
                  Check Table
                </p>{" "}
                <table cellPadding={16}>
                  <thead className=" mt-3 text-[14px] text-[#A3AED0] ">
                    <th align="left" className=" w-[250px] px-6">
                      NAME
                    </th>
                    <th align="left" className=" w-[150px] ">
                      PROGRESS
                    </th>
                    <th align="left" className=" w-[150px] ">
                      QUANTITY
                    </th>
                    <th align="left" className=" w-[150px]">
                      DATE
                    </th>
                  </thead>
                  <tbody className="  mt-3 text-[14px] text-[#353f77]">
                    <tr className="w-[200px]">
                      <td align="left" className="px-6">
                        <input type="checkbox" className="mr-4" />
                        Horizon UI PRO
                      </td>
                      <td>17.5%</td>
                      <td>2.458</td>
                      <td>24.Jan.2021</td>
                    </tr>
                    <tr className="w-[200px]">
                      <td align="left" className="px-6">
                        <input type="checkbox" className="mr-4" />
                        Horizon UI PRO
                      </td>
                      <td>17.5%</td>
                      <td>2.458</td>
                      <td>24.Jan.2021</td>
                    </tr>
                    <tr className="w-[200px]">
                      <td align="left" className="px-6">
                        <input type="checkbox" className="mr-4" />
                        Horizon UI PRO
                      </td>
                      <td>17.5%</td>
                      <td>2.458</td>
                      <td>24.Jan.2021</td>
                    </tr>
                    <tr className="w-[200px]">
                      <td align="left" className="px-6">
                        <input type="checkbox" className="mr-4" />
                        Horizon UI PRO
                      </td>
                      <td>17.5%</td>
                      <td>2.458</td>
                      <td>24.Jan.2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className=" rounded-lg shadow w-[640px]  mt-6 bg-[#ffff] ">
                <div className=" mt-2">
                  <p className="text-[#1B2559] px-4  text-[24px] py-2 font-semibold">
                    {" "}
                    Check Table
                  </p>
                </div>
                <table cellPadding={16}>
                  <thead className=" mt-3 text-[14px] text-[#A3AED0] ">
                    <th align="left" className=" w-[250px] px-6">
                      NAME
                    </th>
                    <th align="left" className=" w-[150px] ">
                      PROGRESS
                    </th>
                    <th align="left" className=" w-[150px] ">
                      QUANTITY
                    </th>
                    <th align="left" className=" w-[150px]">
                      DATE
                    </th>
                  </thead>
                  <tbody className="  mt-3 text-[14px] text-[#353f77]">
                    <tr className="w-[200px]">
                      <td align="left" className="px-6">
                        <input type="checkbox" className="mr-4" />
                        Horizon UI PRO
                      </td>
                      <td>17.5%</td>
                      <td>2.458</td>
                      <td>24.Jan.2021</td>
                    </tr>
                    <tr className="w-[200px]">
                      <td align="left" className="px-6">
                        <input type="checkbox" className="mr-4" />
                        Horizon UI PRO
                      </td>
                      <td>17.5%</td>
                      <td>2.458</td>
                      <td>24.Jan.2021</td>
                    </tr>
                    <tr className="w-[200px]">
                      <td align="left" className="px-6">
                        <input type="checkbox" className="mr-4" />
                        Horizon UI PRO
                      </td>
                      <td>17.5%</td>
                      <td>2.458</td>
                      <td>24.Jan.2021</td>
                    </tr>
                    <tr className="w-[200px]">
                      <td align="left" className="px-6">
                        <input type="checkbox" className="mr-4" />
                        Horizon UI PRO
                      </td>
                      <td>17.5%</td>
                      <td>2.458</td>
                      <td>24.Jan.2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Dashboard;
