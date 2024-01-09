import React from "react";

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center">
      <div className="text[18px] font-medium mt-10">
        Keep up to date with the latest news and offers
      </div>
      <div className="text-[55px] font-bold mt-10">
        Sign Up For Our Newsletter
      </div>
      <div className="flex justify-center items-center mt-10">
        <div>
          <input
            type="text"
            placeholder="Enter Your Email Address...."
            className="w-[800px] h-[70px] border rounded-full  pl-10 "
          />
        </div>
        <div className="bg-[#E8063C] relative right-40    hover:bg-[#490D59] border-[#E8063C] border-4 text-[#ffffff] font-bold rounded-full flex justify-center items-center text-[16px] w-[150px] h-[55px]">
          Subscribe
        </div>
      </div>
    </div>
  );
}
