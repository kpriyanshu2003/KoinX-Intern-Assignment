import { CoinDataProps } from "@/@types/CoinData";
import Image from "next/image";
import React from "react";
import { CardContent, CardSubHeading } from "./Card";

function Coin({
  coin,
  className,
}: {
  coin: CoinDataProps;
  className?: string;
}) {
  return (
    <div className={`border rounded-lg p-4 mx-2 ${className} overflow-hidden `}>
      <CardContent className="flex gap-3 items-center">
        <Image
          src={coin.item.thumb}
          alt={coin.item.name}
          width={50}
          className="rounded-full md:w-10 md:h-10 h-8 w-8"
          height={50}
        />
        <span className="font-semibold text-sm">{coin.item.symbol}</span>
      </CardContent>
      <CardSubHeading className="my-1 whitespace-nowrap">
        {coin.item.data.price}
      </CardSubHeading>
      <Image
        src={coin.item.data.sparkline}
        alt="sparkline"
        width={100}
        height={50}
        className="w-full"
      />
    </div>
  );
}

export default Coin;
