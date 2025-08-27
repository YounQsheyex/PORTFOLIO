import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full mx-auto mt-30">
      <div className="layout">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between items-start">
          <div className="w-full flex-1">
            <div>
              <h2 className="font-[400] text-[43px] text-[#ffffff] tracking-[-2%] leading-[100%]">
                Let’s connect
              </h2>
              <p
                style={{ fontFamily: "Manrope,sans-serif" }}
                className="my-5 font-[400] text-[16px] lg:text-[18px] text-[#C7C7C7]"
              >
                Say hello at{" "}
                <span
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  className="text-[#ffffff] border-b-[1px] border-[#D3E97A]"
                >
                  younqsheyex@gmail.com
                </span>
              </p>
              <p
                style={{ fontFamily: "Manrope,sans-serif" }}
                className="my-5 font-[400] text-[16px] lg:text-[18px] text-[#C7C7C7]"
              >
                {" "}
                For more info, here’s my{" "}
                <span className="text-[#ffffff] border-b-[1px] border-[#D3E97A]">
                  <a href="" style={{ fontFamily: "Manrope,sans-serif" }}>
                    resume
                  </a>
                </span>
              </p>
            </div>
            <div className="w-[224px] flex justify-between">
              <a href="">
                <FaLinkedinIn size={30} color="#D3E97A" />
              </a>
              <a href="">
                <FaGithub size={30} color="#D3E97A" />
              </a>
              <a href="">
                <FaXTwitter size={30} color="#D3E97A" />
              </a>
              <a href="">
                <BsInstagram size={30} color="#D3E97A" />
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 w-full flex-1">
            <form action="" className="flex flex-col gap-[24px] max-w-[600px]">
              <div className="flex flex-col gap-[8px]">
                <label
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  htmlFor="name"
                  className="label"
                >
                  Name
                </label>
                <input
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  id="name"
                  type="text"
                  className="my-input"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  htmlFor="email"
                  className="label"
                >
                  Email
                </label>
                <input
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  id="email"
                  type="email"
                  className="my-input"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  htmlFor="subject"
                  className="label"
                >
                  Subject
                </label>
                <input
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  id="subject"
                  type="text"
                  className="my-input"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  htmlFor="message"
                  className="label"
                >
                  Message
                </label>
                <textarea
                  style={{ fontFamily: "Manrope,sans-serif" }}
                  id="message"
                  className="w-full h-[156px] bg-[#1A1A1A] px-[16px] py-[12px] focus:outline-none text-[#ffffff]"
                ></textarea>
              </div>
              <button
                style={{ fontFamily: "Manrope,sans-serif" }}
                className="w-[140px] h-[54px] bg-[#D3E97A] text-[#0A0A0A] text-[16px] font-[700] px-[40px] py-[20px] flex items-center rounded-full"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
