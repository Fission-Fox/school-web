import line from "@/assets/images/line.png";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Upcoming() {
  return (
    <div className=" bg-[#f8f7f7] w-full mt-6 pt-20 pb-40" id="upcoming">
      <div className="mb-10">
        <div className="flex justify-center ">
          <h1 className="text-[35px] lg:text-[50px]  font-sans font-bold mt-6  text-[#00306E]">
            Events
          </h1>
        </div>
        <div className="flex justify-center ">
          <Image src={line} alt="" />
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        style={{ width: "90%", margin: "auto", cursor: "grab" }}
        spaceBetween={20}
        breakpoints={{
          1500: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-10 xl:!py-14 ">
            <p className="text-[#D2093C] text-[20px] font-sans font-semibold leading-8 px-10">
              PARENTS ORIENTATION
            </p>
            <div className="px-10">
              <p className="text-[#00306e] text-[12px] xl:text-[18px] font-sans  leading-7 mt-1">
                To establish healthy communication regarding the academics our
                school conducted an orientation for the parents . The
                headmistress Maam Safia Muhammad Ali presented the mission and
                vision of the institution, and shared a brief overview of the
                school’s agenda.
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-10 xl:!py-14 ">
            <p className="text-[#D2093C] text-[20px] font-sans font-semibold leading-8 px-10">
              PARENTS TEACHER MEETING (PTM)
            </p>
            <div className="px-10">
              <p className="text-[#00306e] text-[12px] xl:text-[18px] font-sans  leading-7 mt-1">
                We organize Parent's Teacher Meeting in every month. To discuss
                the performance of students with their parents it was a great
                interaction between the teachers & the parents for the
                development of their children, where they discussed the strength
                and areas of improvements.
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-10 xl:!py-14 ">
            <p className="text-[#D2093C] text-[20px] font-sans font-semibold leading-8 px-10">
              ELECTION CAMPAIGN
            </p>
            <div className="px-10">
              <p className="text-[#00306e] text-[12px] xl:text-[18px] font-sans  leading-7 mt-1">
                The school elections are one of the most important events among
                other highlighted events of the school. The Students` Zone
                schooling system organized the event being sure that the
                elections were free and fair and the rules and regulations were
                followed.
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-10 xl:!py-14 ">
            <p className="text-[#D2093C] text-[20px] font-sans font-semibold leading-8 px-10">
              YOUM-E-HUSSAIN<sup className="text-[10px]">علیہ السلام</sup>
            </p>
            <div className="px-10">
              <p className="text-[#00306e] text-[12px] xl:text-[18px] font-sans  leading-7 mt-1">
                We organized Youm-e-Hussain with honor and respect in the memory
                of Hazrat Imam Hussain{" "}
                <sup className="text-10px]">علیہ السلام</sup>at the Student’s
                Zone Schooling System. students presented nohas, speeches and
                quotes of prominent world leaders and scholars, who are greatly
                inspired by the supreme sacrifice of Imam Hussain
                <sup className="text-[10px]">علیہ السلام</sup>
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-10 xl:!py-14 ">
            <p className="text-[#D2093C] text-[20px] font-sans font-semibold leading-8 px-10">
              INDEPENDENCE DAY
            </p>
            <div className="px-10">
              <p className="text-[#00306e] text-[12px] xl:text-[18px] font-sans  leading-7 mt-1">
                QUAID-E-AZAM MUHAMMAD ALI JINNAH The 75th Independence Day of
                Pakistan was celebrated with zeal and zest. The activities were
                planned keeping in mind the values of our country. Students came
                dressed in cultural outfits. Various presentations were prepared
                to celebrate the day at school.
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-10 xl:!py-14 ">
            <p className="text-[#D2093C] text-[20px] font-sans font-semibold leading-8 px-10">
              Students` WEEK 2022
            </p>
            <div className="px-10">
              <p className="text-[#00306e] text-[12px] xl:text-[18px] font-sans  leading-7 mt-1">
                “Stand up for the champions!” Annual Sports Day was organized at
                the Students` Zone Schooling System as we believe sports offer
                children a change from the monotony of their daily life. It is
                also a useful means of entertainment and physical activities for
                students.
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-10 xl:!py-14 ">
            <p className="text-[#D2093C] text-[20px] font-sans font-semibold leading-8 px-10">
              SCIENCE EXHIBITION
            </p>
            <div className="px-10">
              <p className="text-[#00306e] text-[12px] xl:text-[18px] font-sans  leading-7 mt-1">
                “Stand up for the champions!” Annual Sports Day was organized at
                the Students` Zone Schooling System as we believe sports offer
                children a change from the monotony of their daily life. It is
                also a useful means of entertainment and physical activities for
                students.
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex justify-center">
          {/* <div className="flex flex-wrap justify-center items-center m-auto flex-col lg:flex-row  gap-10"> */}
          <div className="bg-[#fff] w-[300px] !py-10 xl:!py-14 ">
            <p className="text-[#D2093C] text-[20px] font-sans font-semibold leading-8 px-10">
              PICNIC
            </p>
            <div className="px-10">
              <p className="text-[#00306e] text-[12px] xl:text-[18px] font-sans  leading-7 mt-1">
                The Students’ Zone Schooling System organized a trip to picnic
                for its junior and senior campus. The students were provided
                with the opportunity to go on an excursion trip and a chance to
                see and explore the beauty of nature. students had fun playing
                cricket and indoor games.
              </p>
            </div>{" "}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
