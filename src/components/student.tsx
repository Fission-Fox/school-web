import { log } from "console";
import React, { useState } from "react";
import line from "@/assets/images/line.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function Testominal() {
  const [currentIndex, setIndex] = useState(0);
  const testimonials = [
    {
      name: "John Smith ",
      role: " Director",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
      content:
        "Collaborating with Universal Tech on our complex website development project was a seamless experience. Their developers showcased exceptional technical skills and a deep understanding of our requirements. They made a fantastic website that streamlined our operations and enhanced efficiency. We look forward to working with them again.",
      rating: 5,
    },
    {
      name: "Maria Kate  ",
      role: "C.E.O",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
      content:
        "  Working with Universal Tech was a game-changing experience for our business. Their team not only delivered the cutting-edge mobile app within our deadline but also made our business more efficient.",
    },
    {
      name: "David Bing ",
      role: "C.F.O",
      avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg",
      content:
        "Choosing Universal Tech was one of the best decisions we made. Their team’s professionalism and dedication to delivering the best solution are unmatched. They understood our unique business challenges and provided solutions accordingly; we will work with them next time.",
    },
  ];
  const next = () => {
    // console.log("hello");
    if (currentIndex < testimonials.length - 1) setIndex(currentIndex + 1);
  };

  const back = () => {
    // console.log("hello");
    // testimonials.map((e,i)=>{

    // })
    if (currentIndex > 0) setIndex(currentIndex - 1);
  };
  return (
    <div
      className="container flex flex-col justify-center my-24 mx-auto md:px-6"
      id="student"
    >
      <section className="mb-32 text-center">
        <div className="mb-10">
          <div className="flex justify-center ">
            <h1 className="text-[50px] font-sans font-bold mt-6  text-[#00306E]">
              What our student saying
            </h1>{" "}
          </div>
          <div className="flex justify-center">
            <Image src={line} alt="" />
          </div>
        </div>
      </section>
      <Swiper
        slidesPerView={1}
        style={{ width: "90%", margin: "auto", cursor: "grab" }}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className=" mb-16 flex justify-center">
          <div>
            {/* <img
              className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
              alt="avatar"
            /> */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                <h5 className="mb-2 text-lg font-bold text-center">
                  Faiza Haroon
                </h5>
                {/* <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400 text-center">
                  Director
                </p> */}
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">


                  I visited this school  and I want to say that the school's administration demonstrated excellent management. They have effectively guided the school, creating a positive and conducive learning environment for both students and staff.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul className="mb-0 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-16 flex justify-center">
          <div>
            {/* <img
              className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
              alt="avatar"
            /> */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                <h5 className="mb-2 text-lg font-bold text-center">
                  Sidra Waheed
                </h5>
                {/* <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400 text-center">
                  Director
                </p> */}
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  An extremely comfortable atmosphere to learn and to teach  and very cooperative staff and management .I highly recommend those who wants to have a peaceful teaching career.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul className="mb-0 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-16 flex justify-center">
          <div>
            {/* <img
              className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
              alt="avatar"
            /> */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                <h5 className="mb-2 text-lg font-bold text-center">
                  Ayesha Siddiqui
                </h5>
                {/* <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400 text-center">
                  Director
                </p> */}
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  The teachers are amazing, each child is treated with care. My son and daughter attended this school as well. If you have any doubts please go and see (PN) and she will put you at ease. I am blessed that some of the same teachers who taught me are teaching my children as well.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 96 960 960"
                    className="inline-block w-6"
                  >
                    <path
                      fill="currentColor"
                      d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                    />
                  </svg>
                </p>
                <ul className="mb-0 flex justify-center">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 96 960 960"
                      className="w-5 text-warning"
                    >
                      <path
                        fill="currentColor"
                        d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
