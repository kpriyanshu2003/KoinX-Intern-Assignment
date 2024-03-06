import React from "react";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import TradingViewWidget from "@/components/TradingViewWidget";

export default function Home() {
  return (
    <div>
      <TradingViewWidget />
      <Sentiment />
      <About />
      <Tokenomics />
      <Team />
    </div>
  );
}
