import { CoinDataProps } from "@/@types/CoinData";
import Image from "next/image";
import React from "react";
import { CardContent, CardSubHeading } from "./Card";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export function Coin({
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

export function TrendCoin({
  className,
  name,
  image,
}: {
  className?: string;
  name?: string;
  image?: string;
}) {
  return (
    <div className="flex items-center gap-3 mt-4">
      <Image src="/assets/ethereum.png" alt="ethereum" width={25} height={25} />
      Ethereum(ETH)
      <div className="flex items-center text-[#14B079] font-medium bg-[#EBF9F4] py-1 px-3 rounded-md">
        <IoMdArrowDropup />
        8.21%
      </div>
    </div>
  );
}
