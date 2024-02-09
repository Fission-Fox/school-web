import comment from "@/assets/images/comment.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

import image from "@/assets/images/college-cover.jpg";
export default function WelcomeCollege() {
  return (
    <div>
      <div
        className="flex flex-col items-center lg:flex-row justify-center gap-28 mt-36 px-3 w-[90%] lg:w-[80%] m-auto"
        id="about"
      >
        <div className="lg:w-[50%]">
          <Image src={image} alt=" image" />
        </div>

        <div className="leading-[55px] mt-12 w-full lg:w-[50%]">
          <h2 className="text-[50px] font-sans font-bold text-[#00306E]">
            Welcome to
          </h2>
          <h1 className="text-[50px] font-sans font-bold text-[#D2093C]">
            Student's Zone <br />
            Intermediate Program
          </h1>

          <p className="mt-10 text-[20px] text-blue-900 font-bold">
            The Most Trusted Name In AKU-EB
          </p>
          <p className="mt-10 text-[20px] text-blue-900 font-bold">
            Empower Minds, Transform Lives" At students zone college we make
            sure to empower the youth with the power of education to conquer the
            world
          </p>
          <div>
            <div className="flex gap-2 items-center">
              <svg
                className="svg-icon"
                style={{
                  width: "1em",
                  height: "1em",
                  verticalAlign: "middle",
                  fill: "currentColor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.322571 63.620993c-246.971881 0-447.189925 200.206788-447.189925 447.184809s200.218044 447.184809 447.189925 447.184809c246.978021 0 447.189925-200.206788 447.189925-447.184809S758.300592 63.620993 511.322571 63.620993L511.322571 63.620993zM767.82041 394.804834 478.605426 684.031075l-0.011256 0.016373c-13.331633 13.331633-33.667797 15.410991-49.185212 6.249331-2.87856-1.699712-5.584182-3.790326-8.055466-6.249331-0.005117-0.005117-0.005117-0.005117-0.005117-0.005117L254.825756 517.519714c-15.796778-15.808034-15.796778-41.432645 0-57.245795 15.808034-15.808034 41.437761-15.808034 57.245795 0l137.90279 137.90279 260.611529-260.611529c15.802918-15.802918 41.437761-15.802918 57.240679 0C783.628444 353.378329 783.628444 379.001917 767.82041 394.804834L767.82041 394.804834zM767.82041 394.804834" />
              </svg>
              <p>Pre Engineering</p>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                className="svg-icon"
                style={{
                  width: "1em",
                  height: "1em",
                  verticalAlign: "middle",
                  fill: "currentColor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.322571 63.620993c-246.971881 0-447.189925 200.206788-447.189925 447.184809s200.218044 447.184809 447.189925 447.184809c246.978021 0 447.189925-200.206788 447.189925-447.184809S758.300592 63.620993 511.322571 63.620993L511.322571 63.620993zM767.82041 394.804834 478.605426 684.031075l-0.011256 0.016373c-13.331633 13.331633-33.667797 15.410991-49.185212 6.249331-2.87856-1.699712-5.584182-3.790326-8.055466-6.249331-0.005117-0.005117-0.005117-0.005117-0.005117-0.005117L254.825756 517.519714c-15.796778-15.808034-15.796778-41.432645 0-57.245795 15.808034-15.808034 41.437761-15.808034 57.245795 0l137.90279 137.90279 260.611529-260.611529c15.802918-15.802918 41.437761-15.802918 57.240679 0C783.628444 353.378329 783.628444 379.001917 767.82041 394.804834L767.82041 394.804834zM767.82041 394.804834" />
              </svg>
              <p>Pre Medical</p>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                className="svg-icon"
                style={{
                  width: "1em",
                  height: "1em",
                  verticalAlign: "middle",
                  fill: "currentColor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.322571 63.620993c-246.971881 0-447.189925 200.206788-447.189925 447.184809s200.218044 447.184809 447.189925 447.184809c246.978021 0 447.189925-200.206788 447.189925-447.184809S758.300592 63.620993 511.322571 63.620993L511.322571 63.620993zM767.82041 394.804834 478.605426 684.031075l-0.011256 0.016373c-13.331633 13.331633-33.667797 15.410991-49.185212 6.249331-2.87856-1.699712-5.584182-3.790326-8.055466-6.249331-0.005117-0.005117-0.005117-0.005117-0.005117-0.005117L254.825756 517.519714c-15.796778-15.808034-15.796778-41.432645 0-57.245795 15.808034-15.808034 41.437761-15.808034 57.245795 0l137.90279 137.90279 260.611529-260.611529c15.802918-15.802918 41.437761-15.802918 57.240679 0C783.628444 353.378329 783.628444 379.001917 767.82041 394.804834L767.82041 394.804834zM767.82041 394.804834" />
              </svg>
              <p>Computer Science</p>
            </div>
            <div className="flex gap-2 items-center">
              <svg
                className="svg-icon"
                style={{
                  width: "1em",
                  height: "1em",
                  verticalAlign: "middle",
                  fill: "currentColor",
                  overflow: "hidden",
                }}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.322571 63.620993c-246.971881 0-447.189925 200.206788-447.189925 447.184809s200.218044 447.184809 447.189925 447.184809c246.978021 0 447.189925-200.206788 447.189925-447.184809S758.300592 63.620993 511.322571 63.620993L511.322571 63.620993zM767.82041 394.804834 478.605426 684.031075l-0.011256 0.016373c-13.331633 13.331633-33.667797 15.410991-49.185212 6.249331-2.87856-1.699712-5.584182-3.790326-8.055466-6.249331-0.005117-0.005117-0.005117-0.005117-0.005117-0.005117L254.825756 517.519714c-15.796778-15.808034-15.796778-41.432645 0-57.245795 15.808034-15.808034 41.437761-15.808034 57.245795 0l137.90279 137.90279 260.611529-260.611529c15.802918-15.802918 41.437761-15.802918 57.240679 0C783.628444 353.378329 783.628444 379.001917 767.82041 394.804834L767.82041 394.804834zM767.82041 394.804834" />
              </svg>
              <p>Commerce</p>
            </div>
          </div>

          <hr className="w-[80%]" />
          <p className=" mt-10 text-[16px] text-[#777777] ">
            <span className="text-[#00306E] font-bold text-[20px] ">
              Students Zone Coaching Offer{" "}
            </span>{" "}
            <br /> IX,X, XI, XII, O ' LeveL, AGA Khan Board, Federal Board,
            Sindh Board, MDCAT, ECAT AND BCAT Aptitude Test Preparation.
            <br />
            Junior's Coaching Classes From I to VIII
          </p>

          <div className="flex flex-col lg:flex-row ">
            <button className="mt-10 text-[16px] text-[#00306E]  border-2 rounded-md font-bold px-8  hover:bg-[#D2093C] hover:text-white">
              Scholarship
              <ArrowForwardIcon />
            </button>
            <div className="flex mt-10 ">
              <div className="ml-6">
                <Image src={comment} alt="" />
              </div>
              <div className="ml-4 leading-4">
                <p className="text-[14px] text-[#999999]">Get Support</p>
                <a
                  href=""
                  className="text-left text-[18px] text-[#00306E] font-bold hover:text-[#D2093C]"
                >
                  mralidilshad110@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
