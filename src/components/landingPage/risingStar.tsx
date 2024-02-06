import React from "react";
import Image from "next/image";
import images from "@/assets/images/line.png";
export default function RisingStar() {
  return (
    <div className="flex flex-col items-center ">
      <div className="text-[16px] sm:text-[22px] font-bold underline decoration-double text-center mt-7">
        THE INSTITUTE WHICH PRODUCES THE FUTURE PIONEERS
      </div>
      <div className="text-[26px] flex flex-col items-center sm:text-[50px] text-blue-900 text-center  w-[80%] sm:w-[500px] mt-6  font-bold">
        OUR RISING STARS
        <Image className="logo" src={images} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <table>
          <tr>
            <h1 className="text-[10px] sm:text-[18px]  font-bold underline mt-14 mb-5">
              Session 2021-2022
            </h1>
          </tr>
          <th className="border-black border-[1px] px-4 sm:px-8 text-[10px] sm:text-[14px] mt-6">
            Student's Name
          </th>
          <th className="border-black border-[1px] px-4 sm:px-8px-8 text-[10px] sm:text-[14px]">
            Percentage % Scored
          </th>
          <th className="border-black border-[1px] px-4 sm:px-8 text-[10px] sm:text-[14px]">
            Percently studying in
          </th>
          <tr className="text-[10px] sm:text-[14px]">
            <td className="border-black border-[1px] text-center font-bold">
              Mujtaba Ali
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              85% <br />
              (Computer Science)
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              GhulamIshaq Khan <br /> University
            </td>
          </tr>
          <tr className="text-[10px] sm:text-[14px]">
            <td className="border-black border-[1px] text-center font-bold">
              Muhammad Ahmed
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              83% <br />
              (pre engineering)
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              NED University
            </td>
          </tr>
          <tr className="text-[10px] sm:text-[14px]">
            <td className="border-black border-[1px] text-center font-bold">
              Bushra Fazal
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              90% <br />
              (pre Medical)
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              DOW Medical College
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <h1 className="text-[10px] sm:text-[18px]   font-bold underline mt-14 mb-5">
              Session 2022-2023
            </h1>
          </tr>
          <th className="border-black border-[1px] px-4 sm:px-8 text-[10px] sm:text-[14px]">
            Student's Name
          </th>
          <th className="border-black border-[1px] px-4 sm:px-8 text-[10px] sm:text-[14px]">
            Percentage % Scored
          </th>
          <th className="border-black border-[1px] px-4 sm:px-8 text-[10px] sm:text-[14px]">
            Percently studying in
          </th>
          <tr className="text-[10px] sm:text-[14px]">
            <td className="border-black border-[1px] text-center font-bold">
              Faiz Mehboob
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              86% <br />
              Computer Science
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              FAST
            </td>
          </tr>
          <tr className="text-[10px] sm:text-[14px]">
            <td className="border-black border-[1px] text-center font-bold">
              Muneeb Ahmed
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              83% <br />
              Computer Science
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              FAST
            </td>
          </tr>
          <tr className="text-[10px] sm:text-[14px]">
            <td className="border-black border-[1px] text-center font-bold">
              Eshal Khalil
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              84% <br />
              (pre Medical)
            </td>
            <td className="border-black border-[1px] text-center font-bold">
              DOW Medical College
            </td>
          </tr>
        </table>
        <div className="mt-20">
          <h1 className="text-[12px] sm:text-[14px] text-center font-bold border-black border-[1px] px-5 sm:px-24">
            Free Structure for (XI - XII) New Admission 2021-2025
          </h1>
          <table>
            <th className="border-black border-[1px] px-6 sm:px-12 mt-3 text-[10px] sm:text-[14px]">
              Details
            </th>
            <th className="border-black border-[1px] px-4 sm:px-8 text-[10px] sm:text-[14px]">
              Fee
            </th>
            <th className="border-black border-[1px] px-8 sm:px-12 text-[10px] sm:text-[14px]">
              SZ Student
            </th>
            <th className="border-black border-[1px] px-5 sm:px-10 text-[10px] sm:text-[14px]">
              Sibling Discount
            </th>
            <tr className="text-[10px] sm:text-[14px]">
              <td className="border-black border-[1px] text-center font-bold">
                Admission
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                5400
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                <sup>25%off</sup>40500
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                27000
              </td>
            </tr>
            <tr className="text-[10px] sm:text-[14px]">
              <td className="border-black border-[1px] text-center font-bold">
                Monthly
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                11500
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                11500
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                8400
              </td>
            </tr>
            <tr className="text-[10px] sm:text-[14px]">
              <td className="border-black border-[1px] text-center font-bold">
                Annual
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                11500
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                11500
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                8400
              </td>
            </tr>
            <tr className="text-[10px] sm:text-[14px]">
              <td className="border-black border-[1px] text-center font-bold">
                Lab Charges
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                8000
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                8000
              </td>
              <td className="border-black border-[1px] text-center font-bold">
                8000
              </td>
            </tr>
            <tr className="text-[10px] sm:text-[14px]">
              <td className="border-black border-[1px] text-center font-bold">
                Total
              </td>
              <td className="border-black border-[1px] text-center font-bold underline">
                85000/-
              </td>
              <td className="border-black border-[1px] text-center font-bold underline">
                71500/-
              </td>
              <td className="border-black border-[1px] text-center font-bold underline">
                51800/-
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="font-semibold border-[1px] bg-[#E5E9EF] border-black !text-[14px] sm:!text-[18px] px-12 mt-10 text-center">
        <span className="font-extrabold !text-[14px] sm:!text-[18px]">
          Note:
        </span>{" "}
        Our College Students can avail 50% discount in our Coaching Classes
      </div>
    </div>
  );
}
