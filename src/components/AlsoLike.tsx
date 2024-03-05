import Coin from "@/ui/Coin";
import React from "react";

function AlsoLike() {
  return (
    <div>
      <span className="text-3xl font-medium"></span>
      <div>
        <Coin name="BTC" />
        <Coin name="BTC" />
      </div>
    </div>
  );
}

export default AlsoLike;
