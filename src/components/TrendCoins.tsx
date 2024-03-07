import React from "react";
import Image from "next/image";
import { TrendCoin } from "@/ui/Coin";
import { PageContainer } from "@/ui/PageContainer";

function TrendCoins() {
  return (
    <PageContainer>
      <span className="text-xl font-bold">Trending Coins (24h)</span>
      <TrendCoin />
      <TrendCoin />
      <TrendCoin />
    </PageContainer>
  );
}

export default TrendCoins;
