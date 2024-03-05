import React from "react";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      {/* <TradingView /> */}
      <Sentiment />
      <About />
      <Team />
    </div>
  );
}
