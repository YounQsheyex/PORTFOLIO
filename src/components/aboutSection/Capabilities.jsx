import React from "react";
import { ability } from "../../../utils/data";

const Capabilities = () => {
  return (
    <div className="w-full mt-20 border-b-[1px] border-[#484848]">
      <div className="layout">
        <div className="w-full py-[64px] flex flex-col gap-[12px] lg:flex-row lg:gap-[24px] justify-between items-start">
          <div className="w-full flex-1">
            <h2 className="font-[400] text-[43px] text-[#ffffff] tracking-[-2%] leading-[100%]">
              My Capabilities
            </h2>
          </div>
          <div className="w-full flex-1 flex flex-col gap-[24px] lg:gap-[32px]">
            <div>
              <p
                style={{ fontFamily: "Manrope,sans-serif" }}
                className="font-[400] text-[16px] text-[#C7C7C7] leading-[160%]"
              >
                I am always looking to add more skills.Morbi egestas neque eu
                blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex
                at purus faucibus tristique ut et dolor.
              </p>
            </div>
            <div className="w-full max-w-[600px] flex items-center gap-[12px] lg:gap-[16px] flex-wrap ">
              {ability.map((a, i) => {
                return (
                  <div
                    key={i}
                    className="w-[125px] h-[46px] lg:h-[56px] rounded-full border-[1px] border-[#484848] flex justify-center items-center"
                  >
                    <p
                      style={{ fontFamily: "Manrope,sans-serif" }}
                      className="font-[700] text-[14px] text-[#ffffff]"
                    >
                      {a.title}
                    </p>
                  </div>
                );
              })}
              {/* <div>
                <p style={{ fontFamily: "Manrope,sans-serif" }}>HTML</p>
              </div>
              <div>
                <p style={{ fontFamily: "Manrope,sans-serif" }}>CSS</p>
              </div>
              <div>
                <p style={{ fontFamily: "Manrope,sans-serif" }}>JAVASCRIPT</p>
              </div>
              <div>
                <p style={{ fontFamily: "Manrope,sans-serif" }}>JQUERY</p>
              </div>
              <div>
                <p style={{ fontFamily: "Manrope,sans-serif" }}>
                  ACCESSIBILITY
                </p>
              </div>
              <div style={{ fontFamily: "Manrope,sans-serif" }}>
                <p>FIGMA</p>
              </div>
              <div>
                <p style={{ fontFamily: "Manrope,sans-serif" }}>TAILWIND CSS</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
