"use client";

import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { PieData } from "@/constants/pie-data";

export function PieChartt() {
  return (
    <div className="flex items-center">
      <PieChart
        radius={30}
        lineWidth={25}
        className="w-72 h-72 -rotate-90"
        data={PieData}
      />
      <div>
        {PieData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="text-lg">
              {item.title} : {item.value} %
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
