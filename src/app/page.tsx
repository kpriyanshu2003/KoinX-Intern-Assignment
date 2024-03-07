import React from "react";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import TradingView from "@/components/TradingViewWidget";
import AlsoLike from "@/components/AlsoLike";
import Trends from "@/components/Trends";

export default function Home() {
  return (
    <div>
      <AlsoLike />
      <Trends />
    </div>
  );
}
