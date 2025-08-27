import React from "react";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full  bg-black mx-auto">
      <div className="layout lg:px-[60px] lg:py-[24px] flex justify-between items-center">
        <div className="w-full">
          <Link to={"/"}>
            <h1 className="font-[Bebas-Neue] font-[400] text-[#C7C7C7] text-[32px]">
              OLUWASEYI LAWRENCE
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex justify-between gap-[32px] items-center font-[500] text-[16px] text-[#C7C7C7] ">
          <a href="#work" style={{ fontFamily: "Inter, sans-serif" }}>
            Work
          </a>
          <a href="#about" style={{ fontFamily: "Inter, sans-serif" }}>
            About
          </a>
          <a href="#contact" style={{ fontFamily: "Inter, sans-serif" }}>
            Contact
          </a>
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="m-1">
            <GrMenu size={40} color="#f5f5f5" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box bg-[#D3E97A] z-1 w-[200px]  p-2 shadow-sm rounded-lg "
          >
            <li>
              <div className="flex flex-col justify-between gap-[32px] items-center font-[500] text-[24px] text-[#0A0A0A] ">
                <a href="#work" style={{ fontFamily: "Inter, sans-serif" }}>
                  Work
                </a>
                <a href="#about" style={{ fontFamily: "Inter, sans-serif" }}>
                  About
                </a>
                <a href="#contact" style={{ fontFamily: "Inter, sans-serif" }}>
                  Contact
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
