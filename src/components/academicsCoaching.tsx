import academic3 from "@/assets/images/cambridge.png";
import academic2 from "@/assets/images/sindhBoard.jpg";
import images from "@/assets/images/line.png";
import academic from "@/assets/images/federalB.png";
import aptitude from "@/assets/images/aptitude.jpg";
import img from "@/assets/images/aghaKhan.jpg";
import Image from "next/image";

export default function AcademicsCoaching() {
  // Agha Khan Board, federal board, sindh board, combridge and junior coaching
  return (
    <div className="flex flex-col " id="academics">
      <div className="  !w-[95%] md:w-[85%] m-auto justify-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-bold  text-[50px] text-blue-900 m-0  font-sans  mt-[120px] ">
            Academics
          </h1>

          <Image className="logo" src={images} alt="" />
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-6 m-auto">
          <div className="relative w-[306px] h-[340px]   ">
            <Image
              className="  "
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0px",
              }}
              src={img}
              alt=""
            />
            <div
              style={{
                background:
                  "linear-gradient(to top, black ,transparent, transparent)",
              }}
              className="absolute w-full h-full flex flex-col justify-end  cursor-pointer group hover:!bg-black opacity-80  hover:transition-opacity hover:duration-[3000ms]"
            >
              <p className="text-[white] font-bold text-xl font-sans ml-4   hover:!text-gray-500 ">
                Agha Khan Board
              </p>
              <div className="flex w-full mb-5 ">
                {/* <p className="text-white font-sans font-bold text-sm  group-hover:!text-gray-500 opacity-80   ml-4 ">
                  Learn More
                </p>
                <svg
                  className="text-[white]  group-hover:!text-gray-500  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg> */}
              </div>
            </div>
          </div>
          <div className="relative w-[306px]  h-[340px]">
            <Image
              className=" "
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0px",
              }}
              src={academic}
              alt=""
            />
            <div
              style={{
                background:
                  "linear-gradient(to top, black ,transparent, transparent)",
              }}
              className="absolute w-full h-full flex  flex-col justify-end cursor-pointer group hover:!bg-black opacity-80  hover:transition-opacity hover:duration-[3000ms]"
            >
              <p className="text-[white] font-bold text-xl font-sans ml-4   hover:!text-gray-500">
                Federal Board
              </p>
              <div className="flex w-full mb-5">
                {/* <p className="text-[white] font-bold text-sm font-sans ml-4  group-hover:!text-gray-500 ">
                  Learn More
                </p> */}
                {/* <svg
                  className="text-[white]   group-hover:!text-gray-500  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg> */}
              </div>
            </div>
          </div>
          <div className="relative w-[306px] h-[340px]">
            <Image
              className=""
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0px",
              }}
              src={academic2}
              alt=""
            />
            <div
              style={{
                background:
                  "linear-gradient(to top, black ,transparent, transparent)",
              }}
              className="absolute w-full h-full flex flex-col justify-end items-start cursor-pointer group hover:!bg-black opacity-80  hover:transition-opacity hover:duration-[3000ms]"
            >
              <p className="text-white font-sans font-bold text-xl ml-4  hover:!text-gray-500">
                {" "}
                Sindh Board
              </p>
              <div className="flex w-full mb-5">
                {/* <p className="text-white font-sans font-bold text-sm ml-4  group-hover:!text-gray-500 ">
                  Learn More
                </p> */}
                {/* <svg
                  className="text-[white]  group-hover:!text-gray-500  "
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg> */}
              </div>
            </div>
          </div>
          <div className="relative w-[306px] h-[340px]">
            <Image
              className="ml[70px]"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0px",
              }}
              src={academic3}
              alt=""
            />
            <div
              style={{
                background:
                  "linear-gradient(to top, black ,transparent, transparent)",
              }}
              className="absolute w-full h-full flex  flex-col justify-end items-start cursor-pointer hover:!bg-black opacity-80  hover:transition-opacity hover:duration-[3000ms]"
            >
              "
              <p className="text-white font-sans font-bold text-xl ml-4  hover:!text-gray-500">
                Cambridge
              </p>
              <div className="flex w-full mb-5"></div>
            </div>
          </div>
          <div className="relative w-[306px] h-[340px]">
            <Image
              className="ml[70px]"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0px",
              }}
              src={aptitude}
              alt=""
            />
            <div
              style={{
                background:
                  "linear-gradient(to top, black ,transparent, transparent)",
              }}
              className="absolute w-full h-full flex  flex-col justify-end items-start cursor-pointer hover:!bg-black opacity-80  hover:transition-opacity hover:duration-[3000ms]"
            >
              "
              <p className="text-white font-sans font-bold text-xl ml-4  hover:!text-gray-500">
                Junior Coaching
              </p>
              <div className="flex w-full mb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
