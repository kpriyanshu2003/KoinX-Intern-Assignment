import { SentimentCardProp } from "@/@types/SentimentCards";
import Image from "next/image";
import React from "react";

function SentimentCards({
  icon,
  title,
  description,
  bgColor,
}: SentimentCardProp) {
  return (
    <div className={`p-4 bg-${bgColor}-300 rounded-lg h-40`}>
      <div className="flex gap-5 items-start">
        <Image
          src={icon}
          alt={title}
          height={100}
          width={100}
          className={`rounded-full border bg-${bgColor}-400`}
        />
        <div className="flex flex-col h-40 border">
          <h3 className="text-lg">{title}</h3>
          <span className="">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default SentimentCards;
