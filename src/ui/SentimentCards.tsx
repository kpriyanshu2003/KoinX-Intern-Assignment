import { SentimentCardProp } from "@/@types/SentimentCards";
import Image from "next/image";
import React from "react";

function SentimentCards({
  icon,
  title,
  bgColor,
  children,
  bg,
}: Readonly<{ children: React.ReactNode }> & SentimentCardProp) {
  return (
    <div className="p-4 rounded-lg min-h-40" style={{ backgroundColor: bg }}>
      <div className="flex gap-5 items-start">
        <Image
          src={icon}
          alt={title}
          height={200}
          width={200}
          className="p-3 rounded-full w-12 h-12"
          style={{ backgroundColor: bgColor }}
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-medium w-full">{title}</h3>
          <span className="text-[#3E5765]">{children}</span>
        </div>
      </div>
    </div>
  );
}

export default SentimentCards;
