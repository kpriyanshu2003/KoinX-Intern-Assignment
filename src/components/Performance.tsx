import { fundamentals } from "@/constants/fundamentals";
import {
  CardContainer,
  CardContent,
  CardSubHeading,
  CardTitle,
} from "@/ui/Card";
import Table from "@/ui/Table";
import React from "react";

function Performance() {
  return (
    <div className="p-4 bg-white rounded-lg m-4">
      <CardContainer>
        <CardTitle>Performance</CardTitle>
        <CardContent>Content Goes Here</CardContent>
        <CardSubHeading icon="/assets/info.svg">Fundamentals</CardSubHeading>
        <div className="flex items-start justify-evenly">
          <CardContent>
            <Table data={fundamentals[0]} />
          </CardContent>
          <CardContent>
            <Table data={fundamentals[0]} />
          </CardContent>
        </div>
      </CardContainer>
    </div>
  );
}

export default Performance;
