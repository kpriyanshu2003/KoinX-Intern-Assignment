import { fundamentals } from "@/constants/fundamentals-data";
import {
  CardContainer,
  CardContent,
  CardSubHeading,
  CardTitle,
} from "@/ui/Card";
import Table from "@/ui/Table";
import Image from "next/image";
import React from "react";
import { PageContainer } from "./PageContainer";

export function PerformanceContainer() {
  return (
    <PageContainer>
      <CardContainer>
        <CardTitle>Performance</CardTitle>
        <CardContent className="">
          <Image
            src="/assets/workaround-desktop.png"
            alt="performance_data"
            className="w-full h-56 md:block hidden"
            width={500}
            height={500}
          />
          <Image
            src="/assets/workaround-mobile.png"
            alt="performance_data"
            className="w-full h-32 my-5 md:hidden"
            width={500}
            height={500}
          />
        </CardContent>
        <CardSubHeading icon="/assets/info.svg">Fundamentals</CardSubHeading>
        <div className="md:flex items-start justify-between gap-20">
          <CardContent>
            <Table data={fundamentals[0]} />
          </CardContent>
          <CardContent>
            <Table data={fundamentals[1]} />
          </CardContent>
        </div>
      </CardContainer>
    </PageContainer>
  );
}

export function PerformanceNav({ data }: { data: string[] }) {
  return (
    <div className="flex items-center gap-10 px-4 border-b-2 overflow-x-auto scrollbar-hide">
      {data.map((key, index) => {
        return (
          <div
            key={index}
            className={`${
              key === "Overview"
                ? "text-[#0052fe] border-b-2 border-[#0052fe]"
                : "text-[#3e424a]"
            } pb-2 cursor-pointer whitespace-nowrap`}
          >
            {key}
          </div>
        );
      })}
    </div>
  );
}
