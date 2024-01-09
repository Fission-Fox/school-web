import image2 from "@/assets/images/img.webp";
import image4 from "@/assets/images/img4.webp";
import image1 from "@/assets/images/stdentimg1.webp";
import image3 from "@/assets/images/stdentimg3.webp";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ChaletIcon from "@mui/icons-material/Chalet";
import Image from "next/image";
export default function Leadlearning() {
  return (
    <div className="flex m-auto w-[90%] sm:w-[100%] flex-col lg:flex-row  items-center justify-center xl:justify-center mt-28">
      <div>
        <div id="aboutUs" className="flex gap-8">
          <div>
            <Image
              className="rounded-tl-[110px] rounded-bl-[50px] rounded-tr-[50px] !h-[200px] sm:!h-[293px] "
              style={{
                objectFit: "cover",
                width: "278px",
                height: "293px",
              }}
              src={image1}
              alt="image1"
            />
          </div>
          <div>
            <Image
              className="rounded-tr-[110px] rounded-br-[50px]  rounded-tl-[50px] !h-[200px] sm:!h-[293px]"
              style={{
                objectFit: "cover",
                width: "278px",
                height: "293px",
              }}
              src={image2}
              alt="image2"
            />
          </div>
        </div>
        <div className="flex gap-8 mt-8">
          <div>
            <Image
              className="rounded-bl-[110px] rounded-br-[50px] rounded-tl-[50px] !h-[200px] sm:!h-[293px]"
              style={{
                objectFit: "cover",
                width: "278px",
                height: "293px",
              }}
              src={image3}
              alt="image3"
            />
          </div>
          <div>
            <Image
              className="rounded-br-[110px] rounded-bl-[50px] rounded-tr-[50px] !h-[200px] sm:!h-[293px]"
              style={{
                objectFit: "cover",
                width: "278px",
                height: "293px",
              }}
              src={image4}
              alt="image4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10 lg:mt-0 ml-3 sm:ml-20">
        <div>
          <p className="font-bold text-[16px] text-[#E8063C]">
            PART OF THE FAMILY SINCE 2007,
          </p>
        </div>
        <div>
          <p className="text-[40px] xl:text-[60px] font-semibold">
            Where Journey Begins!
          </p>
        </div>
        <div>
          <p className="text-[16px] xl:text-[18px]">
            your child will be learning the alphabet phonics, numbers, fine
            motors skills art crafts,
            <br />
            and prewritting skills. your child will be meeting many new friends
            and establishing <br />
            children in a fun way. We strive to turn the learning process into a
            bright new exciting <br />
            relationships, we have specious playground where your children can
            laugh, run and <br />
            have fun!
          </p>
        </div>
        <div className="flex  items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="bg-[#F0F6FA] rounded-full flex justify-center items-center hover:bg-[#E8063C]  hover:text-[#ffffff] w-16 xl:w-20 h-16 xl:h-20">
              <ChaletIcon sx={{ fontSize: { sm: "40px", md: "56px" } }} />
            </div>
            <div>
              <div className="text-[30px] sm:text-[40px] xl:text-[60px] font-semibold text-[#E8063C] ">
                <p>75</p>
              </div>
              <div>
                <p className="text-[14px] sm:text-[16px] xl:text-[18px]  font-semibold">
                  Outdoor Activities
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#F0F6FA] rounded-full flex justify-center items-center hover:bg-[#E8063C]  hover:text-[#ffffff] w-12 sm:w-16  xl:w-20 h-12 sm:h-16 xl:h-20">
              <AssignmentIndIcon
                sx={{ fontSize: { sm: "22px", md: "40px" } }}
              />
            </div>
            <div>
              <div>
                <p className="text-[30px] sm:text-[40px] xl:text-[60px] font-semibold text-[#E8063C] ">
                  23
                </p>
              </div>
              <div>
                <p className="text-[14px] sm:text-[16px] xl:text-[18px]  font-semibold">
                  Loving Teachers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
