import { ButtonsProps } from "@/@types/Buttons";
import { ProgressBarProps } from "@/@types/ProgressBar";
import React from "react";

export function Button({
  bgFrom,
  bgVia,
  bgTo,
  textColor,
  children,
}: ButtonsProps) {
  return (
    <div
      className={`py-2 px-3 bg-gradient-to-r from-${bgFrom} via-${bgVia} to-${bgTo} text-${textColor} rounded-lg`}
    >
      {children}
    </div>
  );
}

export function ProgressBar({ color, progress, text }: ProgressBarProps) {
  return (
    <div className="flex items-center w-full gap-3">
      <div className="text-[#7C7E8C]">{text}</div>
      <div
        className="h-2 rounded-full"
        style={{
          backgroundColor: color,
          width: `${progress}%`,
        }}
      ></div>
      <div className="text-[#7C7E8C]">{progress}%</div>
    </div>
  );
}
