import {
  CardContainer,
  CardContent,
  CardSubHeading,
  CardTitle,
} from "@/ui/Card";
import SentimentCards from "@/ui/SentimentCards";
import { ProgressBar } from "@/ui/UI-Elements";
import React from "react";

function Sentiment() {
  return (
    <div className="bg-white">
      <CardContainer>
        <CardTitle>Sentiment</CardTitle>
        <CardContent>
          <CardSubHeading icon="/assets/info.svg">Key Events</CardSubHeading>
          <div className="flex gap-10">
            <SentimentCards
              icon="/assets/newspaper.svg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin"
              bgColor="#0082FF"
              bg="#e8f4fd"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac.
            </SentimentCards>
            <SentimentCards
              icon="/assets/upwards.svg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin"
              bgColor="#0FBA83"
              bg="#EBF9F4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac.
            </SentimentCards>
          </div>
        </CardContent>
        <CardContent>
          <CardSubHeading icon="/assets/info.svg">
            Analyst Estimates
          </CardSubHeading>
          <CardContent>
            <div className="flex items-center gap-5">
              <div className="bg-[#EBF9F4] rounded-full h-40 w-40 grid place-content-center">
                <span className="text-[#0FBA83] font-semibold">
                  <span className="text-4xl">76</span>
                  <span className="text-xl">%</span>
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <ProgressBar text="Buy" color="#00B386" progress={76} />
                <ProgressBar text="Hold" color="#C7C8CE" progress={8} />
                <ProgressBar text="Sell" color="#F7324C" progress={16} />
              </div>
            </div>
          </CardContent>
        </CardContent>
      </CardContainer>
    </div>
  );
}

export default Sentiment;
