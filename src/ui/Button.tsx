import { ButtonsProps } from "@/@types/Buttons";
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
