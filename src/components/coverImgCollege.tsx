import coverImage from "@/assets/images/collegecover.jpg";
import Image from "next/image";
import Link from "next/link";
export default function CoverImgCollege() {
  return (
    <section className="py-24 w-full table relative h-[60vh] mt-5 ">
      <Image
        src={coverImage}
        alt="Background Image"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
        }}
      />
      <div
        style={{
          background: "linear-gradient(to right, black , transparent)",
        }}
        className="absolute top-0 h-full w-full opacity-75"
        id="coverimg"
      ></div>
      <div className="mx-auto md:!mx-36 relative flex flex-col justify-center h-full">
        <div className=" flex flex-col items-start   w-[70%] m-auto mt-36 ml-20 sm:ml-30 xl:ml-40">
          <div>
            <p className="text-[#FFFFFF] flex justify-center items-center text-[14px] sm:text-[16px] md:!text-[20px] xl:!text-[26px] bg-[#D2093C] px-3 py-1">
              Student's Zone College
            </p>
          </div>
          <div className="text-[30px] sm:text-[50px] md:text-[60px] xl:text-[70px] text-[#ffffff] font-bold ">
            <p className="text-[40px] leading-2">
              Let your educational brilliance shine with our scholarship program
              for A and A1 grade holders
            </p>
            <p className="text-[40px] leading-2">
              The Institute Which Produces the Future Pioneers
            </p>
          </div>
          <Link href={"/student-zone/admission"}>
            <div className="px-5 py-2 border flex justify-center items-center rounded-[6px] hover:bg-[#D2093C] hover:border-none mt-5">
              <button className="text-[#ffffff] font-semibold text-[14px] sm:text-[16px]">
                <p>Admission</p>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
