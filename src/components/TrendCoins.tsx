import React from "react";
import Image from "next/image";
import { TrendCoin } from "@/ui/Coin";

function TrendCoins() {
  return (
    <div className="bg-white p-6 shadow-md">
      <div className="text-xl font-bold">Trending Coins (24h)</div>
      <TrendCoin />
      <TrendCoin />
      <TrendCoin />
    </div>
  );
}

export default TrendCoins;
