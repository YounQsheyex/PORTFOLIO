import React from "react";
import { FaGithub } from "react-icons/fa6";
import { data } from "../../../utils/data";
import { CgArrowTopRight } from "react-icons/cg";

const Work = () => {
  return (
    <div className="w-full bg-black mt-20 border-b-[1px] border-[#484848] py-[64px] lg:py-[80px]">
      <div className="max-w-[1224px] mx-auto  px-4">
        <div className="w-full  mx-auto">
          <div className="max-w-[600px] flex flex-col items-start gap-[12px] lg:gap-[8px]">
            <h2 className="font-[400] text-[43px] lg:text-[76px] text-[#FFFFFF] leading-[100%]">
              Featured Projects
            </h2>
            <p
              style={{ fontFamily: "Manrope, sans-serif" }}
              className="font-[400] text-[16px] lg:text-[18px] text-[#C7C7C7] leading-[160%]"
            >
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>
          <div className="mt-20  w-full">
            {data.map((d, index) => {
              return (
                <div
                  key={index}
                  className="my-30 flex flex-col  lg:flex-row gap-[40px] lg:gap-[60px] items-start lg:items-center"
                >
                  <div className="relative w-full flex-1">
                    <div className="w-full h-[343px] lg:h-[600px] object-cover rounded-[16px] bg-[#222222] flex justify-center items-center ">
                      <img
                        src={d.image}
                        alt="img"
                        className="w-full h-full lg:w-[500px] lg:h-[500px]  object-cover rounded-[16px] "
                      />
                    </div>
                    {d.tag && (
                      <div className="bg-[#0A0A0A] px-[12px] py-[6px] flex items-center rounded-full absolute top-2 left-2">
                        <p
                          style={{ fontFamily: "Manrope,sans-serif" }}
                          className="font-[500] yexy-[12px] tracking-[1%] text-[#ffffff]"
                        >
                          {d.tag}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-10 lg:mt-0 flex-1 w-full lg:max-w-[600px]">
                    <div>
                      <h3
                        style={{ fontFamily: "Manrope, sans-serif" }}
                        className="font-[500] text-[24px] text-[#ffffff] leading-[140%]"
                      >
                        {d.title}
                      </h3>
                      <p
                        style={{ fontFamily: "Manrope, sans-serif" }}
                        className="mt-3 font-[400] text-[16px] text-[#C7C7C7] leading-[160%]"
                      >
                        {d.details}
                      </p>
                    </div>
                    <div className="">
                      <div className="border-b-[1px] border-[#484848]">
                        <h5
                          style={{ fontFamily: "Manrope, sans-serif" }}
                          className="my-5 font-[600] text-[16px] text-[#ffffff] leading-[150%]"
                        >
                          Project Info
                        </h5>
                      </div>
                      <div className="my-5 w-full flex justify-between items-center border-b-[1px] border-[#484848] py-[16px]">
                        <p
                          style={{ fontFamily: "Manrope, sans-serif" }}
                          className="font-[500] text-[16px] text-[#ffffff]"
                        >
                          Year
                        </p>
                        <p
                          style={{ fontFamily: "Manrope, sans-serif" }}
                          className="font-[500] text-[16px] text-[#C7C7C7]"
                        >
                          {d.year}
                        </p>
                      </div>
                      <div className="my-5 w-full flex justify-between items-center border-b-[1px] border-[#484848] py-[16px]">
                        <p
                          style={{ fontFamily: "Manrope, sans-serif" }}
                          className="font-[500] text-[16px] text-[#ffffff]"
                        >
                          Role
                        </p>
                        <p
                          style={{ fontFamily: "Manrope, sans-serif" }}
                          className="font-[500] text-[16px] text-[#C7C7C7]"
                        >
                          {d.role}
                        </p>
                      </div>
                    </div>
                    <div className="w-[252px] lg:w-[284px] flex gap-[24px] items-center ">
                      <a href={d.live} target="blank" className="border-b-[1px] border-[#d3e97a]">
                        <p
                          style={{ fontFamily: "Manrope, sans-serif" }}
                          className="flex items-center gap-[4px] font-[700] text-[14px] text-[#D3E97A]"
                        >
                          LIVE DEMO
                          <span>
                            <CgArrowTopRight />
                          </span>
                        </p>
                      </a>
                      <a href={d.git} target="blank" className="border-b-[1px] border-[#d3e97a]">
                        <p
                          style={{ fontFamily: "Manrope, sans-serif" }}
                          className="flex items-center gap-[4px] font-[700] text-[14px] text-[#D3E97A]"
                        >
                          See on Github
                          <span>
                            <FaGithub color="#D3E97A" />
                          </span>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
