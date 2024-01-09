import React from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ExtensionIcon from "@mui/icons-material/Extension";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import image1 from "@/assets/images/1.jpeg";
import image2 from "@/assets/images/2.jpeg";
import image3 from "@/assets/images/0L0A5554.jpeg";
import image4 from "@/assets/images/student.jpeg";
import Image from "next/image";
export default function EnrollChild() {
  return (
    <div className=" ml-3 sm:ml-0">
      <div className="ml-4 flex flex-col relative items-center mt-10">
        <div className="absolute w-[20px] h-[20px] rounded-full bg-[#FFD600]"></div>
        <div className="flex absolute mt-4">
          <div className="w-[20px] h-[20px] rounded-full bg-[#490D59] "></div>
          <div className="w-[20px] h-[20px] rounded-full bg-[#E8063C] "></div>
        </div>
      </div>
      <div>
        <p className="text-[20px] sm:!text-[30px] lg:!text-[48px] font-bold flex justify-center items-center mt-10">
          Enrol Your Child In A Session Now!
        </p>
      </div>
      <div>
        <p className="text-[10px] sm:text-[14px] lg:text-[18px] text-[#444444] flex justify-center ">
          Pre-school has an ‘open door policy’ and also offer a free trial
          session to all children.
        </p>
      </div>
      <div className="flex py-40 gap-y-36 justify-center gap-7   flex-wrap">
        <div className="group mr-3 w-[300px] relative">
          <Image
            //  className="rounded-3xl   "
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "24px 24px 0px 0px",
              height: "400px",
            }}
            src={image1}
            alt="image1"
          />
          <div className="bg-[#76AD1E] rounded-t-full  absolute top-6 w-full mt-56 h-60 text-[#ffffff] flex flex-col justify-center items-center ">
            <div>
              <p className="text-[26px] font-bold">Day care</p>
            </div>
            <div>
              <p className="text-[16px] pl-5">
                we provide loving care , positive guidance and education for
                children from infants to prekindergarten
              </p>
            </div>
          </div>
          <div className=" ml-28 group-hover:bg-[#FFD600] absolute top-[50%] bg-[#ffffff] px-7 py-4 mt-4 z-30 rounded-tr-[60px] rounded-tl-lg rounded-bl-lg rounded-br-lg">
            <ExtensionIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="group mr-3 w-[300px] relative">
          <Image
            //  className="rounded-3xl   "
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "24px 24px 0px 0px",
              height: "400px",
            }}
            src={image2}
            alt="image1"
          />
          <div className="bg-[#18C0CB] rounded-t-full  absolute top-6 w-full mt-56 h-60 text-[#ffffff] flex flex-col justify-center items-center ">
            <div className="text-[26px] font-bold">Play group</div>
            <div>
              <p className="text-[16px] pl-5">
                Our play group section our aim is to help your little stars
                unleash their creativity through play
              </p>
            </div>
          </div>
          <div className=" ml-28 group-hover:bg-[#FFD600] absolute top-[50%] bg-[#ffffff] px-7 py-4 mt-4 z-30 rounded-bl-[60px] rounded-tr-lg rounded-tl-lg rounded-br-lg">
            <VolunteerActivismIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="group mr-3 w-[300px] relative">
          <Image
            //  className="rounded-3xl   "
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "24px 24px 0px 0px",
              height: "400px",
            }}
            src={image3}
            alt="image1"
          />
          <div className="bg-[#490D59] rounded-t-full  absolute top-6 w-full mt-56 h-60 text-[#ffffff] flex flex-col justify-center items-center ">
            <div>
              <p className="text-[26px] font-bold">Montessori</p>
            </div>
            <div>
              <p className="text-[16px] pl-5">
                Junior's zone is the best montessori school that offers
                fun-filled learning for the toodlers to allow greater learning
                for children
              </p>
            </div>
          </div>
          <div className=" ml-28 group-hover:bg-[#FFD600] absolute top-[50%] bg-[#ffffff] px-7 py-4 mt-4 z-30 rounded-tl-[60px] rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <LocalPizzaIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="group mr-3 w-[300px] relative">
          <Image
            //  className="rounded-3xl   "
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "24px 24px 0px 0px",
              height: "400px",
            }}
            src={image4}
            alt="image1"
          />
          <div className="bg-[#E93500] rounded-t-full  absolute top-6 w-full mt-56 h-60 text-[#ffffff] flex flex-col justify-center items-center ">
            <div>
              <p className="text-[26px] mt-5 font-bold">Primary</p>
            </div>
            <div>
              <p className="text-[16px] pl-5">
                Junior's zone create a child-friendly environment of exploration
                and reflection as they nourish each child's progress along the
                developmental continuum
              </p>
            </div>
          </div>
          <div className=" ml-28 group-hover:bg-[#FFD600] absolute top-[50%] bg-[#ffffff] px-7 py-4 mt-4 z-30 rounded-br-[60px] rounded-tl-lg rounded-tr-lg rounded-bl-lg">
            <ShieldIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
