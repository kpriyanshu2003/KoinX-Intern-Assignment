import { ButtonsProps } from "@/@types/Buttons";
import { ProgressBarProps } from "@/@types/ProgressBar";
import React from "react";

export function Button({ gradient, textColor, children }: ButtonsProps) {
  return (
    <button
      className={`py-2 px-3 text-${textColor} ${gradient} rounded-lg border`}
    >
      {children}
    </button>
  );
}

export function ProgressBar({ color, progress, text }: ProgressBarProps) {
  return (
    <div className="flex items-center w-[800px] gap-3">
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
