import { log } from "console";
import React, { useState } from "react";
import line from "@/assets/images/line.png";
import Image from "next/image";

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
    <div className="container my-24 mx-auto md:px-6" id="student">
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
        <div
          id="carouselExampleCaptions"
          className="relative"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {testimonials.map((e, i) => {
              return (
                <div
                  className={`relative ${
                    i === currentIndex ? "visible" : "hidden"
                  } float-left -mr-[100%]  w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
                  data-te-carousel-active
                  data-te-carousel-item
                >
                  <img
                    className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg"
                    alt="avatar"
                  />
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                      <h5 className="mb-2 text-lg font-bold">{e.name}</h5>
                      <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                        {e.role}
                      </p>
                      <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                        {e.content}
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
              );
            })}
          </div>
          <button
            onClick={back}
            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-neutral-600 dark:text-neutral-300"
              >
                <path
                  fill="currentColor"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          <button
            onClick={next}
            className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-neutral-600 dark:text-neutral-300"
              >
                <path
                  fill="currentColor"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
