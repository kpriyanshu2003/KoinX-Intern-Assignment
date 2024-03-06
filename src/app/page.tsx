import React from "react";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import TradingViewWidget from "@/components/TradingViewWidget";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <Tokenomics />
      </div>
    </div>
  );
}
