import {
  CardContainer,
  CardContent,
  CardSubHeading,
  CardTitle,
} from "@/ui/Card";
import SentimentCards from "@/ui/SentimentCards";
import React from "react";

function Sentiment() {
  return (
    <div>
      <CardContainer>
        <CardTitle>Sentiment</CardTitle>
        <CardContent>
          <CardSubHeading icon="info-icon">Key Events</CardSubHeading>
          <div className="border h-40 flex gap-10">
            <SentimentCards
              icon="/assets/icon.svg"
              title="Sample Title"
              description="Sample Description"
              bgColor="wht"
            />
            <SentimentCards
              icon="/assets/icon.svg"
              title="Sample Title"
              description="Sample Description"
              bgColor="wht"
            />
          </div>
        </CardContent>
        <CardContent>
          <CardSubHeading icon="info">Analyst Estimates</CardSubHeading>
        </CardContent>
      </CardContainer>
    </div>
  );
}

export default Sentiment;
