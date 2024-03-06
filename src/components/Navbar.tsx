"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, NavItems } from "@/ui/UI-Elements";
import Link from "next/link";
import { MdOutlineClose, MdMenu } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex justify-between items-center px-4 md:px-10 py-5 border">
      <Image src="/icon.svg" height={100} width={100} alt="KoinX Logo" />
      <div className="hidden md:flex justify-evenly gap-8 font-semibold items-center">
        <Link href="/">Crypto Taxes</Link>
        <Link href="/">Free Tools</Link>
        <Link href="/">Resource Center</Link>
        <Button
          gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900"
          textColor="white"
          className="py-2 px-3"
        >
          Get Started
        </Button>
      </div>
      <MdMenu className="w-10 h-10 md:hidden" onClick={() => setOpen(!open)} />
      <div
        className={`top-0 right-0 w-3/4 bg-opacity-50 bg-black backdrop-blur-lg md:hidden pb-10 text-white fixed h-full z-40 ease-in-out duration-300 ${
          open ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <MdOutlineClose
          onClick={() => setOpen(!open)}
          className="w-12 h-12 m-4"
        />
        <div className="flex flex-col  justify-between font-medium text-md mt-32  w-full ">
          <NavItems href="/">Crypto Taxes</NavItems>
          <NavItems href="/">Free Tools</NavItems>
          <NavItems href="/">Resource Center</NavItems>
        </div>
        <Button
          className="absolute bottom-6 left-1/2 -translate-x-1/2 px-10 py-2 w-3/4"
          gradient="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900"
          textColor="white"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
