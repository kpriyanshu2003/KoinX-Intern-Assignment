import React from "react";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import AlsoLike from "@/components/AlsoLike";
import Trends from "@/components/Trends";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Trading from "@/components/Trading";
import GetStarted from "@/components/GetStarted";
import TrendCoins from "@/components/TrendCoins";

export default function Home() {
  return (
    <div>
      <div className="md:flex items-start gap-5">
        <div className="md:w-4/6">
          <Trading />
          <Sentiment />
          <About />
          <div className="hidden md:block">
            <Tokenomics />
          </div>
          <Team />
          <AlsoLike />
          <Trends />
        </div>
        <div className="md:w-2/6">
          <GetStarted />
          <TrendCoins />
        </div>
      </div>
    </div>
  );
}
