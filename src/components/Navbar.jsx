import React from "react";
import Button from "./ui/Button";
import { redirect } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-background w-screen py-5 px-16 z-10 flex items-center justify-between fixed top-0 text-white">
      <div>
        <h1>MailBooth</h1>
      </div>
      <div className="flex gap-8 items-center">
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
    </div>
  );
};

export default Navbar;
