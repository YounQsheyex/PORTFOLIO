import React from "react";
import manBg from "../../assets/manbg.jpg";
import { Link } from "react-router-dom";
import meblue from "../../assets/meblue.png";
import pass from "../../assets/pass.png"

const AboutDown = () => {
  return (
    <div className="w-full mx-auto border-b-[1px] border-[#484848] py-[64px] lg:py-[80px]">
      <div className="layout">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-[50px]">
          <div className="w-full flex-1">
            <h1 className="hidden lg:block font-[400] text-[101px] text-[#ffffff] leading-[90%]">
              About me
            </h1>
          </div>
          <div className="w-full flex-2">
            <h3
              style={{ fontFamily: "Manrope, sans-serif" }}
              className="hidden lg:block text-[32px] text-[#ffffff] font-[500] leading-[150%]"
            >
              I am a front-end developer based in Nigeria. <br /> Has Mechanical
              Computer Science.
            </h3>
            <p
              style={{ fontFamily: "Manrope, sans-serif" }}
              className="my-5 font-[400] text-[18px] text-[#C7C7C7] leading-[150%]"
            >
              I am a full-stack developer based in Nigeria looking for exciting
              opportunities. Has Computer Science background. Likes to focus on
              accessibility when developing. Passionate and curious about
              solving problems. Currently, I’m exploring Reactjs, Webflow and a
              bit of Designing. While I am not programming, I enjoy playing
              football, 8 Ball pools and listening to music. Learning more to
              improve skill.
            </p>
            <Link
              to={"/about"}
              style={{ fontFamily: "Manrope,sans-serif" }}
              className="my-7 text-[#D3E97A] text-[14px] lg:text-[16px] border-b-[1px] border-[#d3e97a]"
            >
              MORE ABOUT ME
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <img
            src={pass}
            alt=""
            className="bg-[#C7C7C7] w-full h-[400px] object-cover rounded-[16px] lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDown;
