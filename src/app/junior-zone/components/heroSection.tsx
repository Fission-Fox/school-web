import coverImage from "@/assets/images/cover.jpg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[90vh]">
      <Image
        src={coverImage}
        alt="cover image"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
        }}
      />
      <div className="relative flex justify-center sm:justify-normal pt-80 pl-1 sm:pl-5 lg:pl-60 ">
        <div className="bg-[#4D0D58]  flex flex-col justify-center items-center w-[300px] sm:w-[500px] md:w-[605px] h-[300px] md:h-[349px] rounded-t-[143px] rounded-bl-[138px] rounded-br-[34px]">
          <div>
            <p className=" font-semibold text-[25px] sm:text-[40px] md:text-[47px] text-[#ffffff]">
              Best Children Study <br />
              And Furture Care
            </p>
          </div>
          <div>
            <p className="text-[#ffffff] text-[10px] sm:text-[14px]">
              Montessori Is A Nurturing And Holistic Approach To Learning
            </p>
          </div>
          <div>
            <p className=" text-[12px] sm:text-[14px] md:text-[16px] mt-5 flex justify-center bg-[#E8063C] hover:bg-[#4D0D58] border-[#E8063C] border-[3px] px-4 md:px-6 py-2 md:py-3 font-semibold text-[#ffffff] rounded-full">
              Apply Today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
