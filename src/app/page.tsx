import About from "@/components/About";
import Sentiment from "@/components/Sentiment";
import Team from "@/components/Team";
import TradingView from "@/components/TradingViewWidget";
import Sentiment from "@/components/Sentiment";
import TradingView from "@/components/TradingViewWidget";

import AlsoLike from "@/components/AlsoLike";

export default function Home() {
  return (
    <>
      <TradingView />
      <Sentiment />
      <About />
      <Team />
      <AlsoLike />
    </>
  );
}
