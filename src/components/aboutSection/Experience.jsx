import React from "react";
import { xperience } from "../../../data";

const Experience = () => {
  return (
    <div className="w-full mt-20 py-[80px]">
      <div className="layout">
        <div className="w-full flex flex-col  gap-[16px] lg:flex-row lg:gap-[80px] justify-between items-start">
          <div className="w-full flex-1">
            <h2 className="text-[43px] text-[#ffffff] font-[400] leading-[100%] tracking-[-2%]">
              My Experience
            </h2>
          </div>
          <div className="w-full flex-1 flex flex-col gap-[40px] lg:gap-[80px]">
            {xperience.map((x, index) => {
              return (
                <div key={index} className="">
                  <div className="my-3 lg:flex justify-between items-center">
                    <h4
                      style={{ fontFamily: "Manrope,sans-serif" }}
                      className="font-[500] text-[18px] text-[#ffffff] leading-[130%]"
                    >
                      {x.title}
                    </h4>
                    <p
                      style={{ fontFamily: "Manrope,sans-serif" }}
                      className="font-[400] text-[16px] text-[#C7C7C7] leading-[160%]"
                    >
                      {x.year}
                    </p>
                  </div>
                  {x.tag && (
                    <p
                      style={{ fontFamily: "Manrope,sans-serif" }}
                      className="mb-2 text-[#D3E97A] text-[16px] font-[600]"
                    >
                      {x.tag}
                    </p>
                  )}
                  <p
                    style={{ fontFamily: "Manrope,sans-serif" }}
                    className="text-[16px] text-[#C7C7C7] font-[400] leading-[160%]"
                  >
                    {x.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
