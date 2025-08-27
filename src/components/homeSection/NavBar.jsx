import React from "react";

const NavBar = () => {
  return (
    <div className="w-full  bg-black mx-auto">
      <div className="layout lg:px-[60px] lg:py-[24px] flex justify-between items-center">
        <div className="w-full">
          <h1 className="font-[Bebas-Neue] font-[400] text-[#C7C7C7] text-[32px]">
            OLUWASEYI LAWRENCE
          </h1>
        </div>
        <div className="hidden md:flex justify-between gap-[32px] items-center font-[500] text-[16px] text-[#C7C7C7] ">
          <a href="" style={{ fontFamily: "Inter, sans-serif" }}>
            Work
          </a>
          <a href="" style={{ fontFamily: "Inter, sans-serif" }}>
            About
          </a>
          <a href="" style={{ fontFamily: "Inter, sans-serif" }}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
