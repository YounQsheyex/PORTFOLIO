import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import manBg from "../../assets/manbg.jpg";

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
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill.
            </p>
            <a
              href=""
              style={{ fontFamily: "Manrope,sans-serif" }}
              className="my-7 text-[#D3E97A] text-[14px] lg:text-[16px] border-b-[1px] border-[#d3e97a]"
            >
              MORE ABOUT ME
            </a>
          </div>
        </div>
        <div className="mt-20 w-full h-[343px] lg:h-[700px] object-cover rounded-[16px]">
          <img
            src={manBg}
            alt=""
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
