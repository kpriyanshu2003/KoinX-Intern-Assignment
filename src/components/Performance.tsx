import React from "react";
import { PerformanceContainer, PerformanceNav } from "../ui/Performance";
import { performanceData } from "@/constants/performance-data";

function Performance() {
  return (
    <div>
      <PerformanceNav data={performanceData} />
      <PerformanceContainer />
    </div>
  );
}

export default Performance;
