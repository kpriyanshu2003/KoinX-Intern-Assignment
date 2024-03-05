import React from "react";
import Image from "next/image";
import { Button } from "@/ui/Button";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-5 border">
      <Image src="/assets/icon.svg" height={100} width={100} alt="KoinX Logo" />
      <div className="flex justify-evenly gap-8 font-semibold items-center">
        <span>Crypto Taxes</span>
        <span>Free Tools</span>
        <span>Resource Center</span>
        <Button
          bgFrom="blue-500"
          bgVia="blue-600"
          bgTo="blue-900"
          textColor="white"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
