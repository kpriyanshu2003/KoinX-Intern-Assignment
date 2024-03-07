import React from "react";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import AlsoLike from "@/components/AlsoLike";
import Trends from "@/components/Trends";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <div>
      <Sentiment />
      <About />
      <div className="hidden md:block">
        <Tokenomics />
      </div>
      <Team />
      <AlsoLike />
      <Trends />
    </div>
  );
}
