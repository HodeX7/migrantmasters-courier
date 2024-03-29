"use client";
import React from "react";
import Button from "./ui/Button";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="bg-background  h-[5%] lg:h-[8%] w-full px-16 z-10 flex items-center justify-between fixed top-0 text-white">
      <h1 className="text-6xl lg:text-5xl font-bold lg:font-semibold">
        MailBooth
      </h1>
      <div className="hidden lg:flex lg:gap-8 lg:items-center ">
        <Link href={"/about"}>
          <h1 className="cursor-pointer">About Us</h1>
        </Link>
        <Link href={"/form/senderDetails"}>
          <h1 className="cursor-pointer">Book My Shipment</h1>
        </Link>
        <Link href={"/partners"}>
          <h1 className="cursor-pointer">Partners</h1>
        </Link>
        <Link href={"/contact"}>
          <h1 className="cursor-pointer">Contact Us</h1>
        </Link>
        <Button text="Log In" />
      </div>
      <button
        className={"lg:hidden p-2.5 text-white"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute top-0 ${Open ? "right-[33%]" : "right-[2%]"} `}
        >
          <path
            d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
            fill="#ffffff"
          ></path>
        </svg>
        {Open && (
          <div className="lg:hidden absolute right-0 h-[300vh] w-[50%] backdrop-blur-2xl backdrop-contrast-50 flex justify-center items-center flex-col gap-y-24 mt-[-5%] pb-[20%]">
            <Link href={"/about"}>
              <h1 className="cursor-pointer text-6xl font-extrabold">
                About Us
              </h1>
            </Link>
            <Link href={"/form/senderDetails"}>
              <h1 className="cursor-pointer text-6xl font-extrabold">
                Book My Shipment
              </h1>
            </Link>
            <Link href={"/partners"}>
              <h1 className="cursor-pointer text-6xl font-extrabold">
                Partners
              </h1>
            </Link>
            <Link href={"/contact"}>
              <h1 className="cursor-pointer text-6xl font-extrabold">
                Contact Us
              </h1>
            </Link>
            <Button text="Log In" classes={"text-6xl w-fit h-fitpx-4"} />
          </div>
        )}
      </button>
    </div>
  );
};

export default Navbar;
