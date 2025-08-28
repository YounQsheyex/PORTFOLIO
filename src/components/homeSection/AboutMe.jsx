import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import manBg from "../../assets/manbg.jpg";
import meG from "../../assets/meG.png";
import meBlue from "../../assets/meblue.png";
import pass from "../../assets/pass.png"

const AboutMe = () => {
  return (
    <div className="mt-10 lg:mt-0 w-full bg-black border-b-[1px] border-[#484848] py-[64px] lg:py-[80px]">
      <div className=" layout  flex flex-col items-center md:flex-row lg:flex-row lg:items-center ">
        <div className="flex-1 mx-auto w-full lg:pb-[22px] flex-flex-col gap-[32px] lg:gap-[40px] lg:p-2">
          <div className="w-full flex flex-col items-center lg:items-start gap-[12px] lg:gap-[8px]">
            <h1 className="w-full  text-[57px] lg:text-[101px] leading-[100%] lg:leading-[90%] text-[#FFFFFF] font-[400]">
              hi, i am oluwaseyi lawrence
            </h1>
            <p
              style={{ fontFamily: "Manrope, sans-serif" }}
              className="w-full font-[400]  text-[16px] lg:text-[18px] lg:leading-[150%] text-[#C7C7C7]"
            >
              A Nigerian based front-end developer passionate about building
              accessible and user friendly websites.
            </p>
          </div>
          <div className="mt-2 lg:mt-10 w-[291px] h-[48px] lg:w-[327px] lg:h-[54px] flex items-center gap-[16px]">
            <button className="bg-[#D3E97A] flex items-center justify-between gap-[12px] w-[163px] h-[48px] lg:w-[187px] lg:h-[54px] rounded-full pr-[5px] pl-[12px] lg:pt-[20px] lg:pb-[20px] lg:pr-[6px] lg:pl-[24px]">
              <p
                style={{ fontFamily: "Manrope" }}
                className="font-[700] text-[14px] lg:text-[16px] text-[#0A0A0A]"
              >
                CONTACT ME
              </p>
              <span className="w-[40px] h-[40px] bg-black rounded-full">
                <CgArrowTopRight size={40} color="#ffffff" />
              </span>
            </button>

            <div className="flex justify-center items-center w-[48px] h-[48px] lg:w-[54px] lg:h-[54px]  rounded-full bg-[#222222]">
              <a
                href="https://www.linkedin.com/in/younqsheyex-seyi-lawrence-585b6b272/"
                target="blank"
              >
                <FaLinkedinIn size={30} color="#D3E97A" />
              </a>
            </div>
            <div className="flex justify-center items-center w-[48px] h-[48px]  lg:w-[54px] lg:h-[54px]  rounded-full bg-[#222222]">
              <a href="https://github.com/YounQsheyex" target="blank">
                <FaGithub size={30} color="#D3E97A" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex-1 bg-[#C7C7C7] rounded-[16px] mt-10 lg:mt-0">
          {" "}
          <img
            src={pass}
            alt=""
            className="w-[343px] h-[400px] lg:w-[600px] lg:h-[700px]  object-cover rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
