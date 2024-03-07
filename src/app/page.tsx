import React from "react";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import AlsoLike from "@/components/AlsoLike";
import Trends from "@/components/Trends";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import GetStarted from "@/components/GetStarted";
import Trending from "@/components/TrendCoins";
import TradingViewWidget from "@/components/TradingViewWidget";

export default function Home() {
  return (
    <div className="flex items-start gap-5">
      <div className="w-4/6">
        <TradingViewWidget />
        <Sentiment />
        <About />
        <div className="hidden md:block">
          <Tokenomics />
        </div>
        <Team />
        <AlsoLike />
        <Trends />
      </div>
      <div className="w-2/6 overflow-hidden">
        <GetStarted />
        <Trending />
      </div>
    </div>
  );
}
