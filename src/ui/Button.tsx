import { ButtonsProps } from "@/@types/Buttons";
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
