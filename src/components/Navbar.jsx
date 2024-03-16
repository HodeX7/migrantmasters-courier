import React from "react";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div
      className="bg-background w-screen py-5 px-16 z-10 flex items-center justify-between fixed top-0 text-white"
    >
      <div>
        <h1>Courier Service</h1>
      </div>
      <div className="flex gap-8 items-center">
        <h1>About Us</h1>
        <h1>Contact Us</h1>
        <Button text="Log In" />
      </div>
    </div>
  );
};

export default Navbar;
