import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import manBg from "../../assets/manbg.jpg";
import { RiDownload2Line } from "react-icons/ri";
import grad from "../../assets/grad.png"
import meblue from "../../assets/meblue.png"

const AboutHero = () => {
  return (
    <div className="w-full mx-auto mt-20">
      <div className="layout">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[50px]">
          <div className="w-full flex-1">
            <h1 className="font-[400] text-[57px] lg:text-[101px] text-[#ffffff] leading-[90%]">
              About me
            </h1>
          </div>
          <div className="w-full flex-2">
            <h3
              style={{ fontFamily: "Manrope, sans-serif" }}
              className="text-[24px] lg:text-[32px] text-[#ffffff] font-[500] leading-[150%]"
            >
              I am a front-end developer based in Sydney. <br /> Has Mechanical
              Engineering background.
            </h3>
            <p
              style={{ fontFamily: "Manrope, sans-serif" }}
              className="my-5 font-[400] text-[16px] lg:text-[18px] text-[#C7C7C7] leading-[150%]"
            >
              I am a full-stack developer based in Nigeria looking for exciting
              opportunities. Has Computer Science background. Likes to focus on
              accessibility when developing. Passionate and curious about
              solving problems. Currently, I’m exploring Reactjs, Webflow and a
              bit of Designing. While I am not programming, I enjoy playing
              football, 8 Ball pools and listening to music. Learning more to
              improve skill.
            </p>
            <div className="mt-2 lg:mt-10 w-[332px] h-[48px] lg:w-[384px]  lg:h-[54px] flex items-center gap-[16px]">
              <a
                href="https://drive.google.com/file/d/1MDQUv24cR6pP8xde0oXclerpd-4zkNAL/view?usp=sharing"
                target="blank"
              >
                <button className="bg-[#D3E97A]  w-[212px] h-[48px] lg:w-[224px] lg:h-[54px] rounded-full pr-[5px] pl-[12px] [20px] lg:pr-[6px] flex items-center gap-2 hover:gap-0 hover:justify-between cursor-pointer group transition-all duration-300">
                  <p
                    style={{ fontFamily: "Manrope" }}
                    className=" gap-[12px] font-[700] text-[14px] lg:text-[16px] text-[#0A0A0A]"
                  >
                    DOWNLOAD RESUME
                  </p>
                  <span className="w-[10px] h-[10px] bg-black rounded-full flex justify-center items-center group-hover:w-[40px] group-hover:h-[40px]">
                    <RiDownload2Line
                      size={20}
                      color="#ffffff"
                      className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </span>
                </button>
              </a>

              <div className="flex justify-center items-center w-[48px] h-[48px] lg:w-[54px] lg:h-[54px]  rounded-full bg-[#222222]  hover:bg-[#4a4747]">
                <a
                  href="https://www.linkedin.com/in/younqsheyex-seyi-lawrence-585b6b272/"
                  target="blank"
                >
                  <FaLinkedinIn size={30} color="#D3E97A" />
                </a>
              </div>
              <div className="flex justify-center items-center w-[48px] h-[48px]  lg:w-[54px] lg:h-[54px]  rounded-full bg-[#222222]  hover:bg-[#4a4747]">
                <a href="https://github.com/YounQsheyex" target="blank">
                  <FaGithub size={30} color="#D3E97A" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full h-[343px] lg:h-[700px] object-cover rounded-[16px]">
          <img
            src={grad}
            alt=""
            className="bg-[#C7C7C7] w-full h-full object-contain rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
