import React from "react";
import Image from "next/image";
import { Button } from "@/ui/Button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-5 border">
      <Image src="/assets/icon.svg" height={100} width={100} alt="KoinX Logo" />
      <div className="flex justify-evenly gap-8 font-semibold items-center">
        <Link href="/">Crypto Taxes</Link>
        <Link href="/">Free Tools</Link>
        <Link href="/">Resource Center</Link>
        <Button
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
