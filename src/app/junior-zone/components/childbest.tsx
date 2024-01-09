import image from "@/assets/images/round.jpeg";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Image from "next/image";
import GradeSlider from "./grade";
export default function Childbest() {
  return (
    <div className="">
      <div className="flex ml-1 mr-1 sm:ml-0 sm:mr-0 flex-col xl:flex-row justify-center xl:justify-evenly items-center">
        <div className="flex flex-col">
          <div>
            <p className="text-[40px] sm:text-[60px] font-bold">
              Safety & security
            </p>
          </div>
          <div>
            <p className="text-[16px] sm:text-[18px] text-[#444444] w-[90%] sm:w-[453px]">
              we have the proper measure in palace such as secure entrance ,
              emergency procedures and security cameras
            </p>
          </div>
          <div className="text-[16px ] text-[#444444] mt-10 ">
            <div className="flex gap-2 items-center">
              <div className="text-[#EC3C66]">
                <TaskAltIcon />
              </div>
              <div>
                <p>
                  Building access is limites to registered parents & authorized
                  staff
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="text-[#EC3C66]">
                <TaskAltIcon />
              </div>
              <div className="">
                <p>
                  For our families convenience we are offering safe and
                  efficient door drop-off and pick-up
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="text-[#EC3C66]">
                <TaskAltIcon />
              </div>
              <div className="">
                <p>
                  We use bright wheel so that you can check on your's child
                  safety
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="text-[#EC3C66]">
                <TaskAltIcon />
              </div>
              <div className="">
                <p>Yo can check daily progress</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 xl:mt-0">
          <Image
            className="rounded-full h-[330px] sm:h-[618px] w-[330px] sm:w-[618px]"
            style={{
              objectFit: "cover",
            }}
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  justify-center  sm:justify-around items-center mt-28">
        <div>
          <div>
            <p className="font-bold ml-10 text-[16px] text-[#E8063C]">
              CHOOSE YOUR OWN GRADE LEVEL
            </p>
          </div>
          <div>
            <p className="text-[40px] ml-10 sm:text-[60px] font-bold">
              Smarty Programs
            </p>
          </div>
        </div>
        {/* <div className="flex gap-4">
          <div className="bg-[#E8063C] text-[#ffffff] hover:text-[#E8063C] hover:bg-white border-2 border-[#E8063C] w-14 h-14  flex items-center justify-center rounded-full">
            <ArrowBackIcon style={{ fontSize: "40px" }} />
          </div>
          <div className="bg-[#E8063C] text-[#ffffff] hover:text-[#E8063C] hover:bg-white border-2 border-[#E8063C] w-14 h-14  flex items-center justify-center rounded-full">
            <ArrowForwardIcon style={{ fontSize: "40px" }} />
          </div>
        </div> */}
      </div>
      <GradeSlider />
    </div>
  );
}
