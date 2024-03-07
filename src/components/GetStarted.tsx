import React from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { Button } from "@/ui/UI-Elements";
import { CardTitle } from "@/ui/Card";
const GetStarted = () => {
  return (
    <div className="bg-[#0052fe] rounded-3xl flex flex-col gap-8 items-center text-center text-white p-10">
      <CardTitle>
        Get Started with KoinX
        <br /> for FREE
      </CardTitle>
      <div className="text-[#F2F2F2] text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </div>
      <Image
        src="/assets/subscription.svg"
        alt="subscription"
        width={200}
        height={200}
      />
      <Button
        textColor="black"
        className="flex items-center font-bold bg-white p-2 pr-8 pl-8 gap-4"
      >
        Get Started for FREE <IoArrowForward />
      </Button>
    </div>
  );
};

export default GetStarted;
